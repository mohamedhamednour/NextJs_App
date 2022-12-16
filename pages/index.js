import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/index";

export default function Home({ products }) {
  const count = useSelector((state) => state.counter.value);
     const [product , setproduct] = useState(products)
  const dispatch = useDispatch();
  useEffect(()=>{


  },[dispatch])

  return (
    <div>
      <div className="container-fluid">
        <div className="row gap-2">

          {product
            ? product.map( ( item ,idx) => [
                <div
                key={idx}
                  className="col-12 col-md-3 m-auto card p-2 gap-2  "
                >
                  <p>{item.name}</p>
                  <img class="w-[150px] h-[150px] m-auto" src={item.image} />
                  <br />
                  <h3 align="center"> price : {item.price}</h3>

                  <br />

                  <div align="center" className="div">
                    {" "}
                    <Link
                      className="btn btn-primary"
                      href={`/product/${item.id}`}
                    >
                      Detils
                    </Link>{" "}
                    <button
                      onClick={()=> dispatch(increment((item)))}
                      className="btn btn-dark"
                    >
                      add card
                    </button>
                  </div>
                </div>,
              ])
            : "laoding..."}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
