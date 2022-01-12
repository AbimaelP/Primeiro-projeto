function msgtrue(){
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var msg = document.getElementById('aula')
    msg.innerText = `Let's learn English now?? ${hora}:${minute}`
}
