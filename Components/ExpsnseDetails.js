function ExpsnseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  return (
    <>
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{amount}</div>
    </>
  );
}
export default ExpsnseDetails;
