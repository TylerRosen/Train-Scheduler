// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGbh8AOAIQy7UHfqnveXx4N9ao1Hy7DIM",
    authDomain: "train-scheduler-d2007.firebaseapp.com",
    databaseURL: "https://train-scheduler-d2007.firebaseio.com",
    storageBucket: "train-scheduler-d2007.appspot.com",
    messagingSenderId: "616704988346"
};

firebase.initializeApp(config);

//Test String

// var test= ["stuff"];

//Global variables

var database = firebase.database();

var name = "";
var destination = "";
var frequency = 0;
var arrival = "";
var minutes = 0;

//When clicking submit, adds train data

$("#addTrain").on("click", function() {
    name = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    arrival = $("#timeInput").val().trim();
    minutes = $("#timeInput").val().trim();

    //Pushes to firebase

    firebase.database().ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        arrival: arrival,
        minutes: minutes,

    })

    //Clears text box

    $("nameInput").val("");
    $("destinationInput").val("");
    $("frequencyInput").val("");
    $("timeInput").val("");

    //Converts time

    function convertTime() {
        moment(arrival).format("hh:mm A");
        console.log(arrival);
    };

    convertTime();



    return false;

});

//Adds to firebase

firebase.database().ref().on("child_added", function(snapshot) {
    $("#nameDisplay").html(snapshot.val().name);
    $("#destinationDisplay").html(snapshot.val().destination);
    $("#frequencyDisplay").html(snapshot.val().frequency);
    $("#arrivalDisplay").html(snapshot.val().arrival);
    $("#minutesDisplay").html(snapshot.val().minutes);

    // Store into variable.
    var nameDisplay = snapshot.val().name;
    var destinationDisplay = snapshot.val().destination;
    var frequencyDisplay = snapshot.val().frequency;
    var arrivalDisplay = snapshot.val().arrival;
    var minutesDisplay = snapshot.val().minutes;

    //Appends data to table

    $("#train-table > tbody").append("<tr><td>" + nameDisplay +
        "</td><td>" + destinationDisplay +
        "</td><td>" + frequencyDisplay +
        "</td><td>" + arrivalDisplay +
        "</td><td>" + minutesDisplay +
        "</td><td>");

});