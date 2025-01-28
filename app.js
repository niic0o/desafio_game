function main() {
  alert("Bienvenido al jueguito!");
  let numeroMax = 0;
  let maximoIntentos = 3;
  // math.random genera numeros que pertenecen al intervalo [0,1)
  let opcion = parseInt(
    prompt(
      "Escribe 1 para jugar en modo fácil, 2 para dificil, 3 muy dificil, otro para salir: "
    )
  );
  switch (opcion) {
    case 1:
      numeroMax = 10;
      break;
    case 2:
      (numeroMax = 30), (maximoIntentos *= 2);
      break;
    case 3:
      (numeroMax = 50), (maximoIntentos *= 3);
      break;
    default:
      alert("Hasta pronto!");
      return;
  }
  let numeroSecreto = Math.floor(Math.random() * numeroMax) + 1;
  let numeroUsuario = 0;
  let intentos = 0;
  let intentosRestantes = maximoIntentos;
  //let palabraIntento = "vez";
  while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(
      prompt(`Me indicas un numero entre 1 y ${numeroMax} por favor: `)
    );
    intentos++;
    intentosRestantes--;
    if (numeroUsuario == numeroSecreto) {
      // {condicion} ? si es true [hace esto] : si es false [hace esto]
      alert(
        `Acertaste, el numero es: ${numeroSecreto}. Lo lograste en ${intentos} ${
          intentos == 1 ? "vez" : "veces"
        }`
      );
    } else {
      alert(
        `No acertaste el numero :( te quedan ${intentosRestantes} ${
          intentosRestantes == 1 ? "intento" : "intentos"
        }`
      );
      if (numeroUsuario < numeroSecreto) {
        alert("El numero secreto es mayor!");
      } else {
        alert("El numero secreto es menor!");
      }
    }
    if (intentos == maximoIntentos) {
      alert(
        `Has agotado tus ${maximoIntentos} intentos, el numero secreto era: ${numeroSecreto}`
      );
      break;
    }
  }
}

main();
