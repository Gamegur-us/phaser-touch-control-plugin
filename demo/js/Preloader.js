/* global BasicGame */
(function(BasicGame) {
	'use strict';
	BasicGame.Preloader = function () {

		this.background = null;
		this.preloadBar = null;

		this.ready = false;

	};



	BasicGame.Preloader.prototype = {

		preload: function () {
				

			//	These are the assets we loaded in Boot.js
			//	A nice sparkly background and a loading progress bar
			this.preloadBar = this.add.sprite(0, 400, 'preloaderBar');

			//	This sets the preloadBar sprite as a loader sprite.
			//	What that does is automatically crop the sprite from 0 to full-width
			//	as the files below are loaded in.
			this.load.setPreloadSprite(this.preloadBar);

			//	Here we load the rest of the assets our game needs.
			//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
			//this.load.audio('titleMusic', ['audio/main_menu.mp3']);
			//this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
			//	+ lots of other required assets here

		    this.load.spritesheet('character', 'assets/images/rpg_sprite_walk.png', 72, 96, 32);
			this.load.image('background', 'assets/images/background.png');
			
		    this.load.spritesheet('buttons', 'assets/images/buttons.png', 215, 41);
			this.load.spritesheet('githubstar', 'assets/images/github.png', 377, 75);


			this.load.image('compass', 'assets/images/compass_rose.png');
			this.load.image('touch_segment', 'assets/images/touch_segment.png');
			this.load.image('touch', 'assets/images/touch.png');



		},

		create: function () {
			//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
			this.preloadBar.cropEnabled = false;

		},

		update: function () {

			//	You don't actually need to do this, but I find it gives a much smoother game experience.
			//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
			//	You can jump right into the menu if you want and still play the music, but you'll have a few
			//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
			//	it's best to wait for it to decode here first, then carry on.
			
			//	If you don't have any music in your game then put the game.state.start line into the create function and delete
			//	the update function completely.
			
			//if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
			//{
				this.ready = true;
				this.state.start('Game');
				
			//}

		}

	};
})(BasicGame);