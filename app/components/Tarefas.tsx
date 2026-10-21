"use client";

import Lista from "./Lista";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "../hook/useContadorDeTarefas";
import type { Tarefa } from "../data/lista";

type TarefasProps = {
  inicial: Tarefa[];
};

export default function Tarefas({ inicial }: TarefasProps) {
  const { tarefas, adicionar, total } = useContadorDeTarefas(inicial);

  return (
    <div className="mt-1">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {total === 1 ? "1 tarefa" : `${total} tarefas`}
      </p>

      <div className="mt-6">
        <NovaTarefa onAdicionar={adicionar} />
      </div>

      <div className="mt-6">
        <Lista lista={tarefas} />
      </div>
    </div>
  );
}
