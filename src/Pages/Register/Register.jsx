import useTitle from "../../hooks/useTitle";
import GoogleIcon from '../../assets/images/icons/google.png';
import { Link, ScrollRestoration } from "react-router-dom";
const Register = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Register')
    return (
        <div className="pb-20  bg-slate-200 dark:bg-[#1B1B1B] ">
        <div className="container py-10 md:py-20 mx-auto">
          <div className="w-11/12  lg:w-5/12 bg-white dark:bg-[#131212] rounded-xl  mx-auto flex flex-col md:flex-row items-start justify-center shadow-md ">
            <div className="w-full">
             
              <div className="card flex-shrink-0 w-full text-black dark:text-[#dbdbdb]  dark:bg-[#131212] ">
                <div className="card-body ">
                  <h2 className="text-3xl font-bold text-[#E4444C]  ">Register</h2>

                  <form >
                    <div className="form-control ">
                      <label className="label ">
                        <span className="label-text  dark:text-stone-200">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered dark:bg-[#1B1B1B]"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-stone-200">Photo Url</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo Url"
                        name="photo"
                        className="input input-bordered dark:bg-[#1B1B1B]"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-stone-200">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                        className="input input-bordered dark:bg-[#1B1B1B]"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text dark:text-stone-200">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="input input-bordered dark:bg-[#1B1B1B]"
                      />
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
                    <p className='text-red-500 '></p>
                    <div className="form-control mt-2">
                      <input
                        className="btn rounded-full bg-[#E4444C] text-white border-0 hover:bg-[#88191e]"
                        type="submit"
                        value="Register"
                      />
                    </div>
                  </form>
                  
                  <div className="divider -mt-1 ">Or</div>
  
                  
                  <button  className="btn -mt-5  bg-[#1D1D1D]  text-white rounded-full  normal-case btn-outline "><img className="w-5 me-2" src={GoogleIcon} alt="" />Register With Google</button> 
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