var trivia = {
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

  
  initQuestionBank: function() {
    (questionBank = [
      {
        question: "What is the name of the only female singer in the band?",
        answer: "Donna",
        selection_0: "Jill",
        selection_1: "Donna",
        selection_2: "Brandy",
        selection_3: "Lana K"
      },
      {
        question: "What is the name of the only female singer in the band?",
        answer: "Donna",
        selection_0: "Jill",
        selection_1: "Donna",
        selection_2: "Brandy",
        selection_3: "Lana K"
      }
    ]),
      console.log("Number of Questions: " + questionBank.length);
      return questionBank
  },

  updateDisplay: function() {},

  nextQuestion: function(questionObj) {
      console.log("inside of nextQuestion");
      // TODO update Countdown Timer and write to Div
      // TODO Display next question in array
      // TODO Display the new selections
    //   $("#remainingSecs").text = "Remaining Seconds: <need to add functionality";
    // trivia.remainingDiv.text("Remaining Seconds: <need to add functionality");
    trivia.remainingDiv.innerHTML = ("Remaining Seconds: <need to add functionality");
    trivia.questionDiv.innerHTML = ("Question: " + questionObj.question);
    trivia.selectionDiv_0.innerHTML = (questionObj.selection_0);
    trivia.selectionDiv_1.innerHTML = (questionObj.selection_1);
    trivia.selectionDiv_2.innerHTML = (questionObj.selection_2);
    trivia.selectionDiv_3.innerHTML = (questionObj.selection_3);
    console.log(questionObj);

  },

  playTrivia: function() {
    console.log("Inside playTrivia");
    questionBank = this.initQuestionBank();
    // console.log(questionBank[1].answer);
    trivia.nextQuestion(questionBank[0]);
  }
};

trivia.playTrivia();
