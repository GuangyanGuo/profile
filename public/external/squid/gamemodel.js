var GameModel = function()
{
	_maxW = window.innerWidth;
	_maxH = window.innerHeight;
	
	if (_maxW > 1150){
		_maxW = 1150;
		_maxH = 860;
	}
	this.HORIZONTAL = "horizontal";
	this.VERTICAL = "vertical";
	
	this.orient = this.HORIZONTAL;
	console.log("_maxW= " + _maxW + " _maxH= " + _maxH);

	this.maxW = _maxW; 
	this.maxH = _maxH; 
	
	this.isIphone4 =false;  
	if ( isIphone() && iPhoneVersion() === "4"){
				/* this.maxW = 320; */
				this.maxH = 350;   /*this decides the height of the game*/  
				$('body').addClass('iphone-4');
				this.isIphone4 = true;
				this.orient = this.VERTICAL;
	} else if (window.innerHeight === window.outerHeight) {
		/* Android 6.0.1 fix? */
		this.maxH -= 100;
		console.log("maxH -100");
	}
	_actualH = 550;
	_originalH = 550;
	_actualW = 750;	
	_originalW = 750;
	
	if ((_maxW / _originalW) > (_maxH / _originalH))
	{
		this._scaleFactor = _maxH / _originalH;
		console.log("gamemodel scaleFactor 4= " + this._scaleFactor);
	} else {
		this._scaleFactor = _maxW / _originalW;
		console.log("gamemodel scaleFactor 5= " + this._scaleFactor);
	}
	
	if (this.maxW > this.maxH && (! this.isIphone4)) //ipad
	{
		console.log("gamemodel scaleFactor 1= " + this._scaleFactor);
		this._scaleFactor *= 0.55;  //guan changed from 55
		this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2 - 50;
		console.log("gamemodel scaleFactor 2= " + this._scaleFactor);
	} 
	else if (! this.isIphone4)//iphone
	{
		this.orient = this.VERTICAL;
		this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2;
		console.log("gamemodel scaleFactor 3= " + this._scaleFactor);
	}else{
		this._yOffset = (_maxH - (_actualH * this._scaleFactor))/2;
	}
	
	console.log("xx in gamemodel _scaleFactor = " + this._scaleFactor);
		
	
	this._xOffset = (_maxW - (_actualW * this._scaleFactor))/2;
	console.log("_yOffset = " + this._yOffset);	
	console.log("_xOffset = " + this._xOffset);	
	
	this.imagesToLoadArray = [
		"bg1h.jpg",
		"bg1v.jpg",
		"bg2h.jpg",
		"bg2v.jpg",
		"bg3h.jpg",
		"logo.png",
		"bg3v.jpg"
		
	];
	
	function iPhoneVersion() {
		  var iHeight = window.screen.height;
		  var iWidth = window.screen.width;
		  if (iWidth === 320 && iHeight === 480) {
			return "4";
		  }
		  else if (iWidth === 375 && iHeight === 667) {
			return "6";
		  }
		  else if (iWidth === 414 && iHeight === 736) {
			return "6+";
		  }
		  else if (iWidth === 320 && iHeight === 568) {
			return "5";
		  }
		  else if (iHeight <= 480) {
			return "2-3";
		  }
		  return 'none';
	}

	function isIphone() {
		return !!navigator.userAgent.match(/iPhone/i);
	}
}