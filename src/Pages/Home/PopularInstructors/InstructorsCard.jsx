

const InstructorsCard = ({instructor}) => {
    const {instructorImage, totalStudents, instructorName} = instructor;

    return (
        <div className="card rounded-b-md card-compact w-full  mx-auto bg-base-100 relative dark:bg-[#181818] box-shadow">
      <figure>
        <img
          src={instructorImage}
          className=""
          alt=""
        />
      </figure>
      <div className="card-body  dark:text-stone-200 rounded-b-none font-[500] hover:bg-[#e4444c] text-stone-200 hover:text-black bg-[#89183E] absolute bottom-0 left-0 rounded-tr-3xl">
     
        <h2 className=" text-lg md:text-xl font-bold">{instructorName}</h2>
        <div className="flex justify-between items-center">
         <p className="text-[12px] md:text-md  ">Enrolled Student: <span className="font-bold">{totalStudents}</span></p>
        
        </div>
      </div>
    </div>
    );
};

export default InstructorsCard;