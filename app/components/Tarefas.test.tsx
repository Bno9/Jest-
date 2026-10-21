import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tarefas from "./Tarefas";

describe("Tarefas", () => {
  it("exibe a tarefa e atualiza o contador depois de adicionar", async () => {
    const user = userEvent.setup();
    render(<Tarefas inicial={[]} />);

    expect(screen.getByText("Nenhuma tarefa ainda.")).toBeInTheDocument();
    expect(screen.getByText("0 tarefas")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Nova tarefa"), "Estudar Next");
    await user.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(screen.getByRole("listitem")).toHaveTextContent("Estudar Next");
    expect(screen.getByText("1 tarefa")).toBeInTheDocument();
    expect(screen.queryByText("Nenhuma tarefa ainda.")).not.toBeInTheDocument();
  });
});
