$(document).ready(function(){
	$("#home li").on("click",function() {
      $("li").removeClass("MyActive");
      $(this).addClass("MyActive");
   })
   $(window).scroll(function(event) {
      var Myscroll = $(window).scrollTop();
      console.log(Myscroll);
      if (Myscroll>600) {
         $("nav").removeClass("FirstNav");
         $("nav").addClass("SecondNav");
         $("nav").stop(true, true).slideDown(3000);
      }else {
         $("nav").removeClass("SecondNav");
         $("nav").addClass("FirstNav");
      }
   });
   // NAVBAR HOVER DROPDOWN
   $('ul.nav li.dropdown').hover(function() {
      $(this).find('.FirstUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.FirstUl').stop(true, true).slideUp(300);
   });
   // FIRST UL
   $('.HOME').hover(function() {
      $(this).find('.SecondUL').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.SecondUL').stop(true, true).slideUp(300);
   });
   // SECOND UL
   $('.BLOG').hover(function() {
      $(this).find('.ThirdUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.ThirdUl').stop(true, true).slideUp(300);
   });
   // THIRD UL
   $('.ECOMMERCE').hover(function() {
      $(this).find('.FourthUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.FourthUl').stop(true, true).slideUp(300);
   });
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var animate= $(window).scrollTop();
		console.log(animate);
		if (animate>530) {
			$(".aboutLeftAnimate").css({
				transform: 'translateX(0px)',
			});
			$(".aboutRightAnimate").css({
				transform: 'translateX(0px)',
			});
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var techanimate= $(window).scrollTop();
		console.log(techanimate);
		if(techanimate>1040){
			$(".techLeftAnimate").css({
				transform: 'translateX(0px)',
			});
			$(".techRightAnimate").css({
				transform: 'translateX(0px)',
			});
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {

		var helmetAnimate= $(window).scrollTop();
		console.log(helmetAnimate);

		if(helmetAnimate>1761){
			$(".helmetLeftAnimate").css({
				transform: 'translateX(0px)',
			});
			$(".helmetRightAnimate").css({
				transform: 'translate(0px)',
			});
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(event){
		var featAnimate= $(window).scrollTop();
			if(featAnimate>2802){
				$(".featLeftAnimate").css({
					transform: 'translateX(0px)',
				});
			}
			if (featAnimate>3100) {
				$(".featRightAnimate").css({
					transform: 'translateX(0px)',
				});
			}
	});
});



$(document).ready(function(){
	$(window).scroll(function(event){
		var loginAnimate= $(window).scrollTop();
			if (loginAnimate>3389) {
				$(".loginLeftAnimate").css({
					transform: 'translateX(0px)',
				});
				$(".loginRightAnimate").css({
					transform: 'translateX(0px)',
				});

			}
	});
});



$(document).ready(function(){
	$(window).scroll(function(event) {
		var packages= $(window).scrollTop();
			if (packages>3540) {
				$(".packagesAnimate").css({
					transform: 'translateY(0px)',
				});
			}
	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var awards= $(window).scrollTop();
			if (awards>4075) {
				$(".awardsAnimate").css({
					transform: 'translateY(0px)',
				});
			}
	});
});


$(document).ready(function(){
	$(window).scroll(function(event) {
		var clientsanm= $(window).scrollTop();
		  	if (clientsanm>4505) {
		  		$(".clientsAnimate").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var profile= $(window).scrollTop();
		  	if (profile>4600) {
		  		$(".profileAnimate").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var team= $(window).scrollTop();
		  	if (team>5136) {
		  		$(".img1anm").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var team= $(window).scrollTop();
		  	if (team>5136) {
		  		$(".img2anm").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var team= $(window).scrollTop();
		  	if (team>5136) {
		  		$(".img3anm").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});

$(document).ready(function(){
	$(window).scroll(function(event) {
		var team= $(window).scrollTop();
		  	if (team>5136) {
		  		$(".img4anm").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var logo= $(window).scrollTop();
		  	if (logo>180) {
		  		$(".logo1").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var logo= $(window).scrollTop();
		  	if (logo>180) {
		  		$(".logo2").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var logo= $(window).scrollTop();
		  	if (logo>180) {
		  		$(".logo3").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var logo= $(window).scrollTop();
		  	if (logo>180) {
		  		$(".logo4").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});
$(document).ready(function(){
	$(window).scroll(function(event) {
		var logo= $(window).scrollTop();
		  	if (logo>180) {
		  		$(".logo5").css({
		  			transform: 'translateY(0px)',
		  		});
		  	}

	});
});