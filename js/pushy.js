/*! Pushy - v0.9.2 - 2014-9-13
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {
	var pushyLeft = $('.pushy-left'), //menu css class
		pushyRight = $('.pushy-right'), //menu css class

		body = $('body'),

		containerLeft = $('#container'), //container css class
		containerRight = $('#container'), //container css class

		pushLeft = $('.push'), //css class to add pushy capability
		pushRight = $('.push'), //css class to add pushy capability

		siteOverlayLeft = $('.site-overlay--left'), //site overlay
		siteOverlayRight = $('.site-overlay--right'), //site overlay

		pushyLeftClass = "pushy-left pushy-left--open", //menu position & menu open class
		pushyRightClass = "pushy-right pushy-right--open", //menu position & menu open class

		pushyLeftActiveClass = "pushy-left--active", //css class to toggle site overlay
		pushyRightActiveClass = "pushy-right--active", //css class to toggle site overlay

		containerLeftClass = "container-push--left", //container open class
		containerRightClass = "container-push--right", //container open class

		pushClass = "push-push", //css class to add pushy capability

		menuBtnLeft = $('.menu-btn--left, .pushy-left a'), //css classes to toggle the menu
		menuBtnRight = $('.menu-btn--right, .pushy-right a'), //css classes to toggle the menu

		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushyLeft.width() + "px"; //jQuery fallback menu width

	// Pushy Left

	function togglePushyLeft(){
		body.toggleClass(pushyLeftActiveClass); //toggle site overlay
		pushyLeft.toggleClass(pushyLeftClass);
		containerLeft.toggleClass(containerLeftClass);
		pushLeft.toggleClass(pushClass); //css class to add pushy capability
	}

	function openPushyLeftFallback(){
		body.addClass(pushyLeftActiveClass);
		pushyLeft.animate({left: "0px"}, menuSpeed);
		containerLeft.animate({left: menuWidth}, menuSpeed);
		pushLeft.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
	}

	function closePushyLeftFallback(){
		body.removeClass(pushyLeftActiveClass);
		pushyLeft.animate({left: "-" + menuWidth}, menuSpeed);
		containerLeft.animate({left: "0px"}, menuSpeed, function() {
			$(this).removeAttr('style');
		});
		pushLeft.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
	}

	// Pushy Right

	function togglePushyRight(){
		body.toggleClass(pushyRightActiveClass); //toggle site overlay
		pushyRight.toggleClass(pushyRightClass);
		containerRight.toggleClass(containerRightClass);
		pushRight.toggleClass(pushClass); //css class to add pushy capability
	}

	function openPushyRightFallback(){
		body.addClass(pushyRightActiveClass);
		pushyRight.animate({right: "0px"}, menuSpeed);
		containerRight.animate({right: menuWidth, left: "auto"}, menuSpeed);
		pushRight.animate({right: menuWidth}, menuSpeed); //css class to add pushy capability
	}

	function closePushyRightFallback(){
		body.removeClass(pushyRightActiveClass);
		pushyRight.animate({right: "-" + menuWidth}, menuSpeed);
		containerRight.animate({right: "0px"}, menuSpeed, function() {
			$(this).removeAttr('style');
		});
		pushRight.animate({right: "0px"}, menuSpeed); //css class to add pushy capability
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	cssTransforms3d = (function csstransforms3d(){
		var el = document.createElement('p'),
		supported = false,
		transforms = {
		    'webkitTransform':'-webkit-transform',
		    'OTransform':'-o-transform',
		    'msTransform':'-ms-transform',
		    'MozTransform':'-moz-transform',
		    'transform':'transform'
		};

		// Add it to the body to get the computed style
		document.body.insertBefore(el, null);

		for(var t in transforms){
		    if( el.style[t] !== undefined ){
		        el.style[t] = 'translate3d(1px,1px,1px)';
		        supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
		    }
		}

		document.body.removeChild(el);

		return (supported !== undefined && supported.length > 0 && supported !== "none");
	})();

	if(cssTransforms3d){
		//toggle left menu
		menuBtnLeft.click(function() {
			togglePushyLeft();
		});
		//toggle right menu
		menuBtnRight.click(function() {
			togglePushyRight();
		});

		//close left menu when clicking site overlay
		siteOverlayLeft.click(function(){
			togglePushyLeft();
		});

		//close right menu when clicking site overlay
		siteOverlayRight.click(function(){
			togglePushyRight();
		});
	}else{
		//jQuery fallback
		pushyLeft.css({left: "-" + menuWidth}); //hide menu by default
		containerLeft.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

		//jQuery fallback
		pushyRight.css({right: "-" + menuWidth}); //hide menu by default
		containerRight.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

		//keep track of menu state (open/close)
		var state = true;

		//toggle left menu
		menuBtnLeft.click(function() {
			if (state) {
				openPushyLeftFallback();
				state = false;
			} else {
				closePushyLeftFallback();
				state = true;
			}
		});

		//toggle right menu
		menuBtnRight.click(function() {
			if (state) {
				openPushyRightFallback();
				state = false;
			} else {
				closePushyRightFallback();
				state = true;
			}
		});

		//close left menu when clicking site overlay
		siteOverlayLeft.click(function(){
			if (state) {
				openPushyLeftFallback();
				state = false;
			} else {
				closePushyLeftFallback();
				state = true;
			}
		});

		//close right menu when clicking site overlay
		siteOverlayRight.click(function(){
			if (state) {
				openPushyRightFallback();
				state = false;
			} else {
				closePushyRightFallback();
				state = true;
			}
		});
	}
});