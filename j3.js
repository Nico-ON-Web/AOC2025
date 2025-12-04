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

//j3part1()

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



// Trouver le plus GRAND nombre possible de 12 chiffres parmi tout ceux de la liste 
// en gardant l'ordre des chiffres de la séquence initiale et en supprimant certains

// recherche les 12 plus grands chiffres a partir de la premiere position 
// si l'un de ces plus grand nombre est a la position length - 12 (on ne peut plus faire de nombre de 12 chiffres derriere) 
// NON : Meme mieux on recherche le plus grand nombre qui permet d'avoir encore n nombres derrieres 
// si c'est le premier nombre recherché : on recherche que l'on puisse avoir 11 nombres derieres
// deuxieme : ... 10 nombres deriere etc...
// sino on passe ce nombre en NOT (du coup NOT devient un tableau avec une val et sa pos ?) => NOT devrait représneter en fait une position je pense et pas une valeur

// 234234234234278

function findMax2(str,pos=0, not=null){
    let max = [0,0]
    for (let i=pos; i<str.length; i++){
        let temp = parseInt(str[i])
        
        if(not === null || i < not){
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


function largest(str,pos=0,not=null,arr=[]){
    //arret
    if(arr.length===12){
        console.log(arr)
        return arr
    }
    // recherche le plus grand chiffre
    let m = findMax2(str,pos,not)
    
    // si j'ai assez de place dereriere :
    if( (str.length - (m[1]+1)) >= (12 - (arr.length+1))  && isAlreadyInArr(m,arr) ==false){

        // si je n'ai pas déja utilisé ce nombre 
      
           
            arr.push(m)
            pos = m[1]+1
            return largest(str,m[1]+1,null,arr) 
        

       
    }else{
        
        return largest(str,0,m[1],arr)
    }
    
}

function j3part2(){
    readInput("testj3.txt",(e)=>{
        const tab = e.split("\r\n")
        const resultsTab = []

        tab.forEach(line=>{
            let result = largest(line)
            resultsTab.push(result[0])
        })
        let joltage =resultsTab.reduce((acc,v)=>{return acc+v})
        console.log(joltage)
    })
}


function isAlreadyInArr(m,arr){
    let test = 0
    if(arr.length != 0){
        arr.forEach(elt=>{
            if(m[1] === elt[1]){
                test++
            }
        })
    }
    

    if(test>0){
        return true
    }else{
        return false
    }
    
}

j3part2()

// J3 P2 ECHEC ! 