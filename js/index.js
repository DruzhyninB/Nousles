var isIpad = navigator.userAgent.match(/iPad/i) ;


var Application = function(){
	var self = this;
	
	
	var mapview = null;
	var map = null;
	var Init = {};
	var Resize = {};
		
	Init.all = function(){
			
		$('#content').css('display', 'block');
		$(window).trigger('resize');
		$(document).scrollTop(0);
		//$('#playBtn').get(0).click();
	    //generateMap();
		var ddd = $('#reference0');

		$('#reference0').click();
		/*
		var hash = document.location.hash;
		if(hash.length > 0){
			if($(hash).length>0){
				$(document).scrollTop($(hash).offset().top);
				if(hash.match(/^#reference([0-9]+)$/) != null){
					setTimeout(function(hash){
						$(hash).click();
					}, 500, hash);
				}
			}
		}
		*/
	};		
	
	Init.delphineEtSaig = function(){
		Resize.delphineEtSaig.call(this);
		
		$('.ds-close').click(function(){
			var infos = $('#'+$(this).attr('for')+'Infos');
			
			infos.removeClass('open').stop().css({
				'opacity' : 1
			}).fadeTo('fast', 0, function(){
				$(this).css('display', 'none');
			});
		});
		
		$('#saig, #delphine').mouseover(function(){
			var image = $(this).find('>img');
			
			var width = image.width() * 1.1;
			var height = image.height() * 1.1;
			
			var left = (image.parent().width()-width)/2;
			var top = (image.parent().height()-height)/2;
		
			image.css({
				'position' : 'absolute'
			}).stop().animate({
				'top' : top,
				'left' : left,
				'width' : width,
				'height' : height,
			});
		}).mouseout(function(){
			var image = $(this).find('>img');
			var crop = getCropRect({
				width : 750,
				height : 551
			},{
				width : image.parent().width(),
				height : image.parent().height()
			});
			
			image.css({
				'position' : 'absolute'
			}).stop().animate({
				'top' : crop.top,
				'left' : crop.left,
				'width' : crop.width,
				'height' : crop.height,
			});
		}).click(function(){
			var infos = $('#'+this.id+'Infos');
			infos.toggleClass('open');
			
			if(infos.hasClass('open')){
				infos.stop().css({
					'opacity' : 0,
					'display' : 'block'
				}).fadeTo('fast', 1);
			}else{
				infos.stop().css({
					'opacity' : 1
				}).fadeTo('fast', 0, function(){
					$(this).css('display', 'none');
				});
			}
		});
	};
		
	Init.references = function(){
		function openElement(element, scale){
			var element = $(element);
			var index = $('#'+element.attr('for'));
			
			if(typeof scale == 'undefined')
				scale = 1;

			element.addClass('open').stop();
			if(isIpad){
				element.height(index.height()*scale);
			}else {
				element.height(0).animate({
					height : index.height()*scale
				});
			}
				
		}
		
		function closeElement(element){
			var element = $(element);
			var index = $('#'+element.attr('for'));
			
			element.stop();
			if(isIpad){
				element.height(0).removeClass('open');
			}else{
				element.animate({
					height : 0
				}, function(){
					$(this).removeClass('open');
				});
			}
		}
		
		$('.ref-close').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			var index = $('#'+$(this).attr('for'));
			index.trigger('click');
		});
		
		
		
		$('.ref-index').click(function (e) {

		    e.preventDefault();
		    e.stopPropagation();

		    

		    closeElement('.ref-infos, .ref-resources');
		    if ($(this).hasClass('open'))
		    {
		        $(this).removeClass('open');

		    } else
		    {
		        $('.ref-index.open').removeClass('open');
				
		        openElement('.ref-resources[for="'+this.id+'"]', 2);
		        openElement('.ref-infos[for="'+this.id+'"]');
				
		        var swipeView = $('.ref-resources[for="'+this.id+'"] .swipe');

		        swipeView.width($(this).width()).height($(this).height() * 2);
				
		        var flecheGauche = $('.ref-resources[for="'+this.id+'"] .ref-fleche-gauche');
		        var flecheDroite = $('.ref-resources[for="'+this.id+'"] .ref-fleche-droite');
				
				
		        var swipObj = new Swipe(swipeView.get(0), {
		            continuous : false,
		            callback : function(index, obj){
		                var min = 0;
		                var max = swipObj.getNumSlides()-1;
		                flecheGauche.css('display', (index==min ? 'none' : 'block'));
		                flecheDroite.css('display', (index==max ? 'none' : 'block'));
		            }
		        });
				
		        var min = 0;
		        var max = swipObj.getNumSlides()-1;
				
		        flecheGauche.css('display', 'none');
		        flecheDroite.css('display', (max==0 ? 'none' : 'block'));
				
		        flecheGauche.unbind('touchstart mousedown').bind('touchstart mousedown', function(){
		            swipObj.prev();
		        });
				
		        flecheDroite.unbind('touchstart mousedown').bind('touchstart mousedown', function(){
		            swipObj.next();
		        });
				
				
		        $(this).addClass('open');
				
		    }
		});

        //    .mouseover(function (e) {
			
		//	e.stopPropagation();
		//	e.preventDefault();
			
		//	var image = $(this).find('>img');
			
		//	var crop = getCropRect({
		//		width : 1173,
		//		height : 720
		//	},{
		//		width : $(this).width(),
		//		height : $(this).height()
		//	});
			
		//	var width = crop.width*1.1;
		//	var height = crop.height*1.1;
		//	var top = ($(this).width()-width)/2;
		//	var left = ($(this).height()-height)/2;
			
		//	image.stop().animate({
		//		width : width,
		//		height : height,
		//		top : top,
		//		left : left
		//	});
			
		//}).mouseout(function(e){
		//	e.stopPropagation();
		//	e.preventDefault();
			
		//	var image = $(this).find('>img');
		//	var crop = getCropRect({
		//		width : 1173,
		//		height : 720
		//	},{
		//		width : $(this).width(),
		//		height : $(this).height()
		//	});
			
		//	image.stop().animate({
		//		width : crop.width,
		//		height : crop.height,
		//		top : crop.top,
		//		left : crop.left
		//	});
		//});

		Resize.references.call(self);
		
		//if(!isIpad) { 
		//	$(document).scroll(function(){
		//		var scrollTop = $(document).scrollTop();
		//		var i = 0;
		//		$('#tRefCol1 .ref-index').each(function () {

		//			var dsoffset = ($(this).height() * 0.66) - window.innerHeight;
		//			var ds = scrollTop - $(this).offset().top;
			
		//			if(ds >= dsoffset && ds < $(this).height()){
		//				if(!$(this).hasClass('visible'))
		//					$(this).addClass('visible');
		//			}
		//			else if ($(this).hasClass('visible')) {
		//				$(this).removeClass('visible');
		//			}
		//		});
				
		//		$('#tRefCol2 .ref-index').each(function(){
		//			var dsoffset = - window.innerHeight;
		//			var ds = scrollTop - $(this).offset().top;
			
		//			if(ds >= dsoffset && ds < $(this).height()){
		//				if(!$(this).hasClass('visible'))
		//					$(this).addClass('visible');
		//			}else if($(this).hasClass('visible')){
		//				$(this).removeClass('visible');
		//			}
		//		});
		//	});
		//}else{
		//	$('.ref-index').addClass('visible');
		//}
		
		
	};
			
	Resize.delphineEtSaig = function(){
		var image = $('#delphine>img, #saig>img');
		var crop = getCropRect({
			width : 750,
			height : 551
		},{
			width : image.parent().width(),
			height : image.parent().height()
		});
		
		image.css({
			'top' : crop.top,
			'left' : crop.left,
			'width' : crop.width,
			'height' : crop.height,
			'position' : 'absolute'
		});
	};
	
	Resize.references = function(){
		var ratio = 0.61384615384615;
		var width = $('#tRefCol1').width();
		var height = Math.round(width * ratio);
		
		$('.ref-index, .ref-infos, .ref-resources').each(function(){
			var h = height;
			
			if($(this).hasClass('ref-resources'))
				h*=2;
			
			$(this).height(h);
			
			if($(this).hasClass('ref-index')){
				var image = $(this).find('>img');
				
				var crop = getCropRect({
					width : 1173,
					height : 720
				},{
					width : width,
					height : height
				});
				
				image.css({
					width : crop.width,
					height : crop.height,
					top : crop.top,
					left : crop.left
				});



			}else if($(this).hasClass('ref-resources')){
				$(this).find('.swipe').height(height*2).width(width);

			}
		});
	}
	
	var onLoad = function(){
		$(window).resize(function(){
			for(var index in Resize)
				Resize[index].call(self);
		}).trigger('resize');
		
		
		for(var index in Init)
			Init[index].call(self);
	};
	
	
	var getCropRect = function(src, dst){
		var sourceRatio = src.width / src.height;
		var targetRatio = dst.width / dst.height;
		var scale = 1;

		if ( sourceRatio < targetRatio ) {
		    scale = src.width / dst.width;
		} else {
		    scale = src.height / dst.height;
		}

		var rect = {
			top : 0,
			left : 0,
			width : (src.width / scale),
			height : (src.height / scale),
			src : src,
			dst : dst
		};

		rect.left = ((dst.width-rect.width) / 2);
		rect.top = ((dst.height-rect.height) / 2);

		return rect;
	}
    	
	$(function(){
		onLoad.call(self);
	});
};

var app = new Application();

$(function () {

    allButtons = $(".SliderButtons div");

    allButtons.click(function (event) {

        allButtons.removeClass("white")

        $(this).toggleClass("white");
        event.stopPropagation();


        if ($(this).hasClass('firstSliderButton'))

        {
            $(".slider_text").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at est nec orci euismod tristique a eu metus. Cras pharetra diam at velit commodo vehicula. Etiam hendrerit augue rhoncus pulvinar");
        }
        else if ($(this).hasClass('secondSliderButton'))

        {
            $(".slider_text").text("Etiam hendrerit augue rhoncus pulvinar Etiam hendrerit augue rhoncus pulvinar Etiam hendrerit augue rhoncus pulvinar Etiam hendrerit augue rhoncus pulvinar");
        }

        else if ($(this).hasClass('thirdSliderButton'))

        {
          
            $(".slider_text").text("Etiam hendrerit augue rhoncus pulvinar Etiam hendrerit augue rhoncus pulvinar Etiam hendrerit augue rhoncus pulvinar");
        
        }

    });

});

