import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  /* ---------Taking user form DB and firebase----- */
  const { user } = useContext(AuthContext);

  /* -------------Define The user Role----------- */
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState({});
  const requestEmail = user?.email || "abc@gmail.com";

  useEffect(() => {
    fetch(`https://dancing-guru-server.vercel.app/users/${requestEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (user?.email === data.userEmail) {
          setUserRole(data?.role);
          setUserData(data);
        }
      });
  }, [user]);


  return (
    <div className="mx-auto w-full h-full ">
      <div className="mx-auto mb-5 mt-20 w-10/12 md:mt-32 md:w-8/12 lg:w-5/12 rounded-xl box-shadow  bg-blue-200">
        <div className=" w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto shadow-md shadow-black relative bottom-10 md:bottom-20  ">
          <img
            src={userData?.userImage}
            className="w-full text-center rounded-full"
            alt="User Image"
          />
        </div>
        <div className="md:-mt-20 -mt-8 mx-auto px-5 md:px-14 pb-10  ">
          <h2 className="font-bold text-[#000080] text-center text-2xl md:text-3xl">
            {userRole === 'admin' ? 'Admin' : userRole === 'instructor' ? 'Instructor': userRole === 'user' ? 'Student' : 'User'}
            
          </h2>
          <p className="text-center my-1 font-[500] text-blue-600">
            <small className="text-center">Id: {userData?._id}</small>
          </p>
          <div className="my-3">
            <p className="text-[#333333] font-bold md:text-lg">
              <FaUser className="inline  text-lg md:text-xl md:me-2" />{" "}
              {userData?.userName}
            </p>
            <p className="text-[#333333] font-bold  md:text-lg">
              <MdEmail className="inline text-lg md:text-xl md:me-2"></MdEmail>{" "}
              {userData?.userEmail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
