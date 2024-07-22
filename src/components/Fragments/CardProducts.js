import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-500 rounded-lg shadow mx-2 my-2   flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, name } = props;
  return (
    <Link to="#">
      <img src={image} alt={name} className="p-8 rounded-t-lg" />
    </Link>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-m text-white">{children}</p>
      </Link>
    </div>
  );
};

export const formatRupiah = (number) => {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};
const Footer = (props) => {
  const { price, id, handleAddToCart } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {formatRupiah(price)}{" "}
      </span>
      <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
