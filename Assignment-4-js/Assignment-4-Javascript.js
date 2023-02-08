// 1st Problem-Solving 
//modifying the number

function mindGame(number){

    return (((number*3+10)/2)-5)
}

let store =mindGame(5);
console.log(store)




// 2nd Problem-Solving 
//Check the string lenth even or odd

function  evenOdd(string){

    if(string.length%2===0){
       return("even")
    }
    
   else {return "odd"}
}

let  store2 =evenOdd("Pheros")
console.log(store2)


// 3rd problem
//substract  the input number with 7 and returning it

function isLGSeven(number){

    let substraction = number-7;

    if(substraction<=7){
        return substraction;
    }

    else{return (number*2)}

}

let store3 =isLGSeven(6);
console.log(store3)



//4th problem
// Cheacking array item , and store negative and positive  values separately
//and return the negative values length

function findingBadData(arry){
    
    let goodData =[];
    let badData = [];
    
    for(let i=0; i<arry.length; i++){
        
        const element = arry[i];
        if(element<=0){

        badData.push(element)
        
        }
      else{
         goodData.push(element)
      }

    }
    
    return badData.length
    
    // return {
    //     badData,
    //     goodData,
        
    // }
    
}

let store4= findingBadData([1,2,5])
console.log(store4)



// 5th problem 
//getting 3 number and multiply with specific numbers and checking the  total 
//if total is 2000 or gatter then 2000 then substrcat it with 2000 and return it
//if less then 2000 then only return the total

function gemsToDiamond(first,second,third){
    
    let first_1 = first*21;
    let second_2 = second*32;
    let third_2 = third*43

    let total =first_1+second_2+third_2;
    
    if(total >=1000*2){
        return total-2000;
    }
    else{return total}
    
}
let get =gemsToDiamond(20,200,50)
console.log(get)