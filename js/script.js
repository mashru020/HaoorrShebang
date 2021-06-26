$(document).ready(function() {
	$("#lan1").selectmenu();
	$("#lan2").selectmenu();
	$(document).on('click', '.mobile-nav button.navbar-toggler', function() {
  		$('.side-nav').toggleClass('show')
  	});
  	$(document).on('click', '.side-nav button.cross', function() {
  		$('.side-nav').removeClass('show')
  	});
  	$(document).on('mouseover' , '.dropdown button.dropdown-toggle' , function() {
  		$('.navbar-nav').find('.dropdown-menu').removeClass('show');
  		$(this).parent('.dropdown').find('.dropdown-menu').addClass('show');
  	});
  	$(document).on('mouseleave','.dropdown-menu',function() {
  		$(this).removeClass('show');
  	});
  	$(document).on('mouseleave', '.navbar', function() {
  		$('.navbar').find('.dropdown-menu.show').removeClass('show');
  	});
  	$(document).on('mouseleave', '.side-nav', function() {
  		$('.side-nav').find('.dropdown-menu.show').removeClass('show');
  	});
	$("#room-category").selectmenu();
	$("#floor-number").selectmenu();
	$("#room-details").selectmenu();

	var fixed_top = $(".header-upper.header-fixed");
	$(window).on("scroll", function(){
	    if( $(window).scrollTop() > 90){  
	        fixed_top.addClass("show");
	    }
	    else{
	        fixed_top.removeClass("show");
	    }
	});
	$('.nearest-place-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
	$('.property-slider').slick({
		infinite:true,
		slidesToShow: 3,
		dots: true,
		responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  },
		]
	});
	$('.team-member-slider').slick({
		infinite:true,
		slidesToShow: 3,
		arrows:false,
		dots: true,
		responsive: [
		  {
		    breakpoint: 991,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 767,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  },
		]
	});
	$('.property-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

	$(function () {
	  	$('[data-toggle="tooltip"]').tooltip()
	})

	$(document).on('click',".star svg", function() {
		var dataPrefix = $(this).data('prefix');
		if(dataPrefix == 'far') {
			$(this).attr('data-prefix', 'fas');
		} else {
			$(this).attr('data-prefix', 'far');
		}	
	});
	
	$('.hot-offer-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	});
	 $('.room-details-slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.room-details-slider-nav'
	});
	$('.room-details-slider-nav').slick({
		infinite:true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.room-details-slider-for',
	  dots: false,
	  arrows: false,
	  centerMode: false,
	  focusOnSelect: true
	});
	// check availabality 
	$( "#check-in" ).datepicker();
	$( "#check-out" ).datepicker();
	$( "#booking-date" ).datepicker();
	$('#booking-time').mdtimepicker(); 
	$( "#number-of-days" ).selectmenu();
	$( "#number-of-person" ).selectmenu();
	$( "#number-of-room" ).selectmenu();

	// floor plan start
	function addSmall() {
		if($( window ).width()< 992 ) {
			$('#floor-plan-main').addClass("small");
		}
	}
	/*function removeSmall() {
		if($(window).width() > 991 ) {
			$('#floor-plan-main').removeClass("small");
		}
	}
	$(window).on('resize',function() {
		if($(window).width() > 991 ) {
			removeSmall();
		}
	});*/
	addSmall();
	$("#floor-plan-main.small button.show-floor-plan").click(function(){
	   $("ul").slideToggle();
	});

	 $("#floor-plan-main.small .nav-item").click(function(){
	   $("ul").slideToggle();
	});
	// floor plan end
	// sale details start 
	$( "#status" ).selectmenu();
	$( "#type" ).selectmenu();
	$( "#bedroom" ).selectmenu();
	$( "#bathroom" ).selectmenu();
	$('.service-details-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  arrows:true
	});
});

	const signupButton = document.getElementById('signup-button'),
	    loginButton = document.getElementById('login-button'),
	    userForms = document.getElementById('user_options-forms')

	/**
	 * Add event listener to the "Sign Up" button
	 */
	signupButton.addEventListener('click', () => {
	  userForms.classList.remove('bounceRight')
	  userForms.classList.add('bounceLeft')
	}, false)

	/**
	 * Add event listener to the "Login" button
	 */
	loginButton.addEventListener('click', () => {
	  userForms.classList.remove('bounceLeft')
	  userForms.classList.add('bounceRight')
	}, false)