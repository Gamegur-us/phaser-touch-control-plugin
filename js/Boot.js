/* global Phaser */

var BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false
};


(function(BasicGame) {
    'use strict';

    BasicGame.Boot = function (game) {
    };

    BasicGame.Boot.prototype = {

        preload: function () {
      
            //  Here we load the assets required for our preloader (in this case a background and a loading bar)
            this.load.image('preloaderBar', 'assets/images/preloadr_bar.png');
            this.stage.backgroundColor = '#444';

        },

        create: function () {
            
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop)
            {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                //this.scale.minWidth = 320;
                //this.scale.minHeight = 480;
                this.scale.minWidth = 256;
                this.scale.minHeight = 384;
                
                this.scale.maxWidth = 640;
                this.scale.maxHeight = 960;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.setScreenSize(true);
            } else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 256;
                this.scale.minHeight = 384;
                this.scale.maxWidth = 640;
                this.scale.maxHeight = 960;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.forceOrientation(false,true);
                this.scale.hasResized.add(this.gameResized, this);
                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
                this.scale.setScreenSize(true);
            }

            this.state.start('Preloader');

        },

        gameResized: function (width, height) {

            //  This could be handy if you need to do any extra processing if the game resizes.
            //  A resize could happen if for example swapping orientation on a device.

        },

        enterIncorrectOrientation: function () {

            BasicGame.orientated = false;

            document.getElementById('orientation').style.display = 'block';

        },

        leaveIncorrectOrientation: function () {

            BasicGame.orientated = true;

            document.getElementById('orientation').style.display = 'none';

        }

    };
})(BasicGame);