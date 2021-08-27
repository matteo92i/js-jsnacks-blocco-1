// var somma = 0
// for( var i = 1; i <= 5; i++){
//     var scegliNumero = parseInt(prompt('scegli un numero'))
//      somma += scegliNumero
//     }
    
//     document.getElementById('somma').innerHTML = somma
     

var i = 1
while( i <= 5){
    i++
    var scegliNumero = parseInt(prompt('scegli un numero'))
    somma += scegliNumero
    document.getElementById('somma').innerHTML = somma
}