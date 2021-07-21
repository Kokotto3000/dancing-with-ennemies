/** @type {HTMLCanvasElement} */

const CANVAS= document.getElementById('canvas-1');
const CTX= CANVAS.getContext('2d');
const CANVAS_WIDTH= CANVAS.width= innerWidth;
const CANVAS_HEIGHT= CANVAS.height= innerHeight;

const enemiesNumber= 50;
const enemiesArray= [];

// const enemyImage= new Image();
// enemyImage.src= '../img/enemy1.png';

let gameFrame= 0;

// enemy1= {
//     x: 0,
//     y: 0,
//     width: 50,
//     height: 50
// };

class Enemy {
    constructor(){
        this.image= new Image();
        this.image.src= "https://kokotto3000.github.io/dancing-with-ennemies/img/enemy1.png";                
        // this.speed= Math.random() * 4 - 2; //nombre entre -2 et 2)
        this.spriteWidth= 293;
        this.spriteHeight= 155;
        this.width= this.spriteWidth / 2.5;
        this.height= this.spriteHeight / 2.5;
        this.x= Math.random() * (CANVAS_WIDTH - this.width);
        this.y= Math.random() * (CANVAS_HEIGHT - this.height);
        this.frame= 0;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
    }

    update() {
        // this.x+= this.speed;
        this.x += Math.random() * 3 - 1.5;
        // this.y+= this.speed;
        this.y += Math.random() * 5 - 2.5;
        if(gameFrame % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
        
    }

    draw() {
        // CTX.strokeRect(this.x, this.y, this.width, this.height);
        CTX.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

// const enemy1= new Enemy();

for(let i= 0; i < enemiesNumber; i++){
    enemiesArray.push(new Enemy());
}
console.log(enemiesArray);

function animate(){
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();