import 'phaser';

export default class RPSButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.sprite = this.scene.add.sprite(0, 0, key).setInteractive();

    this.add(this.sprite);

    this.sprite.on('pointerdown', function () {
    }.bind(this));

    this.sprite.on('pointerover', function () {
      this.sprite.scale = 1.2;
    }.bind(this));

    this.sprite.on('pointerout', function () {
      this.sprite.scale = 1;
    }.bind(this));

    this.scene.add.existing(this);
  }
}