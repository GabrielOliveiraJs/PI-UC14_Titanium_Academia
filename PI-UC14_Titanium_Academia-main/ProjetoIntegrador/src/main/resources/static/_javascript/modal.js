//MODAL PARA PÁGINA "SOBRE NÓS"
let span = document.getElementsByClassName("close")[0];
let imagem1 = document.querySelector('#img1');
let imagem2 = document.querySelector('#img2');
let imagem3 = document.querySelector('#img3');
let imagem4 = document.querySelector('#img4');
let imagem5 = document.querySelector('#img5');
let imagem6 = document.querySelector('#img6');
let x;
let modalImage = document.querySelector('#modalImg');

function abrirModal(i) {
    switch (i) {
        case 1:
            modalImage.src = imagem1.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 1;
            break;
        case 2:
            modalImage.src = imagem2.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 2;
            break;
        case 3:
            modalImage.src = imagem3.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 3;
            break;
        case 4:
            modalImage.src = imagem4.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 4;
            break;
        case 5:
            modalImage.src = imagem5.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 5;
            break;
        case 6:
            modalImage.src = imagem6.src;
            document.getElementById("myModal").style.display = "block";
            document.getElementById("modalImg").style.display = "block";
            x = 6;
            break;
    }

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
}

function next() {
    switch (x) {
        case 1:
            modalImage.src = imagem2.src;
            x = 2;
            break;
        case 2:
            modalImage.src = imagem3.src;
            x = 3;
            break;
        case 3:
            modalImage.src = imagem4.src;
            x = 4;
            break;
        case 4:
            modalImage.src = imagem5.src;
            x = 5;
            break;
        case 5:
            modalImage.src = imagem6.src;
            x = 6;
            break;
        case 6:
            modalImage.src = imagem1.src;
            x = 1;
    }
};

function previous() {
    switch (x) {
        case 1:
            modalImage.src = imagem6.src;
            x = 6;
            break;
        case 2:
            modalImage.src = imagem1.src;
            x = 1;
            break;
        case 3:
            modalImage.src = imagem2.src;
            x = 2;
            break;
        case 4:
            modalImage.src = imagem3.src;
            x = 3;
            break;
        case 5:
            modalImage.src = imagem4.src;
            x = 4;
            break;
        case 6:
            modalImage.src = imagem5.src;
            x = 5;
    }
};

//MODAL PARA PÁGINA "INFORMAÇÕES DO PRODUTO"
function abrir_modal() {
    let modal = document.querySelector('#myModal');
    let img = document.querySelector('#myImg');
    let modalImg = document.querySelector("#img01");

    modal.style.display = "block";
    modalImg.src = img.src;
};

span.onclick = function () {
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
};

function fecha_modal_tela() {
    if (modal.style.display = "block") {
        modal.style.display = "none";
    }
};

//CONTRLE DE TROCA ENTRE IMAGENS
function navega_por_imagens() {
    let main = document.querySelector('#img01');
    let img1 = document.querySelector('#imagem1');
    let img2 = document.querySelector('#imagem2');
    let img3 = document.querySelector('#imagem3');
    let img4 = document.querySelector('#imagem4');

    switch (x) {
        case 0:
            if (main.src == img1.src) {
                main.src = img4.src;
            } else if (main.src == img2.src) {
                main.src = img1.src;
            } else if (main.src == img3.src) {
                main.src = img2.src;
            } else if (main.src == img4.src) {
                main.src = img3.src;
            };
            break;
        case 1:
            if (main.src == img1.src) {
                main.src = img2.src;
            } else if (main.src == img2.src) {
                main.src = img3.src;
            } else if (main.src == img3.src) {
                main.src = img4.src;
            } else if (main.src == img4.src) {
                main.src = img1.src;
            };
    }
};