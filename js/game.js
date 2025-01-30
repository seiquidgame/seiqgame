////////////////////////////////////////////////////////////
// GAME v3.5
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

var gameSettings = {
	game0:{
		background:{
			base0: { src:'assets/bg_menu.png'},
			base1: { src:'assets/bg_empty.png'},
			base2: { src:'assets/bg_empty.png'},
			base3: { src:'assets/bg_empty.png'}
		},
		path:{
			width:2000,
			fogDensity:5,
			fog:'#F2F2F2',
			light:{base:'#F2F2F2', path:'#F2F2F2'},
			dark:{base:'#fff', path:'#fff'},
			end:'#B20000'
		},
		instruction:{color:'#000',x:0, y:0},
		players:50,
		levelSelect:true,
		chooseNumbers:true
	},
	game1:{
		name:'RED LIGHT, GREEN LIGHT',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game1.png'},
			base1: { src:'assets/bg_game1_hill.png'},
			base2: { src:'assets/bg_cloud.png'},
			base3: { src:'assets/bg_game1_grass.png'}
		},
		items:{
			tree: { src:'assets/item_game1_tree.png'},
			doll: { src:'assets/game1_doll.png'}
		},
		path:{
			width:2000,
			fogDensity:5,
			fog:'#C1841C',
			light:{base:'#B5791A', path:'#F4DFA8'},
			dark:{base:'#C1841C', path:'#F7E6BB'},
			end:'#B20000'
		},
		instruction:{color:'#000', x:0, y:0},
		countTime:3,
		peekTime:3,
		decreaseTime:.2,
		players:50,
		length:85,
		dead:[5,15],
		timer:30000
	},
	game2:{
		name:'DALGONA CANDY',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game1.png'},
			base1: { src:'assets/bg_game2_hill.png'},
			base2:   { src:'assets/bg_cloud.png'},
			base3: { src:'assets/bg_game2_playground.png'}
		},
		path:{
			width:2000,
			fogDensity:5,
			fog:'#C1841C',
			light:{base:'#F4DFA8', path:'#F4DFA8'},
			dark:{base:'#F7E6BB', path:'#F7E6BB'}
		},
		instruction:{color:'#000', x:0, y:33},
		players:20,
		candy:[
				{src:'assets/candy_01.png', finalSrc:'assets/candy_final_01.png', checkpoint:[{x:95,y:340},{x:397,y:340},{x:246,y:85}]},
				{src:'assets/candy_02.png', finalSrc:'assets/candy_final_02.png', checkpoint:[{x:244,y:90},{x:407,y:209},{x:345,y:396},{x:145,y:396},{x:85,y:208}]},
				{src:'assets/candy_03.png', finalSrc:'assets/candy_final_03.png', checkpoint:[{x:243,y:86},{x:125,y:348},{x:369,y:334}]},
				{src:'assets/candy_04.png', finalSrc:'assets/candy_final_04.png', checkpoint:[{x:243,y:64},{x:428,y:228},{x:208,y:416},{x:60,y:224}]}
		],
		drawColor:'#A66B35',
		drawStroke:20,
		timer:30000
	},
	game3:{
		name:'TUG OF WAR',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game3.png'},
			base1: { src:'assets/bg_empty.png'},
			base2:   { src:'assets/bg_empty.png'},
			base3: { src:'assets/bg_empty.png'}
		},
		items:{
			construct: { src:'assets/item_construct.png'}
		},
		path:{
			width:1000,
			fogDensity:5,
			fog:'#333',
			light:{base:'', path:'#646473', rope:'#D96D00', side:'#FF9921'},
			dark:{base:'', path:'#5F5F6D', rope:'#BB5E00', side:'#303031'}
		},
		instruction:{color:'#fff', x:0, y:5},
		players:20,
		oppSpeed:[10, 20],
		userSpeed:[20, 35],
		timer:30000
	},
	game4:{
		name:'MARBLE GAME',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game4.png'},
			base1: { src:'assets/bg_game4_hill.png'},
			base2:   { src:'assets/bg_empty.png'},
			base3: { src:'assets/bg_game4_house.png'}
		},
		path:{
			width:2000,
			fogDensity:5,
			fog:'#C1841C',
			light:{base:'#E49F5E', path:'#E49F5E'},
			dark:{base:'#E29752', path:'#E29752'}
		},
		instruction:{color:'#000', x:0, y:0},
		status:{totalColor:'#000', playerColor:'#333', statusColor:'#333'},
		players:20,
		totalBall:3,
		timer:60000
	},
	game5:{
		name:'GLASS BRIDGE',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game5.png'},
			base1: { src:'assets/bg_game5_light1.png'},
			base2:   { src:'assets/bg_game5_light2.png'},
			base3: { src:'assets/bg_empty.png'}
		},
		items:{
			booth: { src:'assets/item_booth.png'}
		},
		path:{
			width:1000,
			fogDensity:5,
			fog:'#001A24',
			light:{base:'', path:'#00202D', glass:'#ccc', holder:'#2F1700'},
			dark:{base:'', path:'#001D28', glass:'', holder:'#2F1700'}
		},
		instruction:{color:'#fff', x:0, y:5},
		glassAlpha:.3,
		players:10,
		length:15,
		timer:60000
	},
	game6:{
		name:'SURVIVAL GAME',
		textColor:'#CC17B2',
		textShadowColor:'#6D2767',
		background:{
			base0: { src:'assets/bg_game6.png'},
			base1: { src:'assets/bg_game6_hill.png'},
			base2: { src:'assets/bg_empty.png'},
			base3: { src:'assets/bg_game6_tree.png'}
		},
		path:{
			width:2000,
			fogDensity:5,
			fog:'#8C886B',
			light:{base:'#9B977B', path:'#9B977B', line:'#fff'},
			dark:{base:'#8C886B', path:'#8C886B', line:'#F3F3F3'},
			end:'#fff'
		},
		bar:{background:'#fff', empty:'#ccc', health:'#238C00', blood:'#D90000', playerColor:'#333', turnColor:'#fff', turnShadowColor:'#333'},
		instruction:{color:'#000', x:0, y:5},
		length:30,
		timer:15000
	}
}

//player assets
var players_arr = [
					{src:'assets/player.png'}
				];

//guard assets
var guards_arr = [
	{src:'assets/guard.png'}
];

//game text desiplay
var gameTextDisplay = {
	round:'Round [NUMBER]',
	roundFinal:'Final Round',
	game1:'Hold to run',
	game2:'Hold to cut',
	game3:'Tap repeatly to pull',
	game4:'Win all marble balls',
	game5:'Tap left / right to move',
	game6:'Hold controller to move',
	user:'User',
	opponent:'Opponent',
	odd:'ODD',
	even:'EVEN',
	kill:'ATTACK',
	run:'SURVIVE',
	roundFail:'GAME OVER',
	roundComplete:'COMPLETE',
	exitMessage:'Are you sure\nyou want to quit?',
	resultFailTitle:'YOU ARE DEAD',
	resultFailDesc:'GAME OVER',
	resultWinTitle:'YOU WON',
	resultWinDesc:'45.6 BILLION'
}

//result custom score
var gameCustomScore = {
	status:false,
	text:'[SCORE] BILLION'
};

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareText = 'SHARE YOUR SCORE'; //social share message
var shareWinTitle = 'I won 45.6 billion on Survival Game.';//social share score title
var shareWinMessage = 'I won 45.6 billion on Survival Game! Try it now!'; //social share score message
var shareTitle = 'High score on Survival Game is ROUND [SCORE].';//social share score title
var shareMessage = 'ROUND [SCORE] is my new high score on Survival Game! Try it now!'; //social share score message
				
/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
var dt;
var defaultData = {width:0,
				height:0,
				scale:0.00145,
				viewport:{landscape:{w:1280, h:840, scale:0.00125}, portrait:{w:768, h:840, scale:0.00205}},
				extraHeight:500,
				centrifugal:.3,
				bgSpeed:0,
				skySpeed:0.001,
				hillSpeed:0.002,
				treeSpeed:0.003,
				bgOffset:0,
				skyOffset:0,
				hillOffset:0,
				treeOffset:0,
				segmentLength:100,
				trackLength:null,
				fieldOfView:100,
				cameraHeight:800,
				cameraDepth:null,
				drawDistance:100,
				playerX:0,
				playerZ:0,
				position:0,
				speed:0,
				maxSpeed:0,
				accel:0,
				breaking:0,
				decel:0,
				offRoadDecel:0,
				offRoadLimit:0,
				turnSpeed:.005,
				lastY:0
				};

var defaultGameData = {
						playerSpeed:[500,1500],
						sandTime:[5,10],
						ropeWidth:1,
						ropeY:0,
						tugStart:16,
						tugGap:2,
						tugHole:4,
						bridgeStart:16,
						bridgeSteps:4,
						bridgeGlassWidth:30,
						bridgeGlassHoldWidth:7,
						bridgeGlassHoldSpace:3,
						survivalStart:16,
						survivalSpeed:1200,
						survivalSplitPercent:75,
						survivalBarW:150,
						survivalBarH:25,
						survivalBarBorder:3,
}
				
var worldData = {};
var segments = [];
var players = [];
var background = null;
var sprites = null;
var resolution = null;
var currentLapTime = 0;

var playerData = {win:false, bestTime:0, score:0};
var gameData = {paused:true, money:[], roundNum:0, ended:false, totalRound:6};
var timeData = {enable:false, startDate:null, nowDate:null, timer:0, oldTimer:0};
var roundData = {players:{}, lightData:{forward:false, stop:false, moveTween:{}, timeTween:{}}, tugData:{moveTween:{}}, candyData:{}, bridgeData:{}, marbleData:{}, survivalData:{}};
var collisionMethod = ndgmr.checkPixelCollision;

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});

	if($.browser.mobile || isTablet){
		
	}else{
		
	}
	
	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundClick');
		if(gameSettings.game0.chooseNumbers){
			displayChooseNumber();
		}else{
			goPage('game');
		}
	});

	buttonChoose.cursor = "pointer";
	buttonChoose.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('game');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleConfirm(true);
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleConfirm(false);
		stopGame(true);
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleConfirm(false);
	});
	
	buttonRestart.cursor = "pointer";
	buttonRestart.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('main');
	});

	pressMove.addEventListener("click", function(evt) {
		toggleGameControl('click', true);
	});

	pressMove.addEventListener("mousedown", function(evt) {
		toggleGameControl('mousedown');
	});

	pressMove.addEventListener("pressup", function(evt) {
		toggleGameControl('pressup');
	});

	itemCandyBase.addEventListener("mousedown", function(event) {
		if(!gameData.interact){
			return;
		}

		toggleGameInstruction(false);

		roundData.candyData.draw = true;
		roundData.candyData.lastPoint = {x:0, y:0};
		roundData.candyData.lastPoint.x = itemNeedle.x = event.stageX - (canvasW/2);
		roundData.candyData.lastPoint.y = itemNeedle.y = event.stageY - (canvasH/2);
		candyDrawing.graphics.ss(gameSettings.game2.drawStroke, "round").s(gameSettings.game2.drawColor);

		initCandyDrawingPos(event.stageX - (canvasW/2), event.stageY - (canvasH/2));
	});

	itemCandyBase.addEventListener("pressmove", function(event){
		if(roundData.candyData.draw){
			candyDrawing.graphics.mt(roundData.candyData.lastPoint.x, roundData.candyData.lastPoint.y);        
			candyDrawing.graphics.lt(event.stageX - (canvasW/2), event.stageY - (canvasH/2));

			checkCandyDrawingPos(event.stageX - (canvasW/2), event.stageY - (canvasH/2));
			itemPixel.x = event.stageX - (canvasW/2);
			itemPixel.y = event.stageY - (canvasH/2);
			
			var mouseDistance = getDistance(roundData.candyData.lastPoint.x, roundData.candyData.lastPoint.y, event.stageX - (canvasW/2), event.stageY - (canvasH/2));
			var intersection1 = ndgmr.checkPixelCollision(itemPixel, $.sprites['candy'+roundData.candyData.candyNum]);
			if(intersection1){
				if(mouseDistance >= 1.5){
					var randomFrame = Math.floor(Math.random()*3);
					playSound('soundCrack'+(randomFrame+1));
				}
			}else{
				playSound('soundCrackError');
				clearCandyDrawing();
			}
			
			roundData.candyData.lastPoint.x = itemNeedle.x = event.stageX - (canvasW/2);
			roundData.candyData.lastPoint.y = itemNeedle.y = event.stageY - (canvasH/2);
		}
	});

	itemCandyBase.addEventListener("pressup", function(event){
		clearCandyDrawing();
	});

	buttonOdd.cursor = "pointer";
	buttonOdd.addEventListener("click", function(evt) {
		if(!gameData.interact){
			return;
		}
		toggleHandStatus(false);
	});

	buttonEven.cursor = "pointer";
	buttonEven.addEventListener("click", function(evt) {
		if(!gameData.interact){
			return;
		}
		toggleHandStatus(true);
	});

	if(gameSettings.game0.levelSelect){
		itemPiggy.addEventListener("click", function(evt) {
			buttonStart.visible = false;
			levelContainer.visible = true;
			logo.visible = true;
			numberContainer.visible = false;
		});
	}

	buttonLevel.cursor = "pointer";
	buttonLevel.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('game');
	});

	buttonArrowL.cursor = "pointer";
	buttonArrowL.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleRound(false);
	});

	buttonArrowR.cursor = "pointer";
	buttonArrowR.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleRound(true);
	});

	buttonNumberL.cursor = "pointer";
	buttonNumberL.addEventListener("mousedown", function(evt) {
		playSound('soundClick');
		toggleChooseNumber(false);
	});
	buttonNumberL.addEventListener("pressup", function(evt) {
		toggleChooseNumber();
	});

	buttonNumberR.cursor = "pointer";
	buttonNumberR.addEventListener("mousedown", function(evt) {
		playSound('soundClick');
		toggleChooseNumber(true);
	});
	buttonNumberR.addEventListener("pressup", function(evt) {
		toggleChooseNumber();
	});

	loopPiggyMoney();
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

function toggleRound(con){
	if(con){
		gameData.roundSelect++;
		gameData.roundSelect = gameData.roundSelect >= gameData.totalRound ? gameData.totalRound : gameData.roundSelect;
	}else{
		gameData.roundSelect--;
		gameData.roundSelect = gameData.roundSelect < 1 ? 1 : gameData.roundSelect;
	}

	if(gameData.roundSelect == 6){
		levelTxt.text = gameTextDisplay.roundFinal.replace('[NUMBER]', gameData.roundSelect);
	}else{
		levelTxt.text = gameTextDisplay.round.replace('[NUMBER]', gameData.roundSelect);
	}
}

/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	levelContainer.visible = false;
	numberContainer.visible = false;
	mainContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	piggyContainer.visible = false;
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;

			roundData.playerNumber = randomPlayerNumber();
			logo.visible = true;
			buttonStart.visible = true;
			piggyContainer.visible = true;
			gameData.roundNum = 0;
			gameData.roundSelect = 0;
			toggleRound(true);
			prepareRound();
			resetWorld();

			playMusicLoop('musicGame');
		break;
		
		case 'game':
			targetContainer = gameContainer;
			gameData.roundNum = gameData.roundSelect;

			stopMusicLoop('musicGame');
			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame(true);
			
			if(playerData.win){
				playSound('soundWin');
				resultTitleTxt.text = gameTextDisplay.resultWinTitle;
				resultScoreTxt.text = gameTextDisplay.resultWinDesc;
			}else{
				resultTitleTxt.text = gameTextDisplay.resultFailTitle;
				resultScoreTxt.text = gameTextDisplay.resultFailDesc;
			}

			if(gameCustomScore.status){
				resultScoreTxt.text = gameCustomScore.text.replace('[SCORE]', playerData.score);
				saveGame(playerData.score);
			}else{
				saveGame(gameData.roundNum);
			}
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	
	if(con){
		TweenMax.pauseAll(true, true);
		gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true);
		if(curPage == 'game'){
			gameData.paused = false;
		}
	}
}

function loopPiggyMoney(){
	gameData.money = [];

	for(var n=0; n<10; n++){
		var moneyIndex = Math.floor(Math.random()*4);

		var newMoney = $.money['itemMoney'+(moneyIndex+1)].clone();
		newMoney.x = randomInt(-25,10);
		newMoney.y = newMoney.oriY = -400;
		newMoney.maxY = -100;
		newMoney.speed = randomInt(5,15);
		newMoney.rotateSpeed = randomInt(-15,15);

		moneyContainer.addChild(newMoney);
		gameData.money.push(newMoney);
	}
}

function displayChooseNumber(){
	logo.visible = false;
	buttonStart.visible = false;
	numberContainer.visible = true;

	chooseNumberData.number = randomInt(1, 999);
	numberTxt.text = pad(chooseNumberData.number, 3);
}

var chooseNumberData = {interval:null, number:0, timer:0, max:100, mix:1, bet:0};
function toggleChooseNumber(con){
	if(con){
		roundData.bet = 1;
	}else if(!con){
		roundData.bet = -(1);
	}else{
		roundData.bet = 0;	
	}
	
	if(con != undefined){
		chooseNumberData.timer = chooseNumberData.max;
		loopChooseNumber();
	}else{
		clearInterval(chooseNumberData.interval);	
		chooseNumberData.interval = null;
	}
}

function loopChooseNumber(){
	clearInterval(chooseNumberData.interval);
	chooseNumberData.interval = setInterval(loopChooseNumber, chooseNumberData.timer);
	chooseNumberData.timer-=10;
	chooseNumberData.timer=chooseNumberData.timer<chooseNumberData.min?chooseNumberData.max:chooseNumberData.timer;
	
	updateChooseNumber();
}

function updateChooseNumber(){
	chooseNumberData.number += roundData.bet;
	chooseNumberData.number = chooseNumberData.number <= 1 ? 1 : chooseNumberData.number;
	chooseNumberData.number = chooseNumberData.number >= 999 ? 999 : chooseNumberData.number;
	
	roundData.playerNumber = pad(chooseNumberData.number, 3);
	numberTxt.text = roundData.playerNumber;
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */

function startGame(){
	playerData.win = false;

	gameData.paused = false;
	gameData.ended = false;
	gameData.interact = false;
	
	prepareRound();
	displayGameRound(true);
	startPanCamera();
}

 /*!
 * 
 * PREPARE GAME ROUND - This is the function that runs to build game round
 * 
 */
function prepareRound(){
	defaultData.position = 0;
	defaultData.playerX = 0;
	defaultData.speed = 0;

	roundData.totalPlayers = gameSettings['game'+gameData.roundNum].players;

	roundData.playerSet = false;
	roundData.lightData.countTime = gameSettings.game1.countTime;
	roundData.lightData.peekTime = gameSettings.game1.peekTime;
	roundData.lightData.moveCon = false;

	roundData.candyData = {x:0, y:0, checkpoint:[], lastPoint:{x:0, y:0}, draw:false};

	roundData.tugData.speed = 0;
	roundData.tugData.oppSpeed = gameSettings.game3.oppSpeed;
	roundData.tugData.userSpeed = gameSettings.game3.userSpeed;

	roundData.bridgeData.playerIndex = 0;
	roundData.bridgeData.seqArrIndex = 0;
	roundData.bridgeData.seqArr = [];
	roundData.bridgeData.animateCount = 0;
	roundData.bridgeData.lastPos = {x:0, y:0};

	roundData.marbleData.user = gameSettings.game4.totalBall;
	roundData.marbleData.opponent = gameSettings.game4.totalBall;
	roundData.marbleData.result = true;
	roundData.marbleData.oppResult = true;
	roundData.marbleData.turn = 0;
	roundData.marbleData.ballX = 250;

	roundData.survivalData.start = false;
	roundData.survivalData.move = false;
	roundData.survivalData.turn = false;
	roundData.survivalData.userHealth = 100;
	roundData.survivalData.oppHealth = 100;
	roundData.survivalData.oppData = {z:0, offset:0, time:0, boost:0, speedZ:0, speedX:0, speedTime:0};
	roundData.survivalData.healthTime = 0;

	itemLight.visible = false;
	candyContainer.visible = false;
	handContainer.visible = false;
	healthContainer.visible = false;
	itemControl.visible = false;
	worldContainer.y = 0;

	gameInstructContainer.alpha = 0;
	toggleGameInstruction(false);

	if(gameData.roundNum == 0){
		roundData.followCamera = true;
		roundData.players.startZ = 7;
		roundData.players.endZ = 20;
		roundData.players.playerZ = 7;
	}else if(gameData.roundNum == 1){
		roundData.followCamera = true;
		roundData.players.startZ = 11;
		roundData.players.endZ = 25;
		roundData.players.playerZ = 10;

		itemLight.visible = true;
		itemLight.gotoAndStop('red');
		gameData.doll.gotoAndPlay('idle');
	}else if(gameData.roundNum == 2){
		roundData.followCamera = true;
		roundData.players.startZ = 11;
		roundData.players.endZ = 25;
		roundData.players.playerZ = 10;

		chooseRandomCandy();
	}else if(gameData.roundNum == 3){
		worldContainer.y = -100;
		
		roundData.followCamera = false;
		roundData.players.startZ = 8;
		roundData.players.endZ = 10;
		roundData.players.playerZ = 7;

		roundData.turnArr = [];
		var halfPeople = Math.floor(gameSettings.game3.players/2);
		var tugSegment = defaultGameData.tugStart - defaultGameData.tugGap;

		var oppositeCon = false;
		for(var n=0; n<gameSettings.game3.players; n++){
			if(!oppositeCon){
				tugSegment--;
			}else{
				tugSegment++;
			}

			roundData.turnArr.push(tugSegment);
			if(n >= halfPeople-1 && !oppositeCon){
				oppositeCon = true;
				tugSegment = (defaultGameData.tugStart + defaultGameData.tugHole) + defaultGameData.tugGap;
			}
		}

		roundData.totalPlayers += 1;
		roundData.turnArr.push(defaultGameData.tugStart + (defaultGameData.tugHole/2));
		
		roundData.playerSet = true;
		itemLight.visible = true;
		resetPath();
	}else if(gameData.roundNum == 4){
		roundData.followCamera = true;
		roundData.players.startZ = 11;
		roundData.players.endZ = 25;
		roundData.players.playerZ = 10;
		
	}else if(gameData.roundNum == 5){
		worldContainer.y = -100;
		
		roundData.followCamera = false;
		roundData.players.startZ = 8;
		roundData.players.endZ = 10;
		roundData.players.playerZ = 7;

		for(var n=0; n<gameSettings.game5.length; n++){
			roundData.bridgeData.seqArr.push({side:randomInt(0,1), step:false});
		}
		//console.log(roundData.bridgeData.seqArr);

		roundData.turnArr = [];
		var bridgeSegment = defaultGameData.bridgeStart-1;
		for(var n=0; n<gameSettings.game5.players; n++){
			roundData.turnArr.push(bridgeSegment);
			bridgeSegment--;
		}

		roundData.bridgeData.turnArr = [];
		for(var n=gameSettings.game5.players-1; n>=0; n--){
			roundData.bridgeData.turnArr.push(n);
		}
		
		roundData.playerSet = true;
		resetPath();
	}else if(gameData.roundNum == 6){
		roundData.followCamera = false;
		roundData.players.startZ = 7;
		roundData.players.endZ = 20;
		roundData.players.playerZ = 12;

		roundData.totalPlayers = 2;

		roundData.turnArr = [];
		roundData.turnArr.push(18);
		roundData.turnArr.push(18 + (gameSettings.game6.length - 5));

		roundData.playerSet = true;

		$.sprites['healthTypeTxt'+0].text = $.sprites['healthTypeShadowTxt'+0].text = '';
		$.sprites['healthTypeTxt'+1].text = $.sprites['healthTypeShadowTxt'+1].text = '';

		itemLight.visible = true;
		itemLight.gotoAndStop('red');
		updatePlayerHealthBar();

		healthContainer.visible = true;
	}

	timeData.oldTimer = -1;
	timeData.countdown = gameSettings['game'+gameData.roundNum].timer;
	timerTxt.text = millisecondsToTimeGame(timeData.countdown);

	changeGameViewport()
	resetWorld();
	resetPath();
}

function changeGameViewport(){
	if(viewport.isLandscape){
		//landscape
		if(gameData.roundNum == 0){
			roundData.camera = 750;
		}else if(gameData.roundNum == 1){
			roundData.camera = 550;
		}else if(gameData.roundNum == 2){
			roundData.camera = 550;
			roundData.players.playerZ = 10;
		}else if(gameData.roundNum == 3){
			roundData.camera = 550;
		}else if(gameData.roundNum == 4){
			roundData.camera = 550;
			roundData.players.playerZ = 10;
		}else if(gameData.roundNum == 5){
			roundData.camera = 550;
		}else if(gameData.roundNum == 6){
			roundData.camera = 750;
		}
	}else{
		//portrait
		if(gameData.roundNum == 0){
			roundData.camera = 700;
		}else if(gameData.roundNum == 1){
			roundData.camera = 700;
		}else if(gameData.roundNum == 2){
			roundData.camera = 700;
			roundData.players.playerZ = 6;
		}else if(gameData.roundNum == 3){
			roundData.camera = 700;
		}else if(gameData.roundNum == 4){
			roundData.camera = 700;
			roundData.players.playerZ = 6;
		}else if(gameData.roundNum == 5){
			roundData.camera = 700;
		}else if(gameData.roundNum == 6){
			roundData.camera = 700;
		}
	}

	defaultData.cameraHeight = roundData.camera;
}

 /*!
 * 
 * DISPLAY GAME ROUND - This is the function that runs to display game round
 * 
 */
function displayGameRound(round, win){
	gameRoundContainer.alpha = 0;

	if(gameData.roundNum == 6){
		roundTxt.text = roundShadowTxt.text = gameTextDisplay.roundFinal.replace('[NUMBER]', gameData.roundNum);
	}else{
		roundTxt.text = roundShadowTxt.text = gameTextDisplay.round.replace('[NUMBER]', gameData.roundNum);
	}
	roundTxt.color = gameSettings['game'+gameData.roundNum].textColor;
	roundShadowTxt.color = gameSettings['game'+gameData.roundNum].textShadowColor;
	roundNameTxt.color = gameSettings['game'+gameData.roundNum].textColor;
	roundNameShadowTxt.color = gameSettings['game'+gameData.roundNum].textShadowColor;

	if(round){
		roundNameTxt.text = roundNameShadowTxt.text = gameSettings['game'+gameData.roundNum].name;
	}else{
		if(win){
			playSound('soundComplete');
			roundNameTxt.text = roundNameShadowTxt.text = gameTextDisplay.roundComplete;
		}else{
			playSound('soundFail');
			roundNameTxt.text = roundNameShadowTxt.text = gameTextDisplay.roundFail;
		}
	}

	TweenMax.to(gameRoundContainer, .5, {alpha:1.5, overwrite:true, onComplete:function(){
		TweenMax.to(gameRoundContainer, .5, {delay:1, alpha:0, overwrite:true, onComplete:function(){
			
		}});
	}});
}

 /*!
 * 
 * GAME INSTRUCTION - This is the function that runs to show game instruction
 * 
 */
function toggleGameInstruction(con){
	instructionTxt.text = gameTextDisplay['game'+gameData.roundNum];
	instructionTxt.color = gameSettings['game'+gameData.roundNum].instruction.color;

	var alphaNum = con == true ? 1 : 0;
	TweenMax.to(gameInstructContainer, .5, {alpha:alphaNum, overwrite:true, onComplete:function(){
			
	}});

	resizeGameWorld();
}

function resizeGameWorld(){
	instructionTxt.x = canvasW/100 * gameSettings['game'+gameData.roundNum].instruction.x;
	instructionTxt.y = canvasH/100 * gameSettings['game'+gameData.roundNum].instruction.y;

	if(gameData.roundNum == 6){
		if(viewport.isLandscape){
			worldContainer.y = -150;
		}else{
			worldContainer.y = 0;
		}
	}
}

 /*!
 * 
 * GAME CAMERA ANIMATE - This is the function that runs to animate game camera
 * 
 */
function startPanCamera(){
	if(gameData.roundNum == 1){
		roundData.followCamera = false;

		var totalLength = gameSettings.game1.length;
		defaultData.position = (totalLength - (totalLength/5)) * defaultData.segmentLength;

		TweenMax.to(defaultData, 2, {delay:1, position:0, overwrite:true, onComplete:function(){
			roundData.followCamera = true;
			TweenMax.to(defaultData, 1, {overwrite:true, onComplete:function(){
				startGameRound();
			}});
		}});
	}else if(gameData.roundNum == 2){
		TweenMax.to(defaultData, 2, {delay:1, overwrite:true, onComplete:function(){
			startGameRound();
		}});
	}else if(gameData.roundNum == 3){
		defaultData.position = (defaultGameData.tugStart * 2) * defaultData.segmentLength;
		var totalLength = (defaultGameData.tugStart - 10) * defaultData.segmentLength;
		TweenMax.to(defaultData, 2, {position:totalLength, overwrite:true, onComplete:function(){
			roundData.followCamera = true;
			TweenMax.to(defaultData, 1, {overwrite:true, onComplete:function(){
				startGameRound();
			}});
		}});
	}else if(gameData.roundNum == 4){
		TweenMax.to(defaultData, 1, {delay:1, overwrite:true, onComplete:function(){
			startGameRound();
		}});
	}else if(gameData.roundNum == 5){
		var totalLength = (6) * defaultData.segmentLength;

		TweenMax.to(defaultData, 2, {position:totalLength, overwrite:true, onComplete:function(){
			startGameRound();
		}});
	}else if(gameData.roundNum == 6){
		var totalLength = defaultGameData.survivalStart + gameSettings.game6.length;
		defaultData.position = (totalLength - (totalLength/5)) * defaultData.segmentLength;

		TweenMax.to(defaultData, 2, {position:(6) * defaultData.segmentLength, overwrite:true, onComplete:function(){
			roundData.followCamera = true;
			startSurvivalGame();
		}});
	}
}

 /*!
 * 
 * GAME ROUND BEGIN - This is the function that runs to start game round
 * 
 */
function startGameRound(){
	gameData.interact = true;

	if(gameData.roundNum == 1){
		loopPlayrMoveTimer();
		startGreenLightCount();
	}else if(gameData.roundNum == 2){
		candyContainer.visible = true;
		candyContainer.alpha = 0;

		TweenMax.to(candyContainer, .5, {alpha:1, overwrite:true, onComplete:function(){
			
		}});
	}else if(gameData.roundNum == 3){
		startTugGame();
	}else if(gameData.roundNum == 4){
		handContainer.visible = true;
		handContainer.alpha = 0;

		$.sprites['handWrap'+0].x -= 200;
		$.sprites['handWrap'+1].x += 200;

		resetMarbleGame();
		TweenMax.to($.sprites['handWrap'+0], .5, {x:0, overwrite:true});
		TweenMax.to($.sprites['handWrap'+1], .5, {x:0, overwrite:true});

		TweenMax.to(handContainer, .5, {alpha:1, overwrite:true, onComplete:function(){
			changeMarbleTurn();
		}});
	}else{
		
	}

	toggleGameTimer(true);
	toggleGameInstruction(true);
}

 /*!
 * 
 * RED LIGHT GREEN LIGHT GAME - This is the function that runs for red light green light game
 * 
 */
function loopPlayrMoveTimer(){
	TweenMax.to(roundData.lightData.moveTween, .1, {overwrite:true, onComplete:function(){
		loopPlayrMoveTimer();
		updatePlayerTime();
	}});
}

function updatePlayerTime(){
	for(var n=1; n<players.length; n++){
		if(players[n].moveTime > 0){
			players[n].moveTime -= 100;
		}
	}
}

function startGreenLightCount(){
	TweenMax.killTweensOf(roundData.lightData);

	itemLight.gotoAndStop('green');
	gameData.doll.gotoAndPlay('close');
	playSound('soundLightOn');

	var activePlayers = [];
	for(var n=1; n<players.length; n++){
		if(players[n].status == ''){
			var countTime = roundData.lightData.countTime * 1000;
			players[n].speed = randomInt(defaultGameData.playerSpeed[0], defaultGameData.playerSpeed[1]);
			players[n].moveTime = randomInt(countTime-500, countTime);
			players[n].sandTime = randomInt(defaultGameData.sandTime[0], defaultGameData.sandTime[1]);
			activePlayers.push(n);
		}
	}

	shuffle(activePlayers);

	var totalPlayerDead = randomInt(gameSettings.game1.dead[0], gameSettings.game1.dead[1]);
	for(var n=0; n<totalPlayerDead; n++){
		if(n <activePlayers.length){
			var playerIndex = activePlayers[n];
			var countTime = roundData.lightData.countTime * 1000;
			players[n].moveTime = randomInt(countTime, countTime + 500);
			players[n].sandTime = randomInt(defaultGameData.sandTime[0], defaultGameData.sandTime[1]);
			players[playerIndex].status = 'nextDead';
		}
	}
	

	roundData.lightData.countTime = decreaseTime(roundData.lightData.countTime, gameSettings.game1.decreaseTime);
	TweenMax.to(roundData.lightData.timeTween, roundData.lightData.countTime, {overwrite:true, onComplete:function(){
		startRedLightCount();
	}});
	roundData.lightData.moveCon = true;
}

function startRedLightCount(){
	playSound('soundLighOff');

	itemLight.gotoAndStop('red');
	gameData.doll.gotoAndPlay('peek');
	
	loopPlayerDead();

	roundData.lightData.peekTime = decreaseTime(roundData.lightData.peekTime, gameSettings.game1.decreaseTime);
	TweenMax.to(roundData.lightData.timeTween, roundData.lightData.peekTime, {overwrite:true, onComplete:function(){
		startGreenLightCount();
	}});

	roundData.lightData.moveCon = false;
}

function decreaseTime(value, time){
	value = value - time < 1 ? 1 : value;
	return value;
}

function loopPlayerDead(){
	var delayNum = Math.random() * randomChoice([.2, .5]);
	TweenMax.to(roundData.lightData, delayNum, {overwrite:true, onComplete:function(){
		var deadCon = false;
		var nextDeadCount = 0;
		for(var n=1; n<players.length; n++){
			if(players[n].status == 'nextDead'){
				if(!deadCon){
					deadCon = true;
					players[n].status = 'dead';
					updatePlayerFrame(n, 'dead');
				}
				nextDeadCount++;
			}
		}

		if(nextDeadCount > 0)
			loopPlayerDead();
	}});
}

 /*!
 * 
 * GAME CONTROL - This is the function that runs for game control
 * 
 */
function toggleGameControl(type, con){
	if(gameData.ended){
		return;
	}

	if(!gameData.interact){
		return;
	}

	toggleGameInstruction(false);

	if(gameData.roundNum == 1){
		if(type == 'mousedown'){
			roundData.lightData.forward = true;
			roundData.lightData.stop = false;
			players[0].sprite.sprite.gotoAndPlay('run');
		}else if(type == 'pressup'){
			roundData.lightData.forward = false;
			roundData.lightData.stop = true;
			players[0].sprite.sprite.gotoAndPlay('idle');
		}
	}else if(gameData.roundNum == 2){
		if(type == 'mousedown'){
			
		}
	}else if(gameData.roundNum == 3){
		if(type == 'click'){
			playerTugAction();
		}
	}else if(gameData.roundNum == 4){
		if(type == 'mousedown'){
			
		}
	}else if(gameData.roundNum == 5){
		if(type == 'click'){
			moveFrontPlayer();
		}
	}else if(gameData.roundNum == 6){
		if(type == 'mousedown'){
			var controlDis = getDistance(stage.mouseX, stage.mouseY, itemControl.x, itemControl.y);
			if(controlDis < 100){
				roundData.survivalData.move = true;
				itemControl.alpha = .5;
			}
		}else if(type == 'pressup'){
			roundData.survivalData.move = false;
			itemControl.alpha = 1;
		}
	}
}

 /*!
 * 
 * BRIDGE GAME - This is the function that runs for bridge game
 * 
 */
function moveFrontPlayer(){
	gameData.interact = false;

	var getPlayerIndex = roundData.bridgeData.turnArr.indexOf(roundData.bridgeData.playerIndex);
	var player = players[getPlayerIndex];

	roundData.bridgeData.lastPos = {z:player.z, offset:player.offset};

	var newOffset = .2;
	var stageMouseX = (stage.mouseX - (canvasW/2));
	if(stageMouseX < 0){
		newOffset = -newOffset;
	}

	var posData = {z:player.z + (defaultGameData.bridgeSteps * defaultData.segmentLength), offset:newOffset};
	roundData.bridgeData.newPos = {z:posData.z, offset:posData.offset};

	animatePlayerJump(player, posData, true, true);

	var newCameraPostion = defaultData.position + (defaultGameData.bridgeSteps * defaultData.segmentLength);
	TweenMax.to(defaultData, 1, {position:newCameraPostion, overwrite:true});
}

function animatePlayerJump(player, posData, con){
	player.tweenData = {z:player.z, offset:player.offset};
	player.bounceData = {y:0};
	
	var totalLength = (gameSettings.game5.length * defaultGameData.bridgeSteps) * defaultData.segmentLength;
	totalLength += ((defaultGameData.bridgeStart - 2) * defaultData.segmentLength);
	var moveSpeed = player.z > (defaultGameData.bridgeStart - 2) * defaultData.segmentLength ? 1 : .5;
	if(player.z > totalLength + (defaultData.segmentLength * 2)){
		moveSpeed = .5;
	}
	
	if(moveSpeed == 1){
		updatePlayerFrame(player.index, 'run');

		TweenMax.to(player.bounceData, moveSpeed / 4, {y:300, ease:Power2.easeOut});
  		TweenMax.to(player.bounceData, moveSpeed / 2, {y:0, ease:Bounce.easeOut, delay:moveSpeed / 4});

		var randomFrame = Math.floor(Math.random()*3);
		playSound('soundGlass'+(randomFrame+1));
	}

	TweenMax.to(player.tweenData, moveSpeed, {z:posData.z, offset:posData.offset, overwrite:true, onUpdate:function(){
		oldSegment  = findSegment(player.z);

		player.z = player.tweenData.z + player.bounceData.y;
		player.offset = player.tweenData.offset;
		player.percent = percentRemaining(player.z, defaultData.segmentLength);
		var newSegment  = findSegment(player.z);
		
		if (oldSegment != newSegment) {
			index = oldSegment.players.indexOf(player);
			oldSegment.players.splice(index, 1);
			newSegment.players.push(player);
		}
	}, onComplete:function(){
		updatePlayerFrame(player.index, 'idle');

		if(con){
			roundData.bridgeData.fail = false;
			var checkSide = posData.offset < 0 ? 0 : 1;
			if(roundData.bridgeData.seqArrIndex < roundData.bridgeData.seqArr.length){
				if(roundData.bridgeData.seqArr[roundData.bridgeData.seqArrIndex].side != checkSide){
					roundData.bridgeData.newPos.offset = posData.offset > 0 ? -.2 : .2;
					
					roundData.bridgeData.fail = true;
					roundData.bridgeData.seqArr[roundData.bridgeData.seqArrIndex].fail = true;
					animatePlayerJumpFail(player);
				}
			}

			roundData.bridgeData.seqArrIndex++;
			moveOtherPlayers(true);

			if(roundData.bridgeData.fail){
				if(roundData.bridgeData.playerIndex >= roundData.bridgeData.turnArr.length-1){
					endGame(false, false);
				}
			}
		}else{
			roundData.bridgeData.animateCount--;
			if(roundData.bridgeData.animateCount == 0){
				moveOtherPlayersComplete();
			}
		}
	}});
}

function animatePlayerJumpFail(player){
	var randomFrame = Math.floor(Math.random()*3);
	playSound('soundScream'+(randomFrame+1));
	playSound('soundGlassBroken');
	TweenMax.to(player.sprite, .5, {alpha:0, overwrite:true, onComplete:function(){
		player.active = false;
	}});
}

function moveOtherPlayers(con){
	gameData.interact = false;

	var firstCount = con;
	var animateCount = 0;
	for(var n=roundData.bridgeData.playerIndex; n<roundData.bridgeData.turnArr.length; n++) {
		var getPlayerIndex = roundData.bridgeData.turnArr.indexOf(n);
		var player = players[getPlayerIndex];

		if(!firstCount){
			roundData.bridgeData.animateCount++;
			animatePlayerJump(player, roundData.bridgeData.lastPos, false);
			roundData.bridgeData.lastPos.z = player.z;
			roundData.bridgeData.lastPos.offset = player.offset;
			animateCount++;
		}

		firstCount = false;
	}

	if(animateCount == 0){
		if(!roundData.bridgeData.fail){
			moveLastStep();
		}
		gameData.interact = true;
	}
}

function moveOtherPlayersComplete(){
	gameData.interact = true;

	if(roundData.bridgeData.fail){
		roundData.bridgeData.fail = false;

		roundData.bridgeData.lastPos.z = roundData.bridgeData.newPos.z;
		roundData.bridgeData.lastPos.offset = roundData.bridgeData.newPos.offset;

		roundData.bridgeData.playerIndex++;
		moveOtherPlayers(false);
	}else{
		moveLastStep();
	}
}

function moveLastStep(){
	if(roundData.bridgeData.seqArrIndex >= roundData.bridgeData.seqArr.length){
		var newOffset = Math.random() * randomChoice([-0.1, 0.1]);
		roundData.bridgeData.newPos = {z:roundData.bridgeData.newPos.z + (defaultGameData.bridgeSteps * defaultData.segmentLength), offset:newOffset};

		roundData.bridgeData.lastPos.z = roundData.bridgeData.newPos.z;
		roundData.bridgeData.lastPos.offset = roundData.bridgeData.newPos.offset;

		moveOtherPlayers(false);
		endGame(true, false);
	}
}

 /*!
 * 
 * CANDY GAME - This is the function that runs for candy game
 * 
 */
function initCandyDrawingPos(x, y){
	roundData.candyData.x = x;
	roundData.candyData.y = y;

	var candyNum = roundData.candyData.candyNum;
	for(var n = 0; n<gameSettings['game2'].candy[candyNum].checkpoint.length; n++) {
		roundData.candyData.checkpoint.push({x:gameSettings['game2'].candy[candyNum].checkpoint[n].x - (itemCandyBase.image.naturalWidth/2), y:gameSettings['game2'].candy[candyNum].checkpoint[n].y - (itemCandyBase.image.naturalHeight/2), done:false});
	}
}

function checkCandyDrawingPos(x, y){
	var doneCount = 0;
	var distanceNum = 30;
	for(var n = 0; n<roundData.candyData.checkpoint.length; n++) {
		var getTwoDistance = getDistance(x, y, roundData.candyData.checkpoint[n].x, roundData.candyData.checkpoint[n].y);
		if(getTwoDistance < distanceNum){
			roundData.candyData.checkpoint[n].done = true;
		}
	}

	for(var n = 0; n<roundData.candyData.checkpoint.length; n++) {
		if(roundData.candyData.checkpoint[n].done){
			doneCount++;
		}
	}

	if(doneCount >= roundData.candyData.checkpoint.length){
		var getTwoDistance = getDistance(x, y, roundData.candyData.x, roundData.candyData.y);
		if(getTwoDistance < distanceNum){
			toggleGameTimer(false);
			revealCandy();
		}
	}
}

function chooseRandomCandy(){
	itemPixel.visible = true;
	itemNeedle.visible = true;
	itemCandyBase.visible = true;
	roundData.candyData.candyNum = Math.floor(Math.random() * gameSettings.game2.candy.length);
	
	for(var n = 0; n<gameSettings['game2'].candy.length; n++) {
		$.sprites['candy'+n].alpha = 0;
		$.sprites['candyFinal'+n].alpha = 0;
	}

	$.sprites['candy'+roundData.candyData.candyNum].alpha = 1;
	$.sprites['candyFinal'+roundData.candyData.candyNum].alpha = 0;
}

function clearCandyDrawing(){
	roundData.candyData.draw = false;
	candyDrawing.graphics.clear();
}

function revealCandy(){
	itemPixel.visible = false;
	itemNeedle.visible = false;
	clearCandyDrawing();

	TweenMax.to($.sprites['candy'+roundData.candyData.candyNum], .5, {alpha:0, overwrite:true});
	$.sprites['candyFinal'+roundData.candyData.candyNum].alpha = 1;
	itemCandyBase.visible = false;

	playSound('soundCrackFinal');
	endGame(true, false);
}

 /*!
 * 
 * TUG OF WAR GAME - This is the function that runs for tug of war game
 * 
 */

 function startTugGame(){
	TweenMax.to(roundData.tugData, 0, {overwrite:true, onComplete:function(){
		playSoundLoop('soundRope');

		var halfPeople = Math.floor(gameSettings.game3.players/2);
		for(var n=0; n<players.length-1; n++){
			var player = players[n];
			player.sprite.sprite.gotoAndPlay('pull');

			if(n >= halfPeople){
				player.sprite.sprite.gotoAndPlay('frontpull');
			}
		}

		playSound('soundLightOn');
		itemLight.gotoAndStop('green');
		loopTugMoveTimer();
	}});
 }

 function loopTugMoveTimer(){
	roundData.tugData.speed = getMaxTugSpeed(roundData.tugData.speed, randomInt(roundData.tugData.oppSpeed[0], roundData.tugData.oppSpeed[1]));
	TweenMax.to(roundData.tugData.moveTween, .1, {overwrite:true, onComplete:function(){
		loopTugMoveTimer();
	}});
}

function playerTugAction(){
	roundData.tugData.speed = getMaxTugSpeed(roundData.tugData.speed, -randomInt(roundData.tugData.userSpeed[0], roundData.tugData.userSpeed[1]));
}

function getMaxTugSpeed(val, speed){
	var maxVal = 100;
	var result = val + speed;
	result = result > maxVal ? maxVal : result;
	result = result < -maxVal ? -maxVal : result;
	return result;
}

function endTugGame(){
	if(roundData.followCamera){
		roundData.followCamera = false;
		gameData.interact = false;
		TweenMax.killTweensOf(roundData.tugData.moveTween);

		var roundWin = true;
		var halfPeople = Math.floor(gameSettings.game3.players/2);
		for(var n=0; n<players.length; n++){
			var player = players[n];

			if(n < halfPeople){
				if(!player.active){
					roundWin = false;
				}
			}else{
				if(!player.active){
					roundWin = true;
				}
			}
		}

		var newSpeed = 1200;
		if(roundWin){
			endGame(true, false);
			newSpeed = -newSpeed;
		}else{
			endGame(false, false);
		}

		TweenMax.to(roundData.tugData, 1, {speed:newSpeed, overwrite:true, onComplete:function(){
			TweenMax.to(roundData.tugData, .5, {delay:1, speed:0, overwrite:true, onComplete:function(){
				
			}});
		}});
	}
}

 /*!
 * 
 * MARBLE GAME - This is the function that runs for marble game
 * 
 */
function resetMarbleGame(){
	for(var n = 0; n<3; n++) {
		$.sprites['marbleBall'+n].visible = false;
	}

	$.sprites['hand'+0].sprite.gotoAndStop(1);
	$.sprites['hand'+1].sprite.gotoAndStop(1);

	handButtonContainer.visible = false;
	$.sprites['handWinStatTxt0'].text = '';
	$.sprites['handWinStatTxt1'].text = '';

	updateMarbleStats()
}

function changeMarbleTurn(){
	for(var n = 0; n<3; n++) {
		$.sprites['marbleBall'+n].visible = false;
	}

	$.sprites['hand'+0].sprite.gotoAndStop(1);
	$.sprites['hand'+1].sprite.gotoAndStop(1);

	var circleRange = 50;
	roundData.marbleData.chooseNum = 0;
	roundData.marbleData.guessNum = 1;
	roundData.marbleData.result = randomBoolean();

	var pathArr = [{x:0, y:0}, {x:-circleRange, y:-circleRange}, {x:-(circleRange * 2), y:0}, {x:-circleRange, y:circleRange}, {x:0, y:0}];

	if(roundData.marbleData.turn == 1){
		if(roundData.marbleData.user == 1){
			roundData.marbleData.result = false;
		}

		roundData.marbleData.chooseNum = 1;
		roundData.marbleData.guessNum = 0;
		pathArr = [{x:0, y:0}, {x:circleRange, y:-circleRange}, {x:circleRange * 2, y:0}, {x:circleRange, y:circleRange}, {x:0, y:0}];
	}else{
		//user
		if(roundData.marbleData.opponent == 1){
			roundData.marbleData.result = false;
		}
	}

	playSound('soundMarbleRoll');
	TweenMax.to($.sprites['handWrap'+roundData.marbleData.guessNum], .5, {bezier:{curviness:1, values:pathArr}, ease:Linear.easeNone, overwrite:true, repeat:1, onComplete:function(){
		changeMarbleTurnComplete();
	}})
}

function changeMarbleTurnComplete(){
	$.sprites['hand'+roundData.marbleData.chooseNum].sprite.gotoAndStop(0);

	handButtonContainer.visible = false;
	if(roundData.marbleData.turn == 0){
		handButtonContainer.visible = true;
	}else{
		TweenMax.to(handContainer, .5, {overwrite:true, onComplete:function(){
			roundData.marbleData.oppResult = randomBoolean();

			if(roundData.marbleData.user == 1){
				roundData.marbleData.oppResult = false;
			}
			toggleHandStatus(roundData.marbleData.oppResult);
		}});
	}
}

function toggleHandStatus(con){
	toggleGameInstruction(false);
	showMarbleResult(con);
}

function showMarbleResult(result){
	handButtonContainer.visible = false;

	var resultTxt = result == true ? gameTextDisplay.even : gameTextDisplay.odd;
	var tweenSpeed = .8;

	if(roundData.marbleData.turn == 1){
		tweenSpeed = 1.3;
		$.sprites['handWinStatTxt'+roundData.marbleData.guessNum].text = resultTxt;
	}

	TweenMax.to(handContainer, tweenSpeed, {overwrite:true, onComplete:function(){
		$.sprites['handWinStatTxt0'].text = '';
		$.sprites['handWinStatTxt1'].text = '';
		$.sprites['hand'+roundData.marbleData.guessNum].sprite.gotoAndStop(2);

		var guessX = roundData.marbleData.guessNum == 1 ? roundData.marbleData.ballX : -roundData.marbleData.ballX;
		var guessY = 0;
		var chooseX = roundData.marbleData.guessNum == 1 ? -roundData.marbleData.ballX : roundData.marbleData.ballX;
		var totalBall = 1;

		if(roundData.marbleData.result){
			totalBall = 2;
		}

		var randomDis = 50;
		for(var n = 0; n<totalBall; n++) {
			$.sprites['marbleBall'+n].visible = true;
			$.sprites['marbleBall'+n].x = guessX + randomInt(-randomDis, randomDis) + (n * 20);
			$.sprites['marbleBall'+n].y = guessY + randomInt(-randomDis, randomDis) + (n * 20);
		}

		TweenMax.to(handContainer, 1, {overwrite:true, onComplete:function(){
			$.sprites['hand'+roundData.marbleData.chooseNum].sprite.gotoAndStop(2);
			
			var randomBall = 0;
			if(totalBall > 1){
				randomBall = Math.floor(Math.random()*2);
			}
			if(roundData.marbleData.result == result){
				$.sprites['marbleBall'+randomBall].visible = true;

				TweenMax.to($.sprites['marbleBall'+randomBall], .5, {x:chooseX, overwrite:true, onComplete:function(){
					endMarbleTurn(true);
				}})
			}else{
				$.sprites['marbleBall'+2].x = chooseX;
				$.sprites['marbleBall'+2].visible = true;

				TweenMax.to($.sprites['marbleBall'+2], .5, {x:guessX, overwrite:true, onComplete:function(){
					endMarbleTurn(false);
				}})
			}
		}})
	}})
}

function endMarbleTurn(win){
	playSound('soundMarbleHit');
	
	if(roundData.marbleData.turn == 0){
		if(win){
			roundData.marbleData.user++;
			roundData.marbleData.opponent--;
		}else{
			roundData.marbleData.user--;
			roundData.marbleData.opponent++;
		}
	}else{
		if(win){
			roundData.marbleData.user--;
			roundData.marbleData.opponent++;
		}else{
			roundData.marbleData.user++;
			roundData.marbleData.opponent--;
		}
	}

	updateMarbleStats();

	TweenMax.to(handContainer, .5, {overwrite:true, onComplete:function(){
		if(roundData.marbleData.turn == 1){
			roundData.marbleData.turn = 0;
		}else{
			roundData.marbleData.turn = 1;
		}

		var finalTotalBall = gameSettings.game4.totalBall * 2;
		if(roundData.marbleData.user >= finalTotalBall){
			endGame(true, false);
		}else if(roundData.marbleData.opponent >= finalTotalBall){
			endGame(false, false);
		}else{
			changeMarbleTurn();
		}
	}})	
}

function updateMarbleStats(){
	roundData.survivalData.instruction = false;
	playSound('soundMarble');

	$.sprites['handMarbleBallTxt0'].text = 'x' + roundData.marbleData.user;
	$.sprites['handMarbleBallTxt1'].text = 'x' + roundData.marbleData.opponent;	
}

 /*!
 * 
 * SURVIVAL GAME - This is the function that runs for survival game
 * 
 */
 function startSurvivalGame(){
	itemControl.visible = true;
	itemControl.alpha = 1;
	roundData.survivalData.turn = randomBoolean();
	swithTurn();
	beginSurvivalRound(3);
}

function beginSurvivalRound(time){
	TweenMax.to(roundData.survivalData, time, {overwrite:true, onComplete:function(){
		gameData.interact = true;

		itemLight.gotoAndStop('green');
		playSound('soundLightOn');
		toggleGameTimer(true);

		if(!roundData.survivalData.instruction){
			roundData.survivalData.instruction = true;
			toggleGameInstruction(true);
		}

		roundData.survivalData.start = true;
	}});
}

function stopSurvivalRound(){
	gameData.interact = false;

	timerTxt.text = millisecondsToTimeGame(timeData.countdown);
	roundData.survivalData.start = false;
	roundData.survivalData.move = false;
	
	if(randomBoolean()){
		updatePlayerFrame(0, 'idle');
	}else{
		updatePlayerFrame(0, 'front');
	}
	if(randomBoolean()){
		updatePlayerFrame(1, 'idle');
	}else{
		updatePlayerFrame(1, 'front');
	}

	toggleGameTimer(false);
	itemLight.gotoAndStop('red');
	playSound('soundLightOff');

	swithTurn();
	beginSurvivalRound(3);
}

 function swithTurn(){
	roundData.survivalData.oppData.speedTime = 0;

	if(roundData.survivalData.turn){
		roundData.survivalData.turn = false;
	}else{
		roundData.survivalData.turn = true;
	}

	var userTxt = gameTextDisplay.kill;
	var oppTxt = gameTextDisplay.run;
	if(roundData.survivalData.turn){
		userTxt = gameTextDisplay.run;
		oppTxt = gameTextDisplay.kill;
	}

	$.sprites['healthTypeTxt'+0].text = $.sprites['healthTypeShadowTxt'+0].text = userTxt;
	$.sprites['healthTypeTxt'+1].text = $.sprites['healthTypeShadowTxt'+1].text = oppTxt;

	$.sprites['healthType'+0].x = $.sprites['healthType'+0].oriX + 50;
	$.sprites['healthType'+0].alpha = 0;
	TweenMax.to($.sprites['healthType'+0], .5, {x:$.sprites['healthType'+0].oriX, alpha:1, overwrite:true});

	$.sprites['healthType'+1].x = $.sprites['healthType'+1].oriX - 50;
	$.sprites['healthType'+1].alpha = 0;
	TweenMax.to($.sprites['healthType'+1], .5, {x:$.sprites['healthType'+1].oriX, alpha:1, overwrite:true});

	playSound('soundSwitch');
 }

function getOppAway(){
	var targetPlayer = players[0];
	var oppPlayer = players[1];

	var distanceZ = targetPlayer.z - oppPlayer.z;
	var distanceX = targetPlayer.offset - oppPlayer.offset;
	var rangeNumZ = 800;
	var rangeNumX = .3;
	var startZ = defaultGameData.survivalStart * defaultData.segmentLength;
	var endZ = (defaultGameData.survivalStart + gameSettings.game6.length) * defaultData.segmentLength;
	var randomX = false;

	if(Math.abs(distanceX) < rangeNumX - .1){
		if(distanceX < 0){
			roundData.survivalData.oppData.offset = targetPlayer.offset + roundData.survivalData.oppData.speedX;
			if(roundData.survivalData.oppData.offset >= 1){
				roundData.survivalData.oppData.offset = targetPlayer.offset - roundData.survivalData.oppData.speedX;
			}
		}else if(distanceX > 0){
			roundData.survivalData.oppData.offset = targetPlayer.offset - roundData.survivalData.oppData.speedX;
			if(roundData.survivalData.oppData.offset <= -1){
				roundData.survivalData.oppData.offset = targetPlayer.offset + roundData.survivalData.oppData.speedX;
			}
		}
	}else{
		randomX = true;
	}

	if(Math.abs(distanceZ) < rangeNumZ - 50){
		roundData.survivalData.oppData.time = 0;

		if(distanceZ < 0){
			roundData.survivalData.oppData.z = targetPlayer.z + rangeNumZ;
			if(roundData.survivalData.oppData.z >= endZ){
				roundData.survivalData.oppData.z = targetPlayer.z - rangeNumZ;
			}
		}else if(distanceZ > 0){
			roundData.survivalData.oppData.z = targetPlayer.z - rangeNumZ;
			if(roundData.survivalData.oppData.z <= startZ){
				roundData.survivalData.oppData.z = targetPlayer.z + rangeNumZ;
			}
		}
	}else{
		//random
		if(roundData.survivalData.oppData.time > 0){
			roundData.survivalData.oppData.time--;
		}else{
			roundData.survivalData.oppData.time = randomInt(10, 20);
			roundData.survivalData.oppData.z = randomInt(defaultGameData.survivalStart, defaultGameData.survivalStart + gameSettings.game6.length) * defaultData.segmentLength;

			if(randomX){
				roundData.survivalData.oppData.offset = Math.random() * randomChoice([-0.8, 0.8]);
			}
		}
	}
}

function updatePlayerMoveSpeed(){
	if(roundData.survivalData.oppData.speedTime > 0){
		roundData.survivalData.oppData.speedTime--;
	}else{
		roundData.survivalData.oppData.speedTime = randomInt(30, 50);

		if(roundData.survivalData.turn){
			//opp kill
			roundData.survivalData.oppData.speedX = .3;
			roundData.survivalData.oppData.speedZ = randomInt(defaultGameData.survivalSpeed-300, defaultGameData.survivalSpeed+100);
		}else{
			roundData.survivalData.oppData.speedX = .3;
			roundData.survivalData.oppData.speedZ = randomInt(defaultGameData.survivalSpeed-900, defaultGameData.survivalSpeed-600);
		}
	}
}

function updatePlayerHealth(){
	if(!roundData.survivalData.start){
		return;
	}

	var targetPlayer = players[0];
	var oppPlayer = players[1];

	var distanceZ = targetPlayer.z - oppPlayer.z;
	var distanceX = targetPlayer.offset - oppPlayer.offset;
	var healthDec = 15;

	if(Math.abs(distanceZ) < 100){
		if(roundData.survivalData.healthTime > 0){
			roundData.survivalData.healthTime--;
		}else{
			roundData.survivalData.healthTime = 20;
			
			var disNum = 50 * defaultData.scale;
			if(Math.abs(distanceX) <= disNum){
				if(!roundData.survivalData.turn){
					roundData.survivalData.oppHealth -= healthDec;
					roundData.survivalData.oppHealth = roundData.survivalData.oppHealth < 0 ? 0 : roundData.survivalData.oppHealth;
				}else{
					roundData.survivalData.userHealth -= healthDec;
					roundData.survivalData.userHealth = roundData.survivalData.userHealth < 0 ? 0 : roundData.survivalData.userHealth;
				}

				var randomFrame = Math.floor(Math.random()*3);
				playSound('soundStab'+(randomFrame+1));
				updatePlayerHealthBar();
			}
		}
	}

	if(roundData.survivalData.userHealth <= 0){
		targetPlayer.status = 'dead';
		updatePlayerFrame(0, 'dead');
		toggleGameTimer(false);
		endGame(false, false);
	}

	if(roundData.survivalData.oppHealth <= 0){
		oppPlayer.status = 'dead';
		updatePlayerFrame(1, 'dead');
		toggleGameTimer(false);
		endGame(true, false);
	}
}

function updatePlayerHealthBar(){
	var userBar = roundData.survivalData.userHealth/100 * defaultGameData.survivalBarW;
	var oppBar = roundData.survivalData.oppHealth/100 * defaultGameData.survivalBarW;

	$.sprites['healthGreen'+0].graphics.clear().beginFill(gameSettings.game6.bar.health).drawRect(0, 0, userBar, defaultGameData.survivalBarH);
	TweenMax.to($.sprites['healthBlood'+0], .5, {delay:.5, overwrite:true, onComplete:function(){
		$.sprites['healthBlood'+0].graphics.clear().beginFill(gameSettings.game6.bar.blood).drawRect(0, 0, userBar, defaultGameData.survivalBarH);
	}});

	$.sprites['healthGreen'+1].graphics.clear().beginFill(gameSettings.game6.bar.health).drawRect(0, 0, oppBar, defaultGameData.survivalBarH);
	TweenMax.to($.sprites['healthBlood'+1], .5, {delay:.5, overwrite:true, onComplete:function(){
		$.sprites['healthBlood'+1].graphics.clear().beginFill(gameSettings.game6.bar.blood).drawRect(0, 0, oppBar, defaultGameData.survivalBarH);
	}});
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	gameData.paused = true;

	toggleChooseNumber();
	stopSoundLoop('soundRope');
	toggleGameTimer(false);
	TweenMax.killAll();
}

/*!
 * 
 * SAVE GAME - This is the function that runs to save game
 * 
 */
function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * LOOP UPDATE GAME - This is the function that runs to update game loop
 * 
 */
function updateGame(){
	for(var n=0; n<gameData.money.length; n++){
		var thisMoney = gameData.money[n];
		thisMoney.y += thisMoney.speed;
		thisMoney.rotation += thisMoney.rotateSpeed;

		if(thisMoney.y > thisMoney.maxY){
			thisMoney.rotation = 0;
			thisMoney.y = thisMoney.oriY;
		}
	}

	if(curPage == 'game'){
		if(!gameData.paused){
			updateWorld();
		}
	}else{
		updateWorld();
	}
	
	if(!gameData.paused){
		if(timeData.enable){
			timeData.nowDate = new Date();
			timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
			timeData.timer = Math.floor((timeData.countdown) - (timeData.elapsedTime));
			
			if(timeData.oldTimer == -1){
				timeData.oldTimer = timeData.timer;
			}
	
			if(timeData.timer <= 0){
				//stop
				if(gameData.roundNum == 6){
					stopSurvivalRound();
				}else{
					endGame(false, true);
				}
			}else{
				if((timeData.oldTimer - timeData.timer) > 1000){
					if(timeData.timer < 1000){
						playSound('soundCountdownEnd');
					}else if(timeData.timer < 6000){
						playSound('soundCountdownClose');
					}else{
						//playSound('soundCountdown');	
					}
					timeData.oldTimer = timeData.timer;
				}
				
				timerTxt.text = millisecondsToTimeGame(timeData.timer);
			}
		}
	}
}

/*!
 * 
 * GAME TIMER - This is the function that runs for game timer
 * 
 */
function toggleGameTimer(con){	
	if(con){
		timeData.startDate = new Date();
	}else{
		
	}
	timeData.enable = con;
}

/*!
 * 
 * UPDATE WORLD - This is the function that runs to update game world
 * 
 */
function updateWorld(){
	updateSprites();
	renderWorld();
}

function updateSprites() {
  	var n;
	var dt = (1/60);
	var playerSegment = findSegment((defaultData.position+defaultData.playerZ));
	var playerW = 90 * defaultData.scale;
	var speedPercent  = defaultData.speed/worldData.maxSpeed;
	var stageMouseX = (stage.mouseX - (canvasW/2)) * defaultData.turnSpeed;
	var dx = dt * Math.abs(stageMouseX) * speedPercent;
	var startPosition = defaultData.position;
	
	updatePlayers(dt);
	
	defaultData.position = getIncrease(defaultData.position, dt * defaultData.speed, defaultData.trackLength);
	
	if(gameData.roundNum == 6){
		var controlX = stage.mouseX - (canvasW/2);
		if(Math.abs(controlX) > 40 && roundData.survivalData.move){
			dx = 0.008;
		}
	}

	if (stageMouseX < 0){
		defaultData.playerX = defaultData.playerX - dx;
	}else{
		defaultData.playerX = defaultData.playerX + dx;
	}
	
	defaultData.playerX = defaultData.playerX - (dx * speedPercent * playerSegment.curve * defaultData.centrifugal);
	
	if (roundData.lightData.forward){
		defaultData.speed = getAccelerate(defaultData.speed, worldData.accel, dt);
	}else if (roundData.lightData.stop){
		defaultData.speed = getAccelerate(defaultData.speed, defaultData.breaking, dt);
	}else{
		defaultData.speed = getAccelerate(defaultData.speed, defaultData.decel, dt);
	}
	
	if ((defaultData.playerX < -1) || (defaultData.playerX > 1)) {
		if (defaultData.speed > defaultData.offRoadLimit)
			defaultData.speed = getAccelerate(defaultData.speed, defaultData.offRoadDecel, dt);
	}

	if(gameData.roundNum == 1){
		for(n = 0 ; n < playerSegment.players.length ; n++) {
			player  = playerSegment.players[n];
			if(player.index != 0){
				thisPlayerW = player.sprite.w * defaultData.scale;
				if (defaultData.speed > player.speed) {
					if (getOverlap(defaultData.playerX, playerW, player.offset, thisPlayerW, 0.8)) {
						defaultData.speed    = player.speed * (player.speed/defaultData.speed);
						defaultData.position = getIncrease(player.z, -defaultData.playerZ, defaultData.trackLength);
						break;
					}
				}
			}
		}
	}

	defaultData.playerX = getLimit(defaultData.playerX, -2, 2);// dont ever let it go too far out of bound
	defaultData.speed = getLimit(defaultData.speed, 0, worldData.maxSpeed); // or exceed defaultData.maxSpeed
	
	defaultData.skyOffset  = getIncrease(defaultData.skyOffset,  defaultData.skySpeed  * playerSegment.curve * (defaultData.position-startPosition)/defaultData.segmentLength, 1);
	defaultData.hillOffset = getIncrease(defaultData.hillOffset, defaultData.hillSpeed * playerSegment.curve * (defaultData.position-startPosition)/defaultData.segmentLength, 1);
	defaultData.treeOffset = getIncrease(defaultData.treeOffset, defaultData.treeSpeed * playerSegment.curve * (defaultData.position-startPosition)/defaultData.segmentLength, 1);
	
	if (defaultData.position > defaultData.playerZ) {
		if (currentLapTime && (startPosition < defaultData.playerZ)) {

		}else {
          currentLapTime += dt;
        }
	}
}

function updatePlayers(dt) {
	var n, player, oldSegment, newSegment;
	for(n = 0 ; n < players.length ; n++) {
		player         = players[n];
		oldSegment  = findSegment(player.z);

		if(gameData.roundNum == 1){
			if(n == 0){
				if(roundData.followCamera){
					player.z = defaultData.position + (roundData.players.playerZ * defaultData.segmentLength);
					player.offset = defaultData.playerX;
					
					if(player.z > gameSettings.game1.length * 100){
						endGame(true, false);
					}else{
						if(!roundData.lightData.moveCon){
							if(defaultData.speed > 50){
								endGame(false, false);
							}
						}

						if(defaultData.speed > 0){
							if(player.sandTime > 0){
								player.sandTime--;
							}else{
								player.sandTime = randomInt(defaultGameData.sandTime[0], defaultGameData.sandTime[1]);
								var randomFrame = Math.floor(Math.random()*3);
								playSound('soundSand'+(randomFrame+1));
							}
						}
					}
				}else{
					player.z = 0 + (roundData.players.playerZ * defaultData.segmentLength);
					player.offset = defaultData.playerX;
				}
			}else{
				if(player.z > gameSettings.game1.length * 100){
					player.status = 'complete';
				}

				if(player.status != 'dead'){
					if(player.moveTime > 0){
						updatePlayerFrame(n, 'run');
						player.z = getIncrease(player.z, dt * player.speed, defaultData.trackLength);

						if(player.sandTime > 0){
							player.sandTime--;
						}else{
							player.sandTime = randomInt(defaultGameData.sandTime[0], defaultGameData.sandTime[1]);
							var randomFrame = Math.floor(Math.random()*3);
							//playSound('soundSand'+(randomFrame+1));
						}
					}else{
						updatePlayerFrame(n, 'idle');
					}
				}
			}
		}else if(gameData.roundNum == 2){
			if(n == 0){
				if(roundData.followCamera){
					player.z = defaultData.position + (roundData.players.playerZ * defaultData.segmentLength);
					player.offset = defaultData.playerX;
				}else{
					player.z = 0 + (roundData.players.playerZ * defaultData.segmentLength);
					player.offset = defaultData.playerX;
				}
			}
		}else if(gameData.roundNum == 3){
				if(player.status == ''){
					player.speed = roundData.tugData.speed;
				}

				player.z = getIncrease(player.z, dt * player.speed, defaultData.trackLength);
				if(roundData.followCamera && n == 0){
					defaultData.position = (player.z - (7 * defaultData.segmentLength));
				}
				
				var startZ = defaultGameData.tugStart* worldData.segmentLength ;
				var endZ = (defaultGameData.tugStart + defaultGameData.tugHole + (defaultGameData.tugGap/2)) * worldData.segmentLength;
				if(n != players.length-1){
					if(player.z > startZ && player.z < endZ){
						if(player.active){
							player.speed = 0;
							player.status = 'dead';
							player.active = false;

							var randomFrame = Math.floor(Math.random()*3);
							playSound('soundScream'+(randomFrame+1));
						}
							
						endTugGame();
					}
				}
			}else if(gameData.roundNum == 4){
				if(n == 0){
					if(roundData.followCamera){
						player.z = defaultData.position + (roundData.players.playerZ * defaultData.segmentLength);
						player.offset = defaultData.playerX;
					}else{
						player.z = 0 + (roundData.players.playerZ * defaultData.segmentLength);
						player.offset = defaultData.playerX;
					}
				}
			}else if(gameData.roundNum == 6){
			if(n == 0){
				if(roundData.followCamera){
					defaultData.position = (player.z - (12 * defaultData.segmentLength));
				}

				if(player.status == ''){
					if(roundData.survivalData.move){
						var moveSpeed = defaultGameData.survivalSpeed;
						defaultData.speed = moveSpeed;

						if(stage.mouseY > (canvasH/100 * defaultGameData.survivalSplitPercent)){
							updatePlayerFrame(0, 'frontrun');
							moveSpeed = -moveSpeed;
						}else{
							updatePlayerFrame(0, 'run');
						}

						player.speed = moveSpeed;
					}else{
						updatePlayerFrame(0, 'idle')
						defaultData.speed = player.speed = 0;
					}

					player.z = getIncrease(player.z, dt * player.speed, defaultData.trackLength);
					player.offset = defaultData.playerX;

					if(defaultData.speed > 0){
						if(player.sandTime > 0){
							player.sandTime--;
						}else{
							player.sandTime = randomInt(defaultGameData.sandTime[0], defaultGameData.sandTime[1]);
							var randomFrame = Math.floor(Math.random()*3);
							playSound('soundSand'+(randomFrame+1));
						}
					}
				}
			}else{
				
				if(roundData.survivalData.start){
					updatePlayerMoveSpeed();

					var moveSpeed = roundData.survivalData.oppData.speedZ;
					var moveSpeedX = .006;

					var targetPlayer = players[0];
					if(!roundData.survivalData.turn){
						getOppAway();
						targetPlayer = roundData.survivalData.oppData;
					}

					var distanceZ = targetPlayer.z - player.z;
					var actionY = 'idle';
					var actionX = 'idle';

					if(Math.abs(distanceZ) > 50){
						if(distanceZ < 0){
							actionY = 'frontrun';
							player.speed = -moveSpeed;
						}else if(distanceZ > 0){
							actionY = 'run';
							player.speed = moveSpeed;
						}
					}else{
						actionY = 'idle';
						player.speed = 0;
					}

					var distanceX = targetPlayer.offset - player.offset;
					if(Math.abs(distanceX) > .05){
						if(distanceX < 0){
							player.offset -= moveSpeedX;
						}else if(distanceX > 0){
							player.offset += moveSpeedX;
						}
						actionX = 'run';
					}else{
						actionX = 'idle';
					}

					if(actionY == 'idle'){
						updatePlayerFrame(1, actionX);
					}else{
						updatePlayerFrame(1, actionY);
					}

					player.z = getIncrease(player.z, dt * player.speed, defaultData.trackLength);
				}
			}

			updatePlayerHealth();

			if(player.z < defaultGameData.survivalStart * defaultData.segmentLength){
				player.z = defaultGameData.survivalStart * defaultData.segmentLength
			}

			if(player.z > (defaultGameData.survivalStart + gameSettings.game6.length) * defaultData.segmentLength){
				player.z = (defaultGameData.survivalStart + gameSettings.game6.length) * defaultData.segmentLength
			}

			var endRange = 1
			if(defaultData.playerX < -endRange){
				defaultData.playerX = -endRange;
			}

			if(defaultData.playerX > endRange){
				defaultData.playerX = endRange;
			}
		}

		player.percent = percentRemaining(player.z, defaultData.segmentLength);
		newSegment  = findSegment(player.z);
		
		if (oldSegment != newSegment) {
			index = oldSegment.players.indexOf(player);
			oldSegment.players.splice(index, 1);
			newSegment.players.push(player);
		}
	}
}

function updatePlayerFrame(index, action){
	if(players[index].action != action){
		players[index].action = action;
		players[index].sprite.sprite.gotoAndPlay(action);

		if(action == 'dead'){
			players[index].sprite.numberTxt.text = '';

			var randomFrame = Math.floor(Math.random()*3);
			players[index].sprite.sprite.gotoAndStop(4+randomFrame);

			if(gameData.roundNum != 6){
				playSound('soundShot'+(randomFrame+1));
			}
		}
	}
}

function updatePlayerOffset(player, oldSegment, playerSegment, playerW) {
	var i, j, dir, segment, otherPlayer, otherPlayerW, lookahead = 20, playerW = player.sprite.w * defaultData.scale;
	if ((oldSegment.index - playerSegment.index) > defaultData.drawDistance)
		return 0;

	for(i = 1 ; i < lookahead ; i++) {
		segment = segments[(oldSegment.index+i)%segments.length];

		if ((segment === playerSegment) && (player.speed > defaultData.speed) && (getOverlap(defaultData.playerX, playerW, player.offset, playerW, 1.2))) {
			if (defaultData.playerX > 0.5)
				dir = -1;
			else if (defaultData.playerX < -0.5)
				dir = 1;
			else
				dir = (player.offset > defaultData.playerX) ? 1 : -1;
				return dir * 1/i * (player.speed-defaultData.speed)/worldData.maxSpeed;
		}

		for(j = 0 ; j < segment.players.length ; j++) {
			otherPlayer  = segment.players[j];
			otherPlayerW = otherPlayer.sprite.w * defaultData.scale;
			if ((player.speed > otherPlayer.speed) && getOverlap(player.offset, playerW, otherPlayer.offset, otherPlayerW, 1.2)) {
				if (otherPlayer.offset > 0.5)
					dir = -1;
				else if (otherPlayer.offset < -0.5)
					dir = 1;
				else
					dir = (player.offset > otherPlayer.offset) ? 1 : -1;
					return dir * 1/i * (player.speed-otherPlayer.speed)/worldData.maxSpeed;
			}
		}
	}

	if (player.offset < -0.9)
		return 0.1;
	else if (player.offset > 0.9)
		return -0.1;
	else
		return 0;
}

/*!
 * 
 * RENDER WORLD - This is the function that runs to update render world
 * 
 */
function renderWorld() {
	var baseSegment   = findSegment(defaultData.position);
	var basePercent   = percentRemaining(defaultData.position, defaultData.segmentLength);
	var playerSegment = findSegment(defaultData.position+defaultData.playerZ);
	var playerPercent = percentRemaining(defaultData.position+defaultData.playerZ, defaultData.segmentLength);
	var playerY       = getInterpolate(playerSegment.p1.world.y, playerSegment.p2.world.y, playerPercent);
	var maxy          = defaultData.height+defaultData.extraHeight;
	
	var x  = 0;
	var dx = - (baseSegment.curve * basePercent);
	
	worldContainer.removeAllChildren();
	
	renderBackground(background, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].background.base0,   defaultData.bgOffset,  resolution * defaultData.bgSpeed  * playerY);
	renderBackground(background, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].background.base1,   defaultData.skyOffset,  resolution * defaultData.skySpeed  * playerY);
	renderBackground(background, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].background.base2, defaultData.hillOffset, resolution * defaultData.hillSpeed * playerY);
	renderBackground(background, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].background.base3, defaultData.treeOffset, resolution * defaultData.treeSpeed * playerY);

  	var n, i, segment, car, sprite, spriteScale, spriteX, spriteY;
	
	for(n = 0 ; n < defaultData.drawDistance ; n++) {
		var segmentIndex = (baseSegment.index + n);

		segment        = segments[segmentIndex % segments.length];
		segment.looped = segment.index < baseSegment.index;
		segment.fog    = exponentialFog(n/defaultData.drawDistance, gameSettings['game'+gameData.roundNum].path.fogDensity);
		segment.clip   = maxy;
		
		getProject(segment.p1, (defaultData.playerX * gameSettings['game'+gameData.roundNum].path.width) - x,      playerY + worldData.cameraHeight, defaultData.position - (segment.looped ? defaultData.trackLength : 0), defaultData.cameraDepth, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].path.width);
		getProject(segment.p2, (defaultData.playerX * gameSettings['game'+gameData.roundNum].path.width) - x - dx, playerY + worldData.cameraHeight, defaultData.position - (segment.looped ? defaultData.trackLength : 0), defaultData.cameraDepth, defaultData.width, defaultData.height, gameSettings['game'+gameData.roundNum].path.width);
		
		x  = x + dx;
		dx = dx + segment.curve;
		
		if ((segment.p1.camera.z <= defaultData.cameraDepth)         || // behind us
			(segment.p2.screen.y >= segment.p1.screen.y) || // back face cull
			(segment.p2.screen.y >= maxy))                  // clip by (already rendered) hill
		  continue;
		
		defaultData.lastY = segment.p1.screen.y;
		renderSegment(defaultData.width,
					   segment.p1.screen.x,
					   segment.p1.screen.y,
					   segment.p1.screen.w,
					   segment.p2.screen.x,
					   segment.p2.screen.y,
					   segment.p2.screen.w,
					   segment.fog,
					   segment.color,
					   segmentIndex);
		
		maxy = segment.p1.screen.y;
	}
	
  	for(n = (defaultData.drawDistance-1) ; n > 0 ; n--) {
		segment = segments[(baseSegment.index + n) % segments.length];
		
		for(i = 0 ; i < segment.players.length ; i++) {
			player      = segment.players[i];
			sprite      = player.sprite;
			spriteScale = getInterpolate(segment.p1.screen.scale, segment.p2.screen.scale, player.percent);
			spriteX     = getInterpolate(segment.p1.screen.x,     segment.p2.screen.x,     player.percent) + (spriteScale * player.offset * gameSettings['game'+gameData.roundNum].path.width * defaultData.width/2);
			spriteY     = getInterpolate(segment.p1.screen.y,     segment.p2.screen.y,     player.percent);

			if(player.active)
				renderSprite(defaultData.width, defaultData.height, resolution, gameSettings['game'+gameData.roundNum].path.width, sprites, player.sprite, spriteScale, spriteX, spriteY, -0.5, -1, segment.clip);
		}
	
		for(i = 0 ; i < segment.sprites.length ; i++) {
			sprite      = segment.sprites[i];
			spriteScale = segment.p1.screen.scale;
			spriteX     = segment.p1.screen.x + (spriteScale * sprite.offset * gameSettings['game'+gameData.roundNum].path.width * defaultData.width/2);
			spriteY     = segment.p1.screen.y;
			
			if(sprite.active)
				renderSprite(defaultData.width, defaultData.height, resolution, gameSettings['game'+gameData.roundNum].path.width, sprites, sprite.source, spriteScale, spriteX, spriteY, -0.5, -1, segment.clip);
		}
  	}
}

function findSegment(z) {
	return segments[Math.floor(z/defaultData.segmentLength) % segments.length]; 
}


/*!
 * 
 * BUILD ROAD - This is the function that runs to build road
 * 
 */
function getLastY() {
	return (segments.length == 0) ? 0 : segments[segments.length-1].p2.world.y;
}

function addSegment(curve, y) {
	var n = segments.length;
	var segmentColor = {};
	var totalLane = 2;

	if(Math.floor(n/totalLane)%2){
		segmentColor.base = gameSettings['game'+gameData.roundNum].path.light.base;
		segmentColor.path = gameSettings['game'+gameData.roundNum].path.light.path;
		segmentColor.glass = gameSettings['game'+gameData.roundNum].path.light.glass;
		segmentColor.holder = gameSettings['game'+gameData.roundNum].path.light.holder;
		segmentColor.rope = gameSettings['game'+gameData.roundNum].path.light.rope;
		segmentColor.side = gameSettings['game'+gameData.roundNum].path.light.side;
		segmentColor.line = gameSettings['game'+gameData.roundNum].path.light.line;
	}else{
		segmentColor.base = gameSettings['game'+gameData.roundNum].path.dark.base;
		segmentColor.path = gameSettings['game'+gameData.roundNum].path.dark.path;
		segmentColor.glass = gameSettings['game'+gameData.roundNum].path.dark.glass;
		segmentColor.holder = gameSettings['game'+gameData.roundNum].path.dark.holder;
		segmentColor.rope = gameSettings['game'+gameData.roundNum].path.dark.rope;
		segmentColor.side = gameSettings['game'+gameData.roundNum].path.dark.side;
		segmentColor.line = gameSettings['game'+gameData.roundNum].path.dark.line;
	}

  segments.push({
	  index: n,
		 p1: { world: { y: getLastY(), z:  n   *defaultData.segmentLength }, camera: {}, screen: {} },
		 p2: { world: { y: y,       z: (n+1)*defaultData.segmentLength }, camera: {}, screen: {} },
	  curve: curve,
	sprites: [],
	players: [],
	  color: segmentColor
  });
}

function addSprite(n, sprite, offset) {
	segments[n].sprites.push({ source: sprite, offset: offset, active:true});
}

function addPath(enter, hold, leave, curve, y) {
	var startY   = getLastY();
	var endY     = startY + (toInt(y, 0) * defaultData.segmentLength);
	var n, total = enter + hold + leave;
	for(n = 0 ; n < enter ; n++)
		addSegment(easeIn(0, curve, n/enter), easeInOut(startY, endY, n/total));
	for(n = 0 ; n < hold  ; n++)
		addSegment(curve, easeInOut(startY, endY, (enter+n)/total));
	for(n = 0 ; n < leave ; n++)
		addSegment(easeInOut(curve, 0, n/leave), easeInOut(startY, endY, (enter+hold+n)/total));
}

/*!
 * 
 * RESET WORLD - This is the function that runs to reset game world
 * 
 */

function resetWorld(){
	defaultData.maxSpeed = defaultData.segmentLength/(1/60);
	defaultData.accel          =  defaultData.maxSpeed/5;
	defaultData.breaking       = -defaultData.maxSpeed;
	defaultData.decel          = -defaultData.maxSpeed/5;
	defaultData.offRoadDecel   = -defaultData.maxSpeed/2;
	defaultData.offRoadLimit   =  defaultData.maxSpeed/4;
	
	defaultData.cameraDepth = 1 / Math.tan((defaultData.fieldOfView/2) * Math.PI/180);
	defaultData.playerZ = (roundData.players.playerZ * defaultData.segmentLength) + (defaultData.segmentLength/2); //(defaultData.cameraHeight * defaultData.cameraDepth) + 400;
	defaultData.oriPlayerZ = defaultData.playerZ;
	resolution = defaultData.height/1024;
	  
	for(var key in defaultData) {
		worldData[key] = defaultData[key];
	}
}

function resetPath() {
	segments = [];
	
	var pathLength = 100;
	if(gameData.roundNum == 0){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		var pos = [-.5, -.2, .2, .5];
		for(var n=0; n<pos.length; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(25, $.sprites['guard'+guardIndex], pos[n]);
		}
		
	}else if(gameData.roundNum == 1){
		pathLength = gameSettings.game1.length;
		addPath(pathLength, pathLength, pathLength, 0, 0);
		segments[pathLength].color.path = gameSettings.game1.path.end;

		var pos = [-.5, -.2, .2, .5];
		for(var n=0; n<pos.length; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(pathLength + 10, $.sprites['guard'+guardIndex], pos[n]);
		}

		addSprite(pathLength + 3, $.sprites['game1tree'], 0);
		addSprite(pathLength + 2, $.sprites['game1doll'], 0);

	}else if(gameData.roundNum == 2){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		var totalGuards = Math.floor(gameSettings.game2.players/2);
		for(var n=0; n<totalGuards; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(randomInt(roundData.players.startZ, roundData.players.endZ), $.sprites['guard'+guardIndex], Math.random() * randomChoice([-0.8, 0.8]) );
		}
	}else if(gameData.roundNum == 3){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		var totalLength = (defaultGameData.tugStart + defaultGameData.tugHole + gameSettings.game3.players);
		addSprite(totalLength, $.sprites['game3construct'], 0);
	}else if(gameData.roundNum == 4){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		var totalGuards = Math.floor(gameSettings.game4.players/2);
		for(var n=0; n<totalGuards; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(randomInt(roundData.players.startZ, roundData.players.endZ), $.sprites['guard'+guardIndex], Math.random() * randomChoice([-0.8, 0.8]) );
		}
	}else if(gameData.roundNum == 5){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		var totalLength = (gameSettings.game5.length * defaultGameData.bridgeSteps) + defaultGameData.bridgeStart;
		var pos = [-.5, -.2, .2, .5];
		for(var n=0; n<pos.length; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(totalLength + 7, $.sprites['guard'+guardIndex], pos[n]);
		}

		addSprite(totalLength + 10, $.sprites['game5booth'], 0);
	}else if(gameData.roundNum == 6){
		addPath(pathLength, pathLength, pathLength, 0, 0);

		segments[defaultGameData.survivalStart].color.path = gameSettings.game6.path.end;
		segments[defaultGameData.survivalStart + gameSettings.game6.length].color.path = gameSettings.game6.path.end;

		var totalLength = (gameSettings.game5.length * defaultGameData.bridgeSteps) + defaultGameData.bridgeStart;
		var pos = [-.5, -.2, .2, .5];
		for(var n=0; n<pos.length; n++){
			var guardIndex = Math.floor(Math.random() * guards_arr.length);
			addSprite(defaultGameData.survivalStart + gameSettings.game6.length + 3, $.sprites['guard'+guardIndex], pos[n]);
		}
	}

	resetPlayers();
	defaultData.trackLength = segments.length * defaultData.segmentLength;
}

function resetPlayers() {
	players = [];
	cacheContainer.removeAllChildren();

	var n, player, segment, offset, z, speed;
	var playerTurnIndex = 0;
	var halfPeople = Math.floor(gameSettings.game3.players/2);

	for (var n = 0 ; n < roundData.totalPlayers; n++) {
		var randomSegment = randomInt(roundData.players.startZ, roundData.players.endZ);
		offset = Math.random() * randomChoice([-0.8, 0.8]);
		z      = randomSegment * defaultData.segmentLength;
		speed  = randomInt(defaultGameData.playerSpeed[0], defaultGameData.playerSpeed[1]);

		var playerContainer = new createjs.Container();
		var playerIndex = Math.floor(Math.random()*players_arr.length);
		playerContainer.sprite = $.sprites['player'+playerIndex].clone();
		playerContainer.sprite.framerate = randomInt(15, 25);
		playerContainer.sprite.gotoAndPlay('idle');

		playerContainer.numberTxt = new createjs.Text();
		playerContainer.numberTxt.font = "13px kimberleyblack";
		playerContainer.numberTxt.color = "#fff";
		playerContainer.numberTxt.textAlign = "center";
		playerContainer.numberTxt.textBaseline='alphabetic';
		playerContainer.numberTxt.text = randomPlayerNumber();
		playerContainer.numberTxt.x = $.sprites['player'+playerIndex].w/2;
		playerContainer.numberTxt.y = 57;

		playerContainer.addChild(playerContainer.sprite, playerContainer.numberTxt);
		playerContainer.w = $.sprites['player'+playerIndex].w;
		playerContainer.h = $.sprites['player'+playerIndex].h;

		cacheContainer.addChild(playerContainer);

		if(roundData.playerSet){
			var getSegment = roundData.turnArr[playerTurnIndex];
			if(gameData.roundNum == 3){
				speed = 0;
				offset = n%2 == 0 ? -.02 : .02;

				if(n == roundData.totalPlayers - 1){
					playerContainer.sprite = itemCenter.clone();
					playerContainer.removeAllChildren();
					playerContainer.addChild(playerContainer.sprite);

					offset = 0;
				}else if(n >= halfPeople-1){
					playerContainer.sprite.gotoAndPlay('front');
				}
			}else if(gameData.roundNum == 5){
				offset = Math.random() * randomChoice([-0.1, 0.1]);

				getSegment = (defaultGameData.bridgeStart-1) - roundData.bridgeData.turnArr[playerTurnIndex];
			}else if(gameData.roundNum == 6){
				offset = Math.random() * randomChoice([-0.2, 0.2]);
			}

			getSegment = getSegment < 0 ? 0 : getSegment;
			z = getSegment * defaultData.segmentLength;

			if(n == 0){
				roundData.players.playerZ = getSegment;
				playerContainer.numberTxt.text = roundData.playerNumber;
			}

			playerTurnIndex++;
		}else{
			if(n == 0){
				offset = 0;
				z = roundData.players.playerZ;
				playerContainer.sprite.framerate = 20;
				playerContainer.numberTxt.text = roundData.playerNumber;
			}
		}
		
		player = { index:n, offset:offset, z:z, sprite:playerContainer, speed:speed, moveTime:0, sandTime:0, active:true, status:'', action:'idle' };
		segment = findSegment(player.z);
		segment.players.push(player);
		players.push(player);
	}
}

function randomPlayerNumber(){
	var playerNumber = randomInt(1, 999);

	return pad(playerNumber, 3);
}

/*!
 * 
 * RENDER MISC - This is the function that runs for render misc
 * 
 */
function renderPolygon(x1, y1, x2, y2, x3, y3, x4, y4, color, alpha, index){
	var shape = new createjs.Shape();
	shape.graphics.beginFill(color)
				.beginStroke()
				.moveTo(x1, y1)
				.lineTo(x2, y2)
				.lineTo(x3, y3)
				.lineTo(x4, y4)
				.endStroke();

	shape.alpha = alpha == undefined ? 1 : alpha;
	worldContainer.addChild(shape);

	if(index != undefined){
		worldContainer.setChildIndex(shape, 10);
	}
}

function renderSegment(width, x1, y1, w1, x2, y2, w2, fog, color, index){	
	var shape = new createjs.Shape();
	shape.graphics.beginFill(color.base).drawRect(0, y2, width, y1 - y2);
	worldContainer.addChild(shape);
    
	if(gameData.roundNum == 3){
		var holeLength = defaultGameData.tugHole;
		var totalLength = (holeLength) + defaultGameData.tugStart;
		if(index < defaultGameData.tugStart || index >= totalLength + 2){
			if(index >= totalLength + 2 && index <= totalLength + 4){
				renderPolygon(x1-w1, y1, x1+w1, y1, x1+w1, y2+canvasH, x2-w2, y2+canvasH, gameSettings['game'+gameData.roundNum].path.fog, 1, 1);
			}

			renderPolygon(x1-w1, y1, x1+w1, y1, x2+w2, y2, x2-w2, y2, color.path);
			
			var sideW = 10;
			var holderData = {
				space1:w1/100 * holderSpace,
				space2:w2/100 * holderSpace,
				w1:w1/100 * sideW,
				w2:w2/100 * sideW,
			}
			renderPolygon(x1-w1-holderData.w1, y1, x1-w1, y1, x2-w2, y2, x2-w2-holderData.w2, y2, color.side);
    		renderPolygon(x1+w1+holderData.w1, y1, x1+w1, y1, x2+w2, y2, x2+w2+holderData.w2, y2, color.side);
		}

		var holderSpace = 0;
		var ropeW = defaultGameData.ropeWidth;
		var ropeY = defaultGameData.ropeY;
		var holderData = {
			space1:w1/100 * 0,
			space2:w2/100 * 0,
			w1:w1/100 * ropeW,
			w2:w2/100 * ropeW,
		}

		renderPolygon(x1-holderData.w1, y1-ropeY, x1-holderData.space1, y1-ropeY, x2-holderData.space2, y2-ropeY, x2-holderData.w2, y2-ropeY, color.rope);
		renderPolygon(x1+holderData.w1, y1-ropeY, x1+holderData.space1, y1-ropeY, x2+holderData.space2, y2-ropeY, x2+holderData.w2, y2-ropeY, color.rope);
	}else if(gameData.roundNum == 5){
		var glassW = defaultGameData.bridgeGlassWidth;
		var holderW = defaultGameData.bridgeGlassHoldWidth;
		var holderSpace = defaultGameData.bridgeGlassHoldSpace;

		var glassData = {
			space1:w1/100 * 5,
			space2:w2/100 * 5,
			w1:w1/100 * glassW,
			w2:w2/100 * glassW,
		}

		var findIndex = index - (defaultGameData.bridgeStart + 2);
		for(var n=0; n<roundData.bridgeData.seqArr.length; n++){
			var firstIndex = n * defaultGameData.bridgeSteps;
			var nextIndex = firstIndex + 1;

			var renderCon = false;
			if(firstIndex == findIndex){
				renderCon = true;
			}else if(nextIndex == findIndex){
				renderCon = true;
			}

			if(renderCon){
				var glassLeft = color.glass;
				var glassRight = color.glass;

				if(roundData.bridgeData.seqArr[n].fail){
					if(roundData.bridgeData.seqArr[n].side == 1){
						glassLeft = '';
					}else{
						glassRight = '';
					}
				}

				renderPolygon(x1-glassData.w1, y1, x1-glassData.space1, y1, x2-glassData.space2, y2, x2-glassData.w2, y2, glassLeft, gameSettings.game5.glassAlpha);
				renderPolygon(x1+glassData.w1, y1, x1+glassData.space1, y1, x2+glassData.space2, y2, x2+glassData.w2, y2, glassRight, gameSettings.game5.glassAlpha);
			}
		}

		var holderData = {
			space1:w1/100 * holderSpace,
			space2:w2/100 * holderSpace,
			w1:w1/100 * holderW,
			w2:w2/100 * holderW,
		}

		renderPolygon(x1-holderData.w1, y1, x1-holderData.space1, y1, x2-holderData.space2, y2, x2-holderData.w2, y2, color.holder);
		renderPolygon(x1+holderData.w1, y1, x1+holderData.space1, y1, x2+holderData.space2, y2, x2+holderData.w2, y2, color.holder);

		var holderData = {
			space1:w1/100 * glassW,
			space2:w2/100 * glassW,
			w1:w1/100 * (glassW + (holderW - holderSpace)),
			w2:w2/100 * (glassW + (holderW - holderSpace)),
		}

		renderPolygon(x1-holderData.w1, y1, x1-holderData.space1, y1, x2-holderData.space2, y2, x2-holderData.w2, y2, color.holder);
		renderPolygon(x1+holderData.w1, y1, x1+holderData.space1, y1, x2+holderData.space2, y2, x2+holderData.w2, y2, color.holder);

		var totalLength = (gameSettings.game5.length * defaultGameData.bridgeSteps) + defaultGameData.bridgeStart;
		if(index < defaultGameData.bridgeStart || index >= totalLength + 2){
			if(index >= totalLength + 2 && index <= totalLength + 4){
				renderPolygon(x1-w1, y1, x1+w1, y1, x1+w1, y2+canvasH, x2-w2, y2+canvasH, gameSettings['game'+gameData.roundNum].path.fog, 1, 1);
			}

			renderPolygon(x1-w1, y1, x1+w1, y1, x2+w2, y2, x2-w2, y2, color.path);
		}
	}else if(gameData.roundNum == 6){
		if(index >= defaultGameData.survivalStart && index <= defaultGameData.survivalStart + gameSettings.game6.length){
			var sideW = 10;
			var holderData = {
				space1:w1/100 * holderSpace,
				space2:w2/100 * holderSpace,
				w1:w1/100 * sideW,
				w2:w2/100 * sideW,
			}
			renderPolygon(x1-w1-holderData.w1, y1, x1-w1, y1, x2-w2, y2, x2-w2-holderData.w2, y2, color.line);
    		renderPolygon(x1+w1+holderData.w1, y1, x1+w1, y1, x2+w2, y2, x2+w2+holderData.w2, y2, color.line);
		}

		renderPolygon(x1-w1, y1, x1+w1, y1, x2+w2, y2, x2-w2, y2, color.path);
	}else{
		renderPolygon(x1-w1, y1, x1+w1, y1, x2+w2, y2, x2-w2, y2, color.path);
	}
    
    renderFog(0, y1, width, y2-y1, fog);
}

function renderBackground(background, width, height, layer, rotation, offset){
	var newBackground = $.background[layer.id].clone();
	var newBackgroundMirror = $.background[layer.id].clone();
    rotation = rotation || 0;
    offset   = offset   || 0;
	
	newBackground.x = rotation * layer.w;
	if(rotation > 0){
		newBackground.x = -(newBackground.x);	
	}else{
		newBackground.x = Math.abs(newBackground.x);	
	}
	
	var destY = (defaultData.lastY/defaultData.height) * .2;
	newBackground.y = destY+offset;
	
	worldContainer.addChild(newBackground, newBackgroundMirror);
	
	newBackgroundMirror.x = newBackground.x + layer.w;
	newBackgroundMirror.y = newBackground.y;
}

function renderSprite(width, height, resolution, roadWidth, sprites, sprite, scale, destX, destY, offsetX, offsetY, clipY){
	var newSprite = sprite.clone(true);
	
	var destW  = (sprite.w * scale * width/2) * (defaultData.scale * roadWidth);
    var destH  = (sprite.h * scale * width/2) * (defaultData.scale * roadWidth);

    destX = destX + (destW * (offsetX || 0));
    destY = destY + (destH * (offsetY || 0));
	
    var clipH = clipY ? Math.max(0, destY+destH-clipY) : 0;
    if (clipH < destH){
		newSprite.x = destX;
		newSprite.y = destY;
		newSprite.scaleX = destW/sprite.w;
		newSprite.scaleY = (destH - clipH)/sprite.h;
		
		worldContainer.addChild(newSprite);
	}
}

function renderFog(x, y, width, height, fog){
	if (fog < 1) {
		var shape = new createjs.Shape();
		shape.graphics.beginFill(gameSettings['game'+gameData.roundNum].path.fog).drawRect(x, y, width, height);
		shape.alpha = (1-fog);
		worldContainer.addChild(shape);
    }
}

/*!
 * 
 * END GAME - This is the function that runs for end game
 * 
 */
function endGame(win, timer){
	if(!gameData.ended){
		playerData.win = win;
		toggleGameInstruction(false);
		clearCandyDrawing();

		gameData.ended = true;
		gameData.interact = false;

		roundData.lightData.forward = false;
		roundData.lightData.stop = true;

		roundData.survivalData.start = false;
		roundData.survivalData.move = false;
		itemControl.visible = false;

		if(win){
			//calculate score
			if(gameData.roundNum == 6){
				var lifeLeft = roundData.survivalData.userHealth;
				var roundScore = lifeLeft * .05;
			}else{
				var timeLeft = gameSettings['game'+gameData.roundNum].timer - timeData.timer;
				var roundScore = timeLeft * .0005;
			}
			playerData.score += Math.round(roundScore);


		}else if(!win){
			var deadArr = [1,2,4];
			if(deadArr.indexOf(gameData.roundNum) != -1){
				updatePlayerFrame(0, 'dead');
			}
		}

		TweenMax.to(resultContainer, 0, {delay:.8, overwrite:true, onComplete:function(){
			if(!win){
				displayGameRound(false, false);
			}else{
				displayGameRound(false, true);
			}

			TweenMax.to(resultContainer, 3, {delay:0, overwrite:true, onComplete:function(){
				if(playerData.win){
					var newRound = gameData.roundNum + 1;
					if(newRound <= gameData.totalRound){
						gameData.roundNum = newRound;

						stopGame();
						startGame();
						resetWorld();
						resetPath();
					}else{
						goPage('result');	
					}
				}else{
					goPage('result');
				}
			}});
		}});
	}

	if(timer){
		if(gameData.roundNum == 1){
			TweenMax.killTweensOf(roundData.lightData);
			TweenMax.killTweensOf(roundData.lightData.moveTween);
			TweenMax.killTweensOf(roundData.lightData.timeTween);
			
			for(var n=1; n<players.length; n++){
				players[n].speed = 0;
				players[n].moveTime = 0;

				if(players[n].status != 'dead'){
					if(players[n].status != 'complete'){
						players[n].status = 'nextDead';
					}
				}
			}
			
			loopPlayerDead();
		}else if(gameData.roundNum == 3){
			gameData.paused = true;
			stopSoundLoop('soundRope');
		}

		toggleGameTimer(false);
	}
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = false;
	buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	if(playerData.win){
		title = shareWinTitle.replace("[SCORE]", addCommas(gameData.roundNum));
		text = shareWinMessage.replace("[SCORE]", addCommas(gameData.roundNum));
	}else{
		title = shareTitle.replace("[SCORE]", addCommas(gameData.roundNum));
		text = shareMessage.replace("[SCORE]", addCommas(gameData.roundNum));
	}

	if(gameCustomScore.status){
		title = shareTitle.replace("[SCORE]", addCommas(playerData.score));
		text = shareMessage.replace("[SCORE]", addCommas(playerData.score));
	}
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}