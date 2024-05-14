function limitText(field, maxChar) 
{

    var forbiddenWords = ["ПІЗД","ПІЗд","ПІзд","Пізд","БлЯ","беля","БЕЛЯ","БЛЯТЬ","БЛЯть","БЛя","ХуЙ","ХУй","ХУЙ", "Хуй", "блядь", "блять", "сволочь", "Ы", "далбайоб", "діздець", "хуй", "гавно", "жопа", "мудак", "підар", "шлюха", "срака", "курва", "fuck", "shit", "asshole", "bitch", "dickhead", "dick" , "bastard", "motherfucker", "ass" , "pussy", "бля", "збс" , "заїбісь" , "пізд" , "пзд" , "сук" , "пизда", "хуй", "говно", "мудак", "сука", "жопа", "ебать", "пидор" , "ё", "Ё"];                  

    if (field.value.length > maxChar) {
        field.value = field.value.substring(0, maxChar);
    } for (var i = 0; i < forbiddenWords.length; i++) {
        if (field.value.includes(forbiddenWords[i])) {
            alert("Це слово заборонене для використання");
            maxChar--;
            field.value = field.value.substring(0, maxChar);
            break; 
        }
    }

}