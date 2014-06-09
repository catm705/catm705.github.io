$(document).ready(function(){

//Global variables
  var answer = "avatar";
  var guessedLettersArray = [];
  var numGuesses = 8;

  $("#num_guesses").html(numGuesses);

  //Populate the #main div with divs for answer
  for (var i=0; i<answer.length; i++) {
    $("#main").append("<div></div>");
  }

  //Submitting a letter guess
  $("#letters_area input:submit").click(function(e){
   e.preventDefault();

     var keyChar = $("#letter_guess").val().toLowerCase();

     if(guessedLettersArray.indexOf(keyChar) != -1){
      alert("You already guessed that letter!  Try again.");
     } else {
       if (checkLetters(keyChar) == true) {
         updateInput(keyChar);
         updateGuessedLetters(keyChar);
         checkSingleLetterGuess();
    } else {
      alert("Wrong letter!");
      updateGuessedLetters(keyChar);
      lowerCountdown();
    }
  }
    $("#letter_guess").val("");

    });

    //Submitting a word guess
    $("#submit_word_answer").click(function(){
      checkWordGuess();
    });


    function checkLetters(keyChar){
    if (answer.indexOf(keyChar) != -1) {
      return true;
    } else {
      return false;
    }
  }

  function updateInput(keyChar){
    var $inputs = $("#main").children();
    for (var i=0; i<answer.length; i++){
      if(keyChar==answer[i]){
        $inputs.eq(i).html(keyChar);
      }
    }
  }

  function updateGuessedLetters(keyChar){
    guessedLettersArray.push(keyChar);
    $("#guessed_letters").append("<li>" + keyChar + "</li>");
  }

  function lowerCountdown(){
    numGuesses--;
    $("#num_guesses").html(numGuesses);

    if (numGuesses==0) {
      alert("Sorry, you lose!");
      $('#hangman').html('<img src="images/hanged_hangman.jpeg">');
    }
  }

  function checkSingleLetterGuess(){
    var answerSoFar ="";
    var $answerGuess = $('#main').children()
    var $emptyLetters = $answerGuess.filter(':empty');

    if(!$emptyLetters.length) {
      $answerGuess.each(function(){
        answerSoFar += $(this).html();
        if (answerSoFar==answer){
          alert("You got it!  You win!");
          $('#hangman').html('<img src="images/saved_hangman.png">');
        }
      });
    }
  }

  function checkWordGuess(){
    var $inputWord = $("#word_answer");

    if($inputWord.val() == answer) {
      alert("You got it!  Great job!");
      $('#hangman').html('<img src="img/saved_hangman.png">');

      var $inputs = $('#main').children();
      for (var i=0; i<answer.length; i++) {
        $inputs.eq(i).html(answer[i]);
      }
    } else {
      alert ("Incorrect Word!");
      lowerCountdown();
    }

    $inputWord.val("");
  }
});




