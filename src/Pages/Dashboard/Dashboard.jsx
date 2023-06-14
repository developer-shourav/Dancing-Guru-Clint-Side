import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const Dashboard = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Dashboard')
    /* ---------Taking user form DB and firebase----- */
    const {user} = useContext(AuthContext);

    /* -------------Define The user Role----------- */
    const [userRole, setUserRole] = useState(null);


    useEffect(() => {
        fetch(`https://dancing-guru-server.vercel.app/users/${user?.email}`)
        .then( res => res.json())
        .then( data => {
            if(user?.email === data.userEmail){
                setUserRole(data?.role)
            }
        })
    }, [user])


    return (
        <div className="container mx-auto">
            {
                userRole === 'admin' && <h2 className="text-2xl"> Welcome Admin </h2>
            }
            {
                userRole === 'instructor' && <h2 className="text-2xl"> Welcome instructor </h2>
            }
            {
                userRole === 'user' && <h2 className="text-2xl"> Welcome User </h2>
            }
            
        </div>
    );
};

export default Dashboard;