import useTitle from "../../hooks/useTitle";

const Login = () => {

    /* ---------Dynamic Title based on Page-------- */
    useTitle('Login')
    return (
        <div>
            <h3>This is login Page</h3>
        </div>
    );
};

export default Login;