import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, []);

   return(
    <Container>
      <table>
        <thead>
          <tr>Historio de Transações</tr>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Category</th>
            <th>Total</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td>10/08/2023</td>
            <td>Casa</td>
            <td>R$ 600,00</td>
            <td className="withdraw">-</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td>15/08/2023</td>
            <td>Alimentação</td>
            <td>R$ 100,00</td>
            <td className="withdraw">-</td>
          </tr>
          <tr>
            <td>Venda de Computador</td>
            <td>06/08/2023</td>
            <td>Renda extra</td>
            <td>R$ 2.000,00</td>
            <td className="deposit">+</td>
          </tr>
        </tbody>
      </table>
    </Container>

   )
}