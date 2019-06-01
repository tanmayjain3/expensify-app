import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expense from "../fixtures/expenses";


test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@INIT" })

    expect(state).toEqual([])
})


test("should remove expense", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expense[1].id
    }
    const state = expensesReducer(expense, action)

    expect(state).toEqual([expense[0], expense[2]])
})


test("should edit expense", () => {
    const amount = 120000
    const action = {
        type: "EDIT_EXPENSE",
        id: expense[1].id,
        updates: {
            amount: amount
        }
    }
    const state = expensesReducer(expense, action)

    expect(state[1].amount).toBe(amount)
})