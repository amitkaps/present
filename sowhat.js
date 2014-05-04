'use strict';

// Wait for the html content to load and then start
window.onload = function () {
	
	// SETUP & SHOW - Show the current slide
		
		// Get an array of all the divs (slides) to show.
		var slides = document.getElementsByTagName('div');

		// Set the show slide number to zero.
		var onSlide = 0;

		// if there are no slides, then exit the function.
		if (!slides) return;

		// Show the slide number n.
		
		function show(n) {

			// Set show slide and onSlide number to n.
			onSlide = n;
			var showSlide = slides[n];

			// Make all the div / slides disappear
			for (var i = 0; i < slides.length; i++){
				slides[i].style.display = 'none';
			}

			// Show the current slide.
			showSlide.style.display = 'inline';
		}

	// CONTROLS - Move the Slides

		// On click, show the next slide. Cycle back to start. 
		document.onclick = function () {
			onSlide = (onSlide + 1) % slides.length;
			show(onSlide);
		};

		// Move to previous slide
		function prev () {
			onSlide = onSlide - 1;
			show(Math.max(onSlide, 0));
		}

		// Move to next slide
		function next () {
			onSlide = onSlide + 1;
			show(Math.min(onSlide, slides.length - 1));
		}

		// On key up or left, go previous. On key down or right, go next
		document.onkeydown = function(key) {
	        if (key.which === 39 || key.which === 40) next();
	        if (key.which === 37 || key.which === 38) prev();
	    };

		// Touch control based on start and end touch x coordinates
    document.ontouchstart = function(touch) {
      var xStartCoordinate = touch.changedTouches[0].pageX;
      document.ontouchend = function(touch) {
          var xEndCoordinate = touch.changedTouches[0].pageX;
          if (xEndCoordinate - xStartCoordinate < 0) next();
          if (xEndCoordinate - xStartCoordinate > 0) prev();
      };
    };


	show(onSlide);


};