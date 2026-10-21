import type { Tarefa } from "../data/lista";

type ListaProp = {
  lista: Tarefa[];
};

export default function Lista({ lista }: ListaProp) {
  if (lista.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-zinc-300 px-4 py-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        Nenhuma tarefa ainda.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {lista.map((item) => (
        <li
          key={item.id}
          className="px-1 py-3 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
        >
          {item.texto}
        </li>
      ))}
    </ul>
  );
}
