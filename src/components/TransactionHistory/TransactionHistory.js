import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    const transactionItem= transactions.map(({ id, type, amount, currency}) =>
    ( 
  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
     </tbody>

    ));
    return <table class="transaction-history">
             <thead>
               <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
               </tr>
             </thead>
             <tbody>{transactionItem}
             </tbody>
           </table>
}

   

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    }