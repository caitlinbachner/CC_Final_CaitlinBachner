let scene = "start" // WHICH SCENE
let dialogue = 0 //WHICH DIALOGUE IN SCENE
let cooldown = 1000 //COOLDOWN TO CLICK BUTTONS
let last_click = 0

function preload() {
  //SCENE IMAGES
  manor_img = loadImage("WDI_manor_rough.jpg")
  entrance_img = loadImage('WDI_grandhall_rough.jpg')
  study_img = loadImage('WDI_study_rough.jpg')
  
  //CHAR IMAGES
  butler_img = loadImage("WDI_butler_rough.png")
}

function setup() {
  createCanvas(700,500)
  textFont('Courier New')
}

function draw() {
  //TESTING PRINT
  print(dialogue, scene, last_click)
  
  //SCENE CHANGES
  if (scene == "start")
    title_screen()
  else if (scene == "grand hall")
    entrance_hall()
  else if (scene == "crime scene")
    study()
}

function button(xpos, ypos, w, h, txt, size) {
  let hover = (mouseX > xpos && mouseX < xpos+w && mouseY > ypos && mouseY < ypos+h)
  if (hover) fill(100)
  else fill(0)
  rect(xpos, ypos, w, h, 20)
  //MAKES BOX, SEES IF MOUSE IS HOVERED, COLORS ^
  
  
  fill(255)
  textAlign(CENTER,CENTER)
  textSize(size)
  text(txt,xpos+w/2,ypos+h/2)
  //WRITES TEXT IN BOX ^ (doesnt use textbox funtion because of fill overrides)

  return hover 
  //RETURNS TRUE IF BUTTON IS HOVERED ^
}

function textbox(xpos, ypos, w, h, txt, size){
  //CREATES TEXTBOX
  fill(0)
  rect(xpos, ypos, w, h, 20)
  
  fill(255)
  textAlign(CENTER, CENTER)
  textSize(size)
  text(txt,xpos,ypos+h/2,w)
}

function title_screen(){
  image(manor_img,0,0,width+60,height)
  
  textbox(200,200,300,75,"WHO DID IT?", 40)
  
  let hoverStart = button(250,350,200,50, "START",20)
  if (mouseIsPressed && hoverStart) {
    scene = "grand hall"
  }
}

function entrance_hall(){ //FULL ENTRANCE HALL SCENE
  image(entrance_img,0,0,width,height)
  
  if (dialogue == 0) { //LINE 0
    textbox(15,415,590,75, "The entrance hall is beautiful, but eerie.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}
  
  }else if (dialogue == 1){ //LINE 1
    butler("Detective! Thank god you are here! There has been a murder.", 20)
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()}
  
  }else if (dialogue == 2){ //LINE 2
    faded_char(butler_img,50,75)
    hoverNext = button(15,415,675,75, "What Happened?", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}
  
  }else if (dialogue == 3){ //LINE 3
    butler("The Lord of the House! He has been stabbed. He went to his study after supper, and when the housekeeper brought him his Brandy, he had been stabbed in the chest!", 15)
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()}
  
  }else if (dialogue == 4){ //LINE 4
    faded_char(butler_img,50,75)
    hoverNext = button(15,415,675,75, "Show me the crime scene.", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      scene = "crime scene"
      last_click = millis()
}}}

function study(){
  image(study_img,0,0,width,height)
}

function faded_char(img,x_pos,y_pos){
  tint(200)
  image(img,x_pos,y_pos,285,380)
  noTint()
  
}

function butler(txt,size){ // BUTLER DIALOGUE
 image(butler_img,50,75,285,380) 
 textbox(25,375,125,30,"THE BUTLER", 15)
 textbox(15,415,590,75,txt,size) 
}