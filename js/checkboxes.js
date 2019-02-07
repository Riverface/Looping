$(document).ready(function(){
  $("form#avatarcreation").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=stepsCompleted]:checked").each(function(){
      var stepsCompleted = $(this).val();
      $('#stepsCompleted').append(stepsCompleted + "<br>");
    });
    $("#fun-responses").show();

    $("input:checkbox[name=modelTests]:checked").each(function(){
      var modelTests = $(this).val();

      $('#modelTests').append(modelTests + "<br>");
    });
    $('#avatarcreation').hide();
  });
});
