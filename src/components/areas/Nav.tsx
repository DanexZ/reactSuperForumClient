import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import ReactModal from "react-modal";
import SideBarMenu from "./sidebar/SideBarMenu";
import "./Nav.css";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {width} = useWindowDimensions();

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon 
                    onClick={onClickToggle}
                    className="nav-mobile=menu" 
                    icon={faBars} 
                    size="lg" 
                />
            )
        }
    }

    const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => setShowMenu(!showMenu);

    const onRequestClose = (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => setShowMenu(false);
      
    

    return (
        <React.Fragment>
            <ReactModal
                className="modal-menu"
                isOpen={showMenu}
                onRequestClose={onRequestClose}
                shouldCloseOnOverlayClick={true}
            >
                <SideBarMenu />
            </ReactModal>

            <div>
                {getMobileMenu()}
                <strong>SuperForum</strong>
            </div>
        </React.Fragment>
    )
}

export default Nav