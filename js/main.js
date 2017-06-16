jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
	! function(e) {
    var l = new ScrollMagic.Controller,
        i = ["#slide01 header", "#slide02 header", "#slide03 header", "#slide04 header"];
    if (!Modernizr.touch) {
        i.forEach(function(e, i) {
            {
                var r = i + 1;
                new ScrollMagic.Scene({
                    triggerElement: e,
                    offset: -95
                }).setClassToggle("#slide0" + r, "is-active").addTo(l)
                .addIndicators()
            }
        });
        {
            new ScrollMagic.Scene({
                triggerElement: ".slide.is-light"
            }).setClassToggle("nav", "is-dark").addTo(l)
            .addIndicators({name: "light to dark scene"});

        }
        {
            new ScrollMagic.Scene({
                triggerElement: ".slide.is-dark"
            }).setClassToggle("nav", "is-blue").addTo(l)
            .addIndicators({name: "dark to blue scene"});
        }
        {
            new ScrollMagic.Scene({
                triggerElement: ".slide.to-red"
            }).setClassToggle("nav", "is-red").addTo(l)
            .addIndicators({name: "blue to red scene"});
        }
        {
            new ScrollMagic.Scene({
                triggerElement: ".slide.to-green"
            }).setClassToggle("nav", "is-green").addTo(l)
            .addIndicators({name: "red to green scene"});
        }
    }
}
});
