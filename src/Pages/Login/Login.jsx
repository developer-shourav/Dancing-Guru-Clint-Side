import { Link, ScrollRestoration } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import LoginImg from '../../assets/images/form-img/login.png';
import GoogleIcon from '../../assets/images/icons/google.png';
const Login = () => {

    /* ---------Dynamic Title based on Page-------- */
    useTitle('Login')
    return (
        <div className="bg-pink-200  pb-20">
        <div className="container py-10 md:py-20 mx-auto">
          <div className="w-11/12  lg:w-8/12 bg-white  mx-auto flex flex-col md:flex-row items-center justify-center shadow-xl rounded-xl">

          <div className="w-full md:w-7/12  lg:w-6/12">
              <img src={LoginImg} alt="" />
            </div>

            <div className="w-full md:w-6/12 lg:w-6/12">
              <div className="card flex-shrink-0 w-full  bg-base-100">
                <div className="card-body">
                  <h2 className="text-3xl font-extrabold">Login</h2>
                  
                  <form >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
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
                     <p className='text-red-500 font-semibold'></p>
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
                    <span className="mx-1 hidden text-black lg:inline font-semibold">Or join with</span>{" "}
                    <span className="mx-1 lg:hidden font-semibold">Join with</span>{" "}
                    <hr className="inline-block border-1 w-2/6 border-[#E4444C]" />
                  </div>
  
                  <div className="flex gap-2">
                  <button  className="btn  font-bold  rounded-full normal-case btn-outline w-full"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button>  
                  
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