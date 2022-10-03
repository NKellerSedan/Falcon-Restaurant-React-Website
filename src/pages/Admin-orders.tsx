import React from 'react'
import MenuAPIForAdmin from '../components/AdminMenuAPI';
import AdminOrdersAPI from '../components/AdminOrdersAPI';
import AdminNavigation from './AdminNavigation';


type Props = {}

const AdminOrders = (props: Props) => {
  return (
    <div>
       
      < AdminNavigation />
      {/* <MenuAPIForAdmin /> */}
      <AdminOrdersAPI />

    </div>
  )
}

export default AdminOrders