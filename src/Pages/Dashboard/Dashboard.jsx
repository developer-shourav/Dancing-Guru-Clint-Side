import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const Dashboard = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Dashboard')
    /* ---------Taking user form DB and firebase----- */
    const {user} = useContext(AuthContext);

    const [dbUser, setDbUser] = useState(null);

    useEffect(() => {
        fetch(`https://dancing-guru-server.vercel.app/users/${user?.email}`)
        .then( res => res.json())
        .then( data => setDbUser(data))
    }, [user])

    if(user?.email === dbUser?.userEmail){
        console.log(dbUser?.role);
    }
    return (
        <div>
            <h2 className="text-2xl">Dashboard  Page</h2>
        </div>
    );
};

export default Dashboard;