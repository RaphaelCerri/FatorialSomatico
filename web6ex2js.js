"use strict";
window.onload = function () {
    let btn = document.getElementById("calcular");
    btn.onclick = function () {
        let a;
        a = parseInt(Number(document.getElementById("num1").value));
        var soma = 1;
        for (var x = 1; x <= a; x++) {
            soma = soma + x;
        }
        document.getElementById("resultado").value = (soma-1);
    }
}
