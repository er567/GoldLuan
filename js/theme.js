;(function($) {
    "use strict";
	
	function bootstrapAnimatedLayer() {

		/* Demo Scripts for Bootstrap Carousel and Animate.css article
		 * on SitePoint by Maria Antonietta Perna
		 */

		//Function to animate slider captions 
		function doAnimations(elems) {
			//Cache the animationend event in a variable
			var animEndEv = 'webkitAnimationEnd animationend';

			elems.each(function() {
				var $this = $(this),
					$animationType = $this.data('animation');
				$this.addClass($animationType).one(animEndEv, function() {
					$this.removeClass($animationType);
				});
			});
		}

		//Variables on page load 
		var $myCarousel = $('#minimal-bootstrap-carousel'),
			$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel 
		$myCarousel.carousel({
			interval: 7000
		});

		//Animate captions in first slide on page load 
		doAnimations($firstAnimatingElems);

		//Pause carousel  
		$myCarousel.carousel('pause');


		//Other slides to be animated on carousel slide event 
		$myCarousel.on('slide.bs.carousel', function(e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});
	}
	
	
	if ( $('#minimal-bootstrap-carousel').length ){
		bootstrapAnimatedLayer();
	}
    
	if ( $('.main-slider').length ){
		
		$('.main-slider').each(function(){
			$('.main-slider').owlCarousel({
				loop:true,
				margin:0,
				items:1,
				autoplay: true,
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				autoplayHoverPause: true
			})
		})
	}

    
	if ( $('.service-offer-carousel').length ){
		$('.service-offer-carousel').each(function(){
			$('.service-offer-carousel').owlCarousel({
				loop:true,
				margin:0,
				nav: false,
				dots: true,
				autoplay: true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					768: {
						items: 3
					},
					1200: {
						items: 4
					}
				}
			})
		})
	}

    
	if ( $('.testimonial-carousel').length ){
		$('.testimonial-carousel').each(function(){
			$('.testimonial-carousel').owlCarousel({
				loop:true,
				margin:0,
				nav: false,
				dots: true,
				autoplay: true,
				responsive: {
					0: {
						items: 1
					},
					992: {
						items: 2
					}
				}
			})
		})
	}
	
	
	if ( $('.google-map').length ){
		var mapDiv = $('.google-map');
		mapDiv.each(function(){
			var $lat = mapDiv.data('lat');
			var $lon = mapDiv.data('lon');			
			if (mapDiv.data('zoom')){
				var $zoom = mapDiv.data('zoom')
			}else{
				var $zoom = 15
			}
			if (mapDiv.data('marker')) var $marker = mapDiv.data('marker');
			var map = new GMaps({
				el: '.google-map',
				lat: $lat,
				lng: $lon,
				scrollwheel: false,
				scaleControl: true,
				streetViewControl: false,
				panControl: true,
				disableDoubleClickZoom: true,
				mapTypeControl: false,
				zoom: $zoom,
				styles: [
					{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},          
					{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},
					{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
					{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
					{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
					{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
					{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},
					{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
					{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
					{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
					{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}
				]
			});

			if ( $marker ){
				map.addMarker({
					lat: $lat,
					lng: $lon,
					marker: $marker
				})
			}else{
				map.addMarker({
					lat: $lat,
					lng: $lon
				})
			}
		})
	}
	
	
	if ( $('.filterable-gallery').length ){
		$('.filterable-gallery').imagesLoaded( function() {

			$(".filterable-gallery").isotope({
				itemSelector: ".gallery-item",
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});

			// Add isotope click function
			$(".gallery-filter li").on('click',function(){
				$(".gallery-filter li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
				$(".filterable-gallery").isotope({
					filter: selector
				})
			})

		})
	}
	
	if ( $('[data-pmbgimage]').length ){
		var $pmbgimage = $('[data-pmbgimage]').attr('data-pmbgimage');
		console.log($pmbgimage);
		$('[data-pmbgimage]').css({
			"background-image": "url("+$pmbgimage+")"
		})
	}
	
	if ( $('[data-imagelightbox]').length ){
		$('[data-imagelightbox="a"]').imageLightbox({
			activity: true,
			overlay: true,
			button: true, 
			quitOnDocClick: false,
			caption: true,
			arrows: true
		})
	}
	
	if ( $('.pr-twenty20').length ){
		$('.pr-twenty20').twentytwenty();
	}
	
	
	if( $('.plumber-navbar').length ){
		
		if ( $(window).width() > 991 ){
			$(window).on('scroll', function(){
				var $topG = $('.plumber-navbar').offset().top;

				if ( $(window).scrollTop() > $topG + 66 ) {
					$('.plumber-navbar').addClass('affix-coming')
				}
				else {
					$('.plumber-navbar').removeClass('affix-coming')
				}

				$('.plumber-navbar').affix({
					offset: {
						top: $topG + 150
					}
				})
			})
		}
		
	}
    
})(jQuery)