const allCharacters = `É0érË]ïÂCoç>Äw:9zpAåÙ#|êOV$K2\`&Zd"SèFg¤u B<@²óÁÚcûôf6yÿ^qek5§ÖÀ}TMÓE1JøNÇ4ãÅURÛ3DîH€i'_Ü;ÝíìòÎÒØù/.üh,úë~x)*X-ÃÌ8È(?ÏaátsÍõLl[P{WÔ=jäµQâvb+ÕGnI°!mà%Yö7Ê`;

function crypte_caractere(caractere) {
    var position = allCharacters.indexOf(caractere);
    if (position == -1){
        return "���"
    }
    if (position - 5 < 0) {
        return allCharacters[position-3+151] + allCharacters[position-4+151] + allCharacters[position-5+151]
    }
    return allCharacters[position-3] + allCharacters[position-4] + allCharacters[position-5]
}


exports.crypteText = (text) => {
    let cryptedText = crypte_caractere(text[0]);
    for(i=1; i<text.length; i++) {
        cryptedText += crypte_caractere(text[i])
    }
    return cryptedText
}

