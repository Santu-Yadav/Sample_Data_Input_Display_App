function DisplayData(props) {
  return (
    <div>
      <h1>This is Display data componenet</h1>
      <h2>
        {props.passData.name}
        <br /> {props.passData.age}
      </h2>
      {/* <h2>{props.passData.age}</h2> */}
    </div>
  );
}

export default DisplayData;
