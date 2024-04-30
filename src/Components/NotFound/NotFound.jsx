import React from 'react'
import Error from '../../images/Error.jpg'
export default function NotFound() {
  return <>
    <div className='container text-center'>
        <img src={Error} alt="" width={500} />
    </div>
  </>
}
