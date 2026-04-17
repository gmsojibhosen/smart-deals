import Product from "../Product/Product";

const LatesProducts = ({ latestProducts }) => {
  console.log(latestProducts);
  return (
    <div className="text-center max-w-360 mx-auto">
      <h1 className="text-5xl font-bold">
        Recent <span className="text-primary">Products</span>
      </h1>

      <div className=" mt-10 grid grid-cols-1 md:gird-cols-2  lg:grid-cols-3  gap-6">
        {latestProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default LatesProducts;
