$(function(){

    /*App Variables*/
    var currentpage = 0,
		pagewidth = $('.page').width(),
		wonderFrame = $('div.frame a'),
		homeLink = $('#homelink'),
		wanderWall = $('#wanderwall'),
		infoFrame = $('#infoframe'),
		pageSlider = $('.pageslider'),
		position = 0,
		marginnew = 0;
	
	/*Default Background Position*/
	wanderWall.css({backgroundPosition: '50% 0px'});

	wonderFrame.hover(function(){
	            /*Strip the link identifier to form just the ID*/
	            var id = this.id.replace("link", "");
				var currentLink = $(this);
				/*ID based hiding of the other frames*/
				hideTheRest(id);
				position = -296*id;
				/*Define the offset at which the page for this frame is present*/
				marginnew =  pagewidth * id * -1;
				
				/*Show the Home link if not on the Default page*/
				(id > 0)?  homeLink.show() : homeLink.hide();

				/*Animate the Page Slider to the new offset*/
				$('.pageslider').stop().animate({marginLeft: marginnew}, 800);
			
				/*Animate the header background*/
				wanderWall.stop().animate({backgroundPosition: '(50% ' + position +'px )'}, 500, function(){
				  var distance = 0;
				  var topdis   = -190;
				  var text     = currentLink.attr('alt');
				  
				  /*Define the offset for the header-wallpaper text to appear next to the frame*/
				  switch(id){
				    case "1":
					     distance = 500;
						 break;
				    case "2":
					     distance = 730;
						 break;
				    case "3":
					     distance = 200;
						 break;
					case "4":
					     distance = 400;
						 topdis = -198;
						 break;
				  }
				  
				  infoFrame
					.html(text)
				  	.css('margin-left', distance + 'px')
				  	.css('margin-top', topdis + 'px')
				  	.fadeIn();
				});
				
				

	           
				
	}, function(){
	   			infoFrame.hide();
				wanderWall.stop().animate({backgroundPosition: '(50% 0px)'}, 500 );	
				showTheRest();
	
	});
	


	function hideTheRest(id){
		var temp = null;
	
		 for (var i=1; i<5; i++){
			if (i!=id){
				temp = $('#frame' + i);
				temp.find('a').css('display', 'block'); 
				temp.css('filter', 'alpha(opacity=90)');
				temp.stop().fadeTo("fast",0);
				temp.find('a').css('display', 'none');
				}
			}
			
			infoFrame.css('visibility','visible');				
		}
		
	/*Back to Home*/
	homeLink.hover(function(){
				marginnew =  0;
				pagewidth = $('.page').width();
				pageSlider.stop().animate({marginLeft: marginnew}, 800);
				$(this).hide();
	  
	}, function(){
	
	});
	
		
	function showTheRest(){
		var temp = null;
		for (var i=1; i<5; i++){
				temp = $('#frame' + i);
				temp.stop().fadeTo("fast",0.9);
				temp.css('filter', 'alpha(opacity=90)');
			    temp.find('a').css('display', 'inline');
			    temp.find('a').css('display', 'block');    
			}
			
			
			infoFrame.css('visibility','hidden');
						
		}
});