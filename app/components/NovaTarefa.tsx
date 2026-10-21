"use client";

import { useState } from "react";

type NovaTarefaProps = {
  onAdicionar: (texto: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [texto, setTexto] = useState("");

  function handleSubmit(evento: React.FormEvent) {
    evento.preventDefault();
    onAdicionar(texto);
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
        aria-label="Nova tarefa"
        className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm
                   placeholder:text-zinc-400
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none
                   dark:border-zinc-700 dark:bg-zinc-950 dark:placeholder:text-zinc-500"
      />
      <button
        type="submit"
        disabled={!texto.trim()}
        className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white
                   transition-colors hover:bg-indigo-500
                   focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:outline-none
                   disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
      >
        Adicionar
      </button>
    </form>
  );
}
