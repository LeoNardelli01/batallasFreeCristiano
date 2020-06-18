$(function(){

  var p1 = localStorage.getItem("p1");
  var p2 = localStorage.getItem("p2");

  $("#p1").html(p1);
  $("#p2").html(p2);

  $('.mdb-select').materialSelect();

  $("#btn-volver").click(function(e){
    

  });

  var p1_patron1 = $("#p1_patron1").val();

});
