var textComent = document.getElementById("msg");
var resultado = document.getElementById("textResult");



function criptografar(){
    const textToCrip = textComent.value.toLowerCase();
    textMod = textToCrip.replaceAll("e","enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    return resultado.innerHTML = textMod;
}

function descriptografar(){
    
    const textToDecrip = textComent.value.toLowerCase();
    textMod = textToDecrip.replaceAll("enter","e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    return resultado.innerHTML = textMod;
}

function copy(){
    navigator.clipboard.writeText(textMod);
}