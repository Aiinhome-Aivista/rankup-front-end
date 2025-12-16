import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Dropdown } from "primereact/dropdown";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InstituteRegistration = () => {
  const [formData, setFormData] = useState({
    instituteName: "",
    instituteWebsite: "",
    adminFullName: "",
    adminEmail: "",
    adminPhone: "",
    adminPassword: "",
  });

  const [instituteStudents, setInstituteStudents] = useState(100);
  const [selectedInstituteType, setSelectedInstituteType] = useState(null);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const instituteTypes = [
    { label: "School", value: "school" },
    { label: "College", value: "college" },
    { label: "University", value: "university" },
    { label: "Coaching Center", value: "coaching" },
  ];

  const validate = () => {
    let newErrors = {};

    if (!formData.instituteName.trim())
      newErrors.instituteName = "Institute Name is required";
    if (!formData.instituteWebsite.trim())
      newErrors.instituteWebsite = "Institute Website is required";
    if (!selectedInstituteType)
      newErrors.instituteType = "Institute Type is required";

    if (!formData.adminFullName.trim())
      newErrors.adminFullName = "Admin Full Name is required";

    if (!formData.adminEmail.trim()) {
      newErrors.adminEmail = "Admin Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.adminEmail)) {
      newErrors.adminEmail = "Invalid email format";
    }

    if (!formData.adminPhone) {
      newErrors.adminPhone = "Admin Phone is required";
    } else if (formData.adminPhone.length < 10) {
      newErrors.adminPhone = "Phone Number must be 10 digits";
    }

    if (!formData.adminPassword)
      newErrors.adminPassword = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Remove non-digit characters
    const numericValue = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (numericValue.length <= 10) {
      setFormData({ ...formData, adminPhone: numericValue });
    }
    if (errors.adminPhone) {
      setErrors({ ...errors, adminPhone: "" });
    }
  };

  const handleSliderChange = (event, newValue) => {
    setInstituteStudents(newValue);
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Institute Form Submitted", {
        ...formData,
        instituteStudents,
        instituteType: selectedInstituteType,
      });
      // Proceed with API call
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
          placeholder="Institute Name"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.instituteName ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.instituteName && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.instituteName}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          name="instituteWebsite"
          value={formData.instituteWebsite}
          onChange={handleChange}
          placeholder="Institute Website"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.instituteWebsite ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.instituteWebsite && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.instituteWebsite}
          </p>
        )}
      </div>
      <div className="relative text-left">
        <Dropdown
          value={selectedInstituteType}
          onChange={(e) => {
            setSelectedInstituteType(e.value);
            if (errors.instituteType)
              setErrors({ ...errors, instituteType: "" });
          }}
          options={instituteTypes}
          optionLabel="label"
          placeholder="Institute Type"
          className={`w-full text-left ${
            errors.instituteType ? "border border-red-500 rounded-xl" : ""
          }`}
          pt={{
            root: {
              className:
                "!bg-white/5 !border !border-white/20 !rounded-xl overflow-hidden",
            },
            input: {
              className: "!text-white p-3 !placeholder-gray-200 font-sans",
            },
            trigger: {
              className: "!text-white/70 w-12 flex items-center justify-center",
            },
            panel: {
              className:
                "!bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl",
            },
            item: {
              className: "hover:bg-indigo-50 text-gray-800 p-2 text-sm",
            },
          }}
        />
        {errors.instituteType && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.instituteType}
          </p>
        )}
      </div>

      {/* Slider Section */}
      <div className="px-1 py-1">
        <div className="flex justify-between text-xs text-white opacity-90 mb-2">
          <span>Number of Students</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">
            {instituteStudents}+ Students
          </span>
        </div>
        <Slider
          size="small"
          defaultValue={100}
          min={0}
          max={5000}
          step={50}
          value={instituteStudents}
          onChange={handleSliderChange}
          sx={{
            color: "white",
            "& .MuiSlider-thumb": {
              backgroundColor: "white",
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: "white",
            },
          }}
        />
        <div className="flex justify-between text-[10px] text-white/60 -mt-1">
          <span>&lt;100</span>
          <span>1,000</span>
          <span>2,500</span>
          <span>5,000+</span>
        </div>
      </div>

      {/* Administrator Divider */}
      <div className="relative flex py-2 items-center">
        <div className="grow border-t border-white/20"></div>
        <span className="shrink-0 mx-4 text-white p-1 text-xs font-bold uppercase tracking-widest opacity-80">
          Administrator
        </span>
        <div className="grow border-t border-white/20"></div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="adminFullName"
          value={formData.adminFullName}
          onChange={handleChange}
          placeholder="Admin Full Name"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.adminFullName ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.adminFullName && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.adminFullName}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          type="email"
          name="adminEmail"
          value={formData.adminEmail}
          onChange={handleChange}
          placeholder="Admin Email"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.adminEmail ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.adminEmail && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.adminEmail}</p>
        )}
      </div>
      <div className="relative">
        <div className="relative flex items-center">
          <span className="absolute left-5 text-white z-10 pointer-events-none">
            +91
          </span>
          <input
            type="text"
            name="adminPhone"
            value={formData.adminPhone}
            onChange={handlePhoneChange}
            placeholder="Admin Phone"
            className={`w-full pl-14 pr-5 py-3 bg-transparent border! ${
              errors.adminPhone ? "border-red-500!" : "border-[#D9D9D9]!"
            } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
          />
        </div>
        {errors.adminPhone && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.adminPhone}</p>
        )}
      </div>
      <div className="relative">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
            placeholder="Admin Password"
            className={`w-full px-5 py-3 bg-transparent border! ${
              errors.adminPassword ? "border-red-500!" : "border-[#D9D9D9]!"
            } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>
        {errors.adminPassword && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.adminPassword}
          </p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 mt-4 bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
      >
        Register Institute
      </button>
    </>
  );
};

export default InstituteRegistration;
