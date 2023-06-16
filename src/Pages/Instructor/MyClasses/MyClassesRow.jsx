const MyClassesRow = ({ item }) => {
  const { classImage, className, instructorName, totalStudents, status, feedback } = item;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 md:w-24 md:h-24">
              <img src={classImage} alt="Class image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{className}</div>
          </div>
        </div>
      </td>
      <td>{instructorName}</td>

      <td>{totalStudents}</td>
      <td>{status}</td>

      {
       status === "denied" && <td>
        {/* ----------FeedBack Modal--------- */}
        {/* You can open the modal using ID.showModal() method */}
        <button className="btn btn-info" onClick={() => window.my_modal_3.showModal()}>
        See Feedback
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Admin Feedback!</h3>
            <p className="py-4">{feedback}</p>
          </form>
        </dialog>
        </td>
      }
      
    </tr>
  );
};

export default MyClassesRow;
