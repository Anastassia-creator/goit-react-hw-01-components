import { Item, Transaction } from './TransactionHistoryItem.styled'

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    <Item key={id}>
        <Transaction>{type}</Transaction>
        <Transaction>{amount}</Transaction>
        <Transaction>{currency}</Transaction>
    </Item>
}