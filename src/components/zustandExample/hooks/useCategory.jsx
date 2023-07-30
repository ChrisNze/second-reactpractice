import useZustand from "../zustand";

const useCategory = () => {
	const { expenseCategory, expense } = useZustand();
	const categoryArr = expenseCategory ? expense.filter((cur) => cur.category === expenseCategory) : expense;
	// let sum = 0;
	// categoryArr.forEach((cur) => {
	// 	sum = sum + cur.amount;
	// });

	const sumAmount = categoryArr.reduce((acc, categoryArr) => categoryArr.amount + acc, 0);
	return { categoryArr, sumAmount };
};

export default useCategory;
