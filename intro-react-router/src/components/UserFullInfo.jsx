import { useLoaderData } from "react-router-dom";

const UserFullInfo = () => {
    const detils = useLoaderData();
    return (
        <div>
            <h2>Full Details</h2>
            <h1>{detils.name}</h1>
            <p>Website: {detils.website}</p>
        </div>
    );
};

export default UserFullInfo;