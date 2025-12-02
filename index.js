
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



function j1part2(){
   readInput("j1.txt",(e)=>{
    
    const tab = e.split("\n")
    // console.log(tab)

    // rotations de 0 a 99 (si rot = 100 ) on a fait un tour complet ie 0
    let dial = 50
    let counter = 0
    tab.forEach(rot => {
        let sens = rot[0]
        let val = parseInt(rot.slice(1))
        let tourscomplet = 0

        // le nombre de tours complets
        if(val>99){
            tourscomplet = parseInt(val/100)
            console.log("tours complet : " , tourscomplet )
            counter+= tourscomplet
            val= val%100
        }

        // le nombre de passage par zero avec le reste des tours complet : 

        if(sens == 'L'){

            dial = (dial - val)
            if(dial <0){
                dial+= 100
                counter ++
            }

        }else if(sens== "R"){
            dial = (dial + val)
            if(dial >99 ){
                dial -=100
                counter++
            }
            /** intuition : je compte deux fois certains arrets sur zero lorsque dial est en fait egal a 100 ex: dial 75 val 25 
             *  else if(dial == 100){
                dial = 0
            }
             */
           
        }

       // le nombre defois ou ca s'arrete pile a zero
     
        if(dial === 0){
            counter++
        }
       // console.log(dial)
    });

    console.log(counter)
})}





j1part2()