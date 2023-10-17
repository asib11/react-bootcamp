import { useEffect, useState } from 'react';
import './Price.css'
import PriceCart from '../PriceCart/PriceCart';

const Price = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div >
            <h1 className='text-5xl bg-cyan-200 text-center mt-4 p-4'>affortable Price</h1>
            <div className='grid grid-cols-3 gap-3'>
            {
                prices.map(price =><PriceCart key ={price.id} price ={price}></PriceCart>)
            }
            </div>
        </div>
    );
};

export default Price;