import Tarefas from "./components/Tarefas";
import { carregarTarefas } from "./data/lista";

export default async function Home() {
  const lista = await carregarTarefas();

  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold tracking-tight">
          Lista de Tarefas
        </h1>
        <Tarefas inicial={lista} />
      </div>
    </main>
  );
}
