var num = document.getElementById('num')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function verificar(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function repeticao(n){
    if (valores.indexOf(Number(n)) != -1){
        return true
    }
}
function adicionar(){
    if (verificar(num.value) && !repeticao(num.value)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Valor invalido ou ja adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Esta vazio! Digite alguns números')
    }else{
        var s = 0
        var maior = valores[0]
        var menor = valores[0]
        for (pos in valores){
            s += valores[pos]
            if (valores[pos]>maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        var media = s/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${valores.length}</strong> números cadastrados</p>`
        res.innerHTML += `<p>Somando todos os números teremos <strong>${s}</strong></p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong><p>`
        res.innerHTML += `<p>O maior valor é o número <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O manor valor é o número <strong>${menor}</strong></p>`
    }
}