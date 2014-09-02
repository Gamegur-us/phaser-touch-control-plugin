/* global Phaser */
/* global BasicGame */

(function(BasicGame) {
    'use strict';

    BasicGame.Game = function () {

        //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

        /*this.game;        //  a reference to the currently running game
        this.add;       //  used to add sprites, text, groups, etc 
        this.camera;    //  a reference to the game camera
        this.cache;     //  the game cache
        this.input;     //  the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
        this.load;      //  for preloading assets
        this.math;      //  lots of useful common math operations
        this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc
        this.stage;     //  the game stage
        this.time;      //  the clock
        this.tweens;    //  the tween manager
        this.world;     //  the game world
        this.particles; //  the particle manager
        this.physics;   //  the physics manager
        this.rnd;       //  the repeatable random number generator
    */
        //  You can use any of these from any function within this State.
        //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    };

    BasicGame.Game.prototype = {
        create: function () {

            this.game.touchControl = this.game.plugins.add(Phaser.Plugin.TouchControl);
            this.game.touchControl.inputEnabled();

            this.tilesprite = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background');
            this.character = this.add.sprite(this.world.centerX, this.world.centerY, 'character');
            this.character.anchor.set(0.5);

            this.character.animations.add('walkDown', [0,1,2,3,4,5,6,7], 20 /*fps */, true);
            this.character.animations.add('walkUp', [8,9,10,11,12,13,14], 20 /*fps */, true);
            this.character.animations.add('walkLeft', [14,15,16,17,18,19,20], 20 /*fps */, true);
            this.character.animations.add('walkRight', [21,22,23,24,25,26,27], 20 /*fps */, true);
            //this.character.animations.play('walkDown', 10, true);
            //this.character.animations.play('walkDown');
        },
        update: function() {

        }
     };

})(BasicGame);