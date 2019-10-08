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

  // TODO determimne best way to handle countdown timer
  // ! correct -> 0:True, 1:False, 2:NULL
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

  updateDisplayWinner: function(questionObj) {
    console.log("inside updateDisplayWinner");
    $(".selectOption").hide();
    // $("#outcome").hide();
    app.outcomeDiv.innerHTML = "Winner Winner Chicken Dinner!!";
    $("#outcome").hide(3000, function() {
      // $("#outcome").show();
    });
    console.log("leaving updateDisplayWinner");
  },

  updateDisplayLoser: function(questionObj) {
    console.log("inside updateDisplayLoser");
    $(".selectOption").hide();
    // $("#outcome").hide();
    app.outcomeDiv.innerHTML = "So wrong man, just so wrong...";
    $("#outcome").hide(3000, function() {
      // $("#outcome").show();
    });
    console.log("leaving updateDisplayLoserr");
  },

  updateDisplay: function(questionObj) {
    console.log("inside of updateDisplay");
    console.log("obj.id = " + questionObj.id);
    console.log(questionObj);
    // $("#outcome").hide();
    $(".selectOption").show();
    // * lets clear the divs first off
    // $("#question").empty()

    app.remainingDiv.innerHTML = "Remaining Seconds: need to add functionality";
    app.questionDiv.innerHTML = "Question: " + questionObj.question;
    // $("#question").innerHTML = "Question: " + questionObj.question;

    app.selectionDiv_0.innerHTML = questionObj.selection_0;
    app.selectionDiv_1.innerHTML = questionObj.selection_1;
    app.selectionDiv_2.innerHTML = questionObj.selection_2;
    app.selectionDiv_3.innerHTML = questionObj.selection_3;

    // TODO update Countdown Timer and write to Div

    console.log("leaving updateDisplay");
  },

  playTrivia: function() {
    let x = 0;
    let correctGuess = 0;
    let incorrectGuess = 0;
    console.log("Inside playTrivia");
    questionBank = this.initQuestionBank();
    let arrayLength = questionBank.length;
    console.log(questionBank);
    console.log("x = " + x);
    app.updateDisplay(questionBank[x]);

    $(".selectOption").click(function() {
      console.log(this);
      console.log(this.innerHTML);
      // * Check if correct answer
      if (this.innerHTML === questionBank[x].answer) {
        console.log("You guessed correctly, rock on!");
        correctGuess += 1;
        app.updateDisplayWinner();
        x += 1;
        console.log("x updated post correct guess to" + x);
        if (x < arrayLength) {
          //   questionBank[x].correct = 2;
          app.updateDisplay(questionBank[x]);
          console.log("in if x < arraryLength, just back from updateDisplay");
        }
      } else {
        app.updateDisplayLoser();
        console.log("Nopers, that wasn't it...");
        incorrectGuess += 1;
        // questionBank[x].correct = 1;
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
        console.log("end of array, need to create Final Results Display");
        console.log("Correct: " + correctGuess);
        console.log("Incorrect: " + incorrectGuess);
        
      }

      // TODO Create a display results function
    });
    // console.log("end of array, need to create Final Results Display");
    // console.log("Correct: " + correctGuess);
    // console.log("Incorrect: " + incorrectGuess);
  }
};

app.playTrivia();
console.log(
  "ok, it returned me out of the playTrivia function, just the .click event"
);
