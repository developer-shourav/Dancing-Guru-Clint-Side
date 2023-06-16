import { Link, useLoaderData } from "react-router-dom";
import {IoIosSend} from 'react-icons/io';
import {FaArrowLeft} from 'react-icons/fa';
const SendFeedback = () => {
  const feedbackClass = useLoaderData();
  const feedbackData = feedbackClass[0]?.feedback;


  const handleSubmit = event => {
    /* -----------Prevent Default Page load on Submit-------- */
    event.preventDefault()
    const form = event.target;
    const updatedFeedback = form.message.value;
    console.log(updatedFeedback);
    form.reset()
  }
  return (
    <div className="container mx-auto h-full ">
      <h2 className="text-center text-2xl font-bold my-10">Send Feedback</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea border-2 textarea-info h-24 w-full md:w-8/12 flex items-start mx-auto"
          placeholder="Admin Feedback"
          name="message"
          defaultValue={feedbackData}
          required
        ></textarea>

        <div className="w-full md:w-8/12 mx-auto flex justify-end">
          <div className="flex justify-between mt-5 gap-5">
            <Link to='/dashboard/manageCls' className="btn normal-case border-0 hover:bg-[#E4444c] bg-[#89183E] shadow-[#00000081] shadow-md text-white hover:text-white font-[500] rounded btn-secondary">
            <FaArrowLeft/>  Return Manage Classes
            </Link>

            <button
              className="btn btn-info rounded border-0 shadow-[#00000081] shadow-md"
            >
              <IoIosSend className="text-xl" />{" "}
              <input type="submit" value="Send Feedback" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendFeedback;
