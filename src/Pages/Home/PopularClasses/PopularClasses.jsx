import { useEffect } from "react";
import { useState } from "react";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
   
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('https://dancing-guru-server.vercel.app/popularCls')
        .then( res => res.json())
        .then( data => setPopularClass(data))
    } , [])
    return (
        <div className="container mx-auto my-10 lg:my-20 px-5">
            
           <div>
             <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-[#E4444C]">Popular Classes</h2>
           </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 ">
              {
                popularClass?.map( clsItem => <ClassCard key={clsItem?._id} item={clsItem} > </ClassCard> )
              }
            </div>
        </div>
    );
};

export default PopularClasses;