import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import image404 from '../../assets/images/error-image/img-404.png'
const Page404 = () => {
    return (
      <div className='dark:bg-[#1B1B1B] pb-40'>
          <div className='container mx-auto text-center'>
            <img className='text-center mx-auto' src={image404} alt="" />
            <Link to='/' className='btn bg-[#E4444c]  hover:bg-[#b81823] rounded font-[500] text-white text-center hover:text-stone-300'> <BsArrowLeft className='text-xl' /> Back To Home</Link>
        </div>
      </div>
    );
};

export default Page404;