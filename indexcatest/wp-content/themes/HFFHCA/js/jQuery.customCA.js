jQuery.noConflict();
(function( $ ) {
  $(function() {
	
	//Animate List  
	$(".animateList").slick({
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		fade: true,
		vertical:false,
		pauseOnHover:false,
		pauseOnFocus:false,
		speed: 500,
		autoplaySpeed:3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false
	});


	// Scroll to anchor
	$('a[href^="#"]').click(function(event){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		event.preventDefault();
	});

	$('.scrollToTop').click(function() {
		$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
	});

	$(".widget_slick_slider").slick({
		autoplay: false,
		autoplaySpeed: 8000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
	$('.testimonial_shortcode_wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:true,        
	});
	
	/*close site Notice*/
	$('.closeNotice').click(function(){
		$('.sitewideNotice').animate({left : '-100%'},1000);
	});
	
	$('.closeHeaderNotice').click(function(){
		$('.headerNotice').slideUp();
	});
	$(window).load(function(){
		setTimeout(function(){
		$('.sitewideNotice').animate({left : '0px'},1000);
		}, 2000);
	});

	/*function BannerHeight(){
		var WH = $(window).outerHeight();
		var HH = $('#header').outerHeight();
		var BH = WH - HH;
		if (WH > 600){
			$('#home').css({'min-height':WH});
		}else{
			$('#home').css({'min-height':600});
		}
	}*/


	/*$(".testimonial_shortcode_slider").slick({
		autoplay: false,
		autoplaySpeed: 8000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	});*/
	
	/*Menu*/
	$('#OpenMenu').click(function(){
		$('#PushMenuWrap').addClass('opened');
		$('#PushMenuWrapOverlay').addClass('opened');
		$('#wrap').addClass('menuopened');
	});

	$('.close_menu').click(function(){
		$('#PushMenuWrap').removeClass('opened');
		$('#PushMenuWrapOverlay').removeClass('opened');
		$('#wrap').removeClass('menuopened');
	});
	$('.menu-item-has-children').each(function(index, element){
		  $(this).append('<span class="submenu_open"><i class="fa fa-angle-right"></i></span>');
	});
	/*$('.menu-item-has-children').click(function(){
		$('ul.PushMenu').addClass('hidden');
		$('.sub-menu').removeClass('opened');
		$(this).find('ul').toggleClass('opened');
		$('.sub_menu_icon').addClass('opened');


	});
	$('.sub_menu_icon .close_submenu').click(function(){
		$('ul.PushMenu ul').removeClass('opened');
		$('.sub_menu_icon').removeClass('opened');
		$('ul.PushMenu').removeClass('hidden');
	});*/

	$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
	  if (!$(event.target).closest("#OpenMenu, .close_menu, .sub_menu_icon, #PushMenuWrap").length) {
		$("body").find("#PushMenuWrap").removeClass("opened");
	  }
	});
	
	function animateAfterLoad(){
		setTimeout(function(){ $('.animateAfterLoad').addClass('in-view');}, 1000);
		
	}


	//Animate elements
	var $animation_elements = $('.animation');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
		var element_middle_position = (element_top_position + (element_height/3))

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&	(element_middle_position <= window_bottom_position)) {
		  setTimeout(function(){$element.addClass('in-view');}, 500);
		}/* else {
		  $element.removeClass('in-view');
		}*/
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
	//Animate elements

	//Move elements
	/*var prevScroll = 0;
	function moveElements(){
		var $this = $(this),
           currScroll = $this.scrollTop();
       if (currScroll > prevScroll){
          $('.in-view').animate({top: '-=10'}, 5);
       } else {
          $('.in-view').animate({top: '+=10'}, 5);
       }

       prevScroll = currScroll;
	}
	$window.on('scroll', moveElements);*/
	//Move elements


	function removeNoJsClass() {
		$( 'html:first' ).removeClass( 'no-js' );
	}

	/* Superfish the menu drops ---------------------*/
	function superfishSetup() {
		$('.menu').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			cssArrows: true,
			autoArrows:  true,
			dropShadows: false
		});
	}

	/* Portfolio Filter ---------------------*/
	function isotopeSetup() {
		var $grid = $('.blog_page, .team_page').imagesLoaded( function() {
		$grid.isotope({
			itemSelector: '.blog_holder, .team_holder',
			layoutMode: 'fitRows'
		});
		});
	}
	
	function masonrySetup() {
		var $masogrid = $('.favGalleryGrid, .gallery_page').imagesLoaded( function() {
		$masogrid.isotope({
			itemSelector: '.favGalleryImg, .gallery_thumb',
			layoutMode: 'masonry'
		});
		});
	}

	/* Animating Menu Setup ---------------------*/
	function navScrollSetup() {
		$('#header').data('size','big');
	}

	//sticky header
	var stickyHeaderTop = $('#header').offset().top + $('#header').outerHeight();
	$(window).scroll(function(){
		if( $(window).scrollTop() > stickyHeaderTop) {
			$('#header').addClass("sticky");
			headerSpacing();
		} else {
			$('#header').removeClass("sticky");
			headerSpacing();
		}
	});
	

	function headerSpacing(){
		$('.homeBannerWrap, .pagebannerWrap').css({'padding-top': $('#header').outerHeight()});
	}


	function modifyPosts() {

		/* Insert Nav Arrow Before Submenu ---------------------*/
		//$('<span class="nav-arrow"></span>').insertBefore('ul.sub-menu li:first-child, ul.menu ul li:first-child');

		/* Insert Line Break Before More Links ---------------------*/
		$('<br />').insertBefore('.content a.more-link');

		/* Hide Comments When No Comments Activated ---------------------*/
		$('.nocomments').parent().css('display', 'none');

		/* Animate Page Scroll ---------------------*/
		$(".scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});

		/* Fit Vids ---------------------*/
		$('.feature-vid, .content, .slidepopup_content').fitVids();

	}
	
	
	function simpleAccordion(){
		$('.AccordionTitle').click(function(){
			var accordionID = $(this).attr('id');
			if($(this).hasClass('active')){
			}else{
				$('.AccordionTitle').removeClass('active');
				$('.AccordionContent').removeClass('active');
				$('.AccordionContent').slideUp(100);
				
				$('#'+accordionID).addClass('active');
				$('#'+accordionID+'-content').addClass('active');
				$('#'+accordionID+'-content').slideDown(100);
			}
		});
	}
	

	function simpleTabMenu(){
		$('.tabMenuItem').click(function(){
			var tabID = $(this).attr('tabid');
			if($(this).hasClass('active')){
			}else{
				$('.tabMenuItem').removeClass('active');
				$('.tabContentWrap').removeClass('active');
				$('.tabContentWrap').hide();
				
				$(this).addClass('active');
				$('#'+tabID+'-content').addClass('active');
				$('#'+tabID+'-content').show();
			}
		});
	}
	
	

	$( document )
	.ready( removeNoJsClass )
	.ready( navScrollSetup )
	.ready( superfishSetup )
	.ready( modifyPosts )
	.ready ( simpleAccordion )
	.ready (simpleTabMenu)
	//.ready( BannerHeight )
	.on( 'post-load', modifyPosts );

	$( window )
	.load( isotopeSetup )
	.load( masonrySetup )
	.load(animateAfterLoad)
	.load(headerSpacing)
	.resize( isotopeSetup )
	.resize( masonrySetup )
	.resize(headerSpacing)
	//.resize( BannerHeight )

  });
})(jQuery);