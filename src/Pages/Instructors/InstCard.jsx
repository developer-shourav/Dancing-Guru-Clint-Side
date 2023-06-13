
const InstCard = ({instructor}) => {
    const {userImage, userName, userEmail} = instructor;

    return (
        <div className="card rounded-b-md card-compact w-full  mx-auto bg-base-100 relative dark:bg-[#181818] box-shadow">
      <figure>
        <img
          src={userImage}
          className=""
          alt=""
        />
      </figure>
      <div className="card-body  dark:text-stone-200 rounded-b-none font-[500] hover:bg-[#e4444c] text-stone-200 hover:text-black bg-[#89183E]  absolute bottom-0 left-0 rounded-tr-3xl">
     
        <h2 className=" text-lg md:text-xl font-bold">{userName}</h2>
        <div className="flex justify-between items-center">
         <p className="text-md md:text-md font-bold  ">Email: <span className="font-normal">{userEmail}</span></p>
        
        </div>
      </div>
    </div>
    );
};

export default InstCard;