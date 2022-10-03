import { useState } from 'react';


// Vishnu's part for Search Engine

type SearchProps = {
  filterMenu:(name: string) => void
}

const SearchForOrders = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    props.filterMenu(e.target.value);
  };
  return (
    <div className='center col mb-2 '>
      <input 
      className='col-3'
        type='text'
        placeholder='Search for customer name'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchForOrders;
