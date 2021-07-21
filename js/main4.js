/** @type {HTMLCanvasElement} */

const CANVAS4= document.getElementById('canvas-4');
const CTX4= CANVAS4.getContext('2d');
CANVAS4.width= innerWidth;
CANVAS4.height= innerHeight;

const enemiesNumber4= 50;
const enemiesArray4= [];

let gameFrame4= 0;

class Enemy4 {
    constructor(){
        this.image= new Image();
        this.image.src= "https://kokotto3000.github.io/dancing-with-ennemies/img/enemy4.png";                
        this.speed= Math.random() * 4 + 1; //entre 1 et 5
        this.spriteWidth= 213;
        this.spriteHeight= 213;
        this.width= this.spriteWidth / 2;
        this.height= this.spriteHeight / 2;
        this.x= Math.random() * (CANVAS4.width - this.width);
        this.y= Math.random() * (CANVAS4.height - this.height);
        this.newX= Math.random() * (CANVAS4.width - this.width);
        this.newY= Math.random() * (CANVAS4.height - this.height);
        this.frame= 0;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
        this.interval= Math.floor(Math.random() * 200 + 50);
    }

    update() {
        if(gameFrame % this.interval === 0){
            this.newX= Math.random() * (CANVAS4.width - this.width);
            this.newY= Math.random() * (CANVAS4.height - this.height);
        }
        let dx= this.x - this.newX;
        let dy= this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;
        if(gameFrame4 % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
    }

    draw() {
        CTX4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for(let i= 0; i < enemiesNumber4; i++){
    enemiesArray4.push(new Enemy4());
}

//fusionner les functions animate à la fin
function animate4(){
    CTX4.clearRect(0, 0, CANVAS4.width, CANVAS4.height);
    // enemy1.update();
    // enemy1.draw();
    enemiesArray4.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame4++;
    requestAnimationFrame(animate4);
}

animate4();