
import Swal from "sweetalert2";

const ManageUserRow = ({ singleUser, recalling, setRecalling }) => {
  const { _id, userName, userImage, userEmail, role } = singleUser;

  const handleUpdateRoll = (statValue) => {
    const newRole = statValue;

    const updatedRole = {
      newRole,
    };

    fetch(`https://dancing-guru-server.vercel.app/usersRoll/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRole),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount >= 1) {
          setRecalling(!recalling);
          Swal.fire("Well done !", `${userName} is ${newRole} now`, "success");
        }
      });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" border rounded-xl border-gray-200 w-20 h-20 ">
              <img src={userImage} alt="User image" />
            </div>
          </div>
        </div>
      </td>

      <td>
        <div>
          <div className="text-md font-bold">{userName}</div>
        </div>
      </td>
      <td>{userEmail}</td>

      <td>{role === 'user' ? 'student' : role}</td>
    </tr>
  );
};

export default ManageUserRow;
