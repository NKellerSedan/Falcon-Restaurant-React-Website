//declaring OrderProps with properties and functions
type OrderProps = {
  name: string;
  phone: string;
  cart: string;
  total: string;
  date: string;
}

const OrderTable = (props: OrderProps) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.cart}</td>
        <td>${props.total}</td>
        <td>{props.date}</td>
      </tr>
    </tbody>
  );
};

export default OrderTable;