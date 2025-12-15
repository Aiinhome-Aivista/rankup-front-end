import React from "react";
import vector2 from "../../../assets/Vector-2-login.svg";
import vector3 from "../../../assets/Vector-3-login.svg";
import vector4 from "../../../assets/Vector-4-login.svg";
import vector5 from "../../../assets/Vector-5-login.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Login = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#A1AEF2]  font-sans">
      {/* Top Left Branding */}
      <div className="absolute top-8 left-10 z-20 text-white text-xl font-bold tracking-wide">
        <span className="opacity-80">Ai</span>inhome |{" "}
        <span className="opacity-80">IG</span>
      </div>

      {/* Wave Background */}
      <div className="absolute  w-full h-full pointer-events-none">
        <div className="absolute top-110 left-0 w-full z-5 overflow-hidden">
          {/* scale-110 to ensure no gaps if it moves slightly */}
          <img src={vector5} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-40 left-0 w-[120%] z-3">
          <img src={vector3} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-15 -left-1 w-full z-2">
          <img src={vector2} alt="" className="w-full h-auto " />
        </div>
        <div className="absolute top-40 left-4 w-[110%] z-4">
          {/* shift left/right to vary the look */}
          <img src={vector4} alt="" className="w-full h-auto " />
        </div>
      </div>

      {/* Login Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl px-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white rounded-3xl p-8 md:p-12 shadow-2xl">
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
            <div className="w-full space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-200 text-white focus:bg-white/10 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-5 py-3 bg-white/5 border border-white/20 rounded-xl outline-none placeholder-gray-200 text-white focus:bg-white/10 focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              <button className="w-full py-3 mt-2 bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Login
              </button>

              <div className="mt-6 text-xs md:text-sm text-center opacity-80">
                You don't have account?{" "}
                <a href="#" className="font-bold hover:underline">
                  Register here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
