import 'phaser';
import Button from '../Objects/Button';
import RPSButton from '../Objects/RPSButton';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('phaserLogo', 'assets/logo.png');
  }
 
  create () {
    console.log("GameScene: create()")

    this.rockButton = new RPSButton(this, 240, 300, 'rock');
    this.paperButton = new RPSButton(this, 400, 300, 'paper');
    this.scissorsButton = new RPSButton(this, 560, 300, 'scissors');

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }

  addRPSButton(x, y, key) {
    var image = this.add.image(x, y, key).setInteractive();
    image.on('pointerover', function () {
      image.scale = 1.2;
    }.bind(this));

    image.on('pointerout', function () {
      image.scale = 1.0;
    }.bind(this));
  }
};