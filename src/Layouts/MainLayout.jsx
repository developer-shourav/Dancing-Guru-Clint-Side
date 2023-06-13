import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import HeaderCTA from "../components/HeaderCTA/HeaderCTA";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className="text-[#1f2937] dark:text-[#7D7D7D] bg-white dark:bg-[#1B1B1B]">
             <HeaderCTA> </HeaderCTA>
             <NavBar></NavBar>
             {/* ------Loading Spinner------ */}
           {navigation.state === 'loading' && <SpinnerLoader> </SpinnerLoader>}
            <Outlet> </Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default MainLayout;