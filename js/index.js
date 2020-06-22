$(function(){
  localStorage.clear();

  var typed = new Typed('#typed', {
  strings: ['Batallas Free Cristiano', '' ,'Torneo Online'],
  smartBackspace: false,
  typeSpeed: 55,
  backSpeed: 25,
  showCursor: false
  });

  var btnComenzar = $("#btn-comenzar");

  btnComenzar.click(function(e){
    var p1 = $("#p1").val();
    var p2 = $("#p2").val();

    if (p1 == "") {
      e.preventDefault();
      swal({
        title: "BFC",
        text: "El participante 1 necesita un nombre",
        icon: "warning"
      });

    } else if (p2 == "") {
      e.preventDefault();
      swal({
        title: "BFC",
        text: "El participante 2 necesita un nombre",
        icon: "warning"
      });

    } else{
      localStorage.setItem("p1", p1);
      localStorage.setItem("p2", p2);
      $(location).attr('href', 'votacion.html');
    }


  });

});
