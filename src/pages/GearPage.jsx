import GearCart from "../components/GearCart";
import { gear } from "../data";

const GearPage = () => {
  return (
    <div>
      <div className="py-32 px-4">
        <h1 className="text-3xl font-bold text-center pb-4">Whatever. Gear</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
          {gear.map((product, key) => (
            <GearCart key={key} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearPage;
