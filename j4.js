
// ok ! 15 minutes pour comprendre que l'input c'est pas des lignes mais une grille 2D ! punaise ! 

import readInput from "./read.js";

// X and Y 

function j4part1(){
    readInput("j4.txt",(e)=>{
        const tab = e.split("\n")
      //  console.log(tab)
      //  console.log(tab[0][2])
        let counter = 0
        tab.forEach((line,y) => {
           for(let i=0;i<line.length;i++){
            if(line[i] ==="@"){
                let numberRolls = countRolls(tab,i,y)
          //      console.log(numberRolls)
                if(numberRolls <4){
                    counter++
                }
            }  
           }
        });

        console.log(counter)
    })
}


function countRolls(tab,X,Y){
    let n = 0;

    // haut gauche
    if((Y-1 >=0) && (X-1>=0)){
        if(tab[Y-1][X-1] === "@"){
            n++
        }
    }
    // haut milieu
    if(Y-1>=0){
        if(tab[Y-1][X] === "@"){
            n++
        }
    }
    // haut droite
    if((Y-1>=0) && (X+1 < tab[Y].length)){
        if(tab[Y-1][X+1] === "@"){
            n++
        }
    }

    //  gauche
    if(X-1>=0){
        if(tab[Y][X-1] === "@"){
            n++
        }
    }
    //  droite
    if(X+1 < tab[Y].length){
        if(tab[Y][X+1] === "@"){
            n++
        }
    }
    // bas gauche
    if((Y+1< tab.length) && (X-1>=0)){
        if(tab[Y+1][X-1] === "@"){
            n++
        }
    }

     // bas milieu
    if(Y+1< tab.length){
        if(tab[Y+1][X] === "@"){
            n++
        }
    }
     // bas droite
    if((Y+1< tab.length) && (X+1 < tab[Y+1].length)){
        if(tab[Y+1][X+1] === "@"){
            n++
        }
    }
    return n

}




//j4part1()


function j4part2(){
    readInput("j4.txt",(e)=>{
        const tab = e.split("\n").map(line => [...line]);
       //console.log(tab)
      //  console.log(tab[0][2])
      
        let count =canI(tab)
        console.log(count)
    })
}

function canI(tab,acc=null,counter=0){
    // plus de reouleau acessibles
    if(acc!=null && acc.length ===0){
        return counter
    }
    acc = chercher(tab)
    if(acc.length>0){
        counter += acc.length
        replaceRolls(tab,acc)
        return canI(tab,acc, counter)
    }
    console.log(counter)
}


function replaceRolls(tab, acc){
    acc.forEach(elt=>{
        tab[elt[1]][elt[0]]="."
    })
}

function chercher(tab){
    let accessibles = []
        tab.forEach((line,y) => {
           for(let i=0;i<line.length;i++){
            if(line[i] ==="@"){
                let numberRolls = countRolls(tab,i,y)
          //      console.log(numberRolls)
                if(numberRolls <4){
                    accessibles.push([i,y])
                }
            }  
           }
        });
    return accessibles
}

j4part2()