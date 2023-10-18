import PropTypes from 'prop-types';
import './UserDetails.css'

const UserDetails = ({user}) => {

    return (
        <div className='user'>
            <h2>{user.name}</h2>
            <p>phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            
        </div>
    );
};

UserDetails.propTypes ={
    user: PropTypes.object,
}

export default UserDetails;