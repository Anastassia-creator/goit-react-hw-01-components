import { Table } from './TransactionHistory.styled'
import { TableHead } from './TableHead/TableHead';
import { TransactionHistoryItem } from './TableRow/TransactionHistoryItem'

export const TransactionHistory = ({items}) => {
    return ( <Table>
        <TableHead />
        <tbody>
           {items.map(transaction => (
            <TransactionHistoryItem 
                key = {transaction.id}
                type = {transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
            />
        ))} 
        </tbody>
    </Table>)
}