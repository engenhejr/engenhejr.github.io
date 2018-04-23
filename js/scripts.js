

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
   $( "header" ).append( '<video id="bgvid" playsinline autoplay muted loop><source src="img/vid.mp4" type="video/mp4"></video>');

}
/*
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
*/

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
      "height": "30%",
      "border-radius": "0 0 6px 6px"
    });
  });


function sendEmail() {

     var message = document.getElementById("message").value.replace(","," ").replace("?","%3F");
    
    var subject = document.getElementById("subject").value.replace(","," ").replace("?","%3F");
    var name = document.getElementById("name").value.replace(","," ");
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    
     

    var mail="mailto:engenhejr@gmail.com?subject="+subject+"&body="+"Nome:"+name+"%0AEmail:"+email+"%0ATelefone:"+phone+"%0A%0AMensagem: "+message+"";


    window = window.open(mail, 'emailWindow');

}











$(function(){
  $(".typed").typed({
    strings: ["CIVIL", "Da Computação", "Elétrica","Mecânica"],
    typeSpeed: 2,
    backSpeed: 0,
    backDelay: 2000,
    loop: true
  });
});





/*

function sendEmail() {

   var message = document.getElementById("message").value;
    var subject = document.getElementById("selectList").value;
    var mail="mailto:chrisgreg23@googlemail.com?subject="+subject+"&body="+message;

    window = window.open(mail, 'emailWindow');


}


// Caique Atualização
function sendEmail2() {
	// Get the form.
  var form = $('#contactForm');
	// Set up an event listener for the contact form.
	$(form).submit(function(event) {
		// Stop the browser from submitting the form.
    $("#btnSubmit").attr("disabled", true);
    $("#btnSubmit").html("Enviando");
		event.preventDefault();
		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: "http://engenhejr.com.br/hostinger/mail/contact_me.php",
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
      // Enable button & show success message
      $("#btnSubmit").attr("disabled", false);
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#success > .alert-success')
          .append("<strong>"+ response +"</strong>");
      $('#success > .alert-success')
          .append('</div>');
			// Clear the form.
			$('#contactForm').trigger("reset");
      $("#btnSubmit").html("Enviar");
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
      $("#btnSubmit").attr("disabled", false);
			$('#success').html("<div class='alert alert-danger'>");
      $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
			// Set the message text.
			if (data.responseText !== '') {
        $('#success > .alert-danger').append("<strong>Desculpe " + $("input#name").val() + ", houve um error no servidor!</strong>");
        console.log(data.responseText);
			} else {
        $('#success > .alert-danger').append("<strong>Desculpe " + $("input#name").val() +
            ", aconteceu um erro ao enviar sua mensagem, tente novamente mais tarde!</strong>");
			}
      $('#success > .alert-danger').append('</div>');
      $("#btnSubmit").html("Enviar");
		});
	});
}


*/