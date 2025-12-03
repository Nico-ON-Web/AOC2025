import readInput from "./read.js";

function j2part1(){


    readInput('testj2.txt',(e)=>{
    const tab = e.split(",")
  //  console.log(tab)
    const invalides = []
    // hpypothese : je peux couper en 2 morceau de longueurs egales tous les identifiants invalides (ie la longueur est forcément paire)
    tab.forEach(paire => {
        let start = parseInt(paire.split('-')[0])
        let end = parseInt(paire.split("-")[1])
        for(let i=start; i<=end; i++){
            const l = numberOfDigits(i)
          //  console.log("long: ", l)
            let str = i.toString()
         //   console.log(str)
            if(l%2===0){
                let n1=str.substring(0, l/2)
               /* for(let j=0; j<(l/2); j++){
                    
                    n1 =n1+str.at(j)
                }*/
             
                let n2=str.substring(l/2)
              /*  for(let k=l/2; k<l; k++){
                    n2=n2+str.at(k)
                }*/
              
                if(n2 === n1){
                    console.log("similaire")
                    invalides.push(i)
                }
            }
        }
    });
    console.log(invalides)
    // une fois le tableau repli je fait la somme des elements de celui ci

    const total = invalides.reduce((acc,v)=>{return acc+v})
    console.log(total)
})
}

function numberOfDigits(num){
    return num.toString().length
}



// part 2 : utiliser une expression réguliere pour tester la repetition des sous chaine 
// /et des qu'il y a une répétition dans le nombre on comptabilise invalide
/**
 * var str = "Ceci est une chaîne de caractères";
var count = (str.match(/es/g) || []).length;
console.log(count); // cela afficher '2'
OU PAS! sans regex c'est bien aussi ^^ 
je vais essayer de couper par un motif split et tester si tous les tableaux resultants sont vides
 */

function j2part2(){
    readInput("j2.txt",(e)=>{
        
        const tab = e.split(",")
        const invalides = []
        tab.forEach(paire => {

            let start = parseInt(paire.split('-')[0])
            let end = parseInt(paire.split("-")[1])
            for(let i=start; i<=end; i++){
                let str = i.toString()
               // console.log(str)
                for(let j=0; j<str.length; j++){
                    let temp = str.substring(0,j)
                    let tabtemp = str.split(temp)
                    let somme = 0
                    tabtemp.forEach(elt=>{
                        somme+=elt.length
                    })
                    if(somme ==0){
                        invalides.push(i)
                        break
                    }
                }

            }
        })
      //  console.log(invalides)
        // une fois le tableau repli je fait la somme des elements de celui ci

        const total = invalides.reduce((acc,v)=>{return acc+v})
        console.log(total)

    });
    
    
}

j2part2()

//27329677164 too high
// 27180728081 OKII