import useTitle from "../../hooks/useTitle";

const Contact = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Contact')
    return (
        <div>
           <h2 className="text-3xl font-bold text-center">This is Contact</h2> 
        </div>
    );
};

export default Contact;