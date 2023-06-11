import useTitle from "../../hooks/useTitle";

const Classes = () => {
      /* ---------Dynamic Title based on Page-------- */
      useTitle('Classes')
    return (
        <div>
            <h2 className="text-2xl">Classes page</h2>
        </div>
    );
};

export default Classes;