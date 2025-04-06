import Axios from "axios";
import { useReducer, useState } from "react";
import { factReducer, initialState } from "./factReducer";

// export const Fact = () => {
//   const [loading, setLoading] = useState(false);
//   const [fact, setFact] = useState("");
//   const [error, setError] = useState(false);

  // Fetch_start   : loading :true
  // fetch_success : loading: false
  //               : fact : res.data.fact
  //
  // fetch_error   : loading: false
  //               : error  : true

  const [state, dispath] = useReducer(factReducer, initialState);

const handelFetch = () => {
    dispath({type:"Fetch_start"})
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        dispath({type:"fetch_success", data: res.data.fact})

        console.log(res);
      })
      .catch((error) => {
        dispath({type:"fetch_error", data: res.data.fact})
        console.log(error);
      });
    
  }
  return (
    <div>
      <button onClick={handelFetch}>
        {state.loading ? "is loading..." : "Fetch Cat Fact"}
      </button>
      {state.error && <p>Error, some thing is wrong</p>}

      <h1>{state.fact}</h1>
    </div>
  );
};
  