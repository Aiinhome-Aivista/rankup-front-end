import React, { useState } from "react";
import vector2 from "../../../assets/Vector-2-login.svg";
import vector3 from "../../../assets/Vector-3-login.svg";
import vector4 from "../../../assets/Vector-4-login.svg";
import vector5 from "../../../assets/Vector-5-login.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { initiateLoginApi, verifyLoginApi } from "../../../../connection";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (errorMsg) {
      setSuccessMsg("");
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  const handleLogin = async (e) => {
    e && e.preventDefault && e.preventDefault();
    if (isOtpSent) {
      handleVerify();
      return;
    }
    setErrorMsg("");
    setIsLoading(true);
    try {
      const res = await initiateLoginApi({ email, password });
      console.log("Login response:", res);
      if (res.isSuccess) {
        setIsOtpSent(true);
        setSuccessMsg("OTP sent successfully! Please check your email inbox.");
      } else {
        setErrorMsg(res.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      const res = await verifyLoginApi({ email, otp });
      console.log("Verify response:", res);
      if (res.isSuccess) {
        const token = res?.data?.token;
        const user = res?.data?.user;

        if (token) localStorage.setItem("token", token);
        if (user) localStorage.setItem("user", JSON.stringify(user));

        setIsLoggedIn(true);

        const role = (user?.role || "").toLowerCase();
        const rolePaths = {
          admin: "/admin/dashboard",
          teacher: "/teacher/dashboard",
          student: "/student/dashboard",
          parent: "/parent/dashboard",
          examiner: "/examiner/dashboard",
        };

        const path = rolePaths[role] || "/";
        navigate(path);
      } else {
        setErrorMsg(res.message || "Verification failed");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setErrorMsg(err.message || "An unexpected verification error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#A1AEF2] font-sans">
      {/* Top Left Branding */}
      <div className="absolute top-8 left-10 z-20 text-white text-xl font-bold tracking-wide">
        <span className="opacity-80">Ai</span>inhome |{" "}
        <span className="opacity-80">IG</span>
      </div>

      {/* Wave Background */}
      <div className="absolute  w-full h-full pointer-events-none">
        <div className="absolute top-95 left-0 w-full z-5 overflow-hidden">
          {/* scale-110 to ensure no gaps if it moves slightly */}
          <img src={vector5} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-40 left-0 w-[120%] z-3">
          <img src={vector3} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-30 left-0 w-full z-2">
          <img src={vector2} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-60 left-0 w-[110%] z-4">
          {/* shift left/right to vary the look */}
          <img src={vector4} alt="" className="w-full h-auto " />
        </div>
      </div>

      {/* Login Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl min-h-[500px]  px-4">
        <div className="backdrop-blur-lg bg-white/10 border border-white rounded-3xl p-8 md:p-10 shadow-2xl  flex flex-col justify-center">
          <div className="flex flex-col items-center text-center text-white">
            {/* Logo */}
            <div className="mb-4">
              <DashboardIcon sx={{ fontSize: 48 }} className="opacity-90" />
            </div>

            <h1 className="text-3xl font-bold mb-2">InsightGrid</h1>
            <p className="text-sm md:text-base opacity-90 mb-8 font-light">
              Customize Every View. Empower Every Decision.
            </p>

            {/* Form */}
            <div className="w-full space-y-4 overflow-y-auto max-h-[50vh] custom-scrollbar">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  disabled={isOtpSent}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-200 text-white focus:bg-white/10 focus:border-white/50 transition-all duration-300 backdrop-blur-sm ${
                    isOtpSent ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
              </div>

              <div className="relative">
                {!isOtpSent ? (
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-200 text-white focus:bg-white/10 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-200 text-white focus:bg-white/10 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  />
                )}
              </div>

              <button
                onClick={handleLogin}
                type="button"
                disabled={isLoading}
                className={`w-full py-3 mt-2 bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform cursor-pointer flex justify-center items-center gap-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>{isOtpSent ? "Verifying..." : "Logging in..."}</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <div className="mt-4 text-center ">
                {errorMsg && (
                  <p className="text-red-300 text-sm font-semibold">
                    {errorMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="text-emerald-300 text-sm font-semibold">
                    {successMsg}
                  </p>
                )}
              </div>

              <div className="mt-6 text-xs md:text-sm text-center opacity-80">
                You don't have account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="font-bold text-[#514CF1] cursor-pointer hover:underline"
                >
                  Register here
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
