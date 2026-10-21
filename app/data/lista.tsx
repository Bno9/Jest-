export type Tarefa = {
  id: number;
  texto: string;
};

const lista: Tarefa[] = [
  { id: 1, texto: "Fazer compras" },
  { id: 2, texto: "Estudar TypeScript" },
  { id: 3, texto: "Fazer exercícios" },
];

export function carregarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(lista);
}
