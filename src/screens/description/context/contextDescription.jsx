import React from 'react'
import ProductsContext from '../../../context/contextProducts/ProductsContext'
import Description from '../Description'

function ContextDescription() {
  return (
    <div>
        <ProductsContext>
            <Description />
        </ProductsContext>
    </div>
  )
}

export default ContextDescription