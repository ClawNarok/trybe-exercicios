let nome = "peão";

switch (nome.toLowerCase())
{
    case "peão":
        console.log("De 1 a 3 casas sempre para frente.");
        break;
    case "torre":
        console.log("N casas na vertical ou na horizontal");
        break;
    case "cavalo":
        console.log("Movimentos em L");
        break;
    case "bispo":
        console.log("N casas na diagonal");
        break;
    case "rainha":
        console.log("N casas na vertical, horizontal ou diagonal");
        break;
    case "rei":
        console.log("1 casa na vertical, horizontal ou diagonal");
        break;
    default:
        console.log("Peça não encontrada");
        break;
}