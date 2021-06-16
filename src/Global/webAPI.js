import axios from "axios";

const api = axios.create({});

const getUrl = (url) => {
  return url;
};

const returnData = ({ res, showSnack }) => {
  if (showSnack) {
    renderAPIResult(res.data);
  }
  console.log("test", res);
  return res;
};

export const get = ({ url, config }) =>
  api
    .get(getUrl(url), config)
    .then((res) => returnData({ res, url }))
    .catch((e) => {
      console.log(e);
    });

export const post = ({ url, inputs, showSnack }) => {
  return api
    .post(getUrl(url), inputs)
    .then((res) => returnData({ res, url, showSnack, inputs }))
    .catch(() => {
      console.log("error");
    });
};
