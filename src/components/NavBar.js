import { getUser } from "../helpers/Utils";
import Logo from "../assets/productlogo.png";
import ReorderIcon from "@mui/icons-material/Reorder"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css"
import { logout } from "../helpers/Utils";


export default function NavBar({onLogin}) {

    const navigator = useNavigate();
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    const sair = async ()=>{
        await logout();
        navigator('/');
    };

    const [openLinks, setOpenLinks] = useState(false);    

    let userName = getUser();
    
    if(userName !== null) {
        return (
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={Logo} />
                    <div className="hiddenLinks">
                    <Link to="/home"> Home </Link>
                    <Link to="/createProduct"> Criar Produto </Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/home"> Home </Link>
                    <Link to="/createProduct"> Criar Produto </Link>
                    <p>Olá, {userName} </p>
                    <button onClick={toggleNavbar}>
                    <ReorderIcon />
                    </button>
                </div>
                <div><button onClick={sair()}>Sair</button></div>
            </div>
        );
    }
    else {
        
        return (
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={Logo} />
                    <div className="hiddenLinks">
                    <Link to="/register"> Registrar </Link>
                    <Link to="/login"> Login </Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/register"> Registrar </Link>
                    <Link to="/login"> Login </Link>
                    <button onClick={toggleNavbar}>
                    <ReorderIcon />
                    </button>
                </div>
            </div>
        );
    }
}