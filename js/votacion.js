$(function(){

  var p1 = localStorage.getItem("p1");
  var p2 = localStorage.getItem("p2");

  $("#p1").html(p1);
  $("#p2").html(p2);

  $('.mdb-select').materialSelect();

  function tomarDatos(){

    //Participante 1
    var p1_patron1 = $("#p1_patron1").val();
    var p1_patron2 = $("#p1_patron2").val();
    var p1_patron3 = $("#p1_patron3").val();
    var p1_patron4 = $("#p1_patron4").val();
    var p1_patron5 = $("#p1_patron5").val();
    var p1_patron6 = $("#p1_patron6").val();
    //Participante 2
    var p2_patron1 = $("#p2_patron1").val();
    var p2_patron2 = $("#p2_patron2").val();
    var p2_patron3 = $("#p2_patron3").val();
    var p2_patron4 = $("#p2_patron4").val();
    var p2_patron5 = $("#p2_patron5").val();
    var p2_patron6 = $("#p2_patron6").val();


    console.log(p1_patron6);

  }



  $("#btn-terminar").click(function(e){
      e.preventDefault();

      swal({
        title: "Terminar Batatalla?",
        text: ""+ p1 + " Vs " + p2 + "",
        icon: "danger",
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Mostrando resultados", {
            icon: "success",
          });
          tomarDatos();
          //$(location).attr('href', 'resultados.html');
        } else {
          e.preventDefault();
          swal("Continua votando..");

        }
      });

    });

  var p1_patron1 = $("#p1_patron1").val();

});
