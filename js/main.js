$(function() {

	var $win = $(window);
	var $doc = $(document);
	var $menuBtn = $('.btn-menu');
	var $body = $('body');

	$menuBtn.on('click', function() {
		var $this = $(this);
		$this.next().toggleClass('open');
		$this.parents('body').toggleClass('show-nav');
	});

	function scrollheader(){
		var scrolled;
		var lastscrolltop = 0;
		var delta = 5;
		var speed = 250;
		var $header = $('.header');
		var $headerheight = $header.outerHeight();

		$win.scroll(function() {
			scrolled = true;
		});

		setInterval(function(){
			if (scrolled){
				hasscrolled();
				scrolled = false;
			}
		},speed);

		function hasscrolled(){
			var $scrollTop = $win.scrollTop();

			if (Math.abs(lastscrolltop - $scrollTop) <= delta){
				return ;
			}

			if ($scrollTop > lastscrolltop && $scrollTop > $headerheight ){
				// hide
				$header.removeClass('nav-down').addClass('nav-up');
			}else {
				// show
				if($scrollTop + $win.height() < $doc.height()){
					$header.removeClass('nav-up').addClass('nav-down');
				}
			}
			lastscrolltop = $scrollTop;
		}
	}

	scrollheader();

});