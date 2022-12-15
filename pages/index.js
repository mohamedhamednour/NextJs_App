import Link from "next/link"


export default function Home({products}) {


  return (
    <div>


    
<div className="container-fluid">
      <div className="row gap-2">
        
      

       
          
            {products
              ? products.map((item) => [
                  <div key={item.id}  className="col-12 col-md-3 m-auto card p-2 gap-2  ">
                    <p>{item.name}</p>
                    <img  class="w-[150px] h-[150px] m-auto"  src={item.image} /><br />
                    <h3 align='center'> price : {item.price}</h3>

                
                      <br />

                  
                    <div align='center' className="div"> <Link className="btn btn-primary" href={`/product/${item.id}`}>Detils</Link> <button className="btn btn-dark">add card</button></div>

                   
 
                  </div>,
                  
                ])
              : ""}


          </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

 
  return {
    props: {
      products,
    },
  }
}