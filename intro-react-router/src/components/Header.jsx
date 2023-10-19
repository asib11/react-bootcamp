import ActiveLink from "./ActiveLink";

const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', gap:'10px'}}>
            <ActiveLink to="/" >Home</ActiveLink>
            <ActiveLink to="/contact" >Contact</ActiveLink>
            <ActiveLink to="/about" >About</ActiveLink>
            <ActiveLink to='/user' >User</ActiveLink>
            
        </div>
    );
};

export default Header;