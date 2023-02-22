function squares() {
  const canvas1 = document.querySelector("#canvas1");
  //checking if canvas has getContext method
  if (canvas1.getContext) {
    // creating context of canvas
    const ctx = canvas1.getContext("2d");
    // creating two intersecting squares
    ctx.fillStyle = "rgb(200,20,30)";
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = "rgba(10,10,98, 0.7)";
    ctx.fillRect(40, 40, 50, 50);
  } else {
    console.log("Got some error!");
  }
}

function rectangles() {
  const canvas2 = document.querySelector("#canvas2");
  const ctx = canvas2.getContext("2d");
  // creating rectangles using all three methods it has
  ctx.fillRect(50, 50, 60, 84);
  ctx.strokeRect(5, 20, 34, 54);
  ctx.clearRect(60, 60, 14, 34);
}

function strokearc() {
  const canvas3 = document.querySelector("#canvas3");
  const ctx = canvas3.getContext("2d");
  // creating an arc of circle
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 0.5); //from 3'o clock to 6'o  clock
  ctx.stroke();
}

function fillarc() {
  const canvas4 = document.querySelector("#canvas4");
  const ctx = canvas4.getContext("2d");
  // creating an arc of circle
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 0.5); //from 3'o clock to 6'o  clock
  ctx.fill();
}

function triangle() {
  const canvas5 = document.querySelector("#canvas5");
  const ctx = canvas5.getContext("2d");
  // creating a triangle using path
  ctx.beginPath();
  ctx.moveTo(10, 75);
  ctx.lineTo(80, 120);
  ctx.lineTo(80, 30);
  ctx.fill();
}

function smiley() {
  const canvas6 = document.querySelector("#canvas6");
  const ctx = canvas6.getContext("2d");
  // making the face
  ctx.beginPath();
  ctx.arc(75, 75, 70, 0, Math.PI * 2);
  ctx.stroke();
  // making the left eye
  ctx.beginPath();
  ctx.arc(50, 60, 5, 0, Math.PI * 2);
  ctx.fill();
  // making the right eye
  ctx.beginPath();
  ctx.arc(100, 60, 5, 0, Math.PI * 2);
  ctx.fill();
  // making the mouth
  ctx.beginPath();
  ctx.arc(75, 75, 45, 0, Math.PI);
  ctx.stroke();
}
// calling all the functions when html content loaded
window.addEventListener(
  "load",
  squares(),
  rectangles(),
  strokearc(),
  fillarc(),
  triangle(),
  smiley()
);
