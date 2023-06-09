import useTitle from "../../../hooks/useTitle";

const Home = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Home')
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">This is Home</h2>
        </div>
    );
};

export default Home;