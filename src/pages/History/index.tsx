import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function History(){
  const {cycles} = useContext(CyclesContext);
  return(
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statuscolor="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statuscolor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statuscolor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}