import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClassesRow = ({item, recalling, setRecalling }) => {
     
    const {_id, classImage, className, instructorName, instructorEmail, availableSeats, status, price } = item;

    const updateStat = statValue => {
      
        const newStatus = statValue;

        const updatedStatus = {
          newStatus
        };

      fetch(`https://dancing-guru-server.vercel.app/classesStat/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedStatus),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.modifiedCount >= 1){
            setRecalling(!recalling)
            Swal.fire("Well done !", "Status Updated", "success");
            
          }
        });
    };

    return (
        <tr >
        <td  >
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" border border-gray-200 w-20 h-20 ">
                <img src={classImage} alt="Class image" />
              </div>
            </div>
            <div>
              <div className="text-md font-bold">{className}</div>
            </div>
          </div>
        </td>
        <td>{instructorName}</td>
        <td>{instructorEmail}</td>
        
        <td>{availableSeats}</td>
        <td>${price}</td>
        <td><span className={`${status === 'denied' ? 'text-red-600 text-md font-bold':''}`}>{status}</span></td>
        <td> <button onClick={() =>updateStat('approved') } disabled={status === 'approved' || status === 'denied'} className="btn font-[500] btn-sm bg-green-600 hover:bg-green-700 px-1 py-1 rounded text-white text-[12px] ">Approve</button></td>


        <td> <button onClick={() =>updateStat('denied') } disabled={status === 'approved' || status === 'denied'} className=" btn btn-sm font-[500] bg-red-600 hover:bg-red-700   rounded text-white text-[12px] ">Deny</button></td>
        
        <td> <Link to={`/dashboard/feedback/${_id}`} className=" btn font-[500] bg-blue-700 btn-sm hover:bg-blue-500 hover:text-white  rounded text-white text-[12px] ">Send Feedback</Link></td>
        
           

      </tr>
    );  
};

export default ManageClassesRow;