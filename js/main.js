const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let rectangles = [];
let esp = 0;
var h;
var w;
var bigHeight;
var mouseX = 0;
var mouseY = 0;

//Event Listeners
window.addEventListener('mousemove', function (e) {
  //   console.log(e.clientY);
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Update a height de acordo com a posição do rato
const updateBigHeight = () => {
  bigHeight = canvas.height - mouseY * 0.17 - 100;
  smallHeight = canvas.height - mouseY * 0.12 - 300;
  widthChange = mouseX / 100;
};

class Rectangle {
  constructor(x, w, h) {
    this.x = x;
    this.w = w;
    this.h = h;
  }

  drawRect = () => {
    let y = canvas.height - this.h;
    context.fillStyle = '#FFFFFF';
    context.fillRect(this.x, y, this.w, this.h);
  };

  clearCanvas = () => {
    let y = canvas.height - this.h;
    context.clearRect(this.x - 5, y, this.w + 10, this.h + 500);
  };
}

clearWholeCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

//Load dos retângulos
const loadFirstRect = () => {
  for (i = 0; i < 27; i++) {
    rectangles.push(new Rectangle(0, 0, 0));
  }
};

loadFirstRect();

const updateSize = () => {
  clearWholeCanvas();
  for (i = 0; i < 27; i++) {
    //Limpar canvas
    rectangles[i].clearCanvas();
    // Height
    if (
      i == 0 ||
      i == 1 ||
      i == 2 ||
      i == 9 ||
      i == 10 ||
      i == 11 ||
      i == 17 ||
      i == 18 ||
      i == 25 ||
      i == 26
    ) {
      rectangles[i].h = bigHeight;
    } else {
      rectangles[i].h = smallHeight;
    }

    // Width
    if (i == 0 || i == 6 || i == 11 || i == 14 || i == 21 || i == 25) {
      rectangles[i].w = 10 + widthChange;
    } else if (
      i == 4 ||
      i == 7 ||
      i == 10 ||
      i == 16 ||
      i == 19 ||
      i == 22 ||
      i == 24
    ) {
      rectangles[i].w = 20 - widthChange / 2;
    } else if (i == 1 || i == 2 || i == 9 || i == 17) {
      rectangles[i].w = 30 + widthChange / 2;
    } else if (i == 3 || i == 5 || i == 15 || i == 18 || i == 18 || i == 20) {
      rectangles[i].w = 40 - widthChange / 2;
    } else if (i == 8 || i == 12 || i == 13 || i == 23) {
      rectangles[i].w = 50 + widthChange / 2;
    }

    if (
      rectangles[i].x === 0 ||
      rectangles[i].x === null ||
      rectangles[i].x === NaN ||
      rectangles[i].x === undefined
    ) {
      if (i == 0) {
        rectangles[i].x = 0;
        esp = rectangles[i].x + rectangles[i].w;
      } else {
        rectangles[i].x += esp + 25.8;
        esp = rectangles[i].x + rectangles[i].w;
      }
    } else {
    }

    //Desenhar retângulos
    rectangles[i].drawRect();
  }
};

// //Cursor
// const cursor = document.querySelector('.cursor');

// document.addEventListener('click', () => {
//   cursor.classList.add('expand');

//   setTimeout(() => {
//     cursor.classList.remove('expand');
//   }, 500);
// });

//Função de update
const update = () => {
  requestAnimationFrame(update);
  updateBigHeight();
  updateSize();
};

update();

// document.addEventListener('mousemove', (e) => {
//   cursor.setAttribute(
//     'style',
//     'top: ' + (e.pageY - 15) + 'px; left: ' + (e.pageX - 15) + 'px'
//   );
// });

// setInterval(function() {
//   console.log(esp);
// }, 500);
