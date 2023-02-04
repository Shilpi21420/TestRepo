import Expanseitem from "./Expanseitem";
function Expenses() {
  const expenses = [
    {
      title: "Food",
      amount: 200,
      date: new Date(2022, 7, 14).toString().slice(0, 15),
      location: "Bihar"
    },
    {
      title: "Bill",
      amount: 500,
      date: new Date(2022, 7, 15).toString().slice(0, 15),
      location: "Jharkhand"
    },
    {
      title: "Roaming",
      amount: 250,
      date: new Date(2022, 8, 14).toString().slice(0, 15),
      location: "Delhi"
    },
    {
      title: "College",
      amount: 75000,
      date: new Date(2022, 8, 14).toString().slice(0, 15),
      location: "Banglore"
    }
  ];
  return (
    <div>
      {expenses.map((item) => {
        return (
          <Expanseitem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        );
      })}
    </div>
  );
}
export default Expenses;
