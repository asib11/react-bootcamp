import PropTypes from 'prop-types'; 

const DataShow = props => {
    const {id,  balance} = props.jData ;
    return (
        <div>
            <h2>id: {id}</h2>
            {/* <h3>guid: {guid}</h3> */}
            <h4>price: {balance}</h4>
        </div>
    );
};

DataShow.propTypes = {
  jData: PropTypes.object, // Use the appropriate PropTypes type
};
export default DataShow;