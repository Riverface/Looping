var factor = 0;
function input()
{
source1 = parseInt($("#source1").val());
source2 = parseInt($("#source2").val());
num1 = parseInt(source1)
num2 = parseInt(source2);

}

function compute() {
input();
loop_em();
print_em();
}

function loop_em(){
for(num1; num1 <= num2; num1 += source1)
{
factor++;


  console.log(num1);
  console.log(num2);
  console.log(source1);
}

}
function print_em(){

$("#factor").text(factor);
}

$(document).ready(function() {
var num1;
var num2;
var source1;
var source2;
$("name:check1").click(function()
{
iterate++;

console.log();

});
});
