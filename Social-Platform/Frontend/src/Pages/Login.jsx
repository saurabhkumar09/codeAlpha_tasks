import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CustomButton, Loading, TextInput } from "../component";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [errMsg, setErrMsg] = useState(""); // State for error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading state
  const navigate = useNavigate(); // Hook for navigating

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true); // Set loading state to true
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the email and password to the backend
      });

      const result = await response.json(); // Get the response as JSON
      setIsSubmitting(false); // Set loading state to false

      if (response.status === 200) {
        // If login is successful, save the token to localStorage
        localStorage.setItem("token", result.token);
        navigate("/"); // Redirect to the homepage or dashboard
      } else {
        // If there was an error, show the error message
        setErrMsg({ message: result.message, status: "failed" });
      }
    } catch (error) {
      setIsSubmitting(false); // Set loading state to false in case of an error
      setErrMsg({ message: "Something went wrong. Please try again.", status: "failed" });
    }
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              {/* Insert your logo or icon */}
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">YourApp</span>
          </div>

          <p className="text-ascent-1 text-base font-semibold">Log in to your account</p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>

          <form className="py-8 flex flex-col gap-5=" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", { required: "Email Address is required" })}
              styles="w-full rounded-full"
              labelStyle="ml-2"
              error={errors.email ? errors.email.message : ""}
            />

            <TextInput
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              styles="w-full rounded-full"
              labelStyle="ml-2"
              register={register("password", { required: "Password is required!" })}
              error={errors.password ? errors.password?.message : ""}
            />

            {errMsg?.message && (
              <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]" } mt-0.5`}>
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles="inline-flex justify-center rounded-md bg-blue-800 px-8 py-3 text-sm font-medium text-black outline-none"
                title="Login"
              />
            )}
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?
            <a href="/register" className="text-[#065ad8] font-semibold ml-2 cursor-pointer">
              Create Account
            </a>
          </p>
        </div>
        {/* Add your right section or background here */}
      </div>
    </div>
  );
};

export default Login;
