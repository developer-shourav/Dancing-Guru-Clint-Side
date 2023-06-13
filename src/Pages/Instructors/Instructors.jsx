import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import InstCard from "./InstCard";

const Instructors = () => {
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Instructors')
    const allInstructors = useLoaderData();

    console.log(allInstructors);
    return (
        <div className="container mx-auto my-10 lg:my-20  pt-6 px-5">
            
        <div>
          <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl  font-extrabold dark:text-[#E4444C]">All Instructors</h2>
        </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-20 ">
           {
             allInstructors?.map( instructor => <InstCard key={instructor?._id} instructor={instructor} > </InstCard> )
           }
         </div>
         <ScrollRestoration> </ScrollRestoration>
     </div>
    );
};

export default Instructors;