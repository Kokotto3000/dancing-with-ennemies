/** @type {HTMLCanvasElement} */

const CANVAS3= document.getElementById('canvas-3');
const CTX3= CANVAS3.getContext('2d');
CANVAS3.width= innerWidth;
CANVAS3.height= innerHeight;

const enemiesNumber3= 50;
const enemiesArray3= [];

let gameFrame3= 0;

class Enemy3 {
    constructor(){
        this.image= new Image();
        this.image.src= "../img/enemy3.png";                
        this.speed= Math.random() * 4 + 1; //entre 1 et 5
        this.spriteWidth= 218;
        this.spriteHeight= 177;
        this.width= this.spriteWidth / 2;
        this.height= this.spriteHeight / 2;
        this.x= Math.random() * (CANVAS3.width - this.width);
        this.y= Math.random() * (CANVAS3.height - this.height);
        this.frame= 0;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
        // this.angle= Math.random() * 2;
        //cette valeur est aussi interessante à faire varier (départ)
        this.angle= 50;
        //cette valeur fait aussi beaucoup varier le mouvement dans cet exemple
        this.angleSpeed= Math.random() * 0.5 + 0.5; //minimum de 0.5 pour la vitesse
        this.curve= Math.random() * 200 + 10;//minimum 50 pour le rayon
    }

    update() {
        //si le sin et le cos sont égaux le mouvement est un cercle, si on fait varier les 2 valeurs le mouvement suit une sorte de vague ou tornade plus ou moins importante, si on veut par ex dessiner un 8, doubler la valeur sur l'un des 2 (90/180) on peut aussi avoir 2 "cos" avec des valeurs différentes
        // this.x = this.curve * Math.sin(this.angle * Math.PI/90) + (CANVAS3.width/2 - this.width/2);
        //technique pour dessiner des 8
        this.x = CANVAS3.width/2 * Math.cos(this.angle * Math.PI/180) + (CANVAS3.width/2 - this.width/2);
        // this.y = this.curve * Math.cos(this.angle * Math.PI/360) + (CANVAS3.height/2 - this.height/2);
        this.y = CANVAS3.height/2 * Math.sin(this.angle * Math.PI/90) + (CANVAS3.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if(gameFrame3 % this.flapSpeed === 0) this.frame > 4 ? this.frame = 0 : this.frame++;
    }

    draw() {
        CTX3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for(let i= 0; i < enemiesNumber3; i++){
    enemiesArray3.push(new Enemy3());
}

//fusionner les functions animate à la fin
function animate3(){
    CTX3.clearRect(0, 0, CANVAS3.width, CANVAS3.height);
    // enemy1.update();
    // enemy1.draw();
    enemiesArray3.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame3++;
    requestAnimationFrame(animate3);
}

animate3();