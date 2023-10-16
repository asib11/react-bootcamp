import Link from '../Link/Link';
import './Navbar.css';


const Navbar = () => {
    const navBars = [
        {
          "id": 1,
          "name": "Home",
          "route": "/"
        },
        {
          "id": 2,
          "name": "About Us",
          "route": "/about"
        },
        {
          "id": 3,
          "name": "Services",
          "route": "/services"
        },
        {
          "id": 4,
          "name": "Portfolio",
          "route": "/portfolio"
        },
        {
          "id": 5,
          "name": "Contact",
          "route": "/contact"
        }
      ]
    
    return (
        <div>
            <ul className='md:flex'>
                {navBars.map(navBar => <Link key={navBar.id} navBar={navBar} ></Link>)}
            </ul>
        </div>
    );
};

export default Navbar;