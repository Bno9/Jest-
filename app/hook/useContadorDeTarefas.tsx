"use client";

import { useState } from "react";
import type { Tarefa } from "../data/lista";

export function useContadorDeTarefas(inicial: Tarefa[]) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(inicial);

  function adicionar(texto: string) {
    const limpo = texto.trim();
    if (!limpo) return;

    setTarefas((atual) => [...atual, { id: Date.now(), texto: limpo }]);
  }

  return { tarefas, adicionar, total: tarefas.length };
}
