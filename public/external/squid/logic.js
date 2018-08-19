//--------------------------  AutoLoad Params --------------------------------------------------
var eaw_params = {};
if (window.location.search.length > 1) {
	var search_params = window.location.search.substr(1).split("&");
	
	for (var i = 0; i < search_params.length; i++) {
		search_params[i] = search_params[i].split("=");
		eaw_params[search_params[i][0]] = search_params[i][1] ? decodeURIComponent(search_params[i][1]) : "";
	}
}
//--------------------------  CONST ------------------------------------------------------------
var GAME_ID = "";
var TERMS_URL = eaw_params["terms"] ? eaw_params["terms"] : "tnc.php";
//--------------------------  VARIABLES --------------------------------------------------------
var progressVal = 0;
var progressInterval;
var requestInterval;

var _firstServerRequest = true;

var _preloaderInterval;
var _preloaderHide = false;
var _preloader_counter;

this.showOneIndicator = true;
this.animateIndicators = false;

this.gameModel;
this.gameView;

var	_trackAudio;
var id;

var prizeValue;
var turned =0;
var moneyLeftText = "Million Squid still to be won: £";
var eawClient;
//--------------------------  GAME API ---------------------------------------------------------
onSuccessHandler = function (prizeValue, type) {
	
	window.prizeType = "win";
	if (prizeValue!=undefined){
		window._winText = prizeValue;
		console.log(" onSuccessHandler window._winText=" + window._winText);
	}
	
	
};

onErrorHandler = function (txt) {
	window.prizeType = 4;  //no prize
	
	
};

onNotLoggedOnHandler = function (txt) {
	
	window.prizeType = 4;  //no prize
	
};

onAlreadyPlayedHandler = function (txt) {
	
	window.prizeType = 4;  //no prize
	
};

onLoseHandler = function(txt) {
	window.prizeType =4;  //4 is for 'NO PRIZE'
	if (txt!=undefined){
		window._loseText = txt;
	}else{
		window._loseText =""
	}
	
}

this.playTheGame = function () {
	eawClient = new EawClient();
    eawClient.successHandler = onSuccessHandler;
    eawClient.errorHandler = onErrorHandler;
    eawClient.needToLoginCallback = onNotLoggedOnHandler;  
    eawClient.alreadyPlayedToday = onAlreadyPlayedHandler;
	eawClient.loseHandler = onLoseHandler;
    eawClient.playEawGame(); 
}
	  
onPush = function()
{
	gameView.onPush();	
}
//--------------------------  GAME LOGIC -------------------------------------------------------
function gamePreInit() {
	gameModel = new GameModel();
	gameView = new GameView();
	
	gameView.preLoadView();
	//preloaderAnimationShow();
}

function gameInit() {
	_preloaderHide = true;
	gameView.setStage(stage);	
	gameView.loadView();	
	//$("#loaderHolder").left(~"calc(window.innerWidth/2 - gameModel.maxW/2)"); 
	var l = (window.innerWidth/2 - gameModel.maxW/2) + 'px';
	$("#loaderHolder").css({'left':l});
	progressInterval = setInterval(progressTimer, 200);
	
}

function progressTimer() {
	progressVal++;
	gameView.setupProgress(progressVal);
	if (progressVal>10)
	{
		clearInterval(progressInterval);
	}
}

function onGameStart() {
	
	
	$("#playGame").css('display','none');
	
	
	playTheGame();
	console.log("gameView= " + gameView);
	console.log("gameView._startSprite= " + gameView._startSprite);
	gameView.hideLogo();
	
	$("#squids").css("display","block"); 
	
} 



function playNow() {
	window.parent.postMessage("#play", "*");
}
function closeIframe(){
	console.log("before history go back")
	//window.history.go(-1);
	window.top.location = "https://m-foxybingo.bingosys.net/#/Lobby";
}
//--------------------------  ON START -------------------------------------------------------
$(function () {
	$(document).on("click", "a.terms", function (e) {
        e.preventDefault();  
		console.log("after preventDefault " + eaw_params["terms"] );
        popup(eaw_params["terms"] );
    });
	gamePreInit();
	init();
});


//-------------------------- FLASH CANVAS ---------------------------------------------------
var flashCanvas, stage, exportRoot;

function init() {
	flashCanvas = document.getElementById("flashCanvas");
	
	stage = new createjs.Stage(flashCanvas);
	gameInit();
	
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	
	console.log("handleComplete");
	gameView.changeBackground("bg2v.jpg", "bg2h.jpg");
	//$("#imgCanvas").hide();
	$("#flashCanvas").show();
	if(gameModel.maxH ==350){  //for iphone 4 half the fps to make animation move
		lib.properties.fps = 12;
	}
	if (this.id==1){
		exportRoot = new lib.pinky();
		
	}else if (this.id==2){
		console.log("handleComplete id= " + this.id)
		exportRoot = new lib.inky();
	}if (this.id==3){
		exportRoot = new lib.dinky();
	}
	//stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	
	fnStartAnimation();
}


function eventFromFlash(event) {
	
	if ((event == "startTurn")&&(turned==0)) {	
		turned =1;
		
			if(window.prizeType!="win"){
				window.prizeType=4;
				console.log("no win window.prizeType= " + window.prizeType);
			}else{
				window.prizeType = 1 + Math.round(Math.floor(Math.random()*3));
				console.log("randomized window.prizeType= " + window.prizeType);
			}
			
			
			if (window.prizeType==1){
				
				console.log("eventFromFlash before goto 314"); 
				exportRoot.gotoAndPlay("dive1"); 
			}else if (window.prizeType==2){
				
				exportRoot.gotoAndPlay("dive2");
			}else if (window.prizeType==3){
				
				exportRoot.gotoAndPlay("dive3");
			}else if (window.prizeType==4){ //no_prize
				
				exportRoot.gotoAndPlay("no_prize");
			}
		
		
 
       
	}else if ((event == "startPrize")&&( turned ==1)) {
		console.log("before change bg3");
		gameView.changeBackground("bg3v.jpg", "bg3h.jpg");
		//$("#animation_container").css("display","none");
		console.log("prize " + $("#bg").css("backgroundImage"));
		if (window.prizeType!=4){
			//onSuccessHandler();
			gameView.showWinScreen();
			
		}else{
			//onLoseHandler();
			gameView.showLoseScreen();
		}
	}
}

//--------------------------------------------------------------------------------------------
function requestAnimationShow()
{
	_requestInterval = setInterval(function(){requestTimer()}, 20);
	_request_counter = 0;	
	$("#requestAnimation").show();
}



//guan added for million quid
onSelected = function(id)
{
	gameView.onSelected(id);	
}


//copied from gameview.js of hookadock
	this.onSelected = function(id)
	{
		console.log("onSelected called " + id);
		this.id = id;
		doWinByScenarioId(id);
		//gameInit();
	}

	function doWinByScenarioId(id)
	{
		//playTheGame();
		console.log("doWinByScenarioId " + id);
		//_currentAnimation = _animationScenarios[id-1];

		//_requestInterval = setInterval(function(){requestTimer()}, 50);
		//_request_counter = 0;
		
		//$("#requestAnimation").show();
		$("#squids").css("display","none");
		//$("#sq_anim" + id).css("display", "block");
		
		_requestInterval = setInterval(function(){requestTimer(id)}, 500);
		_request_counter = 0;
	}
	
	function requestTimer(id) {
		_request_counter++;
		
			clearInterval(_requestInterval);
						
			handleComplete(id);
			console.log("requestTimer and handleComplete called");
	}
	
	
	
function preloaderAnimationShow()
{
	_preloaderInterval = setInterval(function(){preloaderTimer()}, 20);
	_preloader_counter = 0;	
	$("#preloaderAnimation").show();
	$("#preloaderAnimation").offset({ left:((gameModel.maxW - 110)/2) });
	$("#preloaderAnimation").offset({ top:((gameModel.maxH - 110)/2) });	
}

function preloaderTimer() 
{
	_preloader_counter++;
	 rotateElement("#preloaderAnimation", _preloader_counter*2)

	if (_preloaderHide)
	{
		clearInterval(_preloaderInterval);
		$("#preloaderAnimation").hide();
	}
}

function rotateElement(elementID, degrees) 
{
	$(elementID).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
				 '-moz-transform' : 'rotate('+ degrees +'deg)',
				 '-ms-transform' : 'rotate('+ degrees +'deg)',
				 'transform' : 'rotate('+ degrees +'deg)'});
};

//--------------------------  TERMS POPUP ----------------------------------------------------
var tcWin;
function popup(loc) { // EI callback 
	if (navigator.appName.indexOf("Microsoft") != -1)
	{
		h = (screen.height * 0.9) - 54;
		w = screen.width * 0.9;
		tcWin = window.open(loc, "playWin", "height=" + h + ", width=" + w + ", top=1, left=1, resizable");
	}
	else
		tcWin = window.open(loc, "playWin", "height=" + (screen.height - 2) + ", width=" + (screen.width - 2) + ",screenY=1, screenX=1, resizable");
	tcWin.focus();
}
