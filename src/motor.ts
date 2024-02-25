import { Carta, partida } from "./modelo";

export function generarNumero() {
  let numero = Math.floor(Math.random() * 10 + 1);

  if (numero > 7) {
    numero += 2;
  }

  return numero;
}

export function actualizarPuntuacion(carta: number) {
  if (carta >= 1 && carta <= 7) {
    partida.puntuacion += carta;
  } else {
    partida.puntuacion += 0.5;
  }
}

export function pedirCarta(): Carta {
  let carta: Carta = generarNumero() as Carta;
  return carta;
}

export function siguienteCarta() {
  let mensaje = "La siguiente carta hubiese sido esta: ";
  let valorSiguienteCarta = generarNumero();
  let nombreSiguienteCarta = valorSiguienteCarta;

  if (partida.puntuacion <= 7) {
    if (valorSiguienteCarta > 7) {
      valorSiguienteCarta = 0.5;
    }

    mensaje += `${nombreSiguienteCarta} de copas. `;
    partida.puntuacion += valorSiguienteCarta;
  }

  if (partida.puntuacion === 7.5) {
    mensaje += `Habrías ganado el juego. `;
  }

  if (partida.puntuacion > 7.5) {
    mensaje += `Ya habrías alcanzado una puntuación mayor que 7.5.`;
  } else {
    mensaje += `La puntuación final sería: ${partida.puntuacion.toFixed(1)}`;
  }

  return mensaje;
}

export function nuevaPartidaLogica() {
  partida.puntuacion = 0;
  partida.estado = "no inicializada";
}

export function finalizarPartidaEstado() {
  if (partida.puntuacion === 7.5) {
    partida.estado = "gana";
  } else if (partida.puntuacion > 7.5) {
    partida.estado = "pierde";
  }
}
