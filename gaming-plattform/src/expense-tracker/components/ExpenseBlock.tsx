import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const ExpenseBlock = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Test", amount: 5, category: "Groceries" },
    { id: 2, description: "Test2", amount: 3, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expenses) => expenses.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.findLastIndex((value) => value.id) + 1,
              },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(visibleExpenses.filter((expense) => expense.id !== id))
          }
          // onFilter={filterExpenses}
        />
      </div>
    </>
  );
};

export default ExpenseBlock;
