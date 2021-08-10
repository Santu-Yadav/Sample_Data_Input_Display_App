import { useState } from "react";
// import DisplayData from "./DisplayData";

function InputData(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleInputName = (event) => {
    setEnteredName(event.target.value);
    // console.log(enteredName);
  };

  const handleInputAge = (event) => {
    setEnteredAge(event.target.value);
    // console.log(enteredAge);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const finalData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onEnterNewData(finalData);
    console.log(finalData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      Hello Santu Yadav, Development is in progess
      <div>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type="text" value={enteredName} onChange={handleInputName} />
          <br />
          <label>Age</label>
          <input type="text" value={enteredAge} onChange={handleInputAge} />
          <div>
            <button type="submit"> Add</button>
          </div>
        </form>
        {/* <button>Add</button> */}
      </div>
      {/* <DisplayData data={finalData} /> */}
    </div>
  );
}

export default InputData;
