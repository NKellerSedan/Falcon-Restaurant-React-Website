import React, { Component, useContext, useState } from 'react'
import axios from 'axios';
import FormContext from '../context/AdminFormContext';

type MenuType = {
  food: {
    _id: string,
    food_id: string,
    food_name: string,
    price: string,
    description: string,
    category: string,
    active: string,
    image: string,
    quantity: number
    // onQuantityChange: (id: String, data: number) => void;
    // UpdateMenuItem: (selectedFoodId: String) => void;
  };
};

type updateDeleteType = {

  updateFood: (id: string) => void;
  createFood: (id: string) => void;
}


const MenuFormForAdmin = ({ updateFood, createFood }: updateDeleteType) => {
  const fr = useContext(FormContext)


  const [formData2, setFormData] = useState({
    food_id: `${fr.formData.food_id}`,
    food_name: `${fr.formData.food_id}`,
    price: `${fr.formData.food_id}`,
    description: `${fr.formData.food_id}`,
    category: `${fr.formData.food_id}`,
    image: `${fr.formData.food_id}`
  });

  const { food_id, food_name, price, description, category, image } = formData2;


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    // setFormData({ ...formData2, [e.target.name]: e.target.value });

    fr.setMyData({ ...fr.formData, [e.target.name]: e.target.value });

  const onChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    // setFormData({ ...formData2, [e.target.name]: e.target.value });
    fr.setMyData({ ...fr.formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if(formData2.food_id ==='' ){ 
    // setFormData(fr.formData)
    // console.log("empty")
    // }
    console.log(fr.formData)


    // if (formValid) {


    //   let config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };

    //   let data = {
    //     food_id: food_id,
    //     food_name: food_name,
    //     price: price,

    //     description: description,
    //     category: category,
    //     image: image
    //   };
    //   try {
    //     const response = await axios.put(
    //       `https://shielded-depths-40144.herokuapp.com/foods/${food.food_id}`,
    //       data,
    //       config
    //     );

    //   } catch (e: any) {
    //     console.log('error ', e.message);
    //   }
    // }
  };



  return (
    <div>

      <div className="container mt-5 mb-5  "  >
        <div className="modal-lg  mx-auto    " >
          <div className="modal-md-dialog  ">
            <div className="modal-content rounded-5 shadow text-center bg-light bg-opacity-25">
              <div className="modal-header  ">
                <h2 className="mx-auto my-auto mt-2 mb-2 display-5 ">Update or Create Food</h2>
              </div>
              <div className="modal-body  ">
                <form className="row justify-content-center " onSubmit={(e) => onSubmit(e)} noValidate>
                  <div className="col-9 row">
                    <div className="form-floating mb-3 col-6">
                      <input type="text" className="form-control rounded-4" placeholder='Food ID'
                        name='food_id'
                        required
                        defaultValue={`${fr.formData.food_id}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="id">Food ID</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                      <input type="text" className="form-control rounded-4" placeholder='Food Name'
                        name='food_name'
                        required
                        defaultValue={`${fr.formData.food_name}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="name">Food Name</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                      <input type="text" className="form-control rounded-4" placeholder='Price'
                        name='price'
                        defaultValue={`${fr.formData.price}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="price">Price</label>
                    </div>
              

                    <div className="form-floating mb-3 col-6">
                      <input type="text" className="form-control rounded-4" placeholder='Category'
                        name='category'
                        defaultValue={`${fr.formData.category}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="category">Category</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Image'
                        name='image'
                        defaultValue={`${fr.formData.image}`}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="image">Image</label>
                    </div>
                    <div className="form-floating mb-3 " >
                      <textarea className="form-control rounded-4" placeholder='Description'
                        style={{ height: '100px' }}
                        name='description'

                        defaultValue={`${fr.formData.description}`}
                        onChange={(e) => onChange2(e)} />
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="col-6 mx-auto">
                      {/* <button className="w-100 mb-2 p-3 btn btn rounded-4 btn-warning rounded-pill" onClick={() => updateFood(`${fr.formData.food_id}`)} type="submit">Update
                      </button> */}
                      <button className="w-100 mb-2 p-3 btn btn rounded-4 btn-warning rounded-pill" onClick={() =>{  (window.confirm('Are you sure you wish to update this food?')) ? updateFood(`${fr.formData.food_id}`) : console.log("process cancel") }} type="submit">Update
                      </button>
                    </div>
                    <div className="col-6 mx-auto">
                      {/* <button className="w-100 mb-2 p-3 btn btn rounded-4 btn-success rounded-pill" onClick={() => createFood(`${fr.formData.food_id}`)} type="button">Create
                      </button> */}
                      <button className="w-100 mb-2 p-3 btn btn rounded-4 btn-success rounded-pill" onClick={() => {  (window.confirm('Are you sure you wish to create a new food?')) ?createFood(`${fr.formData.food_id}`) : console.log("process cancel") }} type="button">Create
                      </button>
                    </div>
                    <div className="w-100"></div>


                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MenuFormForAdmin;