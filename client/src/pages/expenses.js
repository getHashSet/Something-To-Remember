import React, {useState, useEffect} from "react";
import Expensesform from "../components/Expensesform/index";
import ExpensesResult from "../components/ExpensesResult/index";
import API from "../utils/API"


const Expenses = () => {


const [expenses, setExpenses] = useState([]);
const [budgetInput, setBudgetInput] = useState("");
const [expensesInput, setExpensesInput] = useState({

    itemName: "",
    amount: "",
    category: "",
    note: ""

})

console.log(expensesInput)


useEffect ( () => {
    loadBudget ();
}, []);


useEffect ( () => {
    loadExpenses ();
}, []);



const loadBudget = async () => {
    try {
      const response = await API.getAllExpenses();
      setExpenses(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };


  const loadExpenses = async () => {
    try {
      const response = await API.getAllExpenses();
      setExpenses(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };

  // function for handling input change for budget 
  const handleInputChangeBudget = event => {
    setBudgetInput(event.target.value);
    console.log(budgetInput)

  };

  // function for handling input change for form
  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpensesInput({
      ...expensesInput,
      [name]: value
    });
    console.log(expensesInput)

  };



    return (
      <React.Fragment>
        <section className="section-budget">
        <Expensesform
        handleInputChangeBudget= {handleInputChangeBudget}
        handleInputChange = {handleInputChange}
        expensesInput = {expensesInput}
        budgetInput = {budgetInput}
        expenses = {expenses}
        />

        <ExpensesResult/>
        </section>
        </React.Fragment>
    )
}

export default Expenses;