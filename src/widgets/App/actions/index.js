import { createAction } from "__GLOBAL__/utils"
import { EMPTY_VALUE, SET_VALUE } from "../_helpers/constants";

const setEventValue = createAction(SET_VALUE, "value");
const setEmptyValue = createAction(EMPTY_VALUE)

export const setValue = (value) => (dispatch) => {
    dispatch(setEventValue(value))
}

export const emptyValue = () => (dispatch) => {
    dispatch(setEmptyValue(2))
}