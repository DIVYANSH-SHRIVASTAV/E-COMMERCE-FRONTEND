import React, { useContext } from 'react';
import { useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
const Address = () => {
  const {shippingAddress,userAddress} = useContext(AppContext);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: ""
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]:value});
  }
  const {fullName,address,city,state,country,pincode,phoneNumber} = formData;
  const submitHandler = async(e) => {
    e.preventDefault();
    // alert("Your form has been submited");
   const result= await shippingAddress(fullName,address,city,state,country,pincode,phoneNumber);
    // console.log(formData);
    if(result.success) navigate('/checkout');
    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: ""
    })
  }
  return (
    <>
      <div className="container my-3 p-4" style={{ border: '2px solid yellow', borderRadius: '10px' }}>
        <h1 className='text-center'>Shipping Address</h1>
        <form className='my-3' onSubmit={submitHandler}>
             <div className="row">
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
            <input type="text" className="form-control bg-dark text-light"
              onChange={onChangeHandler} name='fullName' value={formData.fullName} id="exampleInputName1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
            <input type="text" className="form-control bg-dark text-light" onChange={onChangeHandler} name='country' value={formData.country} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputPassword1" className="form-label">State</label>
            <input type="text" className="form-control bg-dark text-light" onChange={onChangeHandler} name='state' value={formData.state} id="exampleInputPassword1" />
        </div>
             </div>
             <div className="row">
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
            <input type="text" className="form-control bg-dark text-light"
              onChange={onChangeHandler} name='city' value={formData.city} id="exampleInputName1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Pincode</label>
            <input type="number" className="form-control bg-dark text-light" onChange={onChangeHandler} name='pincode' value={formData.pincode} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
            <input type="number" className="form-control bg-dark text-light" onChange={onChangeHandler} name='phoneNumber' value={formData.phoneNumber} id="exampleInputPassword1" />
          </div>
             </div>
             <div className="row">
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Address/Nearby</label>
                  <textarea type="text" className="form-control bg-dark text-light" onChange={onChangeHandler} name='address' value={formData.address} id="exampleInputPassword1" />
                </div>
             </div>

             <div className='d-grid col-6 mx-auto my-3'>
               <button type="submit" className="btn btn-primary" style={{fontWeight:"bold"}}>Submit</button>
             </div>
        </form>

        {userAddress && (
          <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-warning" style={{fontWeight:"bold"}} onClick={()=>navigate('/checkout') }>Use Old Address</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Address;
