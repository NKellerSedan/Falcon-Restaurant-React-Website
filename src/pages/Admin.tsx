import React from 'react'
import MenuAPIForAdmin from '../components/AdminMenuAPI';
import AdminNavigation from '../pages/AdminNavigation';


type Props = {}

const Admin = (props: Props) => {
  return (
    <div>
       
      < AdminNavigation />
      <MenuAPIForAdmin />
    </div>
  )
}

export default Admin