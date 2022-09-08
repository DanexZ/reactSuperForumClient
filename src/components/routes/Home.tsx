import React, { FC } from "react";
import Nav from "../areas/Nav";
import SideBar from "../areas/sidebar/SideBar";
import LeftMenu from "../areas/LeftMenu";
import Main from "../areas/main/Main";
import RightMenu from "../areas/rightMenu/RightMenu";
import "./Home.css";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Home: FC = () => {

    const {width} = useWindowDimensions();

    return (
        <div className="screen-root-container home-container">
            <div className="navigation">
                <Nav />
            </div>
            {width > 768 && <SideBar />}
            {width > 768 && <LeftMenu />}
            <Main />
            {width > 768 && <RightMenu />}
        </div>
    );
};

export default Home; 