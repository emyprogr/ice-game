function preload(){
cenario = loadImage("ice02.jpg")
bloco = loadImage("bad-ice-cream.jpg")


pd = loadAnimation("pd1.png", "pd2.png", "pd3.png", "pd4.png")
pl = loadAnimation("pl1.png", "pl2.png", "pl3.png", "pl4.png")
pr = loadAnimation("pr1.png", "pr2.png", "pr3.png", "pr4.png")
pu = loadAnimation("pu1.png", "pu2.png", "pu3.png", "pu4.png")

rosad = loadAnimation("if1.png", "if2.png", "if3.png", "if4.png")
rosar = loadAnimation("ig1.png", "ig2.png", "ig3.png", "ig4.png")
rosae = loadAnimation("ih1.png", "ih2.png", "ih3.png", "ih4.png")
rosau = loadAnimation("ij1.png", "ij2.png", "ij3.png", "ij4.png")

verded = loadAnimation("ia1.png", "ia2.png", "ia3.png", "a4.png")
verder = loadAnimation("ib1.png", "ib2.png", "ib3.png", "ib4.png")
verdee = loadAnimation("ic1.png", "ic2.png", "ic3.png", "ic4.png")

bloco2 = loadAnimation("baseblocos5.png")


}

function setup() {
 createCanvas(600,600)
 bloco1 = createSprite(300,300)
 bloco1.addImage(bloco)

 ice = createSprite(100,100);
 ice.addAnimation("descendo", pd);
 ice.addAnimation("esquerda", pl);
 ice.addAnimation("direita", pr);
 ice.addAnimation("subindo", pu);
 ice.scale = 0.9

 rosa = createSprite(400,300);
 rosa.addAnimation("rosad", rosad);

 verde = createSprite(200,300);
 verde.addAnimation("verded", verded);

 bloco2p = createSprite(300,300)
 bloco.addImage(bloco2)
}

function draw() {
 background("gray")
 image(cenario, 0, 0, 600, 600)
 drawSprites()

 if (keyDown("RIGHT_ARROW")){
    ice.position.x = ice.position.x + 4
    ice.changeAnimation("direita",pr)
 }
 if (keyDown("LEFT_ARROW")){
    ice.position.x = ice.position.x - 4
    ice.changeAnimation("esquerda",pl)
 }
 if (keyDown("UP_ARROW")){
    ice.position.y = ice.position.y - 4
    ice.changeAnimation("subindo",pu)
 }
 if (keyDown("DOWN_ARROW")){
    ice.position.y = ice.position.y + 4
    ice.changeAnimation("descendo",pd)
 }
}