var GameView = function() 
{
	
	var _stage;
	var Q;
	
	
	var _currentAnimation;
	
	
	var _termPositioned = false;
	var _startSprite;
	var maxWidth;
	var maxHeight;
	var _homeSprite;

	
	
	this.setStage = function(stage) {
		_flashStage = stage;
	}	
	
	
	
	this.loadView = function()
	{
		$("#loaderHolder").show();
	
		viewInit();	
		Q = Quintus().include("Sprites, Scenes, Anim,  Touch, UI")
		Q.setup('imgCanvas');

		Q.scene("scene1",function(stage) 
		{
			_stage = stage;
		});
		
		Q.load( gameModel.imagesToLoadArray, function() 
		{
			Q.stageScene("scene1");
			StatePlayNow();
		});	
	}	
//---------------------------------------------------------------------
	function StatePlayNow()
	{
			console.log("gameModel.orient= " + gameModel.orient);
		if (gameModel.isIphone4){
			_homeSprite = createImage("bg1v.jpg", 750/2, 500/2);  
			
			
			_homeSprite.set({"x":maxWidth/2});
			
			
			
			_startSprite = createImage("logo.png", 0, 170); //for iphone4
			
			
			
			_startSprite.p.scale = 1.1*gameModel._scaleFactor;  //changed from 1.5 to 0.6
						
			_startSprite.set({"x":maxWidth/2});
		}else if (gameModel.orient == gameModel.VERTICAL)	{
			
			_homeSprite = createImage("bg1v.jpg", 750/2, 500/2);  
			
			
			_homeSprite.set({"x":maxWidth/2});
			
			
			
				_startSprite = createImage("logo.png", 0, 150);
			
			
			_startSprite.p.scale = 1.1*gameModel._scaleFactor;  //changed from 1.5 to 1.1
			console.log("scale= " + _homeSprite.p.scale);			
			_startSprite.set({"x":maxWidth/2});
			console.log("1 gameview _startSprite= " + _startSprite);
		}else{
			var _homeSprite = createImage("bg1h.jpg", 750/2, 650/2);  //650/2
			
			//_homeSprite.p.scale = 1.01; 
			 _startSprite = createImage("logo.png", 750/2, 200);
			_startSprite.p.scale =1.0;
		}
	}
	
	 this.hideLogo = function()
	{
		_startSprite.hide();
			
	}
	this.changeBackground= function(imgv, imgh){
		if (gameModel.isIphone4){
			_homeSprite = createImage(imgv, 750/2, 500/2);  //guan changed from 500/2, to 100/2
			
			
			_homeSprite.set({"x":maxWidth/2});
		}else if (gameModel.orient == gameModel.VERTICAL)	{
			
			_homeSprite = createImage(imgv, 750/2, 500/2);  //guan changed from 500/2, to 100/2
			
			
			_homeSprite.set({"x":maxWidth/2});
			console.log("in changeBackground _homeSprite.p.scale= " + _homeSprite.p.scale + " " + imgv);
			
			
		}else{
			var _homeSprite = createImage(imgh, 750/2, 650/2);  //650/2
			
			
		}
	}
	

	function viewInit()
	{
		this.maxHeight= maxHeight = gameModel.maxH;
		this.maxWidth = maxWidth = gameModel.maxW;
		
		
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").show();			
			applyScaleFactorToElement("#p"+i+"active");
			applyScaleFactorToElement("#p"+i+"pasive");
			$("#p"+i+"active").hide();
			$("#p"+i+"pasive").show();			
		}		
		
		$("#loaderHolder").width( maxWidth ); 
		
		$("#loaderHolder").height( maxHeight );	
		
		$("#gameContainer").width( maxWidth );
		$("#gameContainer").height( maxHeight );
		
		
		
		
		autoScaleElement("#squid1Button");
		
		autoScaleElement("#squid2Button","forcedResize");
		
		autoScaleElement("#squid3Button","forcedResize");
		
		
		
		if (gameModel.orient == gameModel.VERTICAL)	{
			console.log("vertical");
			scaleSquids();	
			moveUpSquids();
			
		}
		centerElement("selectSquid");
		centerElement("spinButton");
			
		centerElement("homeButton");	
		buttonYpos();	
		$("#homeButton").css('display','none');	
		
		
		recurentFitTNC();
		
		$("#termsText").css('bottom', '0px');	
		
		var c = $("#imgCanvas");
		var ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;
		
		console.log("imgCanvas ctx.canvas.width= " + ctx.canvas.width + " height= " + ctx.canvas.height);
		
		c = $("#flashCanvas");
		c.show();
		ctx = c[0].getContext('2d');
		ctx.canvas.height = maxHeight;
		ctx.canvas.width = maxWidth;
		//console.log("canvas ctx.canvas.width= " + ctx.canvas.width);
		if (gameModel.isIphone4){
			_flashStage.scaleX = gameModel._scaleFactor*1.5;	 
			_flashStage.scaleY = gameModel._scaleFactor*1.5;
			_flashStage.x = (maxWidth - 600*gameModel._scaleFactor*1.5)/2;
			_flashStage.y = (maxHeight - 400*gameModel._scaleFactor*1.5)/2 -50;
		} else if (gameModel.orient != gameModel.VERTICAL )	{
			_flashStage.scaleX = gameModel._scaleFactor*2;		
			_flashStage.scaleY = gameModel._scaleFactor*2;
			_flashStage.x = (maxWidth - 600*gameModel._scaleFactor*2)/2 + 0;   //by add and minus can change the position of animation, not background
			console.log("gameview _flashStage.scaleX horizontal = " + _flashStage.scaleX + " scaleY= " + _flashStage.scaleY + " maxHeight= " + maxHeight);
			_flashStage.y = (maxHeight - 400*gameModel._scaleFactor*2)/2;
			console.log("_flashStage.x horizontal= " + _flashStage.x + "  y= " + _flashStage.y );
		}else{
			_flashStage.scaleX = gameModel._scaleFactor*1.5;	 
			_flashStage.scaleY = gameModel._scaleFactor*1.5;
			_flashStage.x = (maxWidth - 600*gameModel._scaleFactor*1.5)/2;
			_flashStage.y = (maxHeight - 400*gameModel._scaleFactor*1.5)/2 -50;
			
			console.log("_flashStage.x vertical= " + _flashStage.x + "  y= " + _flashStage.y + " scaleX= " + _flashStage.scaleX + " scaleY= " + _flashStage.scaleY);
		}
		
		c.hide();
		
	}
	
	
	function showWinScreen() {
		console.log(" showWinScreen window._winText=" + window._winText);
		this.showText(window._winText,"win");
		
		
		
	}
	this.showWinScreen = showWinScreen;
	
	function showLoseScreen() {
		
		this.showText(window._loseText, "lose");
	}
	this.showLoseScreen = showLoseScreen;

	
	
	function recurentFitTNC()
	{
		var elementW = $("#termsText").width();
		var elementH = $("#termsText").height();
		if (elementW>0)
		{
			var offset = $("#termsText").offset();
			if (gameModel.isIphone4){
				$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
				top: (gameModel.maxH*0.65 - elementH*gameModel._scaleFactor )});         /////////////////////////////////////set terms Y pos for iphone 4
			} else if (gameModel.orient == gameModel.VERTICAL)	{
				
					$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
					top: (gameModel.maxH*0.82 - elementH*gameModel._scaleFactor )}); 
				
			}else{
				
				$("#termsText").offset({ left: ((gameModel.maxW - elementW)/2),
								top: (gameModel.maxH*0.93 - elementH*gameModel._scaleFactor)});  ////////////////////////////////guan changed from offset.top * 0.75
				//console.log("gameModel.maxW= " + gameModel.maxW + " elementW= " + elementW);
			}
			_termPositioned = true;
			$("#termsText").css('display','none');
		}
		else
		{
			setTimeout( recurentFitTNC, 1000);
		}
	}

	function autoScaleElement(elementName, widthResize)
	{
		
			var elwidth = $(elementName).width();
			var elheight = $(elementName).height();
			console.log("************ autoScaleElement " + elementName + " frome " + $(elementName).width() + " to " + elwidth * gameModel._scaleFactor);
			$(elementName).width( elwidth * gameModel._scaleFactor );
			$(elementName).height( elheight * gameModel._scaleFactor );	
		
	}
	
	function applyScaleFactorToElement(elementName, widthResize)
	{
		var offset;
		if (( widthResize != "noResize" ) && ( gameModel._scaleFactor < 1 ))
		{
			
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
			
		}
		if ( widthResize == "resizeWH" )
		{
			
			$(elementName).width( $(elementName).width() * gameModel._scaleFactor );
			$(elementName).height( $(elementName).height() * gameModel._scaleFactor );
			
		}		
		
		offset = $(elementName).offset();
		
		
			$(elementName).offset({ 
				top:  (offset.top * gameModel._scaleFactor)+gameModel._yOffset, 
				left: (offset.left * gameModel._scaleFactor)+gameModel._xOffset  });
		
		var fontSize = parseInt($( elementName ).css( "font-size" ));
		var newFontSizeValue = ((fontSize * gameModel._scaleFactor)-1) + "px";
		$(elementName).css( "font-size", newFontSizeValue );
		
	}
	  
	
	
	this.createImage = function(asset, x, y)
	{
		var sprite = new Q.Sprite({ asset: asset, 
									x:(x*gameModel._scaleFactor)+gameModel._xOffset, 
									
									y:(y*gameModel._scaleFactor)+gameModel._yOffset, 
									scale:gameModel._scaleFactor });
							
		_stage.insert(sprite);	
		return sprite;
	}	
	createImage = this.createImage; 
	  
	this.clearAll = function()
	{
	   Q.clearStages();
	   Q.stageScene("scene1");
	}
	  
 	this.setupProgress = function(progress) {
		for (i=1; i<=progress; i++) {
			$("#p"+i+"active").show();
			$("#p"+i+"pasive").hide();
		}
		if (progress==10) {
			$("#loaderHolder").hide();
		}
	}
	
	this.preLoadView = function()
	{
		$("#loaderHolder").show();	
		for (i=1; i<=10; i++) {
			$("#p"+i+"active").hide();
			$("#p"+i+"pasive").hide();
		}		
		$("#loaderHolder").width( gameModel.maxW );
		$("#loaderHolder").height( gameModel.maxH );	
		console.log("#loaderHolder", $("#loaderHolder"));
		//$("#loaderHolder").show();
		//$("#loaderHolder").left(~"calc(window.innerWidth/2 - gameModel.maxW/2)"); 
		//$("#loaderHolder").left = "200px";
	}


this.showText = function(txt, winOrLose)
	{
		$("#flashCanvas").hide();
		
		$("#termsText").css('display','block');
		
		
		console.log("showText txt= " + txt);
		//fake a win
		prize=["Iphone", "IPad", "Laptop", "£200", "Tour of London"];
		txt =prize[Math.round(Math.random()*4)];
		//end of fake a win
		console.log("showText " + txt)
			
		$("#homeButton").css('display','block');
		
		if (winOrLose=="win"){
			//text= "Helicopter for two in London in April 2017 plus an iPad 2 and a brand new car plus a new house and a holiday in Florida."
			$("#winText").html("<p>You're squids in, you've won a <br /><br />" + txt + "</p>");
		}else{
			if (txt!=undefined){
				$("#winText").html('<p>Drat! Still, plenty of fish in the sea. <br>Check out other offers swimming around!<br>' + txt + '</p>');
			}else{
				$("#winText").html('<p>Drat! Still, plenty of fish in the sea. <br>Check out other offers swimming around!</p>');
			}
		}
		$("#winText").css({"display":"block","color":"#ffffff"});
		
		centerElement("winText");
	}	
	
	this.addLineBreak =function(str){
		if (gameModel.orient == gameModel.VERTICAL)	{
			var newStr = str.replace(/(.{30}\s)/g, "$1\n");
		}else{
			var newStr = str.replace(/(.{50}\s)/g, "$1\n");
		}
		
		return newStr;
	}
	
	this.addLineBreakAfter =function(str){
		
			var newStr = str.replace(/(!)/g, "!\n");
			 newStr = newStr.replace(/(won)/g, "won\n");
		
		
		return newStr;
	}
}

this.centerElement = function(el){
	var eleWid = parseInt($("#" + el).css('width'));
	var l=(this.maxWidth - eleWid)/2;
	console.log("this= " + this + " centerElement l= " + l + " w= " + this.maxWidth);
	$("#" + el).css('left', l);
	
}

this.scaleSquids = function(){
	var z = this.maxWidth/414;  //#squids was positioned for iphone 6+ which is 414 px wide
	var w = gameModel._scaleFactor*(414 - this.maxWidth)/2
	$("#squids").css('transform','scaleX(' +z + ')');
	$("#squids").css('left', w);
	var w2=$("#squids").css('left');
	console.log("scaleSquids " + z + " w= " + w + " left= " + w2);
}

this.moveUpSquids = function(){
	console.log("moveUpSquids");
	var z, x;
	if (this.maxHeight <400){
		z =-240; 
	}else if (this.maxHeight <600){  //iphone5
		z =-120; 
	}else if (this.maxHeight <700){//6
		z =-30; 
	}else{ //6+
		z=210;
	}
	
	console.log("this.maxWidth= " + this.maxWidth);
	if (this.maxWidth <375){  //iphone4&5
		x =-20; 
	}else if (this.maxWidth <400){  //iphone6
		x =-20; 
	}else {
		x=0;
	}
	var oldTop = parseInt($("#squid1Button").css('top'));
	var oldLeft = parseInt($("#squid1Button").css('left'));
	$("#squid1Button").css({'top':z + oldTop,'left':oldLeft});
	oldTop = parseInt($("#squid2Button").css('top'));
	oldLeft = parseInt($("#squid2Button").css('left'));
	$("#squid2Button").css({'top':z + oldTop,'left':oldLeft});
	oldTop = parseInt($("#squid3Button").css('top'));
	oldLeft = parseInt($("#squid3Button").css('left'));
	$("#squid3Button").css({'top':z + oldTop,'left':oldLeft});
	oldTop = parseInt($("#selectSquid").css('top'));
	$("#selectSquid").css({'top':z + oldTop + 30}); 
	oldTop = parseInt($("#pinkyText").css('top'));
	oldLeft = parseInt($("#pinkyText").css('left'));
console.log("x= " + x + " oldLeft= " + oldLeft)	;
	$("#pinkyText").css({'top':z + oldTop,'left':oldLeft+x});
	oldTop = parseInt($("#inkyText").css('top'));
	oldLeft = parseInt($("#inkyText").css('left'));
	$("#inkyText").css({'top':z + oldTop,'left':oldLeft+x/2});
	oldTop = parseInt($("#dinkyText").css('top'));
	oldLeft = parseInt($("#dinkyText").css('left'));
	$("#dinkyText").css({'top':z + oldTop,'left':oldLeft+x});
}

this.buttonYpos = function(){
	if (this.maxHeight <400){
		var buttonTop = 175;
		var winTextTop = 40;
		$("#winText").css('font-size',14);
	}else if (this.maxHeight <600){
		buttonTop = 305;
		winTextTop = 140;
	}else if (this.maxHeight <700){
		buttonTop = 405;
		winTextTop = 140; 
	
	}
	 if (this.maxWidth>1000){
		buttonTop = 415;
		winTextTop = 90; 
	
	}
		$("#spinButton").css({'top':buttonTop +50});
		$("#homeButton").css('top',buttonTop);
		$("#winText").css('top',winTextTop);
	
}