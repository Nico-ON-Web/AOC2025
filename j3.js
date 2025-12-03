import readInput from "./read.js";

function j3part1(){
    readInput("j3.txt",(e)=>{
        const tab = e.split("\n")
        //console.log(tab)
        // je dois traiter sous forme de chaine de caractere les lignes (trop grandes pour faire des int)
        // je peux donc pas utiliser max() ext
        const results = []
        
        tab.forEach( line => {

            let max = findMax(line)
            //console.log(max)
            
            // si la position du maximum n'est pas a la fin
            if(max[1] != line.length-1){
                let max2 = findMax(line,max[1]+1) 
                console.log(max2)
                let n1= max[0].toString()+max2[0].toString()
                results.push(Number(n1))
            }else{
            // sinon (si le max est a la fin) 
                // je cherche le max du dessous (not => max)
                let max2=findMax(line,0,max[0])  
                // combinaison nombre trouvé  et max    
                let n1= max2[0].toString()+max[0].toString()
                results.push(Number(n1))
              
            }
            const joltage = results.reduce((acc,v)=>{return acc+v})
            console.log(joltage)
        });
    })
}

j3part1()

/**
 * cherche la premiere occurence du chiffre le plus grand dans une chaine de caractere (chiffres)
 * @param {String} str la chaine a analyser
 * @param {Number} pos la position a laquelle commencer de chercher
 * @param {Number | null} not le caractere a ne pas rechercher si jamais
 * @returns {Array}  [c, pos] le caractere / chiffre le plus grand et sa postion dans la chaine
 */
function findMax(str,pos=0, not=null){
    let max = [0,0]
    for (let i=pos; i<str.length; i++){
        let temp = parseInt(str[i])
        
        if(temp != not){
           if(temp == 9){
                max = [9,i]
                break
            }else if(temp>max[0]){
                max = [temp,i]
            } 
        }
        
    }
    return max
}


