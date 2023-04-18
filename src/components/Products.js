import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products() {
	const [product, setProduct] = useState([{}])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res)=> res.json())
    .then((data)=> {
      setProduct(data)
    
    })
  })

	return (
		<div className='w-10/12 mx-auto'>
			<h1 className='text-center text-[25px] my-5 '>
				{" "}
				<span className='text-green-700 font-bold'>Cheat setha</span> From
				DevOps class
			</h1>

			<div className='flex flex-wrap gap-3 justify-center'>
				{product.map((p, index) => (
					<ProductCard
            
						product={p}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
