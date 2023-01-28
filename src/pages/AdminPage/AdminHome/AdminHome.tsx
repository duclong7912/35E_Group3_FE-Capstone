import React from 'react';
import admin from '../../../assets/img/admin.gif';

type Props = {}

const AdminHome = (props: Props) => {
  return (
    <div className='admin-home'>
        <img src={admin} alt="home" className='w-100 h-100'/>
    </div>
  )
}

export default AdminHome