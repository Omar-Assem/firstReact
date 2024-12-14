import React from 'react'

const Show = ({per}) => {
  return (
    <div>
      
      <div className="continar py-4">
          <div className="row justify-content-center">
            <div className="col-lg-12">
      <h1 className='text-center text-warning'>you have {per.length} date</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Show
