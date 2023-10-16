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
            <ul>
                {navBars.map(navBar => <li key={navBar.id}>{navBar.name}</li>)}
            </ul>
        </div>
    );
};

export default Navbar;