$(document).ready(()=>{
	// Variables for flipLoop()
	let n = $('.c').length;		
	let x = 0;	
	let sec = 500;


	// Initialize
	// * Animations *
	flipLoop();
	fadeInHome();

	// ====================================================
	// 		  			Action Listeners
    // ====================================================
	$('.downarrow').on('click',()=>{
		$.fn.fullpage.moveSectionDown();
	})

	// ====================================================
	// 		  			FUNCTIONS
    // ====================================================
	function flipLoop(){
		setTimeout(() => {
			sec = 30;
			$(`.c:nth-child(${++x})`).css('animation',`flip 30s ease-in-out forwards`);
			(x<=n+2) ? flipLoop() : null;
		}, sec);
	}
	function fadeInHome(){
		setTimeout(() => {
			$('#fadein-home').css('margin-top','0');
			$('#fadein-home').css('opacity','1');
			setTimeout(() => {
				$('.c-arrow').css('opacity','1');
			}, 1000);
		}, 1800);
	}
});
