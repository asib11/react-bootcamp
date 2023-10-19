import { NavLink } from "react-router-dom";
import './ActiveLink.css';
import PropTypes from 'prop-types';

const ActiveLink = ({to,children}) => {
    return (
        <div>
            <NavLink
            to={to}
            className={({isActive}) => isActive? 'active': ''}>
                {children}
            </NavLink>
        </div>
    );
};

ActiveLink.propTypes ={
    to: PropTypes.string,
    children: PropTypes.string,
}

export default ActiveLink;