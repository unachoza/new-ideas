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
  const historyTotal = useMemo(() => {
    return howMuchInHistoryIsTotal();
  });
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const doesFormHaveData = () => {
    const { transaction, category, amount } = formValues;
    if (transaction === "" || category === "" || amount === "") return false;
  };
  const createDefaultDate = () => {
    if (formValues.date === "") {
      const date = new Date();

      let currentDay = String(date.getDate()).padStart(2, "0");

      let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

      let currentYear = date.getFullYear();

      // we will display the date as DD-MM-YYYY

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
    if (!doesFormHaveData()) {
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
      <div className="form-content">
        <DropDownInput name="transaction" values={TRANSACTION} formValues={formValues} setFormValues={setFormValues} />
        <DropDownInput name="category" values={CATEGORIES} formValues={formValues} setFormValues={setFormValues} />
        <TextInput type="text" name="amount" label="amount" setFormValues={handleInputChange} />
        <TextInput
          type="date"
          name="date"
          label="date"
          setFormValues={handleInputChange}
          dates={{ min: "2023-05-01" }}
        />
      </div>
      <Button text="Create Transaction" onClick={() => handleSubmit(formValues)} />
      <>
        <h1>Income: {income}</h1>
        <h1>Expense: {expense}</h1>
        <h1>Total: {currentTotal}</h1>
        <h1>historyTotal: {historyTotal}</h1>
      </>
    </>
  );
}
