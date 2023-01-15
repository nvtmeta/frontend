import { useState, useEffect } from "react";
const CountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.setIsDisabled(true);
      return;
    }
    const clear = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(clear);
    };
  }, [count]);
  return <div className="countDown">{count}</div>;
};
export default CountDown;
