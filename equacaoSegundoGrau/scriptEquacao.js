function calcular(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let resultado = document.getElementById('Resposta');
    let descriação = document.getElementById('descricao');

    var raiz1;
    var raiz2;
    var delta = (b * b) - (4 * a * c);
    if(delta < 0){
        resultado.innerHTML = 'Raizes inexistente'
        descriação.innerHTML = 'Delta menor que 0, a equação não possue valores reais'
    }
    if(delta == 0 ){
        raiz1 = ((-b) + delta)/2
        raiz2 = ((-b) - delta)/2
        resultado.innerHTML = (raiz1 + ' e ' + raiz2)
        descriação.innerHTML = 'Delta igual a 0, a equação possue duas raizes iguais'
                 
    }

    if(delta > 0){
        raiz1 = ((-b) + delta)/2
        raiz2 = ((-b) - delta)/2
        resultado.innerHTML = (raiz1 + ' e ' + raiz2)
        descriação.innerHTML = 'Delta maior que 0, a equação possue duas raizes diferentes'
    }


}

function calcularp(){
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let valor = document.getElementById('valor')
    let valorImc = document.getElementById('valorImc')
    
    altura = altura / 100

    var imc = peso / (altura * altura)
    var imcFinal = imc.toFixed(2) 
    var inf;

    if(imcFinal < 18.5){
        inf = 'Magreza';
    }

    if(imcFinal > 18.5 && imcFinal < 24.9){
        inf = 'Normal'
    }

    if(imcFinal > 25 && imcFinal < 29.9){
        inf = 'SobrePeso'
    }
    
    if(imcFinal > 30 && imcFinal < 39.9){
        inf = 'Obesidade'
    }

    if(imcFinal > 40){
        inf = 'Obesidade Grave'
    }

    valor.innerHTML = inf;
    
    valorImc.innerHTML = imcFinal

}



