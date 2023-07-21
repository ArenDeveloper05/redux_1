import { useReducer } from "react";
import "./App.css";
import MyForm from "./components/my-form/MyForm";
import Box from "./components/box/Box";

function App() {
  function reducer(state, action) {
    if (action.type === "increment") {
      return {
        ...state,
        x: state.x + action.count,
      };
    } else if (action.type === "decrement") {
      return {
        ...state,
        x: action.count ? state.x - action.count : state.x - 1,
      };
      // if (!action.count) {
      //   return {
      //     ...state,
      //     x: state.x - 1,
      //   };
      // } else {
      //   return {
      //     ...state,
      //     x: state.x - action.count,
      //   };
      // }
    }
  }

  const [state, dispatch] = useReducer(reducer, { x: 10, y: 100, z: 999 });

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: "increment", count: 11 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <h1>{state.x}</h1>
      <h1>{state.y}</h1>
      <h1>{state.z}</h1>

      {/* Form using formik package */}
      <MyForm />

      {/* The logic of the redux store is in the Box component*/}
      <Box />
    </div>
  );
}

export default App;
