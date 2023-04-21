const player1 = {
    name: "Hero",
    maxHp: 150,
    hp: 150,
    damage: 15
 };

 const player2 = {
    name: "Demon",
    maxHp: 100,
    hp: 100,
    damage: 25
 };

 function combat (p1,p2){
   if(p2.hp>0){return p2.hp=p2.hp-p1.damage}; 
   
 }

 console.log("Empieza el combate!");

 do {
    console.log(player1.name +" - HP "+ player1.hp+"/"+player1.maxHp);
    console.log(player2.name +" - HP "+ player2.hp+"/"+player2.maxHp);
    combat(player1,player2);
    console.log(player1.name+" deals "+player1.damage+" DMG to "+player2.name);
    console.log(player1.name +" - HP "+ player1.hp+"/"+player1.maxHp);
    console.log(player2.name +" - HP "+ player2.hp+"/"+player2.maxHp);
    combat(player2,player1);
    console.log(player2.name+" deals "+player2.damage+" DMG to "+player1.name);
    if(player1.hp===0){console.log(player1.name+" died!")}
    if(player2.hp===0){console.log(player2.name+" died!")}

 } while (player1.hp > 0 && player2.hp > 0);