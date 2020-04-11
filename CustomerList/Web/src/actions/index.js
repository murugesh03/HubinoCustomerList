export const FormPost = (data) => {
  console.log(`formpost ${data}`);
  return {
    type: "POST",
    payload: data,
  };
};

export const FetchData = (data) => {
  return {
    type: "RETRIVE",
    payload: data,
  };
};

export const Edit = (newData) => {
  return {
    type: "EDIT",
    payload: newData,
  };
};
