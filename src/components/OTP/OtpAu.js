import InputOtp from "./InputOtp";
import OtpCreate from "./OtpCreate";
import "./otp.scss";
import { useState } from "react";
const OtpAu = () => {
  const [orgOtp, setOrgOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleAlert = () => {
    if (!orgOtp) {
      alert("please create otp");
      return;
    }
    if (!userOtp) {
      alert("please enter otp");
      return;
    }
    orgOtp === +userOtp ? alert("ok") : alert("good luck again");
  };
  return (
    <div className="otp">
      <OtpCreate setOrgOtp={setOrgOtp} />
      <InputOtp
        setUserOtp={setUserOtp}
        handleAlert={handleAlert}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
      />
    </div>
  );
};
export default OtpAu;
