function msgclass1(){
    var data = new Date()
    var ho = data.getHours()
    var mi = data.getMinutes()
    var prox_aula = 60 - mi
    var msg = document.getElementById('aula')
    if (ho == 7 && mi >= 50 && mi <= 59) {
        msg.innerText = `Ja são ${ho}:${mi} Sua aula de inglês esta prestes a começar`
    }   else if (ho > 7 && ho < 12) {
            msg.innerHTML = `Agora são ${ho}:${mi}<p>Você esta na aula de inglês agora</p><p> Faltam ${prox_aula} minutos para sua aula de Programação web começar</p>`
            document.getElementById('img_aul').src = "_images/" + "english_cap.png";
            if (mi >= 50 && mi < 59) {
                document.getElementById('img_aul').src = "_images/english_cap.png";
                form = document.getElementById('img_proxaul');
                form.src = '_images/progrmn_cap.png'
            }
        }   else if (ho < 13) {
            msg.innerHTML = `Agora são ${ho}:${mi}<p>Você esta na aula de Desenvolvimento Web<p>Faltam ${prox_aula} minutos para sua aula de banco de dados MySQL começar</p>`
            document.getElementById('img_fundo').src = "_images/" + "progrmn_cap.png";
            }
    
}
