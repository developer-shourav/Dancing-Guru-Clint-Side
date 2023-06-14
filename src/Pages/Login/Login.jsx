import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import LoginImg from "../../assets/images/form-img/login.png";
import GoogleIcon from "../../assets/images/icons/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



const Login = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Login");
    /* ----------React Hook Forms Items------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signInUserWithEmail, registerWithGoogle } = useContext(AuthContext);
  /* -----------Password shower----------- */
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  /* ----------Previous location ---------- */
  const redirectLocation = location.state?.from?.pathname || "/home";

  /* --------Error Message shower------------- */
  const [errorText, setErrorText] = useState("");

  /* --------Login Success Message------------- */
  const loginSuccessAlt = () => {
    Swal.fire("Welcome", "Login Successful", "success");
    reset()
  };



   const onSubmit = data => {
    /*----- Reset Error Massage field------- */
    setErrorText('')
    /* -------Form Data Collection -------------- */
    const email = data?.email;
    const password = data?.password;

    /* ------- Email password Based Login System -------------- */
    signInUserWithEmail(email, password)
    .then( result => {
      const loggedInUser = result.user;
      loginSuccessAlt()
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorText(error.message.slice(10))
    })

   };

   /* ------- Google Popup Login-------------- */
  const handleGoogleLogin = () => {
    setErrorText('')
    registerWithGoogle()
    .then( result => {
      const loggedInUser = result.user;
      const savedUser = {
        userName: loggedInUser?.displayName,
        userImage: loggedInUser?.photoURL,
        userEmail: loggedInUser?.email,
        role:'user'
      };

      fetch("https://dancing-guru-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            loginSuccessAlt()
             navigate(redirectLocation)
          }
        });
      
      
    })
    .catch( error =>{
      setErrorText(error.message.slice(10))
    })
  }


  return (
    <div className="bg-slate-200 dark:bg-[#1B1B1B]  pb-20">
      <div className="container py-10 md:py-20 mx-auto">
        <div className="w-11/12  lg:w-8/12 bg-white dark:bg-[#131212] mx-auto flex flex-col md:flex-row items-center justify-center shadow-xl rounded-xl">
          <div className="w-9/12 md:w-7/12  lg:w-6/12 mx-auto">
            <img src={LoginImg} alt="" />
          </div>

          <div className="w-full md:w-6/12 lg:w-6/12">
            <div className="card flex-shrink-0 w-full  text-black dark:text-[#dbdbdb]  dark:bg-[#131212]">
              <div className="card-body p-4 md:p-8">
                <h2 className="text-3xl font-bold text-[#E4444C] text-center md:text-left ">
                  Login
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text dark:text-stone-200">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered dark:bg-[#1B1B1B]"
                       {...register("email", { required: true })}
                    />
                     {errors.email && (
                      <span className="text-red-500 text-sm">
                        <small>Please enter your user email to login</small>
                      </span>
                    )}
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text dark:text-stone-200">
                        Password
                      </span>
                    </label>
                    <input
                      type={showPassword === false ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered dark:bg-[#1B1B1B]"
                      {...register("password", { required: true,  maxLength: 20 })}
                    />
                    {/* ---------Password Shower------ */}
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-12 cursor-pointer right-5"
                    >
                      {" "}
                      {showPassword === false ? (
                        <AiFillEye
                          title="See Password"
                          className="text-lg inline"
                        />
                      ) : (
                        <AiFillEyeInvisible
                          title="Hide Password"
                          className="text-lg inline"
                        />
                      )}{" "}
                    </span>

                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-sm">
                        <small>Please enter your password to login</small>
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500 text-sm">
                        <small>Password maximum length is 20</small>
                      </span>
                    )}
                    <label className="label">
                      <p className="text-sm">
                        New at Dancing Guru? Please{" "}
                        <Link
                          className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                          to="/register"
                          state={{ from: location?.state?.from }}
                        >
                          Register
                        </Link>
                      </p>
                    </label>
                  </div>

                  {/* --------Error Message -------- */}
                  <p className="text-red-500">{errorText}</p>
                  <div className="form-control mt-6">
                    <input
                      className="btn rounded-full font-[500]  text-white bg-[#E4444C] border-0 hover:bg-[#af2e35]"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <div className="flex justify-center items-center mt-2">
                  <hr className="inline-block w-2/6 border-1 border-[#E4444C]" />{" "}
                  <span className="mx-1  text-black  dark:text-white">
                    Or join with
                  </span>{" "}
                  <hr className="inline-block border-1 w-2/6 border-[#E4444C]" />
                </div>

                <div className="flex gap-2">
                  <button onClick={handleGoogleLogin} className="btn font-[500]  bg-[#1D1D1D]  text-white rounded-full  normal-case btn-outline w-full">
                    <img className="w-5 me-2" src={GoogleIcon} alt="" />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Login;
