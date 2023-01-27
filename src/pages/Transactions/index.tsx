import { Header } from '../../components/Headers';
import { Summary } from '../../components/Summary';
import { SearchForm } from './SearchForm';

import * as S from './styles';

const transactions = [
    {id: 1, description:"Qualquer coisa", type:"outcome", price:100, category: "Venda", createdAt: new Date()},
    {id: 2, description:"Qualquer coisa 2", type:"income", price:100, category: "Compra", createdAt: new Date()},
    {id: 3, description:"Qualquer coisa 3", type:"outcome", price:100, category: "Venda", createdAt: new Date()},
]

export function Transactions(){

    return(
        <div>
            <Header/>
            <Summary/>
            <S.TransactionsContainer>
                <SearchForm/>
                <S.TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <S.PriceHighLight variant={transaction.type}>
                                    {transaction.type === 'outcome' && '- '}
                                    {transaction.price}
                                    </S.PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {transaction.createdAt.toDateString()}
                                </td>
                            </tr>
                        )
                        })}
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>
    )
}