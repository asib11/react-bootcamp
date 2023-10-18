import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div >
            <Link to="/" style={{marginRight: "10px"}}>Home</Link>
            <Link to="/contact" style={{marginRight: "10px"}}>Contact</Link>
            <Link to="/about" style={{marginRight: "10px"}}>About</Link>
            <Link to='/user' style={{marginRight: "10px"}}>User</Link>
        </div>
    );
};

export default Header;