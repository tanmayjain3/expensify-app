import moment from "moment";
import filtersReducer from "../../reducers/filters";


test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@INIT" })

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("sort by amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" })
    expect(state.sortBy).toEqual("amount")
})