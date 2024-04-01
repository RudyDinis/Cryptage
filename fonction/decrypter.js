const allCharacters = `É0érË]ïÂCoç>Äw:9zpAåÙ#|êOV$K2\`&Zd"SèFg¤u B<@²óÁÚcûôf6yÿ^qek5§ÖÀ}TMÓE1JøNÇ4ãÅURÛ3DîH€i'_Ü;ÝíìòÎÒØù/.üh,úë~x)*X-ÃÌ8È(?ÏaátsÍõLl[P{WÔ=jäµQâvb+ÕGnI°!mà%Yö7Ê`;

function decrypte_caractere(caractere){
    if(caractere == "���") {
        return "�"
    }
    var position = allCharacters.indexOf(caractere.split('').reverse().join(''));
    if(position + 5 > 151) {
        return allCharacters[position+5-151]
    }
    return allCharacters[position+5]
}

exports.decrypteText = (text) => {
    let decryptedText = " ";
    for(i=0; i<text.length; i+=3) {
        decryptedText += decrypte_caractere(text[i] + text[i+1] + text[i+2])
    }
    return decryptedText
}