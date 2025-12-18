let scene = "start" // WHICH SCENE
let dialogue = 0 //WHICH DIALOGUE IN SCENE
let cooldown = 1000 //COOLDOWN TO CLICK BUTTONS
let last_click = 0 
let voice_line_said = false // HAS A VOICE LINE BEEN SAID
let examined_room = false
let examined_body = false
let finalGuess = " " // DEFINES FINAL GUESS, NOT MADE YET

function preload() {
  //SCENE IMAGES
  manor_img = loadImage("WDI_outside.jpg")
  entrance_img = loadImage('WDI_entrance_hall.jpg')
  study_img = loadImage('WDI_crime_scene.jpg')
  kitchen_img = loadImage('WDI_kitchen.jpg')
  bedroom_img = loadImage('WDI_bedroom.jpg')
  drawing_room_img = loadImage('WDI_drawing_room.jpg')
  garden_img = loadImage('WDI_garden.jpg')
  
  //CHAR IMAGES
  butler_img = loadImage("WDI_butler.png")
  housekeeper_img = loadImage("WDI_housekeeper.png")
  widow_img = loadImage("WDI_widow.png")
  child_img = loadImage("WDI_child.png")
  gardener_img = loadImage("WDI_gardener.png")
  
  // AUDIO CLIPS
    butler_1 = createAudio('OldManLine1.m4a')
  butler_2 = createAudio('OldManLine2.m4a')
    housekeeper_1 = createAudio('housekeeper_1.mp4')
  housekeeper_2 = createAudio('housekeeper_2.mp4')
  housekeeper_3 = createAudio('housekeeper_3.mp4')
  housekeeper_4 = createAudio('housekeeper_4.mp4')
  housekeeper_5 = createAudio('housekeeper_5.mp4')
  housekeeper_6 = createAudio('housekeeper_6.mp4')
  housekeeper_7 = createAudio('housekeeper_7.mp4')
    widow_1 = createAudio('widow_1.mp3')
  widow_2 = createAudio('widow_2.mp3')
  widow_3 = createAudio('widow_3.mp3')
  widow_4 = createAudio('widow_4.mp3')
  widow_5 = createAudio('widow_5.mp3')
  widow_6 = createAudio('widow_6.mp3')
  widow_7 = createAudio('widow_7.mp3')
  widow_8 = createAudio('widow_8.mp3')
  widow_9 = createAudio('widow_9.mp3')
    child_1 = createAudio('child_1.mp3')
  child_2 = createAudio('child_2.mp3')
  child_3 = createAudio('child_3.mp3')
  child_4 = createAudio('child_4.mp3')
  child_5 = createAudio('child_5.mp3')
  child_6 = createAudio('child_6.mp3')
  child_7 = createAudio('child_7.mp3')
  child_8 = createAudio('child_8.mp3')
  child_9 = createAudio('child_9.mp3')
    gardener_1 = createAudio('VL 1.m4a')
  gardener_2 = createAudio('VL 2.m4a')
  gardener_3 = createAudio('VL 3.m4a')
  gardener_4 = createAudio('VL 4.m4a')
  gardener_5 = createAudio('VL 5.m4a')
  gardener_6 = createAudio('VL 6.m4a')
  gardener_7 = createAudio('VL 7.m4a')
  gardener_8 = createAudio('VL 8.m4a')
    butler_3 = createAudio('')
  butler_4 = createAudio('')
  butler_5 = createAudio('')
  butler_6 = createAudio('')
  butler_7 = createAudio('')}

function setup() {
  createCanvas(700,500)
  textFont('Courier New')}

function draw() {
  //SCENE CHANGES
  if (scene == "start")
    title_screen()
  else if (scene == "grand hall 1")
    entrance_hall_1()
  else if (scene == "crime scene")
    study()
  else if (scene == "kitchen")
    kitchen()
  else if (scene == "bedroom")
    bedroom()
  else if (scene == "grand hall secret")
    entrance_hall_secret()
  else if (scene == "drawing room")
    drawing_room()
  else if (scene == "garden")
    garden()
  else if (scene == "grand hall 2")
    entrance_hall_2()
  else if (scene == "final guess")
    final_guess()
  if (finalGuess !== " " && finalGuess == "The Gardener")
    good_ending()
  else if (finalGuess !== " ")
    bad_ending(finalGuess)}

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
  //RETURNS TRUE IF BUTTON IS HOVERED ^}
  
function textbox(xpos, ypos, w, h, txt, size){
  //CREATES TEXTBOX
  fill(0)
  rect(xpos, ypos, w, h, 20)
  fill(255)
  textAlign(CENTER, CENTER)
  textSize(size)
  text(txt,xpos,ypos+h/2,w)}

function title_screen(){
  tint(200)
  image(manor_img,-30,0,width+80,height)
  noTint()
  textbox(200,200,300,75,"WHO DID IT?", 40)
  let hoverStart = button(250,350,200,50, "START",20)
  if (mouseIsPressed && hoverStart && millis() - last_click > cooldown) {
    last_click = millis()
    scene = "grand hall 1"}}
  
function entrance_hall_1(){ //FULL ENTRANCE HALL SCENE
  tint(200)
  image(entrance_img,0,0,width,height)
  noTint()
  if (dialogue == 0) { //LINE 0
    textbox(15,415,590,75, "The entrance hall is beautiful, but eerie.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  else if (dialogue == 1){ //LINE 1
    character(butler_img,"THE BUTLER","'Detective! Thank god you are here! Quick! There's been a murder.'", 20,50,100)
    if (voice_line_said == false){
      butler_1.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 2){ //LINE 2
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'What Happened?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){ //LINE 3
    character(butler_img,"THE BUTLER","'It's the Lord of the House! He has been stabbed. He went to his study after supper, and when the housekeeper brought him his Brandy, he had been stabbed in the chest!'", 15,50,100)
      if (voice_line_said == false){
      butler_2.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 4){ //LINE 4
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'Show me the crime scene.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      scene = "crime scene"
      last_click = millis()}}}
  
function study(){
  tint(200)
  image(study_img,0,0,width,height)
  noTint()
  if (dialogue == 0 ){
  hoverNext = button(615,415,75,75, "NEXT",20)
  textbox(15,415,590,75, "The body is lying on the table, blood pooling around it. Lying a half meter away, is a knife.",17)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  else if (dialogue == 1){
    let choice_1 = button(15,415,325,75,"Examine the room", 25)
    let choice_2 = button(360,415,325,75,"Examine the body", 25)
    if (mouseIsPressed && choice_2 && millis() - last_click > cooldown){
      dialogue = 2
      examined_body = true
      last_click = millis()}
    else if (mouseIsPressed && choice_1 && millis() - last_click > cooldown){
      dialogue = 4
      examined_room = true
      last_click = millis()}
    else if (examined_body && examined_room){
      dialogue = 5}}
  else if (dialogue == 2){
    hoverNext = button(615,415,75,75, "NEXT",20)
  textbox(15,415,590,75, "The knife is sharp edged, but not pointy. Not a dagger or a hunting knife, a cooking knife. Not typically carried on one's person. Whoever did this brought the knife here with the intent to kill.",12)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){
    hoverNext = button(615,415,75,75, "NEXT",20)
  textbox(15,415,590,75, "Turning the body over, the wounds are visible. There are two wounds. One, a deep slash to the sternum, stopping at the bone. The second wound was the fatal stab, to the right of the first stab, peirced through the victims ribs and nicked his heart. Whoever did this stabbed him from the front.",12)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  else if (dialogue == 4){
    hoverNext = button(615,415,75,75, "NEXT",20)
  textbox(15,415,590,75, "The entrance to the room has a lock, but it has not been tampered with or damaged. There is one window in the room, which is swung open onto a juliette balcony, letting in the late August night air. The window's lock also has not been damaged, meaning it was opened from the inside.",12)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  else if (dialogue == 5){
  hoverNext = button(615,415,75,75, "NEXT",20)
  textbox(15,415,590,75, "The room has given many clues and pieces of evidence to lead us to our next destination.",17)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      scene = "kitchen"
      last_click = millis()}}}

function kitchen(){
  tint(200)
  image(kitchen_img,0,0,width,height)
  noTint()
  if (dialogue == 0){
    textbox(15,415,590,75, "Entering the kitchen, the housekeeper is making herself busy cleaning.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}} 
  else if (dialogue == 1){
    character(housekeeper_img,"THE HOUSEKEEPER" ,"Oh! Thank the Good Lord someone has arrived!",20,50,100)
    if (voice_line_said == false){
      housekeeper_1.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 2){
    faded_char(housekeeper_img,50,100)
    hoverNext = button(15,415,675,75, "'Tell me what you saw.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}} 
  else if (dialogue == 3){
    character(housekeeper_img,"THE HOUSEKEEPER" ,"It was an hour since supper, and the Lord had retired to his Study. I am to bring him his Brandy then, he likes a glass in the evening to help with his sleep.",15,50,100)
    if (voice_line_said == false){
      housekeeper_2.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 4){
    character(housekeeper_img,"THE HOUSEKEEPER","I knocked a few times, but he didn't answer, so I just went in. He was lying there, in his own blood. I screamed, and the other Staff and the Lady came running. We phoned the police immediately. ",12,50,100)
    if (voice_line_said == false){
      housekeeper_3.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 5
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 5){
    faded_char(housekeeper_img,50,100)
    hoverNext = button(15,415,675,75, "'Was the door unlocked?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 6
      last_click = millis()}} 
  else if (dialogue == 6){
    character(housekeeper_img,"THE HOUSEKEEPER","No. It's not locked usually, not in the evenings. He dislikes walking over to the door to retrieve his drink. Only he keeps the key. ",15,50,100)
    if (voice_line_said == false){
      housekeeper_4.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 7
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 7){
    faded_char(housekeeper_img,50,100)
    hoverNext = button(15,415,675,75, "'Is the window usually open?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 8
      last_click = millis()}} 
  else if (dialogue == 8){
    character(housekeeper_img,"THE HOUSEKEEPER","Not always. On a nice night like this, I thought he had opened it himself. He likes the air, likes looking over the Gardens. ",15,50,100)
    if (voice_line_said == false){
      housekeeper_5.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 9
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 9){
    faded_char(housekeeper_img,50,100)
    hoverNext = button(15,415,675,75, "'Are you missing a knife?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 10
      last_click = millis()}}  
  else if (dialogue == 10){
    character(housekeeper_img,"THE HOUSEKEEPER","Oh! I don't think so. Let me check.",20,50,100)
    if (voice_line_said == false){
      housekeeper_6.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 11
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 11){
    textbox(15,415,590,75, "She goes to a sink basin filled with dish ware, and opens some drawers. She carefully lays out all of her implements, counting them.",15)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 12
      last_click = millis()}} 
  else if (dialogue == 12){
    character(housekeeper_img,"THE HOUSEKEEPER","Oh, no. I am missing a knife. My nice steel carving knife. I used it only a few hours ago, to carve the meat for supper. I wiped it and put it in the basin, with the rest of what I used for dinner. Was that the knife used to kill the Lord?",15,50,100)
    if (voice_line_said == false){
      housekeeper_7.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 13
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 13){
    faded_char(housekeeper_img,50,100)
    hoverNext = button(15,415,675,75, "'Thank you. I must speak with the Lady'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "bedroom"}}}
  
function bedroom(){
  tint(200)
  image(bedroom_img,0,0,width,height)
  noTint()
  if (dialogue == 0){
    textbox(15,415,590,75, "The bedroom is stunning, yet comfortable",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}} 
  else if (dialogue == 1){
    character(widow_img,"THE WIDOW" ,"Are you the detective who has come to investigate my husband's death?",20,50,100)
    if (voice_line_said == false){
      widow_1.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 2){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Yes, I am. Ma'am, please tell me, what happened tonight?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){
    character(widow_img,"THE WIDOW" ,"Well, it was a night like just like any other. We had supper, my husband, my son, and I. A normal, quiet supper. After we finished eating, my son and I went to the drawing room, and my husband to his study.",13,50,100)
    if (voice_line_said == false){
      widow_2.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 4){
    character(widow_img,"THE WIDOW" ,"I was putting my son to bed an hour later when I heard our housekeeper scream. My husband had been killed, right at his desk. Someone phoned the police. ",13,50,100)
    if (voice_line_said == false){
      widow_3.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 5
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 5){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Where is you son now? May I ask him a few questions?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 6
      last_click = millis()}}
  else if (dialogue == 6){
    character(widow_img,"THE WIDOW" ,"In the drawing room. He has been told what happened. Oh, my poor boy. The man of this house, at such a young age.",15,50,100)
    if (voice_line_said == false){
      widow_4.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 7
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 7){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Is there anyone in your husband's life who may hate him?'", 15)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 8
      last_click = millis()}}
  else if (dialogue == 8){
    faded_char(widow_img,50,100)
    textbox(15,415,590,75, "The Widow pauses and looks down, thinking for a moment.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 9
      last_click = millis()}} 
  else if (dialogue == 9){
    character(widow_img,"THE WIDOW" ,"I do not believe so. No one who would want him dead, at least.",20,50,100)
    if (voice_line_said == false){
      widow_5.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 10
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 10){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'But there are people who hate him?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 11
      last_click = millis()}}
  else if (dialogue == 11){
    character(widow_img,"THE WIDOW" ,"To be honest with you, Detective, he was not well liked. ",20,50,100)
    if (voice_line_said == false){
      widow_6.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 12
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 12){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Who disliked your husband?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 13
      last_click = millis()}}
  else if (dialogue == 13){
    character(widow_img,"THE WIDOW" ,"Most all of our staff, to start. We keep so few on our pay, yet he refuses to budge on any increases to salary, no matter how long they have worked for our family.",15,50,100)
    if (voice_line_said == false){
      widow_7.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 14
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 14){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Anyone else?'", 25)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 15
      last_click = millis()}}
  else if (dialogue == 15){
    faded_char(widow_img,50,100)
    textbox(15,415,590,75, "The Widow pauses again.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 16
      last_click = millis()}}
  else if (dialogue == 16){
    character(widow_img,"THE WIDOW" ,"No. No one else.",20,50,100)
    if (voice_line_said == false){
      widow_8.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 17
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 17){
    faded_char(widow_img,50,100)
    hoverNext = button(15,415,675,75, "'Are you sure? You said 'to start'.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 18
      last_click = millis()}} 
  else if (dialogue == 18){
    character(widow_img,"THE WIDOW" ,"Yes, I am quite sure. I do not wish to discuss further. I must discuss some household matters with the staff. ",15,50,100)
    if (voice_line_said == false){
      widow_9.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 19
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 19){
    textbox(15,415,590,75, "The Widow rushes out of the room",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 20
      last_click = millis()}}
  else if (dialogue == 20){
    let choice_1 = button(15,415,325,75,"Search the room", 25)
    let choice_2 = button(360,415,325,75,"Follow the Widow", 25)
    if (mouseIsPressed && choice_1 && millis() - last_click > cooldown){
      dialogue = 21
      last_click = millis()}
    if (mouseIsPressed && choice_2 && millis() - last_click > cooldown){
      scene = "grand hall secret"
      dialogue = 0
      last_click = millis()}}
  else if (dialogue == 21){
    textbox(15,415,590,75, "Searching the room, there is a small vanity covered in creams and oils and colors. Opening the drawer, there is sparsely anything inside. The drawer is shallower than it appears. Pushing a little and lifting, it is easy to remove the false bottom of the drawer.",12)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 22
      last_click = millis()}}
  else if (dialogue == 22){
    textbox(15,415,590,75, "Inside are a stack of letters, some recent, some dating back as far as 15 years. There would be no time to read all of them, but the letter on top has been written by the widow, and not yet sent. It is dated the night before the crime.",12)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 23
      last_click = millis()}}
  else if (dialogue == 23){
    textbox(15,415,590,75, "It is a letter to an unnamed lover, assuring them that they have already kept their secret for three years, and can keep the secret for longer. After all, she assures, she had kept the secret of an illegitamate child for nearly ten years.",12)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 24
      last_click = millis()}}
  else if (dialogue == 24){
    textbox(15,415,590,75, "She assures that when they get back from war, she will continue to see him in secret. She writes that all of this can be assured as long as the lover keeps sending the letters under different names, as the Lord is begining to suspect misconduct.",12)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 25
      last_click = millis()}}
  else if (dialogue == 25){
    textbox(15,415,590,75, "It is about time to speak to this child",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "drawing room"}}}
  
function entrance_hall_secret(){
  tint(200)
  image(entrance_img,0,0,width,height)
  noTint()
  if (dialogue == 0) { //LINE 0
    textbox(15,415,590,75, "Quietly following the Widow, she goes to the Grand Hall.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  if (dialogue == 1) { //LINE 0
    faded_char(widow_img,50,100)
    faded_char(butler_img,300,100)
    textbox(15,415,590,75, "It is hard to hear behind a closed door, but the Widow is barely heard asking the Butler if the Lord had any family that the Widow did not know about.",15)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()}}
  if (dialogue == 2) { //LINE 0
    faded_char(widow_img,50,100)
    faded_char(butler_img,300,100)
    textbox(15,415,590,75, "The Butler tells her in a quiet tone that he has no living relatives. The Widow breathes a sigh of relief, and tells him that her sons real parentage will not need to effect his new Lordship.",15)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  if (dialogue == 3) { //LINE 0
    textbox(15,415,590,75, "Real parentage? It is time to meet this child.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "drawing room"}}}
  
function drawing_room(){
  tint(200)
  image(drawing_room_img,0,0,width,height)
  noTint()
  if (dialogue == 0){
    textbox(15,415,590,75, "In the drawing room, a young boy of about 10 stands unsure.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}} 
  else if (dialogue == 1){
    character(child_img,"THE CHILD" ,"Hello.",20,50,100)
    if (voice_line_said == false){
      child_1.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 2){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Hello!'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){
    character(child_img,"THE CHILD" ,"Are you the one who is going to find out what happened to my father?",20,50,100)
    if (voice_line_said == false){
      child_2.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 4){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Hopefully, yes.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 5
      last_click = millis()}}
  else if (dialogue == 5){
    character(child_img,"THE CHILD" ,"So what happened?",20,50,100)
    if (voice_line_said == false){
      child_3.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 6
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 6){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'I don't know yet, can you help me?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 7
      last_click = millis()}}
  else if (dialogue == 7){
    character(child_img,"THE CHILD" ,"Sure, I guess.",20,50,100)
    if (voice_line_said == false){
      child_4.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 8
      last_click = millis()
      voice_line_said = false}} 
  else if (dialogue == 8){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'What happened today?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 9
      last_click = millis()}}
  else if (dialogue == 9){
    character(child_img,"THE CHILD" ,"I woke up and did my schooling with Mama. Then I went out to the flowers. Then I went to see Father but he was busy so he got mad at me. ",15,50,100)
    if (voice_line_said == false){
      child_5.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 10
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 10){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Does he get angry with you often?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 11
      last_click = millis()}}
  else if (dialogue == 11){
    character(child_img,"THE CHILD" ,"Yes, sir. He doesn't like it when I bother him when he is busy, but I never know when that is. He seemed pretty mad today, but I don't know why.",15,50,100)
    if (voice_line_said == false){
      child_6.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 12
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 12){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Was he fighting with anyone?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 13
      last_click = millis()}}
  else if (dialogue == 13){
    character(child_img,"THE CHILD" ,"Yes. Him and Mama yelled at each other a lot after he got really mad at me.",20,50,100)
    if (voice_line_said == false){
      child_7.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 14
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 14){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'What do you usually do when that happens?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 15
      last_click = millis()}}
  else if (dialogue == 15){
    character(child_img,"THE CHILD" ,"Usually I leave and go to the flowers. The gardener is very nice to me. But I couldn't this time. He wanted me there.",15,50,100)
    if (voice_line_said == false){
      child_8.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 16
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 16){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Do you know why?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 17
      last_click = millis()}} 
  else if (dialogue == 17){
    character(child_img,"THE CHILD" ,"No. I am sorry. ",20,50,100)
    if (voice_line_said == false){
      child_9.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 18
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 18){
    faded_char(child_img,50,100)
    hoverNext = button(15,415,675,75, "'Thank you for talking to me.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "garden"}}}
  
function garden(){
  tint(200)
  image(garden_img,0,0,width,height)
  noTint()
  if (dialogue == 0){
    textbox(15,415,590,75, "In the gardens, trimming some hedges stands, a gardener.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}} 
  else if (dialogue == 1){
    character(gardener_img,"THE GARDENER" ,"Hello, Detective.",20,50,100)
    if (voice_line_said == false){
      gardener_1.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 2){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'Would you mind if I ask you a couple of questions?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){
    character(gardener_img,"THE GARDENER" ,"Not at all, Detective.",20,50,100)
    if (voice_line_said == false){
      gardener_2.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 4){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'How long have you been working for the family?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 5
      last_click = millis()}}
  else if (dialogue == 5){
    character(gardener_img,"THE GARDENER" ,"I've been here for thirteen years, tending this garden.",20,50,100)
    if (voice_line_said == false){
      gardener_3.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 6
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 6){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'Do you consider the family good employers?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 7
      last_click = millis()}}
  else if (dialogue == 7){
    faded_char(gardener_img,50,100)
    textbox(15,415,590,75, "He pauses for a moment.",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 8
      last_click = millis()}}
  else if (dialogue == 8){
    character(gardener_img,"THE GARDENER" ,"They are alright. I'm paid a small wage. I get to tend to my garden. It is all I can ask for.",20,50,100)
    if (voice_line_said == false){
      gardener_4.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 9
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 9){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'Do you know anyone who might want to hurt the Lord?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 10
      last_click = millis()}}
  else if (dialogue == 10){
    character(gardener_img,"THE GARDENER" ,"Anyone who cares for that little boy.",20,50,100)
    if (voice_line_said == false){
      gardener_5.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 11
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 11){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'What do you mean?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 12
      last_click = millis()}}
  else if (dialogue == 12){
    character(gardener_img,"THE GARDENER" ,"He is awful to that boy. It was especially bad right before he died. I could see the argument through the windows while working on the garden. ",15,50,100)
    if (voice_line_said == false){
      gardener_6.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 13
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 13){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'Who cares for the boy?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 14
      last_click = millis()}}
  else if (dialogue == 14){
    character(gardener_img,"THE GARDENER" ,"We all do. ",20,50,100)
    if (voice_line_said == false){
      gardener_7.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 15
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 15){
    faded_char(gardener_img,50,100)
    hoverNext = button(15,415,675,75, "'So you have reason to hurt the Lord?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 16
      last_click = millis()}}
  else if (dialogue == 16){
    character(gardener_img,"THE GARDENER" ,"I never said that. I must leave. I have work to attend to.",20,50,100)
    if (voice_line_said == false){
      gardener_8.play()
      voice_line_said = true}
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 17
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 17){
    textbox(15,415,590,75, "He grabs his long shears and heads further into the foliage",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "grand hall 2"}}}
  
function entrance_hall_2(){
  tint(200)
  image(entrance_img,0,0,width,height)
  noTint()
  if (dialogue == 0) { //LINE 0
    textbox(15,415,590,75, "Entering the house again, the Butler stands in the Hall",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 1
      last_click = millis()}}
  else if (dialogue == 1){ 
    character(butler_img,"THE BUTLER","Have you spoken to everyone in the house?", 20,50,100)
    if (voice_line_said == false){
      butler_3.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 2
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 2){ 
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'Yes, I have.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 3
      last_click = millis()}}
  else if (dialogue == 3){ 
    character(butler_img,"THE BUTLER","Do you know who killed the Lord?", 20,50,100)
    if (voice_line_said == false){
      butler_4.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 4
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 4){ 
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'Maybe. I still have a few questions.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 5
      last_click = millis()}}
  else if (dialogue == 5){ 
    character(butler_img,"THE BUTLER","Please, ask away.", 20,50,100)
    if (voice_line_said == false){
      butler_5.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 6
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 6){ 
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'Do you know who the child's father is?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 7
      last_click = millis()}}
  else if (dialogue == 7) { 
    faded_char(butler_img,50,100)
    textbox(15,415,590,75, "The Butler pauses",20)
    let hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 8
      last_click = millis()}}
  else if (dialogue == 8){ 
    character(butler_img,"THE BUTLER","Ah, you have your finger on the pulse here. I have my suspicions.", 20,50,100)
    if (voice_line_said == false){
      butler_6.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 9
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 9){ 
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'Which are?'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 10
      last_click = millis()}}
  else if (dialogue == 10){ 
    character(butler_img,"THE BUTLER","The Lady has held many lovers over the years, but only one has stayed around to form a bond with the boy. To help him grow, like a flower.", 15,50,100)
    if (voice_line_said == false){
      butler_7.play()
      voice_line_said = true}
    hoverNext = button(615,415,75,75, "NEXT",20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 11
      last_click = millis()
      voice_line_said = false}}
  else if (dialogue == 11){ 
    faded_char(butler_img,50,100)
    hoverNext = button(15,415,675,75, "'I see. Thank you. I think I know who killed The Lord.'", 20)
    if(mouseIsPressed && hoverNext && millis() - last_click > cooldown){
      dialogue = 0
      last_click = millis()
      scene = "final guess"}}}
  
function final_guess(){
  tint(200)
  image(manor_img,-30,0,width+80,height)
  noTint()
  textbox(200,50,300,75,"Who did it?", 30)
  let hoverButler = button(30,150,300,75, "The Butler", 20)
  if (mouseIsPressed && hoverButler) {
    finalGuess = "The Butler"
    scene = "ending"}
  let hoverHousekeeper = button(30,250,300,75, "The Housekeeper", 20)
  if (mouseIsPressed && hoverHousekeeper) {
    finalGuess = "The Housekeeper"
    scene = "ending"}
  let hoverGardener = button(30,350,300,75, "The Gardener", 20)
  if (mouseIsPressed && hoverGardener) {
    finalGuess = "The Gardener"
    scene = "ending"}
  let hoverWidow = button(370,150,300,75, "The Widow", 20)
  if (mouseIsPressed && hoverWidow) {
    finalGuess = "The Widow"
    scene = "ending"}
  let hoverChild = button(370,250,300,75, "The Child", 20)
  if (mouseIsPressed && hoverChild) {
    finalGuess = "The Child"
    scene = "ending"}
  let hoverOther = button(370,350,300,75, "Someone Else", 20)
  if (mouseIsPressed && hoverOther) {
    finalGuess = "Someone Else"
    scene = "ending"}}
  
function good_ending(){
  tint(200)
  image(manor_img,-30,0,width+80,height)
  noTint()
  guessText = `The Gardener is arrested, while the rest of the house watches. After a long trial, they are found...`
  textbox(150,150,400,125,guessText,15)
  if (dialogue == 0){
    let hoverNext = button(250,300,200,50, "NEXT",20)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 1
    last_click = millis()}}
  else if (dialogue == 1){
    let hoverNext = button(250,350,200,50, "NEXT",20)
    textbox(150,150,400,125,"GUILTY!",25)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 2
    last_click = millis()}}
  else if (dialogue == 2){
    let hoverNext = button(250,350,200,50, "PLAY AGAIN",20)
    textbox(150,150,400,125,"You got it! Congratulations",25)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 0
    last_click = millis()
    finalGuess = " "
    scene = "start"}}}
function bad_ending(guess){
  tint(200)
  image(manor_img,-30,0,width+80,height)
  noTint()
  guessText = `${guess} is arrested, while the rest of the house watches. After a long trial, they are found...`
  textbox(150,150,400,125,guessText,15)
  if (dialogue == 0){
    let hoverNext = button(250,300,200,50, "NEXT",20)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 1
    last_click = millis()}}
  else if (dialogue == 1){
    let hoverNext = button(250,350,200,50, "NEXT",20)
    textbox(150,150,400,125,"NOT GUILTY",25)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 2
    last_click = millis()}}
  else if (dialogue == 2){
    let hoverNext = button(250,350,200,50, "PLAY AGAIN",20)
    textbox(150,150,400,125,"The real murderer got away!",25)
    if (mouseIsPressed && hoverNext && millis() - last_click > cooldown) {
    dialogue = 0
    last_click = millis()
    finalGuess = " "
    scene = "start"}}}
  
function faded_char(img,x_pos,y_pos){
  tint(150)
  image(img,x_pos,y_pos,285,380)
  noTint()}
  
function character(char,char_name,txt,size,x_pos,y_pos){ // CHARACTER IMAGE
 image(char,x_pos,y_pos,285,380) 
 textbox(25,375,150,30,char_name, 15)
 textbox(15,415,590,75,txt,size)}
