import moment from "moment";
import { setStartDate, setEndDate, setTextFilter } from "../../actions/filters";

test("startDate", () => {
    const actions = setStartDate(moment(0));
    expect(actions).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test("endDate", () => {
    const actions = setEndDate(moment(0));
    expect(actions).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test("textFilter", () => {
    const actions = setTextFilter("Something");
    expect(actions).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Something"
    })
})