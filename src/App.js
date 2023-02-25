import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import SetPattern from "./routes/set-pattern/set-pattern";
import ConfirmPattern from "./routes/confirm-pattern/confirm-pattern";
import Login from "./routes/login/login";
import ResetPattern from "./routes/reset-pattern/reset-pattern";
import ResetPattern2 from "./routes/reset-pattern/reset-pattern2";
import ForgotPattern from "./routes/forgot-pattern/forgot-pattern";

const App = () => {
  const [checkPattern, setCheckPattern] = useState(false);
  const { patternHash } = useSelector((state) => state.hash);

  useEffect(() => {
    if (patternHash.length !== 0) {
      setCheckPattern(true);
    }
  }, [patternHash]);
  return (
    <>
      <Routes>
        <Route index={!checkPattern} element={<SetPattern />} />
        <Route path="/confirm" element={<ConfirmPattern />} />
        <Route
          index={checkPattern}
          path={checkPattern ? "/" : "/login"}
          element={<Login />}
        />
        <Route path="/reset" element={<ResetPattern />} />
        <Route path="/reset1" element={<ResetPattern2 />} />
        <Route path="/forgot" element={<ForgotPattern />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
