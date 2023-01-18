let val = [1,9,3,5,2,8]

/*for (c=0;c<val.length;c++){
    console.log(`Na posição ${c} temos: ${val[c]}`)
}*/
for ( pos in val ){
    console.log(`Na posição ${pos} temos: ${val[pos]}`)
}
var p = val.indexOf(6)
/*if (p == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 3 esta na posicao ${p}`)
}*/
