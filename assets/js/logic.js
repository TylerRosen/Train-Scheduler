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

//When clicking submit, adds train data

$("#addTrain").on("click", function() {
    name = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    arrival = moment($("#timeInput").val().trim(), "HH:mm").format("");

    //Pushes to firebase

    firebase.database().ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        arrival: arrival,

    })

    //Clears text box

    $("nameInput").val("");
    $("destinationInput").val("");
    $("frequencyInput").val("");
    $("timeInput").val("");



    return false;

});

//Adds to firebase

firebase.database().ref().on("child_added", function(snapshot, previousChildName) {

    // Store into variable.
    var nameDisplay = snapshot.val().name;
    var destinationDisplay = snapshot.val().destination;
    var frequencyDisplay = snapshot.val().frequency;
    var arrivalDisplay = snapshot.val().arrival;

     //Converts time

        var timeConverted = moment(arrivalDisplay, "hh:mm").subtract(1, "years");

        var currentTime = moment();

        var timeDiff = moment ().diff(moment(timeConverted), "minutes")

        var remainder = timeDiff % frequency;

        var tMinus = frequency - remainder;

        var nextTrain = moment().add(tMinus, "minutes");
        var nextTrainConverted = moment(nextTrain).format("hh:mm a");

        console.log(nextTrain);
        console.log(nextTrainConverted);

    //Appends data to table

    $("#train-table > tbody").append("<tr><td>" + nameDisplay +
        "</td><td>" + destinationDisplay +
        "</td><td>" + frequencyDisplay +
        "</td><td>" + nextTrainConverted +
        "</td><td>" + tMinus +
        "</td><td>");

});