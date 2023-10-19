import { useLoaderData, useNavigate } from "react-router-dom";

const UserFullInfo = () => {
    const detils = useLoaderData();
    const navigate = useNavigate();
    const navigateBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Full Details</h2>
            <h1>{detils.name}</h1>
            <p>Website: {detils.website}</p>
            <button onClick={navigateBack}>go-back</button>
        </div>
    );
};

export default UserFullInfo;