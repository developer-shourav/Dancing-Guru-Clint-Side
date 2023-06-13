const ClassCard = ({item}) => {
    const {classImage, className, totalStudents, instructorName} = item;

    return (
        <div className="card rounded-b-md card-compact w-full  mx-auto bg-base-100 dark:bg-[#181818] box-shadow pt-5">
      <figure>
        <img
          src={classImage}
          className=" h-52"
          alt="Toy image"
        />
      </figure>
      <div className="card-body mt-4 dark:text-stone-200 rounded-b-md font-[500] bg-[#e4444c] hover:text-stone-200 hover:bg-[#89183E]">
     
        <h2 className="text-lg font-bold">{className}</h2>
        <div className="flex justify-between items-center">
         <p className="text-md ">Instructor: <span className="font-bold">{instructorName}</span></p>
         <h2 className="">Enrolled Student: {totalStudents}</h2>
        
        </div>
      </div>
    </div>
    );
};

export default ClassCard;