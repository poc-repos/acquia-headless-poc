import { produce } from "immer";
import { createReducer } from "__GLOBAL__/utils";
import { FETCH_DATA, FETCH_GUIDELINES_DATA } from "../_helpers";

const defaultState = {
  latestData: "",
  guidelinesData: [],
};

const homePageReducer = {
  [FETCH_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.latestData = action.value.data || "";
    }),
  [FETCH_GUIDELINES_DATA]: (state, action) =>
    produce(state, (draft) => {
      draft.guidelinesData = action.value.data || [];
    }),
};

export default createReducer(defaultState, homePageReducer);
