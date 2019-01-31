$(document).ready(function(){
  $("form#avatarcreation").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=stepsCompleted]:checked").each(function(){
      var stepsCompleted = $(this).val();
      $('#work-responses').append(stepsCompleted + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=modelTests]:checked").each(function(){
      var modelTests = $(this).val();
      $('#fun-responses').append(modelTests + "<br>");
    });
    $('#avatarcreation').hide();
  });
});
