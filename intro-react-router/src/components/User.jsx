import { useLoaderData } from "react-router-dom";

const User = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        
        <div>
            <h2>Users</h2>
        </div>
    );
};

export default User;