import { ScrollRestoration } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AllClassCard from "./AllClassCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Classes = () => {
      /* ---------Dynamic Title based on Page-------- */
      useTitle('Classes')

      const {reloader} =useContext(AuthContext);
      const [allClasses, setAllClasses] = useState([]);

      useEffect(() => {
        fetch('https://dancing-guru-server.vercel.app/classesApd')
        .then( res => res.json())
        .then( data => setAllClasses(data))
      },[reloader])
    return (
        <div className="container mx-auto px-5 ">
           <div>
             <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl lg:mb-24 mt-5 md:mt-10 lg:mt-20 font-extrabold dark:text-[#E4444C]">All Classes</h2>
           </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 ">
              {
                allClasses?.map( singleCls => <AllClassCard key={singleCls?._id} item={singleCls} > </AllClassCard> )
              }
            </div>

            <ScrollRestoration> </ScrollRestoration>
        </div>
    );
};

export default Classes;