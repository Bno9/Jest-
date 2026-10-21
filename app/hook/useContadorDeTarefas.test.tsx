import { act, renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "./useContadorDeTarefas";
import type { Tarefa } from "../data/lista";

const inicial: Tarefa[] = [
  { id: 1, texto: "Fazer compras" },
  { id: 2, texto: "Estudar TypeScript" },
];

describe("useContadorDeTarefas", () => {
  it("começa com o total da lista inicial", () => {
    const { result } = renderHook(() => useContadorDeTarefas(inicial));

    expect(result.current.total).toBe(2);
  });

  it("incrementa o total ao adicionar", () => {
    const { result } = renderHook(() => useContadorDeTarefas(inicial));

    act(() => result.current.adicionar("Lavar louça"));

    expect(result.current.total).toBe(3);
    expect(result.current.tarefas.at(-1)?.texto).toBe("Lavar louça");
  });

  it.each(["", "   "])("ignora texto vazio ou só com espaços: %j", (texto) => {
    const { result } = renderHook(() => useContadorDeTarefas(inicial));

    act(() => result.current.adicionar(texto));

    expect(result.current.total).toBe(2);
    expect(result.current.tarefas).toEqual(inicial);
  });
});
