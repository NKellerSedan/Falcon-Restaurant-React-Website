import { createContext } from 'react';


export type foodForFormType = {
    formData:{ 
    _id: string,
    food_id: string,
    food_name: string,
    price: string,
    description: string,
    category: string,
    active: string,
    image: string,
    quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
    //UpdateMenuItem: (selectedFoodId: String) => void;
    }
    setMyData: (data: foodType) => void;
   
  };

  type foodType = {
    _id: string,
    food_id: string,
    food_name: string,
    price: string,
    description: string,
    category: string,
    active: string,
    image: string,
    quantity: number
  }

// export type FormContextType = {

//     setData:(data: foodForFormType) => void
// }

const food = {
    formData:{ 
    _id: '',
    food_id: '',
    food_name: '',
    price: '',
    description: '',
    category: '',
    active: '',
    image: '',
    quantity: 0
    },
    setMyData: () => null
  };


const FormContext = createContext<foodForFormType>(food )

export default FormContext