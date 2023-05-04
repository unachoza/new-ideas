import { useState, useContext, useMemo } from "react";
import TextInput from "./Inputs/TextInput";
import DropDownInput from "./DropDownInput/DropDownInput";
import Button from "../UI/Button/Button";
import { TransactionContext } from "../../Context/TransactionContext";
import { TRANSACTION, CATEGORIES } from "../../Constants/FormConstants";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({ transaction: "", category: "", amount: "", date: "" });
  const [currentTotal, setCurrentTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const { transactions, setTransactions } = useContext(TransactionContext);

  const howMuchInHistoryIsTotal = () => {
    let incomeSum = 0;
    const filteredIncome = transactions.filter(({ transaction }) => transaction === "Income");
    for (const tx of filteredIncome) {
      incomeSum += parseInt(tx.amount);
    }
    return incomeSum;
  };
  const historyTotal = useMemo(() => howMuchInHistoryIsTotal());

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const doesFormHaveData = () => {
    const { transaction, category, amount } = formValues;
    return transaction === "" || category === "" || amount === "" ? false : true;
  };
  const createDefaultDate = () => {
    if (formValues.date === "") {
      const date = new Date();
      let currentDay = String(date.getDate()).padStart(2, "0");
      let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
      let currentYear = date.getFullYear();
      let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
      setFormValues({
        ...formValues,
        date: currentDate,
      });
      return currentDate;
    }
  };

  const addTotal = (currentTotal, newValue) => {
    setIncome((income) => income + newValue);
    currentTotal += newValue;
    setCurrentTotal(currentTotal);
    calcIncomePercent(currentTotal, newValue);
    return currentTotal;
  };
  const subtractTotal = (currentTotal, newValue) => {
    setExpense((expense) => expense + newValue);
    currentTotal -= newValue;
    setCurrentTotal(currentTotal);
  };

  const calcIncomePercent = (currentTotal, newValue) => {
    const newValuePercent = newValue / currentTotal;
    return newValuePercent;
  };

  const handleSubmit = ({ amount, transaction }) => {
    if (doesFormHaveData()) {
      createDefaultDate();
      const numbericValue = parseInt(amount);
      setTransactions([...transactions, formValues]);
      if (transaction === "Income") {
        addTotal(currentTotal, numbericValue);
      } else {
        subtractTotal(currentTotal, numbericValue);
      }
    }
  };
  return (
    <>
      <div className="form">
        <div>Enter Transaction</div>
        <div className="form-content">
          <DropDownInput
            name="transaction"
            values={TRANSACTION}
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <DropDownInput name="category" values={CATEGORIES} formValues={formValues} setFormValues={setFormValues} />
          <TextInput type="text" name="amount" placeholder="amount" setFormValues={handleInputChange} />
          <TextInput type="date" name="date" setFormValues={handleInputChange} dates={{ min: "2023-05-01" }} />
        </div>
        <Button text="Create Transaction" onClick={() => handleSubmit(formValues)} />
        <div>
          <h5>Income: {income}</h5>
          <h5>Expense: {expense}</h5>
          <h5>Total: {currentTotal}</h5>
        </div>
      </div>
    </>
  );
}
