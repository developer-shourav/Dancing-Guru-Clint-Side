import useTitle from "../../hooks/useTitle";
import GoogleIcon from "../../assets/images/icons/google.png";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Register");

  /* ----------React Hook Forms Items------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createEmailPassUser, registerWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocation = location?.state?.from?.pathname || "/home";
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerSuccessAlt = () => {
    Swal.fire("Welcome", "Register Successful", "success");
    reset();
  };

  const onSubmit = (data) => {
    /*----- Reset Error Massage ------- */
    setErrorMessage("");
    /* -------Form Data Collection -------------- */
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const confirmPassword = data?.passwordConfirm;
    const photo = data?.photo;


    /* -----------Password Validation----------- */
    if (password !== confirmPassword) {
      setErrorMessage(
        "Error: Your 'password' and 'Confirm password' aren't the same."
      );
      return;
    } else {
      /* ------- Email password User creation -------------- */
      createEmailPassUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          addUserNameAndImage(createdUser, name, photo);
          registerSuccessAlt();
        })

        .catch((error) => {
          setErrorMessage(error.message.slice(10));
        });
    }
  };

  /* ------- Adding user name and Profile picture -------------- */
  const addUserNameAndImage = (user, userName, imageUrl) => {
    setErrorMessage("");
    updateProfile(user, { displayName: userName, photoURL: imageUrl })
      .then(() => {
        navigate(redirectLocation);
      })
      .catch((error) => {
        setErrorMessage(error.message.slice(10));
      });
  };

  /* ------- Google Register with popup-------------- */
  const handleGoogleRegister = () => {
    setErrorMessage("");
    registerWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(redirectLocation);
        registerSuccessAlt();
      })
      .catch((error) => {
        setErrorMessage(error.message.slice(10));
      });
  };

  return (
    <div className="pb-20  bg-slate-200 dark:bg-[#1B1B1B] ">
      <div className="container py-10 md:py-20 mx-auto">
        <div className="w-11/12  lg:w-5/12 bg-white dark:bg-[#131212] rounded-xl  mx-auto flex flex-col md:flex-row items-start justify-center shadow-md ">
          <div className="w-full">
            <div className="card flex-shrink-0 w-full text-black dark:text-[#dbdbdb]  dark:bg-[#131212] ">
              <div className="card-body p-4 md:p-8 ">
                <h2 className="text-3xl font-bold text-[#E4444C] text-center ">
                  Register
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control ">
                    <label className="label ">
                      <span className="label-text  dark:text-stone-200">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="input input-bordered dark:bg-[#1B1B1B]"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        <small>Name is required*</small>
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text dark:text-stone-200">
                        Photo Url
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo Url"
                      name="photo"
                      className="input input-bordered dark:bg-[#1B1B1B]"
                      {...register("photo", { required: true })}
                    />
                    {errors.photo && (
                      <span className="text-red-500 text-sm">
                        <small>Photo Url is required*</small>
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text dark:text-stone-200">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      {...register("email", { required: true })}
                      className="input input-bordered dark:bg-[#1B1B1B]"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        <small>Email is required*</small>
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
                      placeholder="Password"
                      name="password"
                      className="input input-bordered  dark:bg-[#1B1B1B]"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    {/* ---------Password Shower------ */}
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute bottom-3 cursor-pointer right-5"
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

                    {errors.password?.type === "pattern" && (
                      <span className="text-red-500 text-sm">
                        <small>
                          Password should be at least one uppercase(A-Z) one
                          lowercase(a-z) a number(0-9) and a special
                          character(@#$%&){" "}
                        </small>
                      </span>
                    )}
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-sm">
                        <small>Password is required</small>
                      </span>
                    )}

                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500 text-sm">
                        <small>Password should be at least 6 characters</small>
                      </span>
                    )}

                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500 text-sm">
                        <small>Password maximum length is 20</small>
                      </span>
                    )}
                  </div>
                  <div className="form-control relative">
                    <label className="label ">
                      <span className="label-text dark:text-stone-200">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type={showPassword === false ? "password" : "text"}
                      placeholder="Confirm Password"
                      name="passwordConfirm"
                      className="input input-bordered dark:bg-[#1B1B1B]"
                      {...register("passwordConfirm", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
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
                    {errors.passwordConfirm?.type === "required" && (
                      <span className="text-red-500 text-sm">
                        <small>Confirm Password is required</small>
                      </span>
                    )}

                    {errors.passwordConfirm?.type === "minLength" && (
                      <span className="text-red-500 text-sm">
                        <small>Password should be at least 6 characters</small>
                      </span>
                    )}

                    {errors.passwordConfirm?.type === "maxLength" && (
                      <span className="text-red-500 text-sm">
                        <small>Password maximum length is 20</small>
                      </span>
                    )}

                    <label className="label">
                      <p className="text-sm dark:text-stone-400">
                        Already Registered? Please{" "}
                        <Link
                          className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                          to="/login"
                        >
                          Login
                        </Link>
                      </p>
                    </label>
                  </div>
                  {/* --------Error Message -------- */}
                  <p className="text-red-500 ">{errorMessage}</p>
                  <div className="form-control mt-2">
                    <input
                      className="btn rounded-full font-[500] bg-[#E4444C] text-stone-100 border-0 hover:bg-[#88191e]"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>

                <div className="flex justify-center items-center mt-2">
                  <hr className="inline-block w-3/6 border-1 border-[#E4444C]" />{" "}
                  <span className="mx-1  text-black  dark:text-white">Or</span>{" "}
                  <hr className="inline-block border-1 w-3/6 border-[#E4444C]" />
                </div>

                <button
                  onClick={handleGoogleRegister}
                  className="btn bg-[#1D1D1D]  text-stone-100 rounded-full  normal-case btn-outline font-[500]"
                >
                  <img className="w-5 me-2" src={GoogleIcon} alt="" />
                  Register With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Register;
