import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
 
const Expenses = (props) => {

    const [enteredYear,setEnteredYear] = useState('2021');
    const onChangeYearHandler = (year) => {
        setEnteredYear(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    })
    
    return(
        <div>
        
        <Card className = "expenses">
            <ExpenseFilter filteredYear={enteredYear} ChangeYearHandler = {onChangeYearHandler}></ExpenseFilter>
            <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
            <ExpensesList items = {filteredExpenses}></ExpensesList>

            {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
                key = {expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            )) }} */}
            {/* //using ternary expression */}
            {/* {filteredExpenses.length === 0 ? <p>No Expenses Found!</p> : filteredExpenses.map((expense) => (
            <ExpenseItem
                key = {expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            )) } */}

        </Card>
        </div>
    );
};
 
export default Expenses;