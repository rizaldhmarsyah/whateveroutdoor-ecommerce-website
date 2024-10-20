import ProductCart from "../components/ProductCart";
import { backpack } from "../data/index";

const BackpackPage = () => {
  return (
    <div>
      <div className="py-32 px-4">
        <h1 className="text-3xl font-bold text-center pb-4">
          Whatever. Backpack
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
          {backpack.map((product, key) => (
            <ProductCart key={key} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackpackPage;
