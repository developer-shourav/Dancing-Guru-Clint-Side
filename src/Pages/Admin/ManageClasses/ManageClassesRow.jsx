
const ManageClassesRow = ({item}) => {

    const {classImage, className, instructorName, instructorEmail, availableSeats, status, price } = item;
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
        <td>{status}</td>
        <td> <button className=" bg-green-600 hover:bg-green-700 px-1 py-1 rounded text-white text-[12px] ">Approve</button></td>
        <td> <button className=" bg-red-600 hover:bg-red-700 px-1 py-1 rounded text-white text-[12px] ">Deny</button></td>
        <td> <button className=" bg-blue-700 hover:bg-blue-500 px-1 py-1 rounded text-white text-[12px] ">Feedback</button></td>
       
      </tr>
    );
};

export default ManageClassesRow;