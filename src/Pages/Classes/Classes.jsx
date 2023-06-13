import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AllClassCard from "./AllClassCard";

const Classes = () => {
      /* ---------Dynamic Title based on Page-------- */
      useTitle('Classes')

      const allClasses = useLoaderData();

      console.log(allClasses);
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