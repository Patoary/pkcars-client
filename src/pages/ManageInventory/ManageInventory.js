import React, { useEffect, useState } from 'react';
import TableDetail from './TableDetail';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pages, setPages] = useState(0);
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        fetch(`http://localhost:4000/products?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [limit, pageNumber]);
    useEffect(() => {
        fetch(`http://localhost:4000/productCount`)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setPages(Math.ceil(count / limit));

            })
    }, [limit]);

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

            {/* pagination */}
            <div className='pagination'>

                <nav className='my-6 w-full flex justify-center ' aria-label="Page navigation example">
                    <ul class="inline-flex -space-x-px">
                        <li>
                            <span
                                onClick={() => {
                                    if (pageNumber > 0) {
                                        setPageNumber(pageNumber - 1)
                                    }
                                }}
                                className="py-2 px-3 ml-0 cursor-pointer leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </span>
                        </li>
                        {
                            [...Array(pages).keys()].map(page =>
                                <li key={page}>
                                    <span
                                        className={`py-2 px-3 ml-0 cursor-pointer leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                            pageNumber === page ? ' text-gray-800 bg-gray-600' : ''
                                            }`}
                                        onClick={() => setPageNumber(page)}
                                    >
                                        {page + 1}
                                    </span>
                                </li>
                            )
                        }
                        <li>
                            <span
                                onClick={() => {
                                    if (pageNumber + 1 < pages) {
                                        setPageNumber(pageNumber + 1);
                                    }
                                }}
                                className="py-2 px-3 cursor-pointer leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </span>
                        </li>
                    </ul>
                    <select
                        defaultValue={limit}
                        onChange={(e) => {
                            setLimit(e.target.value);
                            setPageNumber(0);
                        }}
                        className="py-2 px-3 cursor-pointer leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

                    >
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>
                </nav>

            </div>
        </div>
    );
};

export default ManageInventory;