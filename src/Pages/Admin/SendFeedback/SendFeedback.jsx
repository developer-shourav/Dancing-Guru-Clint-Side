import { useLoaderData } from "react-router-dom";

const SendFeedback = () => {
    const feedbackClass = useLoaderData();
    console.log(feedbackClass);
    return (
        <div>
            <h2>Send Feedback</h2>
        </div>
    );
};

export default SendFeedback;