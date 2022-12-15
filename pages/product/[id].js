export default function singelProduct({ product }) {
  return (
    <div>
      <div className="container-fluid text-blue-500">
        <div className="row">
          <div align="center" className="col-12 justify-content-center ">
            <span>{product.title}</span>
          </div>
          <div className="col-12  col-md-4">
            <span className=" mt-[60px]">{product.description}</span>
          </div>
          <div className="h-[100%] col-12 col-md-4">
            <span className="mt-[30px]">price :{product.price}</span>
          </div>

          <div className="col-12 col-md-4">
            {" "}
            <img className="w-[300px]" src={product.image} alt="" />
          </div>
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
