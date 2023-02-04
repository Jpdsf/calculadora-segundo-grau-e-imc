function calcular(){
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



