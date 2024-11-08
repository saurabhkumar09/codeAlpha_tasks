import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/p1.png'
import Img2 from '../../assets/p2.png'
import Img3 from '../../assets/p3.png'
import Img4 from '../../assets/p4.png'
import Img5 from '../../assets/p10.png'
import Img6 from '../../assets/p6.png'
import Img7 from '../../assets/p9.png'
import Img8 from '../../assets/p8.png'

const ProductData =[
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"0"
    },
    {
        id:6,
        img:Img6,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
    {
        id:7,
        img:Img7,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:8,
        img:Img8,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]
const Products = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <Heading title="Our Products" subtitle={"Explore Our Products"}/>
            {/* Body section */}
            <ProductCard data={ProductData}/>
        </div>
    </div>
  )
}

export default Products