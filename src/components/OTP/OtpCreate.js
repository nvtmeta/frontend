import { useState } from "react";

const OtpCreate = (props) => {
  const [orgOtp, setOrgOtp] = useState("");
  const handleClick = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOtp(otp);
    props.setOrgOtp(otp);
  };
  return (
    <div className="OtpCreate">
      <button className="otpBtnCreate" onClick={handleClick}>
        Create Otp
      </button>
      <div className="otpDisplay">Your OTP : {orgOtp}</div>
    </div>
  );
};
export default OtpCreate;
