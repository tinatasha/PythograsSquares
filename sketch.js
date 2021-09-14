let p1;
let p2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES)
  p1 = Strive.createMovableCircle(100,200,20)
  p2 = Strive.createMovableCircle(300,400,20)
  
}

function draw() {
  background(0);
  Strive.drawTickAxes()
  p1.draw()
  p2.draw()
  
  
  
  let p1x =p1.x
  let p1y = p1.y
  
  let p2x = p2.x
  let p2y = p2.y
  
  let p3x = p2x
  let p3y = p1y
  
  noFill()
  stroke('yellow')
  triangle(p1x, p1y, p2x, p2y, p3x, p3y)
  
  let a = round(abs(p1x-p3x), 2)
  let b = round(abs(p2y-p3y), 2)
   let cSquared =a**2 + b**2
  let c = round(sqrt(cSquared), 2)
  
  let d = sqrt((p2x-p1x)**2+(p2y-p1y)**2)
  
  let alabelX = (p1x+p3x)/2
  let alabelY = p1y
  
  let blabelX = p2x
  let blabelY = (p2y+p3y)/2
  
  fill('red')
  rect(p3x, p3y, b,b)
  fill('green')
  rect(p1x, p1y-a, a, a)
  
  angleC = asin(b/c)
  // console.log(angleC)
  
  push()
  rectMode(CORNER)
  fill('blue')
  translate(p1x, p1y)
  rotate(angleC)
  rect(0, 0, c, c)
  pop()
  
  fill('white')
  noStroke()
  textSize(18)
  text(a, alabelX, alabelY)
  text(b, blabelX, blabelY)
  
  
  let clabelX = (p1x + p2x)/2
  let clabelY = (p1y+p2y)/2
  
  text(c, clabelX, clabelY)
}