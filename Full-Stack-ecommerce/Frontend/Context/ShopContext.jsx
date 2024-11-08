import React, { createContext } from 'react'
import data_product from '../src/assets/data'

export const ShopContext = createContext(null)

const ShopContextProvider = () => {
    const contextValue = {data_product}
  return (
    <div>
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider