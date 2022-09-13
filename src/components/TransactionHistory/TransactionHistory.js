import PropTypes from 'prop-types';
import {TransTable, TableHead, TableEl, TableHeadEl, TableData} from './TransactionHistory.styled'


export const TransactionHistory = ({ transactions }) => {
    const transactionItem= transactions.map(({ id, type, amount, currency}) =>
    ( 
    <TableEl key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableEl>
    

    ));
    return <TransTable>
             <TableHead>
               <TableEl>
                <TableHeadEl>Type</TableHeadEl>
                <TableHeadEl>Amount</TableHeadEl>
                <TableHeadEl>Currency</TableHeadEl>
               </TableEl>
             </TableHead>
             <tbody>{transactionItem}
             </tbody>
           </TransTable>
}

   

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};