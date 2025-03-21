
 /*var a = 5
var b = 7

function soma (a,b){
    return (a+b)
}

console.log(soma(a,b))*/


 //Manipulação de Array
 
/*var k = [1,2,3,4]

console.log(k)
console.log(k.length)

//console,log (k[1])

k.push(5)

console.log(k)
console.log(k.length)

k.pop()
k.pop()
console.log(k)
console.log(k.length)*/

/*function Pessoa(a,b,c){
    this.nome = a
    this.idade = b
    this.telefone = c
}

var x = new Pessoa ("Victor", 25, 1147478922)
var y = new Pessoa ("Rose", 20, 1147478922)
console.log(x)
console.log(y)*/


/*function Carros(nome, ano,cor, modelo, popular) {
    this.nomeCarro = nome     // Nome do carro
    this.anoCarro = ano      // Ano do carro]
    this.corCarro = cor      // cor do carro
    this.modeloCarro = modelo // Modelo do carro
    this.popularCarro = popular // Propriedade booleana
}

var meuCarro = new Carros("Fusca", 1978, "azul" , Fusca 1300", true)
console.log(meuCarro)*/



/*t = [1,2,3,4]

t.forEach(b => {
    if((b%2)===0){
        console.log(b, "é par")
    }
    else{
        console.log(b, "é impar")
    }
    
});*/

// array de objeto

/*a = [
    {nome: "Fulano", idade:20},
    {nome: "Fulano", idade:20}

]*/

a = []

function Aluno (a,b,c){
this.nome = a
this.rgm = b
this.curso = c
}

var j = new Aluno ("Wesley", 25612314, "ADS")
var k = new Aluno ("Sarah", 4569874, "ADS" )
var l = new Aluno ("Amanda", 2415698, "Edfisica") 

a.push(j,k,l)
console.log(a)

a.forEach(c => {
    console.log(a.curso)
    if(curso = ADS){
        console.log (c, "ok ;)")
    }
    else{
        console.log(c, "não ok :(")
    }
    
});