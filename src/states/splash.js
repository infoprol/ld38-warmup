import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    // this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    // this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    // centerGameObjects([this.loaderBg, this.loaderBar])

    // this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    // this.load.image('devLeagueLogo', 'assets/images/devleague.png')
    this.load.image('matt', 'assets/images/matt.png');
    this.load.image('lawn', 'assets/images/lawn.png')
    this.load.image('house', 'assets/images/house.png')
    this.load.image('fencePost', 'assets/images/fence-post.png')
    this.load.image('fencePostTop', 'assets/images/fence-post-top.png')
  }

  create () {
    this.state.start('Game')
  }

}
