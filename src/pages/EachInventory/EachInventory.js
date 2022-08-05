import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EachInventory = () => {
    const [eachInventory, setEachInventory] = useState({});
    const [newQuantity, setNewQuantity] = useState(0);
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:4000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setEachInventory(data);
            setNewQuantity(data.quantity);

        })
    },[id]);
 // handleUpdateStock
 const handleUpdateStock = (event) =>{
    event.preventDefault();
    const stock = event.target.stock.value;
    const updateQuantity = newQuantity + parseInt(stock);
    setNewQuantity(updateQuantity);
    const url = `http://localhost:4000/update/${id}`;
    fetch(url, {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({updateQuantity}),
    })
    .then(res => res.json())
    .then(data =>{
        event.target.reset();
        toast(`${stock} items added in stock`);
    })
 }


    // handleDelivered 
    const handleDelivered = () =>{
        if(newQuantity>0){
            const updateQuantity = newQuantity - 1;
            setNewQuantity(updateQuantity);
            const url = `http://localhost:4000/update/${id}`;
            fetch(url, {
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({updateQuantity}),
            })
            .then(res => res.json())
            .then(data => {
                toast('One Item Sold!')
            });
        };
    }

    return (
        <div>


<div className="lg:flex justify-center items-center mt-10 mb-40 px-4">
        <div className="bg-white lg:flex justify-center items-center py-6 shadow-lg rounded-2xl">
          <div className="w-4/5 mx-auto">
            <img className='w-full' src={eachInventory?.img} alt="" />
          </div>
          <div className="w-full py-4 px-4 bg-white">
            <div>
              <span className="flex justify-between py-2">
                <span className="block text-3xl text-cyan-800 font-bold tracking-wide">
                  {eachInventory?.name}
                </span>
              </span>
              <span className="block text-gray-600 text-base my-5 lg:w-[60ch]">
                {eachInventory?.description}
              </span>

              <p className="font-extrabold text-3xl uppercase text-cyan-800 my-4">
                Price : ${eachInventory?.price}
              </p>
              <span className="text-2xl">
            Available:{' '} 
                <span className="font-bold">
                  {newQuantity === 0 ? "Sold Out" : newQuantity}
                </span>
                {newQuantity === 0 ? "" : " Unit "}
              </span>
              <p className="my-2">Supplier : {eachInventory?.supplier}</p>
              <p className="my-2">Product Id : {eachInventory?._id}</p>
              <span>
                <span>Rating : </span>{" "}
                <span className="text-amber-400">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </span>
            </div>
            <form onSubmit={handleUpdateStock}  className="flex items-center">
              <div className="relative my-4">
                <input
                  type="number"
                  name="stock"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Update Stock
                </label>
              </div>
              <button
              
                type="submit"
                className="py-3 px-4 bg-cyan-900 font-semibold uppercase text-white"
              >
                Update
              </button>
            </form>
            <div className="flex flex-col lg:flex-row">
              <button
                onClick={handleDelivered}
                className="text-center text-white bg-cyan-800 py-1 px-10 my-2 lg:my-10 rounded lg:mr-5"
              >
                Delivered
              </button>
              <Link
                className="text-center text-white hover:text-white bg-cyan-800 py-1 px-10 my-2 lg:my-10 rounded"
                to="/manageInventory"
              >
                Manage Inventories
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
        </div>
    );
};

export default EachInventory;