import { faUser, faRegistered, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Registration from "../../auth/Registration";
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import { UserProfileSetType } from "../../../store/user/Reducer";
import "./SideBarMenu.css";

const SideBarMenu = () => {

    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    const onClickToggleRegister = () => setShowRegister(!showRegister);
    const onClickToggleLogin = () => setShowLogin(!showLogin);
    const onClickToggleLogout = () => setShowLogin(!showLogout);

    useEffect(() => {

        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "użytkownikTestowy"
            }
        })

    }, [dispatch]);


    return (
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">{user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span className="menu-name" onClick={onClickToggleRegister}>Rejestracja</span>
                    <Registration isOpen={showRegister} onClickToggle={onClickToggleRegister} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span onClick={onClickToggleLogin} className="menu-name">Logowanie</span>
                    <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
                </li> 
                <li>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span onClick={onClickToggleLogout} className="menu-name">Wylogowanie</span>
                    <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
                </li>
            </ul>
        </React.Fragment>
    )
}

export default SideBarMenu