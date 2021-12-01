let opc = ["Aprovado", "Lista", "Reprovado", ""];

let estado = opc[3]
let msg = "";

switch (estado) {
    case opc[0]:
        msg = opc[0];
        break;
    case opc[1]:
        msg = opc[1];
        break;
    case opc[2]:
        msg = opc[2];
        break;
    default:
        msg = "Não se aplica";
        break;
}

console.log(msg);