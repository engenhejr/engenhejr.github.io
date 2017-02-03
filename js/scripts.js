

/*
  $("div.engenharia").hover(function(){
    //alert($(this).attr('id')+".caption");
  $(this ).animate({
    top: "-30px",
  }, 300, function() {
    // Animation complete.
  });

    }, function(){
   $( this ).animate({
     top: "0px",
   }, 300, function() {
     // Animation complete.
   });

});





i = 1;

var intervalo = window.setInterval(function() {

if(i==4){
  $(".engenharia").removeClass("engenharia-active");
  i=0;
}
i++;
  $(".engenharia").removeClass("engenharia-active");
  $('.en'+i).addClass("engenharia-active");

}, 5000);

*/




$(".dif").mouseenter(function () {
  $(".dif").css("opacity", "0.7");
  $(this).css("opacity", "1");
  var classe = '.' + $(this).attr("alt");
  $(".descricaoDiferencial div").removeClass("descricao-enable");
  $(classe).addClass("descricao-enable");
  //$(classe).css({"height":"auto", "left":"0px","opacity":"1"});
});

if ($(window).width() > 845) {
   $( "video" ).append( '<source src="img/vid.mp4" type="video/mp4">');
 
}

$("#servicos .content-services .close-modal").click(function () {
  if ($(window).width() < 845) {
    $("#servicos .content-services").css("display", "none");
  }
});



i = Math.floor(Math.random() * (5 - 1)) + 1;

$('.en' + i).addClass("engenharia-active");
var classe = '.' + $('.en' + i).attr("alt") + ' .servico-item';
$(classe).css("display", "inline-flex");

$(".engenharia").click(function () {

  if ($(window).width() < 845) {
    var styles = {
      display : "block",
      '-webkit-animation' : "slideUp 0.3s",
     ' animation' : 'slideUp 0.3s'
    };
    $( this ).css( styles );
    $(".content-services").css(styles);
  }

  $(".engenharia").removeClass("engenharia-active");
  $(this).addClass("engenharia-active");
  var classe = '.' + $(this).attr("alt") + ' .servico-item';
  $(".servico-item").css("display", "none");
  $(classe).css("display", "inline-flex");


});


$(window).scroll(function () {
  // Captura os pixels de distância do topo
  var window_scrolltop = $(this).scrollTop();

  if (window_scrolltop > 460) {
    $("#bgvid").get(0).pause();
  } else {
    $("#bgvid").get(0).play();
  }

});


  $(".servico-item").hover(function () {
    $(".descricao", this).css({
      "height": "100%",
      "border-radius": "6px"
    });
  }, function () {
    $(".descricao", this).css({
      "height": "33%",
      "border-radius": "0 0 6px 6px"
    });
  });