import { partida } from "./modelo";
import { finalizarPartidaEstado } from "./motor";
import { vi } from "vitest";

describe("finalizarPartidaEstado", () => {
  it("Si la puntuación es 7.5 debería cambiar el estado de la partida a GANA", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);

    //Act
    finalizarPartidaEstado();

    //Assert
    expect(partida.estado).toBe("gana");
  });

  it("Si la puntuación es mayor que 7.5 debería cambiar el estado de la partida a PIERDE", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);

    //Act
    finalizarPartidaEstado();

    //Assert
    expect(partida.estado).toBe("pierde");
  });
});
