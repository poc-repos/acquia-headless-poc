import { produce } from "immer"
import { createReducer } from '__GLOBAL__/utils';

import { EMPTY_VALUE, SET_VALUE } from "../_helpers/constants";
import defaultState from "./default"

const appReducer = {
    [SET_VALUE]: (state, action) =>
        produce(state, (draft) => {
            draft.fieldValue = action.value;
        }),
    [EMPTY_VALUE]: (state) =>
        produce(state, (draft) => {
            draft.fieldValue = "";
        }),
};

export default createReducer(defaultState, appReducer);
