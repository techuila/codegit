$(document).ready(()=>{
	// onload stay on home
	history.pushState('', document.title, window.location.pathname);
	// ====================================================
	// 		  INITIALIZATION FULLPAGEJS (CUSTOMIZED)
	// ====================================================

    setTimeout(() => {
        var options = {
            strings: ["websites.^2000", "softwares.^2000", "graphic designs.^2500"],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true
            }
        var typed = new Typed(".element", options);
    }, 2500);

    $('#fullpage').fullpage({
        //Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:[], 
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['HOME', 'TEAM', 'WORK', 'PORTFOLIO', 'CONTACT'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'right',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: true,
		fadingEffect: true,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: false,
		recordHistory: false,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#f8f8f8','##f8f8f8','##f8f8f8','##f8f8f8'],
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			showAnimation(nextIndex);
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log(`asds: ${slideIndex}`);
			showPortfolio(slideIndex);
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    var options = {
        particleColor: '#00e5ea',
        background: 'img/sky.jpg',
        interactive: true,
        speed: 'fast',
        density: '7000'
    };
	var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);

	let y = 0;
	let x = 0;
	let z = 0;
	let b = 0;
	let view_team = false;
	let view_work = false;
	let view_portfolio = false;
	let view_contact = false;
	const work_animations = ['slit-in-diagonal-1','scale-up-center','roll-in-left','bounce-in-bottom'];

	function showPortfolio(index){
		if(index == 1){
			displayPortfolio('.d2');
		}
	}

	// Display Portfolio
	function displayPortfolio(className){
		// Show header
		$(`.section.s4 ${className} header .header-img`).css('opacity','1');
		$(`.s4 ${className} .header-img`).addClass('kenburns-bottom');
		// Show macbook
		setTimeout(() => {
			$(`.s4 ${className} .macbook`).css('opacity','1');
			$(`.s4 ${className} .macbook`).addClass('slit-in-diagonal-1');
			// Show project title
			setTimeout(() => {
				$(`.s4 ${className} h1.p-color`).css('opacity','1');
				$(`.s4 ${className} h1.p-color`).addClass('tracking-in-expand');
			}, 500);
			// Show sub title
			setTimeout(() => {
				$(`.s4 ${className} h3.sub-t`).css('opacity','1');
				$(`.s4 ${className} h3.sub-t`).addClass('tracking-in-expand');
				// Show description
				setTimeout(() => {
					$(`.s4 ${className} h4`).css('opacity','1');
					$(`.s4 ${className} h4`).addClass('move-up');
					// Show button
					setTimeout(() => {
						$(`.s4 ${className} .btn`).css('opacity','1');
						$(`.s4 ${className} .btn`).css('margin-top','20px');
						$('.s4 .fp-controlArrow').css('opacity','1');
					}, 300);
				}, 300);
			}, 500);
		}, 400);
	}
	
	function showAnimation(index){
		if(index > 1){
			$('#fp-nav').css('opacity', '1');
			$('#fp-nav').css('top', '50%');
		}else{
			$('#fp-nav').css('opacity', '0');
			$('#fp-nav').css('top', '-50%');
		}
		if(index == 2 && !view_team){
			x = 0;
			view_team = true;
			// * THE TEAM *
			setTimeout(() => {
				$('.s2.title').css('opacity','1');
				// * SUB TITLE*
				setTimeout(() => {
					$('.s2.sub').css('opacity','1');
					// * FRAMES * 
					setTimeout(() => {
						$('.s2.title-container').css('padding-top','15%');
						floatPhoto();
					}, 1000);
				}, 700);
			}, 700);
		}else if(index == 3 && !view_work){
			y = 0;
			view_work = true;
			// * THE WORK *
			setTimeout(() => {
				$('.s3.title').addClass('tracking-in-expand');
				// * SUB TITLE*
				setTimeout(() => {
					$('.s3.sub').addClass('tracking-in-expand');
					// * FRAMES * 
					setTimeout(() => {
						$('.s3.title-container').css('padding-top','15%');
						$(`.s3.frame`).css('opacity','1');
						$(`.s3.frame`).css('margin-top','0');
						setTimeout(() => {
							showWork();
						}, 500);
					}, 1000);
				}, 700);
			}, 700);
		}else if(index == 4 && !view_portfolio){
			view_portfolio = true;
			// Show portfolio
			setTimeout(() => {
				displayPortfolio('.d1');
			}, 500);
		}else if(index == 5 && !view_contact){
			view_contact = true;
			setTimeout(() => {
				// Text display
				$('.l-title.intro').css('opacity','1');
				$('.l-title.intro').addClass('focus-in-contract-bck');
				setTimeout(() => {
					// Text shadow animation
					$('.l-title.intro').addClass('text-shadow-pop-bl');
					setTimeout(() => {
						// Text display exit
						$('.text-display').addClass('slide-out-blurred-top');
						setTimeout(() => {
							// Slide left text title and sub
							$('.s5.c-title').css('opacity','1');
							$('.s5.c-sub').css('opacity','1');
							$('.s5.c-title').addClass('slide-in-blurred-left');
							$('.s5.c-sub').addClass('slide-in-blurred-left');
							// Swing in top inputs
							showInputs();
							showContactLoc();
						}, 600);
					}, 1300);
				}, 900);
			}, 700);
		}
	}
	// Float photo (TEAM)
	function floatPhoto(){
		setTimeout(() => {
			$(`.s2.frame:nth-of-type(${++x})`).css('opacity','1');
			$(`.s2.frame:nth-of-type(${x})`).css('margin-top','0');
			$(`.s2.frame:nth-of-type(${x}) .photo`).css('animation','float-photo 2s ease-in-out forwards alternate infinite');
			(x<=4) ? floatPhoto() : null;
		}, 500);
	}

	function showWork(){
		$(`.s3.frame:nth-child(${++y}) .work-icons`).css('opacity','1');		
		$(`.s3.frame:nth-child(${y}) .work-icons`).addClass(work_animations[y - 1]);
		if(y<=4){
			showWork();
		}else{
			y = 0;
			setTimeout(() => {
				$(`.s3.frame .bgg`).css('opacity','1');						
				removeAnimation();
			}, 800);
		} 
	}

	function removeAnimation(){
		$(`.s3.frame:nth-child(${++y}) .work-icons`).removeClass(work_animations[y - 1]);
		(y<=4) ? removeAnimation() : null;
	}

	function showContactLoc(){
		setTimeout(() => {
			$(`.s5.l-title:nth-of-type(${++b})`).css('opacity','1');
			$(`.s5.l-title:nth-of-type(${b})`).addClass('slide-in-blurred-right');
			(b<=4) ? showContactLoc() : showBgLoc();
		}, 200);
	}

	function showInputs(){
		setTimeout(() => {
			$(`.section .contact input:nth-of-type(${++z})`).css('opacity','1');
			$(`.section .contact input:nth-of-type(${z})`).addClass('swing-in-top-bck');
			(z<=3) ? showInputs() : showAreatext();
		}, 200);
	}

	function showAreatext(){
		setTimeout(() => {
			$(`.section .contact textarea`).css('opacity','1');	
			$(`.section .contact textarea`).addClass('swing-in-top-bck');
			setTimeout(() => {
				$(`.section .contact a`).css('opacity','1');				
				$(`.section .contact a`).addClass('slide-in-blurred-left');				
			}, 200);
		}, 100);
	}

	function showBgLoc(){
		setTimeout(() => {
			$(`.bg-location`).css('opacity','1');
			$(`.bg-location`).addClass('kenburns-right');
		}, 300);
	}
})