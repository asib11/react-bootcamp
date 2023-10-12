import PropTypes from 'prop-types'; 

const DataShow = props => {
    const {id,  balance} = props.jData ;
    const btnClick = (id) =>{
        console.log(id)
    }

    const purchase = (id) =>{
        console.log(id)
    }

    const purchaseAdd = () => purchase(id)
    return (
        <div>
            <h2>id: {id}</h2>
            {/* <h3>guid: {guid}</h3> */}
            <h4>price: {balance}</h4>
            <div className="btn">
                <button onClick={() =>btnClick(id)}>add to card</button> {/*short process*/}
                <button onClick={purchaseAdd}>purchase</button> {/*long process */}
            </div>
        </div>
    );
};

DataShow.propTypes = {
  jData: PropTypes.object, // Use the appropriate PropTypes type
};
export default DataShow;