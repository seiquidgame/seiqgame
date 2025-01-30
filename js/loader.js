////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		resizeGameFunc();
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/button_start.png', id:'buttonStart'},
			{src:'assets/button_choose.png', id:'buttonChoose'},
			{src:'assets/item_piggy.png', id:'itemPiggy'},
			{src:'assets/item_money_01.png', id:'itemMoney1'},
			{src:'assets/item_money_02.png', id:'itemMoney2'},
			{src:'assets/item_money_03.png', id:'itemMoney3'},
			{src:'assets/item_money_04.png', id:'itemMoney4'},

			{src:'assets/item_timer.png', id:'itemTimer'},
			{src:'assets/item_light.png', id:'itemLight'},
			{src:'assets/item_candy.png', id:'itemCandy'},
			{src:'assets/item_candy_cover.png', id:'itemCandyCover'},
			{src:'assets/item_needle.png', id:'itemNeedle'},
			{src:'assets/item_pixel.png', id:'itemPixel'},
			{src:'assets/item_hand.png', id:'itemHand'},
			{src:'assets/item_hand2.png', id:'itemHand2'},
			{src:'assets/item_marbleball.png', id:'itemMarbleBall'},
			{src:'assets/button_odd.png', id:'buttonOdd'},
			{src:'assets/button_even.png', id:'buttonEven'},
			{src:'assets/item_center.png', id:'itemCenter'},
			{src:'assets/item_control.png', id:'itemControl'},
			{src:'assets/button_level.png', id:'buttonLevel'},
			{src:'assets/button_arrow.png', id:'buttonArrow'},
			
			{src:'assets/button_confirm.png', id:'buttonConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/item_confirm.png', id:'itemExit'},
			{src:'assets/item_confirm_p.png', id:'itemExitP'},
			
			{src:'assets/item_result.png', id:'itemResult'},
			{src:'assets/item_result_p.png', id:'itemResultP'},
			{src:'assets/button_restart.png', id:'buttonRestart'},
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_music_on.png', id:'buttonMusicOn'},
			{src:'assets/button_music_off.png', id:'buttonMusicOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
		{src:'assets/button_settings.png', id:'buttonSettings'}];


	for(var n = 0; n<players_arr.length; n++) {
		manifest.push({src:players_arr[n].src, id:'player'+n});
	}

	for(var n = 0; n<guards_arr.length; n++) {
		manifest.push({src:guards_arr[n].src, id:'guard'+n});
	}
	
	for(var n = 0; n<=gameData.totalRound; n++) {
		for(var key in gameSettings['game'+n].background) {
			if(gameSettings['game'+n].background[key].src != undefined){
				manifest.push({src:gameSettings['game'+n].background[key].src, id:('game'+n)+key});
			}
		}

		for(var key in gameSettings['game'+n].items) {
			if(gameSettings['game'+n].items[key].src != undefined){
				manifest.push({src:gameSettings['game'+n].items[key].src, id:('game'+n)+key});
			}
		}
	}

	for(var n = 0; n<gameSettings['game2'].candy.length; n++) {
		manifest.push({src:gameSettings['game2'].candy[n].src, id:'candy'+n});
		manifest.push({src:gameSettings['game2'].candy[n].finalSrc, id:'candyFinal'+n});
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}else{
		if(!enableDesktopSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/music.ogg', id:'musicGame'});
		
		manifest.push({src:'assets/sounds/click.ogg', id:'soundClick'});
		manifest.push({src:'assets/sounds/fail.ogg', id:'soundFail'});
		manifest.push({src:'assets/sounds/win.ogg', id:'soundWin'});
		manifest.push({src:'assets/sounds/complete.ogg', id:'soundComplete'});
		manifest.push({src:'assets/sounds/lighton.ogg', id:'soundLightOn'});
		manifest.push({src:'assets/sounds/lightoff.ogg', id:'soundLightOff'});
		manifest.push({src:'assets/sounds/shot1.ogg', id:'soundShot1'});
		manifest.push({src:'assets/sounds/shot2.ogg', id:'soundShot2'});
		manifest.push({src:'assets/sounds/shot3.ogg', id:'soundShot3'});
		manifest.push({src:'assets/sounds/crack1.ogg', id:'soundCrack1'});
		manifest.push({src:'assets/sounds/crack2.ogg', id:'soundCrack2'});
		manifest.push({src:'assets/sounds/crack3.ogg', id:'soundCrack3'});
		manifest.push({src:'assets/sounds/crack_error.ogg', id:'soundCrackError'});
		manifest.push({src:'assets/sounds/crack_final.ogg', id:'soundCrackFinal'});
		manifest.push({src:'assets/sounds/glass1.ogg', id:'soundGlass1'});
		manifest.push({src:'assets/sounds/glass2.ogg', id:'soundGlass2'});
		manifest.push({src:'assets/sounds/glass3.ogg', id:'soundGlass3'});
		manifest.push({src:'assets/sounds/glass_broken.ogg', id:'soundGlassBroken'});
		manifest.push({src:'assets/sounds/sand1.ogg', id:'soundSand1'});
		manifest.push({src:'assets/sounds/sand2.ogg', id:'soundSand2'});
		manifest.push({src:'assets/sounds/sand3.ogg', id:'soundSand3'});
		manifest.push({src:'assets/sounds/marble.ogg', id:'soundMarble'});
		manifest.push({src:'assets/sounds/marble_roll.ogg', id:'soundMarbleRoll'});
		manifest.push({src:'assets/sounds/marble_hit.ogg', id:'soundMarbleHit'});
		manifest.push({src:'assets/sounds/scream1.ogg', id:'soundScream1'});
		manifest.push({src:'assets/sounds/scream2.ogg', id:'soundScream2'});
		manifest.push({src:'assets/sounds/scream3.ogg', id:'soundScream3'});
		manifest.push({src:'assets/sounds/ropecracking.ogg', id:'soundRope'});
		manifest.push({src:'assets/sounds/stab1.ogg', id:'soundStab1'});
		manifest.push({src:'assets/sounds/stab2.ogg', id:'soundStab2'});
		manifest.push({src:'assets/sounds/stab3.ogg', id:'soundStab3'});
		manifest.push({src:'assets/sounds/switch.ogg', id:'soundSwitch'});

		manifest.push({src:'assets/sounds/sound_beep.ogg', id:'soundCountdown'});
		manifest.push({src:'assets/sounds/sound_beep_end.ogg', id:'soundCountdownEnd'});
		manifest.push({src:'assets/sounds/sound_beep_close.ogg', id:'soundCountdownClose'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+' BILLIONS');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}