import { useEffect, useState } from 'react';
import InstructorsCard from './InstructorsCard';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        fetch('https://dancing-guru-server.vercel.app/popularInstructor')
        .then( res => res.json())
        .then( data => setPopularInstructors(data))
    } , [])

    console.log(popularInstructors);
    return (
        <div className="container mx-auto my-10 lg:my-24 pt-6 px-5">
            
           <div>
             <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl  font-extrabold dark:text-[#E4444C]">Popular Instructors</h2>
           </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-20 ">
              {
                popularInstructors?.map( instructor => <InstructorsCard key={instructor?._id} instructor={instructor} > </InstructorsCard> )
              }
            </div>
        </div>
    );
};

export default PopularInstructors;