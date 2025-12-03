
import readInput from "./read.js";

function j1part1(){
    readInput("j1.txt",(e)=>{
    
    const tab = e.split("\n")
   // console.log(tab)

    // rotations de 0 a 99 (si rot = 100 ) on a fait un tour complet ie 0
    let dial = 50
    let counter = 0
    tab.forEach(rot => {
        let sens = rot[0]
        let val = parseInt(rot.slice(1))
        if(sens == 'L'){
            dial = (dial - val)%100 
            if(dial <0){
                dial+= 100
            }

        }else if(sens== "R"){
            dial = (dial + val)%100
            if(dial >99){
                dial -=100
            }
        }

        if(dial == 99){
            console.log("99")
        }
        if(dial === 0){
            counter++
        }
       // console.log(dial)
    });

    console.log(counter)
})
}

function j1part2bis(){
  readInput("j1.txt", (e) => {
    const tab = e.trim().split("\n");
    let dial = 50;
    let counter = 0;

    tab.forEach(rot => {
      const sens = rot[0];
      const val = parseInt(rot.slice(1), 10);

      for (let i = 0; i < val; i++) {

        if (sens === "R") {
          // avancer à droite
          dial++;
          if (dial > 99) {   // wrap-around
            dial = 0;
          }

        } else { // L
          // reculer à gauche
          dial--;
          if (dial < 0) {    // wrap-around
            dial = 99;
          }
        }

        // après chaque clic, on teste si le cadran vaut 0
        if (dial === 0) counter++;
      }
    });

    console.log(counter);
  });
}


function j1part2(){
  readInput("j1.txt", (e) => {
    const tab = e.trim().split("\n");
    let dial = 50;
    let counter = 0;

    tab.forEach(rot => {
      const sens = rot[0];
      const val = parseInt(rot.slice(1), 10);

      for (let i = 0; i < val; i++) {            
        if (sens === "R") {
          dial = (dial + 1) % 100;              
        } else { 
            //sens c'est "L"
          dial = (dial - 1 + 100) % 100;        
        }
        if (dial === 0) counter++;             
      }
    });

    console.log(counter);
  });
}

j1part2bis()

//j1p1 : 997 
// j2p2 :  
//6499 , 5984, 6030 , 6007      nok

//5978