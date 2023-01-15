import OtpInput from "react-otp-input";
import { useState, useRef } from "react";
import "./otp.scss";
import CountDownAni from "./countDownAni";
const InputOtp = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOtp(otp);
  };
  const handleAlert = () => {
    props.handleAlert();
  };
  const handleClear = () => {
    childRef.current.resetTimer();
  };
  return (
    <div className="input-otp-container">
      <div>Enter verify code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
      />

      <div className="timer">
        <CountDownAni setIsDisabled={props.setIsDisabled} ref={childRef} />
      </div>
      <div className="action">
        <button
          className="delete"
          onClick={handleClear}
          disabled={!props.isDisabled}
        >
          Clear
        </button>
        <button
          className="confirm"
          onClick={handleAlert}
          disabled={props.isDisabled}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default InputOtp;
