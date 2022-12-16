import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function singelProduct({ product }) {
  return (
    <div>
      <div className="container-fluid text-blue-500">
        <div className="row">
          <div align="center" className="col-12 justify-content-center ">
            <span className="text-green-500 text-[26px]">{product.title}</span>
          </div>
          <div className="col-12  mt-[30px] col-md-4">
            <span className="text-[20px] ">{product.description.slice(0,300)}...</span>
          </div>
          <div className="h-[100%] col-12 col-md-4 mt-[30px] text-center">
            <span className="mt-[30px] text-[20px] ">price :${product.price}</span>
          </div>

          <div className="col-12 col-md-4">
            {" "}
            <img className="w-[300px] h-[300px]" src={product.image} alt="" />
          </div>
        </div>



        <div className="col-12 text-center">


<h3 className="mb-[30px] text-[25px]">payment
</h3>
<PayPalScriptProvider options={{ "client-id": "ARey6Qq_Qyw2-WUmM8eiHEQutpkqZqFo6_54Q8ya85YDQH5WahFQoCmnVGmLkZr9DqfxZlHjyRjDtOr-" }}>
  <PayPalButtons

createOrder={(data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: product.price,
                },
            },
        ],
    });
}}
onApprove={(data, actions) => {
    return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
    });
}}

  />
</PayPalScriptProvider>

</div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const products = await res.json();
  const paths = products.map((idx) => {
    return {
      params: {
        id: idx.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
