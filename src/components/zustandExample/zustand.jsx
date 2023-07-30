import { create } from "zustand";

const useZustand = create((set) => ({
	expense: [
		{ id: 1, description: "Biscuit", amount: 100, category: "Grocery" },
		{ id: 2, description: "Biscuit", amount: 200, category: "breverages" },
		{ id: 3, description: "Biscuit", amount: 300, category: "foods" },
		{ id: 4, description: "Biscuit", amount: 400, category: "milk" },
	],

	firstName: "",
	lastName: "",
	age: "",
	expenseCategory: "",
	sum: 0,
	name: [],
	changeFirstName: (e) => set(() => ({ firstName: e.target.value })),
	changeLastName: (e) => set(() => ({ lastName: e.target.value })),
	changeAge: (e) => set(() => ({ age: e.target.value })),
	Name: () => set((store) => ({ name: [...store.name, store.firstName] })),
	addItems: () =>
		set((store) => ({
			expense: [...store.expense, { id: store.expense.length + 1, description: store.firstName, amount: store.age, category: store.lastName }],
		})),
	deleteItem: (items) =>
		set((store) => ({
			expense: store.expense.filter((cur) => cur !== items),
		})),
	selectCategory: (e) =>
		set({
			expenseCategory: e.target.value,
		}),
}));

export default useZustand;
