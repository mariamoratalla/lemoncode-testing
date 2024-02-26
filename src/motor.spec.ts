import { partida } from "./modelo";
import { finalizarPartidaEstado, generarNumero, pedirCarta } from "./motor";
import { vi } from "vitest";

describe("motor", () => {
  describe("finalizarPartidaEstado", () => {
    it("Si la puntuación es 7.5 debería cambiar el estado de la partida a GANA", () => {
      //Arrange
      partida.puntuacion = 7.5;

      //Act
      const resultado = finalizarPartidaEstado();

      //Assert
      expect(resultado).toBe("gana");
    });

    it("Si la puntuación es mayor que 7.5 debería cambiar el estado de la partida a PIERDE", () => {
      //Arrange
      partida.puntuacion = 8;

      //Act
      const resultado = finalizarPartidaEstado();

      //Assert
      expect(resultado).toBe("pierde");
    });

    it("Si la puntuación es menor que 7.5 el estado de la partida debería ser JUGANDO", () => {
      //Arrange
      partida.puntuacion = 7;

      //Act
      const resultado = finalizarPartidaEstado();

      //Assert
      expect(resultado).toBe("jugando");
    });
  });

  describe("generarNumero", () => {
    it("Si el número generado es mayor que 7, debería devolver el número + 2", () => {
      //Arrange
      vi.spyOn(Math, "floor").mockReturnValue(8);

      //Act
      const numero = generarNumero();

      //Assert
      expect(numero).toBe(10);
    });

    it("Si el número generado es 7, debería devolver el mismo número", () => {
      //Arrange
      vi.spyOn(Math, "floor").mockReturnValue(7);

      //Act
      const numero = generarNumero();

      //Assert
      expect(numero).toBe(7);
    });

    it("Si el número generado es menor que 7, debería devolver el mismo número", () => {
      //Arrange
      vi.spyOn(Math, "floor").mockReturnValue(5);

      //Act
      const numero = generarNumero();

      //Assert
      expect(numero).toBe(5);
    });
  });

  describe("pedirCarta", () => {
    it("Debería devolver un número entre 1 y 12, saltándose el 8 y 9", () => {
      //Act
      const carta = pedirCarta();

      //Assert
      expect(carta).not.toBe(8);
      expect(carta).not.toBe(9);
      expect(carta).toBeGreaterThanOrEqual(1);
      expect(carta).toBeLessThanOrEqual(12);
    });

    it("Debería devolver un número que coincide con el valor generado en generarNumero", () => {
      //Arrange
      vi.spyOn(Math, "floor").mockReturnValue(8);

      //Act
      const carta = pedirCarta();

      //Assert
      expect(carta).toBe(10);
    });

    it("Debería llamar a la función generarNumero", () => {
      //Arrange
      const generarNumero = vi.spyOn(Math, "floor");

      //Act
      pedirCarta();

      //Assert
      expect(generarNumero).toHaveBeenCalled();
    });
  });
});
