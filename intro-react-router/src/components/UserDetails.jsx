import PropTypes from 'prop-types';
import './UserDetails.css'
import { Link } from 'react-router-dom';

const UserDetails = ({user}) => {

    return (
        <div className='user'>
            <h2>{user.name}</h2>
            <p>phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p><Link to={`/user/${user.id}`}>Show User Details</Link></p>

        </div>
    );
};

UserDetails.propTypes ={
    user: PropTypes.object,
}

export default UserDetails;