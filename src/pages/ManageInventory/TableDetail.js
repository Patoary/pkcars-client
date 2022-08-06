import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TableDetail = ({ product }) => {
    const { name, price, img, supplier, quantity, _id } = product;
    console.log(name, price)
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
            >
                <td className="w-1/6 py-3 px-6 border-x dark:text-white whitespace-nowrap text-center">
                    <img src={img} className="w-1/2 mx-auto" alt="" />
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                    {name}
                </th>
                <td className='py-3 px-6 fs-6 border-x text-center'>{price}</td>
                <td className='py-3 px-6 fs-6 border-x text-center'>{quantity}</td>
                <td className='py-3 px-6 fs-6 border-x text-center'>{supplier}</td>
               <div className='flex justify-center py-3'>
               <button className="bg-red-300 py-2 px-3 text-base rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
               </div>
            </tr>
        </>
    );
};

export default TableDetail;