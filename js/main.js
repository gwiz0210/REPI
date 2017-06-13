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
        // {
        //   new ScrollMagic.Scene({
        //     triggerElement: "#sec1"})
        // 					.setClassToggle("#high1", "active") // add class toggle
        // 					.addIndicators() // add indicators (requires plugin)
        // 					.addTo(controller);
        // }
	// build scenes

	// new ScrollMagic.Scene({triggerElement: "#sec2"})
	// 				.setClassToggle("#high2", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec3"})
	// 				.setClassToggle("#high3", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec4"})
	// 				.setClassToggle("#high4", "active") // add class toggle
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);

    }
}(jQuery);
