import useTitle from "../../hooks/useTitle";

const Instructors = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Instructors')
    return (
        <div>
            <h2 className="text-2xl">Instructors page</h2>
        </div>
    );
};

export default Instructors;