
const AllClassCard = ({item}) => {
    const {_id, classImage, className, instructorName, price, availableSeats} = item;

    const selectClass = id => {
        console.log(id);
    }

    return (
        <div className={`card  card-compact w-full  mx-auto ${availableSeats === 0 ? 'bg-red-500 dark:bg-red-500 text-stone-200' : 'bg-base-100' } dark:bg-[#181818] box-shadow pt-5`}>
      <figure>
        <img
          src={classImage}
          className=" h-52 "
          alt=""
        />
      </figure>
      <div className="card-body  mt-4 dark:text-stone-200  dark:font-[500] ">
     
        <h2 className=" text-lg md:text-xl font-bold border-b-4 border-dotted border-[#e4646a]  pb-2">{className}</h2>

        <div className="flex justify-between items-center">
         <h2 className="text-lg font-bold">Price: ${price}</h2>
         <div className="md:text-[15px] font-[500]">Available seats:  <span className="font-bold">{availableSeats}</span></div>
        </div>

        <div className="flex justify-between items-center">
         <button className="btn btn-sm normal-case border-0 font-normal bg-[#89183E]  text-white px-3 py-1 rounded hover:bg-[#E4444c]" onClick={() => selectClass(_id)} >Select Class</button>
         <div className="md:text-[15px] font-[500]">Instructor: <span className="font-bold">{instructorName}</span></div>
        </div>

      

      </div>
    </div>
    );
};

export default AllClassCard;