// Helper Functions

function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
  return Math.round(randomDec(low, high));
}

function randomRGB() {
  let r = randomInt(0, 256);
  let g = randomInt(0, 256);
  let b = randomInt(0, 256);

  return "rgb(" + r + "," + g + "," + b + ")";
}
