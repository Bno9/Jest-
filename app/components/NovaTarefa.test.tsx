import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "./NovaTarefa";

describe("NovaTarefa", () => {
  it("chama onAdicionar com o texto digitado", async () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    await userEvent.type(screen.getByLabelText("Nova tarefa"), "Lavar louça");
    await userEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(onAdicionar).toHaveBeenCalledWith("Lavar louça");
  });

  it("limpa o campo depois de adicionar", async () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    const campo = screen.getByLabelText("Nova tarefa");

    await userEvent.type(campo, "Estudar Next");
    await userEvent.click(screen.getByRole("button", { name: "Adicionar" }));

    expect(campo).toHaveValue("");
  });

  it("mantém o botão desabilitado enquanto o campo está vazio", async () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    const botao = screen.getByRole("button", { name: "Adicionar" });

    expect(botao).toBeDisabled();

    await userEvent.type(screen.getByLabelText("Nova tarefa"), "x");
    expect(botao).toBeEnabled();
  });

});
