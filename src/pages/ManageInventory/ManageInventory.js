import React, { useEffect, useState } from 'react';
import TableDetail from './TableDetail';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pages, setPages] = useState(0);
    const [limit, setLimit] = useState(10);
    useEffect( () =>{
        fetch(`http://localhost:4000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect( () => {
        fetch(`http://localhost:4000/productCount`)
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            setPages(Math.ceil(count/limit));
           
        })
    },[]);

    return (
        <div>
            <h1 className='p-3 m-2 fs-4'>All Inventory</h1>

<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope='col' className='py-3 px-6 fs-6 border-x text-center'>
                    Image
                </th>
                <th scope="col" className="py-3 px-6 fs-6 border-x text-center">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6 fs-6 border-x text-center">
                    Price
                </th>
                <th scope="col" className="py-3 px-6 fs-6 border-x text-center">
                    Quantity
                </th>
                <th scope="col" className="py-3 px-6 fs-6 border-x text-center">
                    Supplier
                </th>
                <th scope="col" className="py-3 px-6 fs-6 border-x text-center">
                    <span className="sr-only">Control</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => <TableDetail
                key={product._id}
                product={product}
                ></TableDetail>)
            }
        </tbody>
       
    </table>
</div>

        </div>
    );
};

export default ManageInventory;