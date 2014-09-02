/**
  * Phaser Touch Control Plugin
  * It adds a movement control for mobile and tablets devices

	The MIT License (MIT)

	Copyright (c) 2014 Eugenio Fage

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

	Contact: https://github.com/eugenioclrc, @eugenioclrc

  */

(function(window, Phaser) {
	/**
	  * StateTranistion Plugin for Phaser
	  */
	Phaser.Plugin.TouchControl = function (game, parent) {
		/* Extend the plugin */
		Phaser.Plugin.call(this, game, parent);
		this.input = this.game.input;

		this.compass = this.game.add.sprite(0, 0, 'compass');
		this.compass.anchor.set(0.5);
		this.compass.visible=false;

		this.touchsegment1 = this.game.add.sprite(0, 0, 'touch_segment');
		this.touchsegment1.anchor.set(0.5);
		this.touchsegment1.visible=false;
		this.touchsegment2 = this.game.add.sprite(0, 0, 'touch_segment');
		this.touchsegment2.anchor.set(0.5);
		this.touchsegment2.visible=false;
		this.touch = this.game.add.sprite(0, 0, 'touch');
		this.touch.anchor.set(0.5);
		this.touch.visible=false;

	};

	//Extends the Phaser.Plugin template, setting up values we need
	Phaser.Plugin.TouchControl.prototype = Object.create(Phaser.Plugin.prototype);
	Phaser.Plugin.TouchControl.prototype.constructor = Phaser.Plugin.TouchControl;


	Phaser.Plugin.TouchControl.prototype.inputEnabled = function() {
		
		this.input.onDown.add(createCompass.bind(this));
		this.input.onUp.add(removeCompass.bind(this));
	};

	var initialPoint;
	var createCompass = function(){
		this.compass.x=this.input.worldX;
		this.compass.y=this.input.worldY;
		this.compass.visible=true;
		this.compass.bringToTop();

		this.touchsegment1.x=this.input.worldX;
		this.touchsegment1.y=this.input.worldY;
		this.touchsegment1.visible=true;
		this.touchsegment1.bringToTop();

		this.touchsegment2.x=this.input.worldX;
		this.touchsegment2.y=this.input.worldY;
		this.touchsegment2.visible=true;
		this.touchsegment2.bringToTop();

		this.touch.x=this.input.worldX;
		this.touch.y=this.input.worldY;
		this.touch.visible=true;
		this.touch.bringToTop();

			

		this.preUpdate=setDirection.bind(this);

		initialPoint=this.input.activePointer.position.clone();
		
	};
	var removeCompass = function(){
		this.compass.visible=false;
		this.touchsegment1.visible=false;
		this.touchsegment2.visible=false;
		this.touch.visible=false;
		this.preUpdate=empty;
	};
	
	var empty = function(){
	};

	var setDirection = function() {
		var d=initialPoint.distance(this.input.activePointer.position);
		if(d>1){
			var deltaX=this.input.activePointer.position.x-initialPoint.x;
			var deltaY=this.input.activePointer.position.y-initialPoint.y;
			this.touchsegment1.x=initialPoint.x+(deltaX)/3;
			this.touchsegment2.x=initialPoint.x+(deltaX)/3*2;
			this.touchsegment1.y=initialPoint.y+(deltaY)/3;
			this.touchsegment2.y=initialPoint.y+(deltaY)/3*2;
			this.touch.x=this.input.activePointer.position.x;
			this.touch.y=this.input.activePointer.position.y;
			
		}
	};
	Phaser.Plugin.TouchControl.prototype.preUpdate = empty;

	
}(window, Phaser));