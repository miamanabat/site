const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255,255,255)'; //'rgb(0,0,0)';'rgb(240,240,240)'; 
ctx.fillRect(0,0,width,height);

ctx.translate(width/2,height/2);

let image = new Image();
image.src = 'assets/canvas/didiAnimate.png';
image.onload = draw;

let image1 = new Image();
image1.src = 'assets/canvas/mango.png';

let dir = 1;
let sprite = 0;
let posX = -width/2;
let posXMango = -width/2;
/*      let countDownDate = new Date();
let time = 0; */


document.addEventListener('keypress', function(event){
               console.log(event);
            if (event.key == 'a'){
                dir = -1;
                posX -= 10;
            } else if (event.key == 'd') {
                dir = 1;
                posX += 10;
            } else if (event.key == 'w') {
                updown = 1;
                //posY += 10;
            } else if (event.key == 's') {
                updown = -1;
                //posY -= 10;
            }
            sprite++;
               draw();
        });
function draw() {
  ctx.fillRect(-(width/2),-(height/2),width,height);
  ctx.drawImage(image1, 0, 0, 480, 480, posXMango, height/4 - 50, 120, 120);
  ctx.drawImage(image, (sprite*480), (dir > 0 ? 0:480), 480, 480, 0+posX, height/4, 100, 100);

  if (sprite === 7){
      sprite = 0;
  }

  if(posX > width/2) {
    window.location.href = "/didi.html";
    } else if (posXMango < width/2){
      posXMango += 2;
  }

  window.requestAnimationFrame(draw);
};
