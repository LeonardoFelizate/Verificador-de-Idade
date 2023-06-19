function verificar () {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoPessoa = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(anoPessoa.value) < 1900 || Number(anoPessoa.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoPessoa.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            }  else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            } 
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            }  else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}