import useTitle from "../../hooks/useTitle";

const Register = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Register')
    return (
        <div>
            <h3>This is register</h3>
        </div>
    );
};

export default Register;