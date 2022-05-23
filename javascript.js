const textAreaA = document.querySelector(".textArea1");
const textAreaB = document.querySelector(".textArea2");


function botonEncriptar(){
    const textoEncriptado = encriptar(textAreaA.value);
    textAreaB.value = textoEncriptado;
    console.log(textArea1);
 }
    function encriptar(stringParaEncriptar){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
        stringParaEncriptar = stringParaEncriptar.toLowerCase();
        for (let i= 0;   i< matrizCodigo.length; i++){
            if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
           
        }

        
    }
    return stringParaEncriptar;
}

console.log ( stringParaEncriptar);

    
function botonDesencriptar(){
    const textoDesencriptado = desencriptar (textAreaA.value);
    textAreaB.value = textoDesencriptado;
    console.log(textArea1);
}

function desencriptar(stringDesencriptar){
    let matrizCodigo2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i= 0;   i< matrizCodigo2.length; i++){
        if(stringDesencriptar.includes(matrizCodigo2[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1]);
       }
      
}
return stringDesencriptar;
}
console.log (stringDesencriptar);
//copiar

function botonCopiar() {
    let copiar = textAreaB;
    textAreaB.select();
    document.execCommand("copy");
  }
