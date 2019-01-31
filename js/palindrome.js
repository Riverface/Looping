var input = [];
var output;
var workingString = [];
var palinDrome;
var notPalinDrome;
var isPalinDrome;





function takeInput(){

  input = $("#palinval").val().split('');

}

function iterate(){

    for(i = 0; i < input.length; i++ ){
      console.log(i);
      console.log(input[i]);
      workingString.unshift(input[i]);

    }

    workingString = workingString.join('');
    input = input.join('');
    console.log(workingString);
    console.log(input);
}

function checkPalindrome(){
  console.log(workingString);
  console.log(input)
  console.log(workingString == input);
  if(workingString == input){

    isPalinDrome.show();

  }
  else{

    notPalinDrome.show();

  }
  workingString = [];
}


$(document).ready(function() {
  notPalinDrome = $("#no");
  isPalinDrome = $("#yes");
  notPalinDrome.hide();
  isPalinDrome.hide();
  $("form#palindromeForm").submit(function(event){
    event.preventDefault();
    takeInput();
    iterate();
    checkPalindrome();

  });
});
