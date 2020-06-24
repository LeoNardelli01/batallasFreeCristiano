$(function(){

  var p1 = localStorage.getItem("p1");
  var p2 = localStorage.getItem("p2");

  $("#p1").html(p1);
  $("#p2").html(p2);

  $('.mdb-select').materialSelect();

  function tomarDatos(){

    //Participante 1
    var p1_patron1 = parseInt($("#p1_patron1").val());
    var p1_patron2 = parseInt($("#p1_patron2").val());
    var p1_patron3 = parseInt($("#p1_patron3").val());
    var p1_patron4 = parseInt($("#p1_patron4").val());
    var p1_patron5 = parseInt($("#p1_patron5").val());
    var p1_patron6 = parseInt($("#p1_patron6").val());
    var p1_tecnica = parseInt($("#p1_tecnica").val());
    var p1_flow = parseInt($("#p1_flow").val());
    var p1_punch = parseInt($("#p1_punch").val());
    var p1_dobletempo = parseInt($("#p1_dobletempo").val());
    var p1_escena = parseInt($("#p1_escena").val());
    var p1_totalPatrones;

    //Participante 2
    var p2_patron1 = parseInt($("#p2_patron1").val());
    var p2_patron2 = parseInt($("#p2_patron2").val());
    var p2_patron3 = parseInt($("#p2_patron3").val());
    var p2_patron4 = parseInt($("#p2_patron4").val());
    var p2_patron5 = parseInt($("#p2_patron5").val());
    var p2_patron6 = parseInt($("#p2_patron6").val());
    var p2_tecnica = parseInt($("#p2_tecnica").val());
    var p2_flow = parseInt($("#p2_flow").val());
    var p2_punch = parseInt($("#p2_punch").val());
    var p2_dobletempo = parseInt($("#p2_dobletempo").val());
    var p2_escena = parseInt($("#p2_escena").val());
    var p2_totalPatrones;

    p1_totalPatrones = p1_patron1 + p1_patron2 + p1_patron3 + p1_patron4 + p1_patron5 + p1_patron6;
    p2_totalPatrones = p2_patron1 + p2_patron2 + p2_patron3 + p2_patron4 + p2_patron5 + p2_patron6;

    //Player 1
    localStorage.setItem('p1_totalPatrones', p1_totalPatrones);
    localStorage.setItem('p1_tecnica', p1_tecnica);
    localStorage.setItem('p1_flow', p1_flow);
    localStorage.setItem('p1_punch', p1_punch);
    localStorage.setItem('p1_dobletempo', p1_dobletempo);
    localStorage.setItem('p1_escena', p1_escena);

    localStorage.setItem('p2_totalPatrones', p2_totalPatrones);
    localStorage.setItem('p2_tecnica', p2_tecnica);
    localStorage.setItem('p2_flow', p2_flow);
    localStorage.setItem('p2_punch', p2_punch);
    localStorage.setItem('p2_dobletempo', p2_dobletempo);
    localStorage.setItem('p2_escena', p2_escena);


  }



  $("#btn-terminar").click(function(e){
      e.preventDefault();

      swal({
        title: "¿Terminar  la batalla?",
        text: ""+ p1 + " Vs " + p2 + "",
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
        if (willDelete) {
          tomarDatos();
          swal("¡Resultados listos!", {
            icon: "success",
          });

          $(location).attr('href', 'resultados.html');
        } else {
          e.preventDefault();
          swal("Continua votando..");

        }
      });

    });



});
