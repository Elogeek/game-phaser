// Init phaser
const config = {

    width: 800,
    height: 600,
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
let background;
let food;

function preload() {
    this.load.image('background', "assets/img/background.jpeg")
    this.load.image('neko', 'assets/img/neko.png');
    this.load.image('food', 'assets/img/food.png')
}

function create() {
    //const camera = this.cameras.main;
    //camera.setBounds(0, 0, 800, 600);

    neko = this.physics.add.image(100, 100, 'neko');
    neko.body.collideWorldBounds = true;
    // Set the order in which sprites are displayed on the stage, (the cat is in front)
    neko.setDepth(10);
    cursors = this.input.keyboard.createCursorKeys();

    // create background of game
    background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    // Resize game image size
    background.setDisplaySize(800, 600);
    background.setScrollFactor(0);

    // Create food
    // Generates random coordinates between 0 and 800 for the X axis and between 0 and 600 for the Y axis
    const x = Phaser.Math.Between(0, 800);
    const y = Phaser.Math.Between(0, 600);
    // Creates a food sprite at the generated random position
    food = this.add.image(x, y, 'food');
    food.setDepth(5);

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
    // Food appears every 5 seconds
    food = setInterval(create, 5000);
}


