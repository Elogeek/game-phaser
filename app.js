// Init phaser
const config = {

    width: 800,
    height: 600,
    backgroundColor: 'rgba(178, 222, 39)',
    //The title of your game will appear in the Dev Tools
    title: "Neko Game",
    type: Phaser.AUTO,
    //add gravity for the cat to fall
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 450},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config);
let neko;
let cursors;

function preload() {
    this.load.image('neko', 'assets/img/neko.png');
}

function create() {
    neko = this.physics.add.image(100, 100, 'neko');
    neko.body.collideWorldBounds = true;
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {

    // so that the cat stops when the user does not press the keys to move it
    neko.setVelocityX(0);

    if(cursors.up.isDown){
        neko.setVelocity(0, -300)
    }
    if(cursors.right.isDown){
        neko.setVelocity(300, 0)
    }
    if(cursors.left.isDown){
        neko.setVelocity(-300, 0)
    }
}
