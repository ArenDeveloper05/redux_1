import { useDispatch, useSelector } from "react-redux";
const Box = () => {
  const dispatch = useDispatch();
  const x = useSelector((state) => state.x);

  return (
    <>
      <button
        className="button-for-redux"
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        Button for redux
      </button>
      <p>{x} the value of the x from redux store </p>
    </>
  );
};

export default Box;
