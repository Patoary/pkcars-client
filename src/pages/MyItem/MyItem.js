import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyItemCard from './MyItemCard';
import { toast } from 'react-toastify';
import { faX } from '@fortawesome/free-solid-svg-icons';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyItem = async() => {
            const email = user?.email;
            const url = `http://locahost:4000/myitem?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                 }
                
                });
                setMyItems(data);
            }
            catch (error){
                console.log(error);
            }
            // catch (error) {
            //     console.log(error);
            //     if (error.response.status === 401 || 403) {
            //         signOut(auth);
            //         navigate('/login')
            //     }
            // }

        }
        getMyItem();
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete this item ?')
        if(proceed){
              const url = `http://localhost:4000/inventory/${id}`;
        fetch(url, {
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            const remaining = myItems.filter(product => product._id !== id);
            setMyItems(remaining);
            toast('Item Deleted Successfully')
        })

        }
      
    }

    return (
       
    <>
    <div className="py-14 flex flex-col justify-center min-h-[80vh]">
      {myItems.length === 0 ? (
        <div className="text-5xl text-center font-extrabold uppercase text-gray-600">
          <FontAwesomeIcon className="text-red-600" icon={faX} /> You Did't
          Added Any Items{" "}
          <FontAwesomeIcon className="text-red-600" icon={faX} />
        </div>
      ) : (
        <>
          <h1 className="text-center">Products That You've Added</h1>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 lg:px-28 pt-5">
            {myItems.map((item) => (
              <MyItemCard
                key={item._id}
                item={item}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-center ">
            <Link
              className="bg-cyan-800 hover:bg-cyan-800 py-1 w-1/2 lg:w-1/6 mx-2 my-3 text-center rounded-full font-semibold text-gray-500"
              to="/manageInventories"
            >
              Manage Inventories
            </Link>
          </div>
        </>
      )}
    </div>
  </>
    );
};

export default MyItem;