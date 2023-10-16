import { useState } from 'react';
import Link from '../Link/Link';
import './Navbar.css';
import { Bars3Icon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [open, setOpen] = useState(false);

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
        <nav>
            <div onClick={()=> setOpen(!open)}>
            <Bars3Icon className="h-6 w-6 text-blue-500" />
            </div>
            <ul className='md:flex'>
                {navBars.map(navBar => <Link key={navBar.id} navBar={navBar} ></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;