import DisplayData from "./DisplayData";
import InputData from "./InputData";
import { useState } from "react";

function App() {
  const [menuIteam, setMenuIteam] = useState("");

  const handleNewdata = (finalData) => {
    console.log(finalData);
    setMenuIteam(finalData);
  };

  return (
    <div>
      <InputData onEnterNewData={handleNewdata} />
      <DisplayData passData={menuIteam} />
    </div>
  );
}

export default App;
