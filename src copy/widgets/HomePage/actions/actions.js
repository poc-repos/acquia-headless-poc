import { createAction, get } from "__GLOBAL__/utils";
import { FETCH_DATA, FETCH_GUIDELINES_DATA } from "../_helpers";

export const fetchLatestData = createAction(FETCH_DATA, "value");
export const fetchLatestGuidelinesData = createAction(FETCH_GUIDELINES_DATA, "value");

export const fetchData = () => (dispatch) => {
  get({
    url: "https://ireferpocbctdipjj6n.devcloud.acquia-sites.com/api/v1/homepage?_format=json"
  }).then((res) => {
    console.log(res);
    dispatch(fetchLatestData(res));
  });
};
export const fetchGuidelinesData = () => (dispatch) => {
  get({
    url: "https://ireferpocbctdipjj6n.devcloud.acquia-sites.com/api/v1/guidelines?_format=json"
  }).then((res) => {
    console.log(res);
    dispatch(fetchLatestGuidelinesData(res));
  });
};
