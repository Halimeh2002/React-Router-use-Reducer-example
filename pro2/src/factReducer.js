export const initialState = {
  loading: false,
  fact: "",
  error: false,
};

// Fetch_start   : loading :true
// fetch_success : loading: false
//               : fact : res.data.fact
//
// fetch_error   : loading: false
//               : error  : true

export const factReducer = (state, action) => {
  //{type: , data}
  switch (action.type) {
    case "Fetch_start":
      return { loading: true, fact: "", error: false };
    case "fetch_success":
      return { loading: false, fact: action.data, error: false };
    case "fetch_error":
      return { loading: false, fact: "", error: true };
    default:
      return state;
  }
};
