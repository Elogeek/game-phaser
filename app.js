// Init phaser
const config = {
    width: 700,
    height: 400,
    type: Phaser.AUTO,
    //add gravity for neko chute
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
    // pour que le perso s'arrête lorsque l'user n'appuie pas sur les touches
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
