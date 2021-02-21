export const authError = (error) => {
  const errTit = Object.keys(error.response.data.message);
  const errMsg = error.response.data.message;
  const errArr = errTit.map((item) => ({ type: item, msg: errMsg[item][0] }));
  return errArr;
};
