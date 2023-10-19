import PropTypes from 'prop-types';
import './UserDetails.css'
import { Link,  useNavigate } from 'react-router-dom';

const UserDetails = ({user}) => {
    const nevigateor = useNavigate();
    const navigatehandleer = ()=>{
        nevigateor(`/user/${user.id}`)
    }

    return (
        <div className='user'>
            <h2>{user.name}</h2>
            <p>phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p><Link to={`/user/${user.id}`}>Show User Details</Link></p>
            <Link to={`/user/${user.id}`}><button>Show Details-1</button></Link>
            <button onClick={navigatehandleer}>Show Details-2</button>

        </div>
    );
};

UserDetails.propTypes ={
    user: PropTypes.object,
}

export default UserDetails;