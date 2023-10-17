import Proptypes from 'prop-types'

const PriceCart = ({price}) => {
    return (
        <div>
            <h2 className=''>{price.name}</h2>
        </div>
    );
};

PriceCart.propTypes ={
    price: Proptypes.object,
};

export default PriceCart;