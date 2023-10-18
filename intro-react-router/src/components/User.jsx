import { useLoaderData } from "react-router-dom";
import UserDetails from "./UserDetails";

const User = () => {
    const data = useLoaderData();
    return (
        
        <div>
            <h2>Users</h2>
            {
                data.map(user => <UserDetails key={user.id} user ={user}></UserDetails>)
            }
        </div>
    );
};

export default User;