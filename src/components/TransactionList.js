import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // useEffect(() => {
  //   const transactions = localStorage.getItem("text", 0);

  //   if (transactions) {
  //     setText(JSON.parse("text"));
  //     setAmount(JSON.parse(0));
  //   }
  // }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
