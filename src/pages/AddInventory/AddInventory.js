import React from 'react';
import axios from 'axios';
import { useForm} from "react-hook-form";
import { Zoom } from 'react-reveal';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit= (data) =>{
    axios.post('http://localhost:4000/addInventory',data)
    .then(res => {
        if(res){
            toast('Inventory Product Added');
            reset();
        }
    })
    }
    return (
<Zoom left>
      <div className="px-4">
        <form
          className="flex flex-col mx-auto justify-center lg:w-1/2 w-full lg:p-24 p-5 my-8 rounded-2xl shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full mt-2 mb-6">
            <p className="w-3/5 mx-auto fs-1 font-bold" style={{color:'#116466'}}> PKCARS </p>
          </div>
          <h2 className="text-center text-2xl font-bold text-cyan-800 uppercase mb-4">
            Please Add Your Item
          </h2>

          <label>Enter Your Email</label>
          <input
            type="email"
            value={user?.email}
            className="border py-2 px-5 mb-4 rounded-lg"
            {...register("email", { required: true })}
          />

          <label>Product Name</label>
          <input
            className="border py-2 px-5 mb-4 rounded-lg"
            {...register("name", { required: true })}
          />

          <label>Description</label>
          <textarea
            className="border py-2 px-5 mb-4 rounded-lg"
            {...register("description", { required: true })}
          />

          <label>Supplier Name</label>
          <input
            className="border py-2 px-5 mb-4 rounded-lg"
            {...register("supplier", { required: true })}
          />

          <label>Price</label>
          <input
            className="border py-2 px-5 mb-4 rounded-lg"
            type="number"
            {...register("price", { required: true })}
          />

          <label>Quantity</label>
          <input
            className="border py-2 px-5 mb-4 rounded-lg"
            type="number"
            {...register("quantity", { required: true })}
          />

          <label>Photo URL</label>
          <input
            className="border py-2 px-5 mb-4 rounded-lg"
            {...register("image", { required: true })}
          />

          <div className="flex justify-center">
            <input
              className="border py-2 lg:px-14 px-6 mb-4 mr-2 rounded-lg cursor-pointer text-white bg-cyan-800"
              type="submit"
            />
            <input
              onClick={() => {
                reset();
              }}
              className="border py-2 lg:px-14 px-6 mb-4 ml-2 rounded-lg cursor-pointer text-white bg-cyan-800"
              type="reset"
            />
          </div>
        </form>
      </div>
    </Zoom>

    );
};

export default AddInventory;