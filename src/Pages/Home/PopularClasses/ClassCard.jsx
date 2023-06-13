const ClassCard = ({item}) => {
    const {classImage, className, totalStudents, instructorName} = item;

    return (
        <div className="card rounded-b-md card-compact w-full  mx-auto bg-base-100 dark:bg-[#181818] box-shadow pt-5">
      <figure>
        <img
          src={classImage}
          className=" h-52 "
          alt=""
        />
      </figure>
      <div className="card-body mt-4 dark:text-stone-100 rounded-b-md font-[500] bg-[#e4444c] hover:text-stone-200 hover:bg-[#89183E]">
     
        <h2 className=" text-lg md:text-xl font-bold">{className}</h2>
        <div className="flex justify-between items-center">
         <p className="text-[12px] md:text-md  ">Instructor: <span className="font-bold">{instructorName}</span></p>
         <p className="text-[12px] md:text-md  ">Enrolled Student: <span className="font-bold">{totalStudents}</span></p>
        
        </div>
      </div>
    </div>
    );
};

export default ClassCard;