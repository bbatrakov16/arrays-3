// GRAPHICS LIBRARY

// FUNCTION LIST
// canvasSize(width, height)
// background(color)
// stroke(color)
// fill(color)
// lineWidth(width)
// font(fontSetting)
// rect(x, y, w, h, mode)
// line(x1, y1, x2, y2)
// circle(x, y, r, mode)
// triangle(x1, y1, x2, y2, x3, y3, mode)
// polygon(points, mode)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 600;

// Type your examples from the notes below this line.

// Animation Example
requestAnimationFrame(draw);

function draw() {
  // Clears previous frame
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Lines
  for (let i = 0; i < linesArray.length; i++) {
    ctx.strokeStyle = linesArray[i].colour;
    ctx.lineWidth = linesArray[i].width;

    ctx.beginPath();
    ctx.moveTo(linesArray[i].x, linesArray[i].y);
    ctx.lineTo(linesArray[i].x + linesArray[i].length, linesArray[i].y);
    ctx.stroke();
  }

  // Animate Lines
  // Move lines to the right of the canvas
  // When line moves off canvas, reappear on other side at a new height

  for (let i = 0; i < linesArray.length; i++) {
    linesArray[i].x += linesArray[i].dx;

    if (linesArray[i].x > cnv.width) {
      // Move to right of canvas
      linesArray[i].x = 0 - linesArray[i].length;

      // randomize color
      linesArray[i].colour = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;

      // randomize height
      linesArray[i].y = Math.random() * cnv.height;
    }
    if (linesArray[i].dx < 1.5) {
      linesArray[i] = 4;
    }
  }

  // We try:
  // a) Give the lines a new color when they reappear
  // b) Add 95 more lines
  // c) Adjust the speed so no lines are moving "too slow"
  // d) Get creative. Come up with an animation of my own that uses these lines

  // // Draw circle
  // ctx.fillStyle = oneCircle.color;
  // ctx.beginPath();
  // ctx.arc(oneCircle.x, oneCircle.y, oneCircle.radius, 0, 2 * Math.PI);
  // ctx.fill();

  // // Animate circle
  // oneCircle.x += oneCircle.dx;
  // oneCircle.y += oneCircle.dy;

  // if (oneCircle.x + oneCircle.radius >= cnv.width) {
  //   oneCircle.dx *= -1;
  // }

  // if (oneCircle.x - oneCircle.radius <= 0) {
  //   oneCircle.dx *= -1;
  // }

  // // y-boundary cases
  // if (
  //   oneCircle.y - oneCircle.radius < 0 ||
  //   oneCircle.y + oneCircle.radius > cnv.height
  // ) {
  //   oneCircle.dy *= -1;
  // }

  // Request new draw frame
  requestAnimationFrame(draw);
}

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Fill the canvas with the provided color
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

// Set the strokeStyle
function stroke(color) {
  ctx.strokeStyle = color;
}

// Set the fillStyle
function fill(color) {
  ctx.fillStyle = color;
}

// Set the lineWidth
function lineWidth(width) {
  ctx.lineWidth = width;
}

// Set the font
function font(fontSetting) {
  ctx.font = fontSetting;
}

// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// Draw a stroke or fill circle with center (x,y) and radius of r
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a stroke or fill triangle with vertices (x1,y1), (x2,y2), (x3,y3)
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Vertex 1
  ctx.lineTo(x2, y2); // Vertex 2
  ctx.lineTo(x3, y3); // Vertex 3
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw a stroke or fill polygon using the given array of points
function polygon(points, mode) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw stroke or fill text with bottom-left corner (x,y)
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

// Draw a stroke or fill ellipse with center (x,y)
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw an image on the canvas
function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

// Draw a clip of an image on the canvas
function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

function mousedownHandlerLib() {
  mouseIsPressed = true;
}

function mouseupHandlerLib() {
  mouseIsPressed = false;
}

function keydownHandlerLib(event) {
  keyIsDown[event.keyCode] = true;
}

function keyupHandlerLib(event) {
  keyIsDown[event.keyCode] = false;
}

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}