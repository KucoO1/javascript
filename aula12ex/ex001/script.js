function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value.length == 0 || fano.value > ano){
        alert('ERRO! Verifique os dados e tente novamente')
    }else
    {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        if (sex[0].checked){
            genero = "Homem"
            if (idade>=0 && idade<12){
                //criança
                img.setAttribute('src','menino.jpg')
            }else if(idade<25){
                //Jovem
                img.setAttribute('src','moco.jpg')
            }else if (idade<55){
                //Adulto
                img.setAttribute('src','adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        }else if (sex[1].checked){
            genero = "Mulher"
            if (idade>=0 && idade<12){
                //criança
                img.setAttribute('src','menina.jpg')
            }else if(idade<25){
                //Jovem
                img.setAttribute('src','moca.jpg')
            }else if (idade<55){
                //Adulto
                img.setAttribute('src','adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`<p>Detectamos ${genero} de ${idade} anos</p>`
        res.appendChild(img)
        
    }

}