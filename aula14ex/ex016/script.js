function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Dados em falta')
    }else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando: '
        if (i < f){
            for (c = i;c <= f; c+=p){
                res.innerHTML +=`${c} \u{1f449}`
            }
        }else{
            for (c = i;c >= f; c-=p){
                res.innerHTML +=`${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}