import { useEffect } from "react";

const useTitle = title => {

   useEffect( () => {
    document.title= `Dancing Guru | ${title}`;
   }, [title])
   
};

export default useTitle;