import React from 'react'

const Buttoms = ({DEL,SHOW}) => {
  return (
    <div>
      
    <div className="row justify-content-center">
      <div className="col-lg-8 d-flex justify-content-between">
<button className='btn btn-danger p-2' onClick={DEL}> Delete All</button>
<button className='btn btn-info p-2' onClick={SHOW}>Show All</button>
      </div>
    </div>
    </div>
  )
}

export default Buttoms
