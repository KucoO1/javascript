/*function tabuada(){
    var n = document.getElementById('num')
    var tab = document.getElementById('seletab')
    if (n.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else{
        var num = Number(n.value)
        tab.innerHTML=''
        for (c = 1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
        }
    }

}*/

function tabuada(){
    var n = Number(document.getElementById('num').value)
    var res = document.getElementById('res')
    var c = 1
    res.innerHTML=''
    while (c<=10){
        p = n*c
        res.innerHTML += `<br>${n} x ${c} = ${p}`
        c++
    }
} 