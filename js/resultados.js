$(function(){
  var p1 = localStorage.getItem('p1');
  var p2 = localStorage.getItem('p2');
  $("#p1").html(p1);
  $("#p1").css('color', 'blue');
  $("#p2").html(p2);
  $("#p2").css('color', 'red');

  $("#btn-nuevaBatalla").click(function(){
    $(location).attr('href', 'index.html');
  });

  var p1_totalPatrones = parseFloat(localStorage.getItem('p1_totalPatrones'));
  var p1_tecnica = parseFloat(localStorage.getItem('p1_tecnica'));
  var p1_flow = parseFloat(localStorage.getItem('p1_flow'));
  var p1_punch = parseFloat(localStorage.getItem('p1_punch'));
  var p1_dobletempo = parseFloat(localStorage.getItem('p1_dobletempo'));
  var p1_escena = parseFloat(localStorage.getItem('p1_escena'));

  var p1_total = p1_totalPatrones + p1_tecnica + p1_flow + p1_punch + p1_dobletempo + p1_escena;


  var p2_totalPatrones = parseFloat(localStorage.getItem('p2_totalPatrones'));
  var p2_tecnica = parseFloat(localStorage.getItem('p2_tecnica'));
  var p2_flow = parseFloat(localStorage.getItem('p2_flow'));
  var p2_punch = parseFloat(localStorage.getItem('p2_punch'));
  var p2_dobletempo = parseFloat(localStorage.getItem('p2_dobletempo'));
  var p2_escena = parseFloat(localStorage.getItem('p2_escena'));

  var p2_total = p2_totalPatrones + p2_tecnica + p2_flow + p2_punch + p2_dobletempo + p2_escena;

  $("#p1_resPatrones").html(p1_totalPatrones);
  $("#p1_resTecnica").html(p1_tecnica);
  $("#p1_resFlow").html(p1_flow);
  $("#p1_resPunch").html(p1_punch);
  $("#p1_resDobletempo").html(p1_dobletempo);
  $("#p1_resEscena").html(p1_escena);

  $("#p2_resPatrones").html(p2_totalPatrones);
  $("#p2_resTecnica").html(p2_tecnica);
  $("#p2_resFlow").html(p2_flow);
  $("#p2_resPunch").html(p2_punch);
  $("#p2_resDobletempo").html(p2_dobletempo);
  $("#p2_resEscena").html(p2_escena);

  $("#p1_total").html(p1_total);
  $("#p2_total").html(p2_total);

  function difTotales(player1, player2){
    if (player1 > player2) {
      return player1 - player2;
    } else{
      return player2 - player1;
    }
  }

  var difTotales = difTotales(p1_total, p2_total);
  console.log(difTotales);

  if (difTotales <= 3) {
    $("#resultado").html('Réplica');
  } else if (p1_total > p2_total) {
    $("body").css('background', 'blue');
    $("#resultado").html("Ganó " + p1);
  } else {
    $("body").css('background', 'red');
    $("#marca").css('color', 'black');
    $("#resultado").html("Ganó " + p2);
  }


  // porcentajes para los graficos
  var p1_porcentajePatrones = p1_totalPatrones * 100 / 24;
  var p1_porcentajeTecnica = p1_tecnica * 100 / 2;
  var p1_porcentajeFlow = p1_flow * 100 / 2;
  var p1_porcentajePunch = p1_punch * 100 / 2;
  var p1_porcentajeDobletempo = p1_dobletempo * 100 / 2;
  var p1_porcentajeEscena = p1_escena * 100 / 2;

  var p2_porcentajePatrones = p2_totalPatrones * 100 / 24;
  var p2_porcentajeTecnica = p2_tecnica * 100 / 2;
  var p2_porcentajeFlow = p2_flow * 100 / 2;
  var p2_porcentajePunch = p2_punch * 100 / 2;
  var p2_porcentajeDobletempo = p2_dobletempo * 100 / 2;
  var p2_porcentajeEscena = p2_escena * 100 / 2;



  // Grafico RADAR
  var ctx = document.getElementById('graficoRadar').getContext('2d');
  var chart = new Chart(ctx,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnica', 'Flow', 'Punch', 'D. tempo', 'P. escena'],
          datasets: [
            {
            label: p1,
            data: [p1_porcentajePatrones, p1_porcentajeTecnica, p1_porcentajeFlow, p1_porcentajePunch, p1_porcentajeDobletempo, p1_porcentajeEscena],
            backgroundColor: '#0d47a1',
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 1
          },{
            label: p2,
            data: [p2_porcentajePatrones, p2_porcentajeTecnica, p2_porcentajeFlow, p2_porcentajePunch, p2_porcentajeDobletempo, p2_porcentajeEscena],
            backgroundColor: '#b71c1c',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1
          }
        ]},
        options: {
          layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 10,
                  bottom: 10
              }
          },
          legend:{
            labels:{
              fontColor: 'white',
              fontFamily: 'Russo One',
              display: false
            }
          },
          scales: {
            xAxes: [{

              ticks: {
                fontColor: 'white',
                fontSize: 14,
                fontFamily: 'Russo One'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 18
              }
            }]
          }
        }

    });

});
