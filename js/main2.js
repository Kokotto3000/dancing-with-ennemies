/** @type {HTMLCanvasElement} */

const CANVAS2= document.getElementById('canvas-2');
const CTX2= CANVAS2.getContext('2d');
CANVAS2.width= innerWidth;
CANVAS2.height= innerHeight;

const enemiesNumber2= 50;
const enemiesArray2= [];

let gameFrame2= 0;

class Enemy2 {
    constructor(){
        this.image= new Image();
        this.image.src= "../img/enemy2.png";                
        this.speed= Math.random() * 4 + 1; //entre 1 et 5
        this.spriteWidth= 266;
        this.spriteHeight= 188;
        this.width= this.spriteWidth / 2;
        this.height= this.spriteHeight / 2;
        this.x= Math.random() * (CANVAS2.width - this.width);
        this.y= Math.random() * (CANVAS2.height - this.height);
        this.frame= 0;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
        // this.angle= Math.random() * 2;
        this.angle= 0;
        this.angleSpeed= Math.random() * 0.2;
        this.curve= Math.random() * 5;
    }

    update() {
        this.x -= this.speed;
        if(this.x + this.width < 0) this.x= CANVAS2.width;
        this.y+= this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if(gameFrame2 % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
        
    }

    draw() {
        CTX2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for(let i= 0; i < enemiesNumber2; i++){
    enemiesArray2.push(new Enemy2());
}
console.log(enemiesArray2);

function animate2(){
    CTX2.clearRect(0, 0, CANVAS2.width, CANVAS2.height);
    enemiesArray2.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame2++;
    requestAnimationFrame(animate2);
}

animate2();