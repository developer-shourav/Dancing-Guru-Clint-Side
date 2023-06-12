import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import LoginImg from '../../assets/images/form-img/login.png';
import GoogleIcon from '../../assets/images/icons/google.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Login = () => {

    /* ---------Dynamic Title based on Page-------- */
    useTitle('Login')
    const {signInUserWithEmail, registerWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    /* ----------Previous location ---------- */
    const redirectLocation = location.state?.from?.pathname || '/home';
  
    /* --------Error Message shower */
    const [errorText, setErrorText] = useState('');


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
                  <h2 className="text-3xl font-bold text-[#E4444C] text-center md:text-left ">Login</h2>
                  
                  <form >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-stone-200">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        name="email"
                        className="input input-bordered dark:bg-[#1B1B1B]"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-stone-200">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered dark:bg-[#1B1B1B]"
                        required
                      />
                      <label className="label">
                        <p className="text-sm">
                          New at Dancing Guru? Please{" "}
                          <Link
                            className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                            to="/register"
                            state={{from :location?.state?.from}} 
                          >
                            Register
                          </Link>
                        </p>
                      </label>
                    </div>
  
                     {/* --------Error Message -------- */}
                     <p className='text-red-500 font-semibold'>{errorText}</p>
                    <div className="form-control mt-6">
                      <input
                        className="btn rounded-full  text-white bg-[#E4444C] border-0 hover:bg-[#af2e35]"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                  <div className="flex justify-center items-center mt-2">
                    <hr className="inline-block w-2/6 border-1 border-[#E4444C]" />{" "}
                    <span className="mx-1  text-black  dark:text-white">Or join with</span>{" "}
                    <hr className="inline-block border-1 w-2/6 border-[#E4444C]" />
                  </div>
  
                  <div className="flex gap-2">
                  <button  className="btn  bg-[#1D1D1D]  text-white rounded-full  normal-case btn-outline w-full"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button>  
                  
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