var app = {
  remainingDiv: document.getElementById("remainingSecs"),
  questionDiv: document.getElementById("question"),
  selectionDiv_0: document.getElementById("selection_0"),
  selectionDiv_1: document.getElementById("selection_1"),
  selectionDiv_2: document.getElementById("selection_2"),
  selectionDiv_3: document.getElementById("selection_3"),
  outcomeDiv: document.getElementById("outcome"),
  imgDiv: document.getElementById(""),
  correctDiv: document.getElementById("correct"),

  
  // TODO (low) - remove "correct" field from object
  initQuestionBank: function() {
    (questionBank = [
      {
        id: 1,
        question: "What is the name of the only animal in the band?",
        answer: "Pig Pen",
        selection_0: "Frogger",
        selection_1: "Snake",
        selection_2: "The Bull",
        selection_3: "Pig Pen",
        correct: 2
      },
      {
        id: 2,
        question: "What is the name of the only female singer in the band?",
        answer: "Donna",
        selection_0: "Jill",
        selection_1: "Donna",
        selection_2: "Brandy",
        selection_3: "Lana K",
        correct: 2
      },
      {
        id: 3,
        question: "How many drummers does the band have?",
        answer: "2",
        selection_0: "1",
        selection_1: "2",
        selection_2: "3",
        selection_3: "4",
        correct: 2
      },
      {
        id: 4,
        question: "What is the name of the only animal in the band?",
        answer: "Pig Pen",
        selection_0: "Frogger",
        selection_1: "Snake",
        selection_2: "The Bull",
        selection_3: "Pig Pen",
        correct: 2
      }
    ]),
      console.log("Number of Questions: " + questionBank.length);
    return questionBank;
  },

  updateDisplayGameOver: function(good, bad, noTime) {
    console.log("inside updateDisplayGameOver");
    $("#outcome").show();
    // $(".selectOption").hide();
    $("#remainingSecs").hide();
    $("#question").hide();
    // $("#outcome").hide();
    app.outcomeDiv.innerHTML = "GAME OVER!!!";
    console.log("end of array, need to create Final Results Display");
    console.log("Correct: " + good);
    console.log("Incorrect: " + bad);
    console.log("Ran out of Time: " + noTime);

    app.selectionDiv_0.innerHTML = "Correct Guesses: " + good;
    app.selectionDiv_1.innerHTML = "Incorrect Guesses: " + bad;
    app.selectionDiv_2.innerHTML = "Ran Out of Time: " + noTime;
    app.selectionDiv_3.innerHTML = "Would you like to play again?";
    // $("#selection_3").click(function() {

    // },

    console.log("leaving updateDisplayGameOver");
  },

  updateOutOfTime: function(questionObj) {
    console.log("inside updateOutOfTime");
    $("#outcome").show();
    $(".selectOption").hide();
    app.outcomeDiv.innerHTML = "You done ran out of time son!";
    $("#outcome").hide(3000, function() {
      // $("#outcome").show();
    });
    console.log("leaving updateOutOfTime");
  },

  updateDisplayWinner: function(questionObj) {
    console.log("inside updateDisplayWinner");
    // clearInterval(intervalId)
    $("#outcome").show();
    $(".selectOption").hide();
    // $("#outcome").hide();
    app.outcomeDiv.innerHTML = "Winner Winner Chicken Dinner!!";
    $("#outcome").hide(3000, function() {
      
    });
    console.log("leaving updateDisplayWinner");
    // intervalId = setInterval(playTrivia.updateTimer, 1000);
  },

  updateDisplayLoser: function(questionObj) {
    console.log("inside updateDisplayLoser");
    console.log(questionObj);
    $("#outcome").show();
    $(".selectOption").hide();
    // $("#outcome").hide();
    app.outcomeDiv.innerHTML = "So wrong man, just so wrong...";
    app.correctDiv.innerHTML = "The correct answer was " + questionObj.answer;
    $("#outcome").hide(3000, function() {
      // $("#outcome").show();
    });
    $("#correct").hide(2000, function(){});
    console.log("leaving updateDisplayLoserr");
  },

  updateDisplay: function(questionObj) {
    console.log("inside of updateDisplay");
    console.log("obj.id = " + questionObj.id);
    console.log(questionObj);
    $(".selectOption").show();
    app.remainingDiv.innerHTML = " Remaining Seconds: 30";
    app.questionDiv.innerHTML = "Question: " + questionObj.question;
    app.selectionDiv_0.innerHTML = questionObj.selection_0;
    app.selectionDiv_1.innerHTML = questionObj.selection_1;
    app.selectionDiv_2.innerHTML = questionObj.selection_2;
    app.selectionDiv_3.innerHTML = questionObj.selection_3;
    console.log("leaving updateDisplay");
  },

  playTrivia: function() {
    let x = 0;  // used as counter for  click events, which is how we iterate through data array
    let correctGuess = 0;
    let incorrectGuess = 0;
    let ranOutOfTime = 0;

    var number = 30; // Used as timer countdown
    var intervalId;

    function upDateTimer(){
      // console.log("in upDateTimer" + number);
      number--;
      app.remainingDiv.innerHTML = " Remaining Seconds: " + number;
      if (number === 0){
        // alert("You done ran out of time son.");
        clearInterval(intervalId);
        ranOutOfTime +=1;
        app.updateOutOfTime();
        if (x < arrayLength) {
          // TODO Get Timer to Reset after running out of town, correct guess, incorrect guess
          // ? Am I dealing with a scoping issue here
          number = 30;
          app.updateDisplay(questionBank[x]);
          console.log("in if x < arraryLength, in upDateTimer, just back from updateDisplay");
        }
      }

    };

    function getSelection() {
      console.log("in getSelection");
      // * lets clear out the intervalID 
      clearInterval(intervalId);
      // * use setInterval to call upDateTimer every sec, to update remainSseconds Div
      number = 30; // Timer runs for this many seconds
      console.log("setting up the setInterval to call upDateTimer");
      intervalId = setInterval(upDateTimer, 1000);

      // * lets set a click event on selectOption divs
      $(".selectOption").click(function() {
       
        console.log(this);
        console.log(this.innerHTML);
        // * Check if correct answer
        if (this.innerHTML === questionBank[x].answer) {
          clearInterval(intervalId);
          console.log("You guessed correctly, rock on!");
          correctGuess += 1; // * increase correctGuess total
          app.updateDisplayWinner();
          if (x < arrayLength) {
            clearInterval(intervalId);
            app.updateDisplay(questionBank[x]);
            console.log("in if x < arraryLength, just back from updateDisplay");
          }
          // * If incorrect answer
        } else {
          clearInterval(intervalId);
          app.updateDisplayLoser(questionBank[x]);
          console.log("Nopers, that wasn't it...");
          incorrectGuess += 1;
          if (x < arrayLength) {
            app.updateDisplay(questionBank[x]);
          }
        }

        x += 1;
        console.log("x updated to outside of if/then land" + x);
        if (x < arrayLength) {
          questionBank[x].correct = 2;
          app.updateDisplay(questionBank[x]);
        } else {
          app.updateDisplayGameOver(correctGuess, incorrectGuess, ranOutOfTime);
        }
      });
    }

    // TODO (BLOCKER)- Get the timer to restart after an event (outOfTime, correct/incorrectGuess)

    // * Start of logic for playTrivia -----------------------------------------------
    console.log("Inside playTrivia");
    // initate array w questions/answers by calling initQuestionBank method
    questionBank = this.initQuestionBank();
    // grabbing the number of sets of questions/answers in array
    let arrayLength = questionBank.length;
    console.log(questionBank);
    console.log("x = " + x);
    // updating UI w questions and answers from current object in array
    app.updateDisplay(questionBank[x]);
    // Call getSelection to set our on click function into action
    getSelection();
   
  }
};

app.playTrivia();
console.log("ok, it returned me beneath app.playTrivia() call");

// TODO (HIGH) add css
// TODO (MED) add gifs
// TODO (HIGH) display correct answer (out of time, incorrecty answer)
