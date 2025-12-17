import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import apiService from "../../../../service/apiService";
import { POST_APIS } from "../../../../../connection";
import { useToast } from "../../../../context/ToastContext";

const IndividualRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const roles = [
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
    { label: "Other", value: "other" },
  ];

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    if (!selectedRole) newErrors.role = "Role is required";
    if (!selectedGender) newErrors.gender = "Gender is required";

    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

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
      setFormData({ ...formData, phone: numericValue });
    }
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const payload = {
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          password: formData.password,
          role: selectedRole,
          gender: selectedGender,
        };

        const response = await apiService(POST_APIS.individualRegister, {
          method: "POST",
          body: payload,
        });

        if (response.isSuccess) {
          showToast(
            "success",
            "Success",
            response.message || "Registration Successful!"
          );
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          showToast(
            "error",
            "Registration Failed",
            response.message || "An error occurred."
          );
        }
      } catch (error) {
        showToast("error", "Error", error.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.fullName ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.fullName && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.fullName}</p>
        )}
      </div>
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full px-5 py-3 bg-transparent border! ${
            errors.email ? "border-red-500!" : "border-[#D9D9D9]!"
          } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
        />
        {errors.email && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.email}</p>
        )}
      </div>
      <div className="relative">
        <div className="relative flex items-center">
          <span className="absolute left-5 text-white z-10 pointer-events-none">
            +91
          </span>
          <input
            type="text" // Input type text to handle numeric logic manually
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            className={`w-full pl-14 pr-5 py-3 bg-transparent border! ${
              errors.phone ? "border-red-500!" : "border-[#D9D9D9]!"
            } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
          />
        </div>
        {errors.phone && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.phone}</p>
        )}
      </div>
      <div className="relative text-left">
        <label className="block text-xs mb-1 ml-1 font-bold opacity-90 text-white">
          I am a...
        </label>
        <Dropdown
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.value);
            if (errors.role) setErrors({ ...errors, role: "" });
          }}
          options={roles}
          optionLabel="label"
          placeholder="Select your role"
          className={`w-full text-left ${
            errors.role ? "border border-red-500 rounded-xl" : ""
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
        {errors.role && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.role}</p>
        )}
      </div>
      <div className="relative text-left">
        <label className="block text-xs mb-1 ml-1 font-bold opacity-90 text-white">
          Gender
        </label>
        <Dropdown
          value={selectedGender}
          onChange={(e) => {
            setSelectedGender(e.value);
            if (errors.gender) setErrors({ ...errors, gender: "" });
          }}
          options={genders}
          optionLabel="label"
          placeholder="Select your gender"
          className={`w-full text-left ${
            errors.gender ? "border border-red-500 rounded-xl" : ""
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
        {errors.gender && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.gender}</p>
        )}
      </div>
      <div className="relative">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full px-5 py-3 bg-transparent border! ${
              errors.password ? "border-red-500!" : "border-[#D9D9D9]!"
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
        {errors.password && (
          <p className="text-red-300 text-xs mt-1 ml-1">{errors.password}</p>
        )}
      </div>
      <div className="relative">
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full px-5 py-3 bg-transparent border! ${
              errors.confirmPassword ? "border-red-500!" : "border-[#D9D9D9]!"
            } rounded-xl! outline-none placeholder-white! text-white! focus:bg-white/10! focus:border-white/50! transition-all duration-300`}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-300 text-xs mt-1 ml-1">
            {errors.confirmPassword}
          </p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full py-3 mt-4 cursor-pointer bg-white/80 hover:bg-white text-indigo-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </>
  );
};

export default IndividualRegistration;
