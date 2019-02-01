var button1;
var source1;
var factArray = [];

function factorial(){
  var result = source1;
  console.log(source1);
  for(n = 1; n < source1; n++){
    factArray.push(n);
    console.log(factArray);
    }
    factArray.forEach(function(numB)
    {
    result = numB * result;

    });

    console.log(result);
    source1 = 0;
    result = 0;
    factArray = [];
}
$(document).ready(function() {
  button1 = $("#butt1");
  console.log($("#butt1"));

  button1.click(function(){
    source1 = $("#source1").val();
    factorial();
  });
});
