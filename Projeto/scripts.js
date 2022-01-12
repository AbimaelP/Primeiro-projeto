function msgclass1(){
    var data = new Date()
    var ho = data.getHours()
    var mi = data.getMinutes()
    var prox_aula = 60 - mi
    var botao = document.getElementById('botao_prog')
    botao.style.opacity = '0'
    var msg = document.getElementById('aula')
    if (ho == 7 && mi >= 50 && mi < 60) {
        msg.innerText = `Ja são ${ho}:${mi} Sua aula de inglês esta prestes a começar`
    }   else if (ho > 7 && ho < 10) {
            msg.innerHTML = `Agora são ${ho}:${mi}<p>Você esta na aula de inglês agora</p><p> Faltam ${prox_aula} minutos para sua aula de Programação web começar</p>`
            document.getElementById('img_aul').src = "_images/" + "english_cap.png";
            if (ho >= 7 && ho <= 8 && mi >= 50 && mi < 60) {
                document.getElementById('img_aul').src = "_images/english_cap.png";
                document.getElementById('img_proxaul').src = '_images/progrmn_cap.png'
            }
        }   else if (ho > 9) {
            msg.innerHTML = `Agora são ${ho}:${mi}<p>Você esta na aula de Desenvolvimento Web<p>Faltam ${prox_aula} minutos para sua aula de banco de dados MySQL começar</p>`
            document.getElementById('img_fundo').src = "_images/" + "progrmn_cap.png";
            }
    
}
