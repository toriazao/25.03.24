const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    anguloInicial = 0,
    anguloFinal = 360,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel");

var posicaoSuperior = 200,
    posicaoEsquerda = 70,
    anguloAvatar = 0;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";

function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", posicaoEsquerda + "px");
    if (posicaoEsquerda > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value);
    if (posicaoEsquerda < posicaoEsquerdaInicial) {
            posicaoEsquerda = posicaoEsquerdaInicial;
        }
         imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
    console.error("Ops! Chegou ao limite e não é possível mais mover para a esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", posicaoEsquerda + "px");
}

function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", posicaoEsquerda + "px");
    if (posicaoEsquerda < posicaoEsquerdaFinal) {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerdaFinal){
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para a direita. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", posicaoEsquerda + "px");
}

function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", posicaoSuperior + "px");
    if (posicaoSuperior > posicaoSuperiorInicial) {
        posicaoSuperior -= parseInt(txtPixel.value);
        if (posicaoSuperior < posicaoSuperiorInicial) {
        posicaoSuperior = posicaoSuperiorInicial;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para a esquerda. Tente outro botão.");
    }
        console.log("Posição superior do avatar depois: ", posicaoSuperior + "px");
    }

function moverParaBaixo() {
     console.clear();
     console.log("Posição superior do avatar antes: ", posicaoSuperior + "px");
     if (posicaoSuperior < posicaoSuperiorFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (posicaoSuperior > posicaoSuperiorFinal) {
            posicaoSuperior = posicaoSuperiorFinal;
        }
         imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para a esquerda. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", posicaoSuperior + "px");
}

function girarHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if(anguloAvatar < anguloFinal) {
       anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloFinal) {
            anguloAvatar = anguloFinal;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.")
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function girarAntiHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if(anguloAvatar > anguloInicial) {
       anguloAvatar -= parseInt(txtPixel.value);
        if (anguloAvatar < anguloInicial) {
            anguloAvatar = anguloInicial;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.")
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}

function deslizarParaDireita() {
    setTimeout(function () {
        imgAvatar.style.left = posicaoEsquerdaFinal + 'px';
    }, 100);
}

function posicaoAleatoria() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var randomX = Math.floor(Math.random() * (screenWidth - imgAvatar.width));
            var randomY = Math.floor(Math.random() * (screenHeight - imgAvatar.height));
            imgAvatar.style.left = randomX + "px";
            imgAvatar.style.top = randomY + "px";
            window.onload = posicaoAleatoria;
}
