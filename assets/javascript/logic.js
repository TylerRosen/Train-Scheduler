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

  var database= firebase.database();

  var name= "";
  var destination= "";
  var frequency= 0;
  var arrival= "";
  var minutes= 0;

  $("#addTrain").on("click", function () {
    name = $("#nameInput").val().trim();
    destination= $("#destinationInput").val().trim();
    frequency= $("#frequencyInput").val().trim();
    arrival= $("#timeInput").val().trim();
    minutes= $("#timeInput").val().trim();

    // var newTrain= {
    // 	name: nameInput,
    // 	destination: destinationInput,
    // 	time: timeInput,
    // 	frequency: frequencyInput,
    // }

    firebase.database().ref().set( {
      name:name,
      destination:destination,
      frequency:frequency,
      arrival:arrival,
      minutes:minutes,

    })

    return false;

  });

  firebase.database().ref().on("value", function(snapshot) {
    $("#nameDisplay").html(snapshot.val().name);
    $("#destinationDisplay").html(snapshot.val().destination);
    $("#frequencyDisplay").html(snapshot.val().frequency);
    $("#arrivalDisplay").html(snapshot.val().arrival);
    $("#minutesDisplay").html(snapshot.val().minutes);

  });


  //Save to firebase

  // database.ref().push(newTrain);

  // Clear user inputs

  // $("#nameDisplay").val("");

  // return false;


  // Append to page

  // database.ref().on("child_added", function (childSnapshot) {
  		// nameDisplay= childSnapshot.val().name;

  // }

  //

  //moment.js

  // var newTrains {

  // }

  //clear all text boxes