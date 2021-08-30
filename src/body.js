import { div } from "prelude-ls";
import { useState } from "react";
import "./body.css";

const Body = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);

  const [tipOutput, setTipOutput] = useState("");
  const [customInput, setCustomInput] = useState("");

  const amountChangeHandler = (e) => {
    setBillAmount(e.target.value);
  };
  const noOfPEopleChange = (e) => {
    setNoOfPeople(e.target.value);
    customTip();
  };
  const customInputHandler = (e) => {
    setCustomInput(e.target.value);

    console.log(customInput);
  };
  const resetHandler = () => {
    setTipOutput("");
    setBillAmount("");
    setNoOfPeople("");
    setCustomInput("");
  };

  const customTip = () => {
    // if (customInput !== "") {
    setTipOutput(totalOutput * (customInput / 100));
  };
  const btnHandler = (percentValue) => {
    setTipOutput(totalOutput * (percentValue / 100));
  };

  //     const totalOutput = ()=> {

  //         if( billAmount = '' || noOfPeople === '') {
  //             return 0;
  //             ;
  //         }
  //         else {
  // return billAmount/noOfPeople

  //         }

  //     }
  const totalOutput = billAmount / noOfPeople;

  // billAmount/noOfPeople

  //   if

  return (
    <div className="body">
      <h2>Spliter</h2>
      <div className="box">
        <div className="Container">
          <div className="bill-container">
            <label htmlFor="bill">Bill</label>
            <input
              type="number"
              min="1"
              id="bill"
              className="inputBill"
              value={billAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div>
            <p>Select Tip %</p>
            <div className="buttonContainer">
              <button className="button" onClick={() => btnHandler(5)}>
                5%
              </button>
              <button className="button" onClick={() => btnHandler(10)}>
                10%
              </button>
              <button className="button" onClick={() => btnHandler(15)}>
                15%
              </button>
              <button className="button" onClick={() => btnHandler(25)}>
                25%
              </button>
              <button className="button" onClick={() => btnHandler(50)}>
                50%
              </button>
              <input
                className="custom"
                value={customInput}
                onChange={customInputHandler}
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              min="1"
              value={noOfPeople}
              id="people"
              onChange={noOfPEopleChange}
            />
            <button className="button" onClick={customTip}>
              check
            </button>
          </div>
        </div>

        <div className="outputContainer">
          <div className="output">
            <div>
              <p className="content">Tip Amount</p>
              <p className="light">/person</p>
            </div>
            <div className="display">
              {tipOutput > 0 ? tipOutput : "rs 00.00"}
            </div>
          </div>
          <div className="output">
            <div>
              <p className="content">person Total</p>
              <p className="light">/person</p>
            </div>

            <div className="display">
              {totalOutput > 0 ? totalOutput : "rs 00.00"}
            </div>
          </div>
          <button className="reset" onClick={resetHandler}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
