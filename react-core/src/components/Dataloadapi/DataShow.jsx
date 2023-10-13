import PropTypes from 'prop-types'; 
import { fakeDB, removeItem } from '../utilities/addCart';

const DataShow = props => {
    const {id,  balance} = props.jData ;
    const btnClick = (id) =>{
        fakeDB(id);
    }

    const remove = (id) =>{
        removeItem(id)
    }

    const removeAdd = () => remove(id)
    return (
        <div>
            <h2>id: {id}</h2>
            {/* <h3>guid: {guid}</h3> */}
            <h4>price: {balance}</h4>
            <div className="btn">
                <button onClick={() =>btnClick(id)}>add to card</button> {/*short process*/}
                <button onClick={removeAdd}>remove</button> {/*long process */}
            </div>
        </div>
    );
};

DataShow.propTypes = {
  jData: PropTypes.object, // Use the appropriate PropTypes type
};
export default DataShow;