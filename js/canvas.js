////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);	
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, gameStatusContainer, worldContainer, resultContainer, confirmContainer;
var guideline, bg, logo, buttonStart, buttonRestart, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.money = {};
$.sprites = {};
$.background = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	levelContainer = new createjs.Container();
	numberContainer = new createjs.Container();
	moneyContainer = new createjs.Container();
	piggyContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	candyContainer = new createjs.Container();
	healthContainer = new createjs.Container();
	handContainer = new createjs.Container();
	handHandsContainer = new createjs.Container();
	handButtonContainer = new createjs.Container();
	cacheContainer = new createjs.Container();
	gameRoundContainer = new createjs.Container();
	gameStatusContainer = new createjs.Container();
	gameInstructContainer = new createjs.Container();
	worldContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	
	logo = new createjs.Bitmap(loader.getResult('logo'));
	centerReg(logo);
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	buttonStart.x = canvasW/2;
	buttonStart.y = canvasH/100 * 55;

	buttonChoose = new createjs.Bitmap(loader.getResult('buttonChoose'));
	centerReg(buttonChoose);
	buttonChoose.y = 205;

	numberTxt = new createjs.Text();
	numberTxt.font = "150px kimberleyblack";
	numberTxt.color = "#cc16b1";
	numberTxt.textAlign = "center";
	numberTxt.textBaseline='alphabetic';
	numberTxt.text = '000';
	numberTxt.y = 50;

	buttonNumberL = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonNumberL);

	buttonNumberR = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonNumberR);

	buttonNumberL.x = -200;
	buttonNumberR.x = 200;
	buttonNumberL.scaleX = -1;

	numberContainer.addChild(numberTxt, buttonNumberL, buttonNumberR, buttonChoose);

	buttonLevel = new createjs.Bitmap(loader.getResult('buttonLevel'));
	centerReg(buttonLevel);

	levelTxt = new createjs.Text();
	levelTxt.font = "30px kimberleyblack";
	levelTxt.color = "#fff";
	levelTxt.textAlign = "center";
	levelTxt.textBaseline='alphabetic';
	levelTxt.text = 'Round 1';
	levelTxt.y = 10;

	buttonArrowL = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonArrowL);

	buttonArrowR = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonArrowR);

	buttonArrowL.x = -150;
	buttonArrowR.x = 150;
	buttonArrowL.scaleX = -1;

	levelContainer.addChild(buttonLevel, levelTxt, buttonArrowL, buttonArrowR);

	//piggy
	itemPiggy = new createjs.Bitmap(loader.getResult('itemPiggy'));
	centerReg(itemPiggy);
	itemPiggy.regY = itemPiggy.image.naturalHeight;
	piggyContainer.addChild(moneyContainer, itemPiggy);

	for(var n=1; n<=4; n++){
		var keyName = ('itemMoney'+n);
		$.money[keyName] = new createjs.Bitmap(loader.getResult(keyName));
		centerReg($.money[keyName]);
	}
	
	//game
	itemTimer = new createjs.Bitmap(loader.getResult('itemTimer'));
	centerReg(itemTimer);

	timerTxt = new createjs.Text();
	timerTxt.font = "30px kimberleyblack";
	timerTxt.color = "#333";
	timerTxt.textAlign = "center";
	timerTxt.textBaseline='alphabetic';
	timerTxt.text = '00:00';
	timerTxt.y = 0+5;

	var _frameW = 63;
	var _frameH = 63;
	
	var _frame = {"regX":_frameW/2, "regY":_frameH/2, "width": _frameW, "height": _frameH, "count": 2};
	var _animations = {
						red:{frames: [0], speed:.3},
						green:{frames: [1], speed:.3}
					};
						
	var lightData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemLight').src],
		"frames": _frame,
		"animations": _animations
	});
	
	itemLight = new createjs.Sprite(lightData, "red");
	itemLight.framerate = 20;
	itemLight.y = 70;

	gameStatusContainer.addChild(itemTimer, timerTxt, itemLight);

	roundTxt = new createjs.Text();
	roundTxt.font = "25px kimberleyblack";
	roundTxt.color = "#fff";
	roundTxt.textAlign = "center";
	roundTxt.textBaseline='alphabetic';
	roundTxt.text = 'Round 1';

	roundShadowTxt = new createjs.Text();
	roundShadowTxt.font = "25px kimberleyblack";
	roundShadowTxt.color = "#fff";
	roundShadowTxt.textAlign = "center";
	roundShadowTxt.textBaseline='alphabetic';
	roundShadowTxt.text = 'Round 1';
	roundShadowTxt.y = roundTxt.y + 3;

	roundNameTxt = new createjs.Text();
	roundNameTxt.font = "40px kimberleyblack";
	roundNameTxt.color = "#fff";
	roundNameTxt.textAlign = "center";
	roundNameTxt.textBaseline='alphabetic';
	roundNameTxt.text = 'Name';
	roundNameTxt.y = 45;

	roundNameShadowTxt = new createjs.Text();
	roundNameShadowTxt.font = "40px kimberleyblack";
	roundNameShadowTxt.color = "#fff";
	roundNameShadowTxt.textAlign = "center";
	roundNameShadowTxt.textBaseline='alphabetic';
	roundNameShadowTxt.text = 'Name';
	roundNameShadowTxt.y = roundNameTxt.y + 5;

	gameRoundContainer.addChild(roundShadowTxt, roundTxt, roundNameShadowTxt, roundNameTxt);

	instructionTxt = new createjs.Text();
	instructionTxt.font = "30px kimberleyblack";
	instructionTxt.color = "#fff";
	instructionTxt.textAlign = "center";
	instructionTxt.textBaseline='alphabetic';
	instructionTxt.text = 'Name';

	gameInstructContainer.addChild(instructionTxt);
	
	for(var n = 0; n<=gameData.totalRound; n++) {
		for(var key in gameSettings['game'+n].background) {
			var keyName = ('game'+n)+key;
			$.background[keyName] = new createjs.Bitmap(loader.getResult(keyName));
			$.background[keyName].y -= $.background[keyName].image.naturalHeight;
			gameContainer.addChild($.background[keyName]);
			
			gameSettings['game'+n].background[key].id = keyName;
			gameSettings['game'+n].background[key].w = $.background[keyName].image.naturalWidth;
			gameSettings['game'+n].background[key].h = $.background[keyName].image.naturalHeight;
		}

		for(var key in gameSettings['game'+n].items) {
			var keyName = ('game'+n)+key;

			if(key == 'doll'){
				var _frameW = 130;
				var _frameH = 230;
				
				var _frame = {"regX":0, "regY":0, "width": _frameW, "height": _frameH, "count": 4};
				var _animations = {
									idle:{frames: [0,1], speed:.3},
									close:{frames: [2], speed:.3},
									peek:{frames: [3], speed:.3}
								};
									
				var dollData = new createjs.SpriteSheet({
					"images": [loader.getResult(keyName).src],
					"frames": _frame,
					"animations": _animations
				});
				
				$.sprites[keyName] = new createjs.Sprite(dollData, "idle");
				$.sprites[keyName].framerate = 20;

				$.sprites[keyName].w = _frameW;
				$.sprites[keyName].h = _frameH;

				gameData.doll = $.sprites[keyName];
				gameData.doll.x = -_frameW;
				gameContainer.addChild(gameData.doll);
			}else{
				$.sprites[keyName] = new createjs.Bitmap(loader.getResult(keyName));

				$.sprites[keyName].w = $.sprites[keyName].image.naturalWidth;
				$.sprites[keyName].h = $.sprites[keyName].image.naturalHeight;
			}
		}
	}

	for(var n = 0; n<players_arr.length; n++) {
		var _frameW = 65;
		var _frameH = 100;
		
		var _frame = {"regX":0, "regY":0, "width": _frameW, "height": _frameH, "count": 15};
		var _animations = {
							idle:{frames: [0,1], speed:.3},
							run:{frames: [2,3], speed:.3},
							dead:{frames: [4,5,6], speed:.3},
							pull:{frames: [7,8], speed:.3},
							front:{frames: [9,10], speed:.3},
							frontrun:{frames: [11,12], speed:.3},
							frontpull:{frames: [13,14], speed:.3},
						};
							
		var playerData = new createjs.SpriteSheet({
			"images": [loader.getResult('player'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.sprites['player'+n] = new createjs.Sprite(playerData, "idle");
		$.sprites['player'+n].framerate = 20;

		$.sprites['player'+n].w = _frameW;
		$.sprites['player'+n].h = _frameH;
	}

	for(var n = 0; n<guards_arr.length; n++) {
		var keyName = ('guard'+n);
		$.sprites[keyName] = new createjs.Bitmap(loader.getResult(keyName));

		$.sprites[keyName].w = $.sprites[keyName].image.naturalWidth;
		$.sprites[keyName].h = $.sprites[keyName].image.naturalHeight;
	}


	//candy
	itemCandyCover = new createjs.Bitmap(loader.getResult('itemCandyCover'));
	centerReg(itemCandyCover);
	itemCandyBase = new createjs.Bitmap(loader.getResult('itemCandy'));
	centerReg(itemCandyBase);
	itemPixel = new createjs.Bitmap(loader.getResult('itemPixel'));
	centerReg(itemPixel);
	itemNeedle = new createjs.Bitmap(loader.getResult('itemNeedle'));
	itemNeedle.regX = 0;
	itemNeedle.regY = 207;

	candyDrawing = new createjs.Shape();
	candyContainer.addChild(itemPixel, itemCandyCover, itemCandyBase, candyDrawing);

	for(var n = 0; n<gameSettings['game2'].candy.length; n++) {
		$.sprites['candy'+n] = new createjs.Bitmap(loader.getResult('candy'+n));
		centerReg($.sprites['candy'+n]);

		$.sprites['candyFinal'+n] = new createjs.Bitmap(loader.getResult('candyFinal'+n));
		centerReg($.sprites['candyFinal'+n]);

		candyContainer.addChild($.sprites['candy'+n], $.sprites['candyFinal'+n]);
	}
	candyContainer.addChild(itemNeedle);

	//marble
	for(var n = 0; n<2; n++) {
		$.sprites['handWrap'+n] = new createjs.Container();

		var _frameW = 450;
		var _frameH = 380;
		
		var _frame = {"regX":_frameW/2, "regY":_frameH/2, "width": _frameW, "height": _frameH, "count": 3};
		var _animations = {
							idle:{frames: [1], speed:1},
						};
							
		var handData = new createjs.SpriteSheet({
			"images": [loader.getResult('itemHand').src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.sprites['hand'+n] = new createjs.Container();
		$.sprites['hand'+n].sprite = new createjs.Sprite(handData, "idle");
		$.sprites['hand'+n].sprite.framerate = 20;
		$.sprites['hand'+n].sprite.x -= 180;

		$.sprites['handPart'+n] = new createjs.Bitmap(loader.getResult('itemHand2'));
		centerReg($.sprites['handPart'+n]);
		$.sprites['handPart'+n].x -= 600;

		$.sprites['hand'+n].addChild($.sprites['hand'+n].sprite, $.sprites['handPart'+n]);

		//stats
		$.sprites['handWinStatTxt'+n] = new createjs.Text();
		$.sprites['handWinStatTxt'+n].font = "50px kimberleyblack";
		$.sprites['handWinStatTxt'+n].color = gameSettings.game4.status.statusColor;
		$.sprites['handWinStatTxt'+n].textAlign = "center";
		$.sprites['handWinStatTxt'+n].textBaseline='alphabetic';
		$.sprites['handWinStatTxt'+n].text = 'EVEN';
		$.sprites['handWinStatTxt'+n].x -= 240;

		$.sprites['handStat'+n] = new createjs.Container();
		$.sprites['handMarbleBall'+n] = new createjs.Bitmap(loader.getResult('itemMarbleBall'));
		centerReg($.sprites['handMarbleBall'+n]);

		$.sprites['handMarbleBallTxt'+n] = new createjs.Text();
		$.sprites['handMarbleBallTxt'+n].font = "50px kimberleyblack";
		$.sprites['handMarbleBallTxt'+n].color = gameSettings.game4.status.totalColor;
		$.sprites['handMarbleBallTxt'+n].textAlign = "left";
		$.sprites['handMarbleBallTxt'+n].textBaseline='alphabetic';
		$.sprites['handMarbleBallTxt'+n].text = 'x5';

		$.sprites['handMarbleBallPlayerTxt'+n] = new createjs.Text();
		$.sprites['handMarbleBallPlayerTxt'+n].font = "30px kimberleyblack";
		$.sprites['handMarbleBallPlayerTxt'+n].color = gameSettings.game4.status.playerColor;
		$.sprites['handMarbleBallPlayerTxt'+n].textAlign = "left";
		$.sprites['handMarbleBallPlayerTxt'+n].textBaseline='alphabetic';
		$.sprites['handMarbleBallPlayerTxt'+n].text = gameTextDisplay.user;

		$.sprites['handMarbleBallTxt'+n].x = 50;
		$.sprites['handMarbleBallTxt'+n].y = 0;
		$.sprites['handMarbleBallPlayerTxt'+n].x = 50;
		$.sprites['handMarbleBallPlayerTxt'+n].y = 30;

		if(n == 1){
			$.sprites['handMarbleBallPlayerTxt'+n].text = gameTextDisplay.opponent;
			
			$.sprites['handMarbleBallTxt'+n].textAlign = "right";
			$.sprites['handMarbleBallPlayerTxt'+n].textAlign = "right";
			$.sprites['handMarbleBallTxt'+n].x = -50;
			$.sprites['handMarbleBallPlayerTxt'+n].x = -50;
			$.sprites['handWinStatTxt'+n].x = 240;
		}

		$.sprites['handStat'+n].addChild($.sprites['handMarbleBall'+n], $.sprites['handMarbleBallTxt'+n], $.sprites['handMarbleBallPlayerTxt'+n]);
		$.sprites['handWrap'+n].addChild($.sprites['hand'+n], $.sprites['handWinStatTxt'+n]);
		handHandsContainer.addChild($.sprites['handWrap'+n], $.sprites['handStat'+n]);
	}

	buttonOdd = new createjs.Bitmap(loader.getResult('buttonOdd'));
	centerReg(buttonOdd);
	buttonEven = new createjs.Bitmap(loader.getResult('buttonEven'));
	centerReg(buttonEven);
	buttonOdd.y -= 35;
	buttonEven.y += 35;
	handButtonContainer.addChild(buttonOdd, buttonEven);

	handContainer.addChild(handHandsContainer, handButtonContainer);

	for(var n = 0; n<3; n++) {
		$.sprites['marbleBall'+n] = new createjs.Bitmap(loader.getResult('itemMarbleBall'));
		centerReg($.sprites['marbleBall'+n]);
		$.sprites['marbleBall'+n].scaleX = $.sprites['marbleBall'+n].scaleY = .7;
		handHandsContainer.addChild($.sprites['marbleBall'+n]);
	}

	$.sprites['hand'+1].scaleX = -1;

	$.sprites['handStat'+0].x = -250;
	$.sprites['handStat'+1].x = 250;
	$.sprites['handStat'+0].y = $.sprites['handStat'+1].y = 220;

	itemCenter = new createjs.Bitmap(loader.getResult('itemCenter'));

	for(var n = 0; n<2; n++) {
		$.sprites['health'+n] = new createjs.Container();
		$.sprites['healthBar'+n] = new createjs.Container();
		$.sprites['healthType'+n] = new createjs.Container();

		//stats
		$.sprites['healthTxt'+n] = new createjs.Text();
		$.sprites['healthTxt'+n].font = "30px kimberleyblack";
		$.sprites['healthTxt'+n].color = gameSettings.game6.bar.playerColor;
		$.sprites['healthTxt'+n].textAlign = "left";
		$.sprites['healthTxt'+n].textBaseline='alphabetic';
		$.sprites['healthTxt'+n].text = gameTextDisplay.user;
		$.sprites['healthTxt'+n].y += defaultGameData.survivalBarH + 32;

		$.sprites['healthBg'+n] = new createjs.Shape();
		$.sprites['healthBg'+n].graphics.beginFill(gameSettings.game6.bar.background).drawRect(-defaultGameData.survivalBarBorder, -defaultGameData.survivalBarBorder, defaultGameData.survivalBarW + (defaultGameData.survivalBarBorder*2), defaultGameData.survivalBarH+ (defaultGameData.survivalBarBorder*2));

		$.sprites['healthEmpty'+n] = new createjs.Shape();
		$.sprites['healthEmpty'+n].graphics.beginFill(gameSettings.game6.bar.empty).drawRect(0, 0, defaultGameData.survivalBarW, defaultGameData.survivalBarH);

		$.sprites['healthGreen'+n] = new createjs.Shape();
		$.sprites['healthGreen'+n].graphics.beginFill(gameSettings.game6.bar.health).drawRect(0, 0, defaultGameData.survivalBarW, defaultGameData.survivalBarH);

		$.sprites['healthBlood'+n] = new createjs.Shape();
		$.sprites['healthBlood'+n].graphics.beginFill(gameSettings.game6.bar.blood).drawRect(0, 0, defaultGameData.survivalBarW, defaultGameData.survivalBarH);

		$.sprites['healthTypeTxt'+n] = new createjs.Text();
		$.sprites['healthTypeTxt'+n].font = "30px kimberleyblack";
		$.sprites['healthTypeTxt'+n].color = gameSettings.game6.bar.turnColor;
		$.sprites['healthTypeTxt'+n].textAlign = "left";
		$.sprites['healthTypeTxt'+n].textBaseline='alphabetic';
		$.sprites['healthTypeTxt'+n].text = gameTextDisplay.user;

		$.sprites['healthTypeShadowTxt'+n] = new createjs.Text();
		$.sprites['healthTypeShadowTxt'+n].font = "30px kimberleyblack";
		$.sprites['healthTypeShadowTxt'+n].color = gameSettings.game6.bar.turnShadowColor;
		$.sprites['healthTypeShadowTxt'+n].textAlign = "left";
		$.sprites['healthTypeShadowTxt'+n].textBaseline='alphabetic';
		$.sprites['healthTypeShadowTxt'+n].text = gameTextDisplay.user;
		$.sprites['healthTypeShadowTxt'+n].y += 5;

		$.sprites['healthType'+n].addChild($.sprites['healthTypeShadowTxt'+n], $.sprites['healthTypeTxt'+n]);
		$.sprites['healthBar'+n].addChild($.sprites['healthBg'+n], $.sprites['healthEmpty'+n], $.sprites['healthBlood'+n], $.sprites['healthGreen'+n]);
		$.sprites['health'+n].addChild($.sprites['healthTxt'+n], $.sprites['healthBar'+n]);
		$.sprites['health'+n].x -= 270;

		$.sprites['healthType'+n].x = -270;
		$.sprites['healthType'+n].y = -18;

		if(n == 1){
			$.sprites['healthTxt'+n].text = gameTextDisplay.opponent;
			$.sprites['healthTxt'+n].textAlign = "right";
			$.sprites['healthTxt'+n].x = 0;
			$.sprites['health'+n].x += 240 + (defaultGameData.survivalBarW * 2);
			$.sprites['healthBar'+n].scaleX = -1;

			$.sprites['healthTypeTxt'+n].textAlign = "right";
			$.sprites['healthTypeShadowTxt'+n].textAlign = "right";
			$.sprites['healthType'+n].x = 270;
		}
		
		$.sprites['healthType'+n].oriX = $.sprites['healthType'+n].x;
		healthContainer.addChild($.sprites['health'+n], $.sprites['healthType'+n]);
	}

	itemControl = new createjs.Bitmap(loader.getResult('itemControl'));
	centerReg(itemControl);
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));
	itemResultP = new createjs.Bitmap(loader.getResult('itemResultP'));

	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "40px kimberleyblack";
	resultTitleTxt.color = "#D6D6D6";
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = '';
	
	resultScoreTxt = new createjs.Text();
	resultScoreTxt.font = "75px kimberleyblack";
	resultScoreTxt.color = "#fff";
	resultScoreTxt.textAlign = "center";
	resultScoreTxt.textBaseline='alphabetic';
	resultScoreTxt.text = '';

	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "25px kimberleyblack";
	resultShareTxt.color = "#fff";
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = shareText;
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	
	buttonRestart = new createjs.Bitmap(loader.getResult('buttonRestart'));
	centerReg(buttonRestart);
	createHitarea(buttonRestart);
	
	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonMusicOn = new createjs.Bitmap(loader.getResult('buttonMusicOn'));
	centerReg(buttonMusicOn);
	buttonMusicOff = new createjs.Bitmap(loader.getResult('buttonMusicOff'));
	centerReg(buttonMusicOff);
	buttonMusicOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonMusicOn);
	createHitarea(buttonMusicOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemExit'));
	itemExitP = new createjs.Bitmap(loader.getResult('itemExitP'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	
	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "40px kimberleyblack";
	confirmMessageTxt.color = "#fff";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = gameTextDisplay.exitMessage;
	
	confirmContainer.addChild(itemExit, itemExitP, buttonConfirm, buttonCancel, confirmMessageTxt);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();
	}
	
	pressMove = new createjs.Shape();
	cacheContainer.visible = false;

	mainContainer.addChild(logo, buttonStart, levelContainer, numberContainer);
	gameContainer.addChild(cacheContainer, pressMove, candyContainer, handContainer, healthContainer, gameStatusContainer, itemControl, gameInstructContainer, gameRoundContainer);
	resultContainer.addChild(itemResult, itemResultP, resultTitleTxt, resultScoreTxt, buttonRestart);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	piggyContainer.scaleX = piggyContainer.scaleY = .8;
	canvasContainer.addChild(worldContainer, piggyContainer, mainContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc(viewport.isLandscape);
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;

		defaultData.width = defaultData.viewport.landscape.w;
		defaultData.height = defaultData.viewport.landscape.h;
		defaultData.scale = defaultData.viewport.landscape.scale;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;

		defaultData.width = defaultData.viewport.portrait.w;
		defaultData.height = defaultData.viewport.portrait.h;
		defaultData.scale = defaultData.viewport.portrait.scale;
	}
	
	gameCanvas.width = stageW;
	gameCanvas.height = stageH;
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
	changeGameViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		if(guide){
			guideline.graphics.clear().setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
		}

		pressMove.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, canvasW, canvasH));
		
		if(viewport.isLandscape){

			logo.x = canvasW/2;
			logo.y = canvasH/100 * 51;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 77;
			levelContainer.x = canvasW/2;
			levelContainer.y = canvasH/100 * 77;
			numberContainer.x = canvasW/2;
			numberContainer.y = canvasH/2;
			
			piggyContainer.x = canvasW/2;
			piggyContainer.y = canvasH/100 * 38;
			
			//game
			candyContainer.x = canvasW/2;
			candyContainer.y = canvasH/2;
			handContainer.x = canvasW/2;
			handContainer.y = canvasH/2;
			
			handHandsContainer.scaleX = handHandsContainer.scaleY = 1;
			handButtonContainer.x = 260;

			$.sprites['handStat'+0].y = $.sprites['handStat'+1].y = 240;

			itemControl.x = canvasW/2;
			itemControl.y = canvasH/100 * defaultGameData.survivalSplitPercent;

			//result
			itemResult.visible = true;
			itemResultP.visible = false;

			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 33;
			resultScoreTxt.x = canvasW/2;
			resultScoreTxt.y = canvasH/100 * 42;
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 48;
			buttonFacebook.x = canvasW/2 - 65;
			buttonTwitter.x = canvasW/2;
			buttonWhatsapp.x = canvasW/2 + 65;
			buttonFacebook.y = buttonTwitter.y = buttonWhatsapp.y = canvasH/100*54;
			buttonRestart.x = canvasW/2;
			buttonRestart.y = canvasH/100 * 65;
			
			//exit
			itemExit.visible = true;
			itemExitP.visible = false;
			
			buttonConfirm.x = canvasW/2 - 130;
			buttonConfirm.y = canvasH/100 * 63;
			buttonCancel.x = canvasW/2 + 130;
			buttonCancel.y = canvasH/100 * 63;

			confirmMessageTxt.x = canvasW/2;
			confirmMessageTxt.y = canvasH/100 *43;

		}else{

			logo.x = canvasW/2;
			logo.y = canvasH/100 * 38;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 77;
			levelContainer.x = canvasW/2;
			levelContainer.y = canvasH/100 * 77;
			numberContainer.x = canvasW/2;
			numberContainer.y = canvasH/100 * 40;

			piggyContainer.x = canvasW/2;
			piggyContainer.y = canvasH/100 * 30;
			
			//game
			candyContainer.x = canvasW/2;
			candyContainer.y = canvasH/2;
			handContainer.x = canvasW/2;
			handContainer.y = canvasH/100 * 68;

			handHandsContainer.scaleX = handHandsContainer.scaleY = .7;
			handButtonContainer.x = 170;

			$.sprites['handStat'+0].y = $.sprites['handStat'+1].y = 280;

			itemControl.x = canvasW/2;
			itemControl.y = canvasH/100 * defaultGameData.survivalSplitPercent;

			//result
			itemResult.visible = false;
			itemResultP.visible = true;

			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 38;
			resultScoreTxt.x = canvasW/2;
			resultScoreTxt.y = canvasH/100 * 45;
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 50;
			buttonFacebook.x = canvasW/2 - 67;
			buttonTwitter.x = canvasW/2;
			buttonWhatsapp.x = canvasW/2 + 67;
			buttonFacebook.y = buttonTwitter.y = buttonWhatsapp.y = canvasH/100*54;
			buttonRestart.x = canvasW/2;
			buttonRestart.y = canvasH/100 * 62;
			
			//exit
			itemExit.visible = false;
			itemExitP.visible = true;
			
			buttonConfirm.x = canvasW/2 - 130;
			buttonConfirm.y = canvasH/100 * 63;
			buttonCancel.x = canvasW/2 + 130;
			buttonCancel.y = canvasH/100 * 63;

			confirmMessageTxt.x = canvasW/2;
			confirmMessageTxt.y = canvasH/100 *43;
		}

		resizeGameWorld();
	}
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		buttonSettings.x = (canvasW - offset.x) - 60;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 65;
		var nextCount = 0;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;

			if (typeof buttonMusicOn != "undefined") {
				buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				buttonMusicOn.x = buttonMusicOff.x;
				buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
				nextCount = 2;
			}else{
				nextCount = 1;
			}
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*(nextCount+2));
		}

		gameStatusContainer.x = canvasW/2;
		gameStatusContainer.y = offset.y + 55;

		gameRoundContainer.x = canvasW/2;
		gameRoundContainer.y = offset.y + 200;

		gameInstructContainer.x = canvasW/2;
		gameInstructContainer.y = offset.y + 200;

		healthContainer.x = canvasW/2;
		healthContainer.y = offset.y + 130;
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}