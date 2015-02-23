(function($) {
	$.fn.gridoverlay = function() {
		/** RESET ON MOUSE IN **/
		var hh = 99990;
		window.onload=function(){
			$(".grid-item").slice(0,5).each(function(){
				if(hh > $(this).height()){
					hh = $(this).height();
				}
			});
			$(".grid-item").each(function(){
				$(".grid-item").height(hh);
			});
		};
		$(window).resize(function() {
			doneResizing();
		});
		function doneResizing() {
			var hh = 999999;
			$(".grid-item").css("height","auto");
			$(".grid-item").slice(0,5).each(function(){
				if(hh > $(this).height()){
					hh = $(this).height();
				}
			});
			$(".grid-item").each(function(){
				$(".grid-item").height(hh);
			});
		
		}
		$(".logo").mouseover(function(evt){
			var x = evt.pageX - $(this).offset().left;
			var y = evt.pageY - $(this).offset().top;
			var w = $(this).width();
			var h = $(this).height();
			var posx = x/w;
			var posy = y/h;
			TweenMax.killTweensOf($(this).find(".grid-cover"));
			if(posx > .5 && posx > posy && posx > (1-posy)){
				$(this).find(".grid-cover").css("left","100%");
				$(this).find(".grid-cover").css("top","0%");
				TweenMax.to($(this).find(".grid-cover"), .5, {left:"0%", ease:Quad.easeOut, delay:0});
			}else if((1-posx) > .5 && (1-posx) > posy && (1-posx) > (1-posy)){
				$(this).find(".grid-cover").css("left","-100%");
				$(this).find(".grid-cover").css("top","0%");
				TweenMax.to($(this).find(".grid-cover"), .5, {left:"0%", ease:Quad.easeOut, delay:0});
			}else if(posy > .5 && posy > posx && posy > (1-posx)){
				$(this).find(".grid-cover").css("left","0%");
				$(this).find(".grid-cover").css("top","100%");
				TweenMax.to($(this).find(".grid-cover"), .5, {top:"0%", ease:Quad.easeOut, delay:0});
			}else{
				$(this).find(".grid-cover").css("left","0%");
				$(this).find(".grid-cover").css("top","-100%");
				TweenMax.to($(this).find(".grid-cover"), .5, {top:"0%", ease:Quad.easeOut, delay:0});
			}
		});
		$(".logo").mouseout(function(evt){
			var x = evt.pageX - $(this).offset().left;
			var y = evt.pageY - $(this).offset().top;
			var w = $(this).width();
			var h = $(this).height();
			var posx = x/w;
			var posy = y/h;
			
			if(posx > .5 && posx > posy && posx > (1-posy)){
				TweenMax.to($(this).find(".grid-cover"), .5, {left:"100%", ease:Quad.easeOut, delay:0});
			}else if((1-posx) > .5 && (1-posx) > posy && (1-posx) > (1-posy)){
				TweenMax.to($(this).find(".grid-cover"), .5, {left:"-100%", ease:Quad.easeOut, delay:0});
			}else if(posy > .5 && posy > posx && posy > (1-posx)){
				TweenMax.to($(this).find(".grid-cover"), .5, {top:"100%", ease:Quad.easeOut, delay:0});
			}else{
				TweenMax.to($(this).find(".grid-cover"), .5, {top:"-100%", ease:Quad.easeOut, delay:0});
			}
		});
	}
	
})(jQuery);