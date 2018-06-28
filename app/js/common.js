$(function() {

$(".toggle-mnu").click(function(){
$(this).toggleClass("on");
$(".main-mnu").slideToggle();
	return false;
	})

$(".main-footer .toggle-mnu").click(function(){
  	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  		return false;
});

$(".top").click(function(){
  	$("html, body").animate({ scrollTop: 0}, "slow");
  		return false;
});

$(".arrow-bottom").click(function(){
  	$("html, body").animate({ scrollTop: $(".main_head").height()+120 }, "slow");
  		return false;
});


$(function(){
  $('.main-mnu ul li a').each(function(){
    if(document.location.pathname == $(this).attr('href')){
      $(this).parent().addClass('active');
   }
  });
});

$(".section_1 .section-content info-item").equalHeights();
$(".section_3 .section-content .info-item").equalHeights();
$(".s1-bottom .info-item").equalHeights();

$(".section-head h2, .section-head p").animated("bounceInUp");
$(".info-item-wrap").animated("zoomIn");
$(".slider, .slide").animated("rollIn");
$(".homesect.section_8 .forms").animated("fadeInRight");
$(".homesect.section_8 .p").animated("fadeInLeft");

$(".section_2").waypoint(function() {
	$(".s2-item-wrap").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
	},{
		offset : "35%"
});

$(".section_8").waypoint(function() {
	$(".s8-item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
	},{
		offset : "35%"
});

$(".section_4").waypoint(function() {

	$(".section_4 .card").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.removeClass("card-off").addClass("card-on");
		}, 200*index);
	});

}, {
	offset : "20%"
});

$(".slide-1").owlCarousel({
	items: 3,
	margin: 0,
	loop: true,
	navText: ['<', '>'],
	nav: true,
	responsiveClass:true,
	responsive:{
			0:{
					items:1,
					nav:false,
			},
			500:{
				items:1,
				nav:false,
			},
			700:{
					items:3,
					nav: false,
					dots: true,
			},
			1000:{
					items:3,
					nav: true,
					dots: false,
			}
	}
});


$(".section_5").waypoint(function() {

	$(".section_5 .tc-item").each(function(index) {
		var ths = $(this);
		setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + index
				});
			ths.removeClass("").addClass("");
		}, 500*index);
	});

	this.destroy();

}, {
	offset : "20%"
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.homesect .section-bottom .buttons').click(function(){
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
	  type:'inline',
		mainClass: 'mfp-forms'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$().fancybox({
	  selector : '.owl-item:not(.cloned) a',
	  hash   : false,
		loop: true,
	  thumbs : {
	    autoStart : false
	  },
	//
	});

});
