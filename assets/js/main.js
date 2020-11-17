
// function getStringLength(string){
//   let stringLength;
//   if(string.length === 1){
//     stringLength = "La chaîne contient qu'un seul caractère";
//   } else {
//     stringLength = `La chaîne contient ${string.length} caractères`;
//   }

//   return stringLength;  
// }

 let div = document.querySelector('div');
const getStringLength = (string) =>{  let stringLength ;
  if(string.length === 1 ){

  stringLength = "La chaîne contient qu'un seul caractère";
}else{
      stringLength = `La chaîne contient ${string.length} caractères`;}
    
  
     return stringLength;  
}

    let a = prompt("Ecrit ce que tu veux");
    div.innerHTML = getStringLength(a);