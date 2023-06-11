import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Dashboard')
    return (
        <div>
            <h2 className="text-2xl">Dashboard  Page</h2>
        </div>
    );
};

export default Dashboard;