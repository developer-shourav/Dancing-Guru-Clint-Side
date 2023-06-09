import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavBar> </NavBar>
             {/* ------Loading Spinner------ */}
           {navigation.state === 'loading' && <SpinnerLoader> </SpinnerLoader>}
            <Outlet> </Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default MainLayout;