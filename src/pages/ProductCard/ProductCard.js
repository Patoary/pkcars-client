import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';

const ProductCard = ({ product }) => {
    const { name, price, img, description, supplier, quantity, _id } = product;
    const navigate = useNavigate();
    return (
        <div>
            <div className="mx-auto max-w-sm mb-2 px-2 py-2 rounded overflow-hidden shadow-lg">
                <img src={img} style={{ width: '300px', height: '200px' }} className='w-11/12 px-3 py-4 mx-auto' alt="" />
                <div className="px-6 py-4">
                    <div className='flex justify-between py-2'>
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <div className='font-semibold' style={{ color: '#116466' }}>${price}</div>
                    </div>
                    <p className="text-gray-900 text-sm block">
                        {description.slice(0, 80)}...
                    </p>
                </div>
                <span className="flex flex-start  rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Supplier: {supplier}</span>
                <div className='flex justify-between'> 
                    <div className='flex '>
                        <p>Rating:</p>
                        <span className='text-amber-400'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </div>
                    <div className='font-semibold text-cyan-800'>
                        Available:{quantity === 0 ? 'Sold Out' : quantity}
                        {quantity === 0 ? '' : 'unit'}
                    </div>

                </div>
                <button 
                className='w-full bg-cyan-900 hover:bg-cyan700 py-2 rounded-md text-gray-400'
                onClick={() => navigate(`/inventory/${_id}`) }
                >Manage</button>
            </div>
        </div>
    );
};

export default ProductCard;