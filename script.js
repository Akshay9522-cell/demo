let user1=document.getElementById('user')
let computer1=document.getElementById('computer')
let result1=document.getElementById('result')

let letter1=prompt('enter your choice S/W/G').toLocaleUpperCase()

user1.innerHTML=letter1



let alphabet='SWG'
let letter=alphabet[Math.floor(Math.random()*alphabet.length)]

computer1.innerHTML=letter

if(letter1==letter){
    result1.innerHTML="you are win"
} else{
     result1.innerHTML="you are loose"
}

// let runAgain=true
// const canDrive=(age)=>{
//     return age>18? true:false
// }

// while(runAgain){


// let age=parseInt(prompt('enter age'))



// if(canDrive(age)){
//     alert('he can drive')
// } else{
//     alert('he can not drive')
// }
//   runAgain=confirm('you want to play agai')
// }



// let runAgain=true
// const canDrive=(age)=>{
//   return  age>18?true:false
// }
// while(runAgain){
// let age=parseInt(prompt('enter age'))

// if(age<0){
//     console.error("enter valid age")
//     break;
// }


// if(canDrive(age)){
//     alert('He can drive')
// } else{
//     alert('He can not drive')
// }
//   runAgain=confirm("you want to play again?")
// }


// let color=prompt('enter your color')

// document.body.style.backgroundColor=color

