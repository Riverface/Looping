var workingString;
var workingactualString;
var actualString = "I ate seven bad berries boisterously";
var hiddenString = "- a-- se--- -a- b--rie- b-ist-rous--";
var currentString = "";
var hiddenArray;
function compute(){
  takeinput();
  iterate();
  printarray();
}

function takeinput(){
  //take user input
  currentString = $("#source1").val();
  workingString = currentString.split('');
  workingactualString = actualString.split('');
  hiddenArray = hiddenString.split('');
}

function iterate(){
  for (var i = 0; i < workingString.length; i++) {
    //iterate through i
    console.log(i);
    console.log(workingString[i] + ", " + workingactualString[i]);
    if(workingString[i] == actualString[i])
    {
      console.log(i);
      hiddenArray[i] = workingString[i];
      console.log(workingString[i] + workingactualString[i]);
    } else  console.log("What is that?");
  }
}

function printarray(){
  //print array based on for loop
  currentString = workingString.join('');
  console.log(currentString);
  console.log(hiddenString);
  console.log(actualString);
  hiddenString = hiddenArray.join('');
  $("#initialanswer").text(hiddenString);
  $("#currentanswer").text(currentString);

}

$(document).ready(function(){
  $("#initialanswer").text(hiddenString);
  $("#currentanswer").text(currentString);

});
