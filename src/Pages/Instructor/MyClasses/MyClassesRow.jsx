
const MyClassesRow = ({item}) => {
    const {classImage, className, instructorName, price } = item;
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20 md:w-24 md:h-24">
                <img src={classImage} alt="Class image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{className}</div>
            </div>
          </div>
        </td>
        <td>{instructorName}</td>
        
        <td>${price}</td>
        
      </tr>
    );
};

export default MyClassesRow;