const DataShow = (props) => {
    const {id, guid} = props.jData ;
    return (
        <div>
            <h2>id: {id}</h2>
            <h3>guid: {guid}</h3>
        </div>
    );
};

export default DataShow;