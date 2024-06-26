// // before anything the user needs to be logged in then he/she will be redirected to the dashboard

// // first page of our project is Login page

// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Textbox from "../components/Textbox";
// import Button from "../components/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation } from "../redux/slices/api/authApiSlice";
// import { toast } from "react-toastify";
// import Loader from "../components/Loader";
// import {setCredentails} from "../redux/slices/authSlice";

// const Login = () => {
//   const { user } = useSelector((state) => state.auth); //useSelector from react redux
//   const {
//     register,
//     handleSubmit, //(from the form) handleSubmit -> submitHandler
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [login, { isLoading }] = useLoginMutation();

//   const submitHandler = async (data) => {
//     try {
//       const result = await login(data).unwrap();
//       dispatch(setCredentails(result));
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(error?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     user && navigate("/dashboard"); // if it exists
//   }, [user]); //[dependecy array] only refresh or reload when user is changed
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
//       <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
//         {/* left side */}
//         <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
//           <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
//             <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
//               Manage all your task in one place!
//             </span>
//             <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
//               <span>Cloud-Based</span>
//               <span>Task Manager</span>
//             </p>

//             <div className="cell">
//               <div className="circle rotate-in-up-left"></div>
//             </div>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
//           <form
//             onSubmit={handleSubmit(submitHandler)}
//             className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
//           >
//             <div className="">
//               <p className="text-blue-600 text-3xl font-bold text-center">
//                 Welcome back!
//               </p>
//               <p className="text-center text-base text-gray-700 ">
//                 Keep all your credential safe.
//               </p>
//             </div>

//             <div className="flex flex-col gap-y-5">
//               <Textbox //parent -> child in TextBox verify and add
//                 placeholder="email@example.com"
//                 type="email"
//                 name="email"
//                 label="Email Address"
//                 className="w-full rounded-full"
//                 register={register("email", {
//                   required: "Email Address is required!", // provide this msg
//                 })}
//                 error={errors.email ? errors.email.message : ""}
//               />
//               <Textbox
//                 placeholder="your password"
//                 type="password"
//                 name="password"
//                 label="Password"
//                 className="w-full rounded-full"
//                 register={register("password", {
//                   required: "Password is required!",
//                 })}
//                 error={errors.password ? errors.password.message : ""} // if this provides an error
//               />

//               <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
//                 Forget Password?
//               </span>

//               {isLoading ? <Loader /> : 
//                 <Button
//                   type="submit"
//                   label="Submit"
//                   className="w-full h-10 bg-blue-700 text-white rounded-full"
//                 />
//               }
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { setCredentials } from "../redux/slices/authSlice"; // Corrected the import

const Login = () => {
  const { user } = useSelector((state) => state.auth); //useSelector from react redux
  const {
    register,
    handleSubmit, //(from the form) handleSubmit -> submitHandler
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard"); // if it exists
  }, [user]); //[dependency array] only refresh or reload when user is changed
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
              Manage all your task in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>

            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Welcome back!
              </p>
              <p className="text-center text-base text-gray-700 ">
                Keep all your credential safe.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox //parent -> child in TextBox verify and add
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required!", // provide this msg
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""} // if this provides an error
              />

              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Forget Password?
              </span>

              {isLoading ? <Loader /> : 
                <Button
                  type="submit"
                  label="Submit"
                  className="w-full h-10 bg-blue-700 text-white rounded-full"
                />
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
