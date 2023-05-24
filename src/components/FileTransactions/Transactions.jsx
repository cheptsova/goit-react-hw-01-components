import PropTypes from 'prop-types';
import TransactionsModule from './Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={TransactionsModule.transactionHistory}>
      <thead>
        <tr>
          <th className={TransactionsModule.column}>Type</th>
          <th className={TransactionsModule.column}>Amount</th>
          <th className={TransactionsModule.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={TransactionsModule.line}>
            <td className={TransactionsModule.value}>{type}</td>
            <td className={TransactionsModule.value}>{amount}</td>
            <td className={TransactionsModule.value}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
