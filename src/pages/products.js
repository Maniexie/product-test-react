import { Fragment, useEffect, useRef, useState } from "react";
import CardProducts, {
  formatRupiah,
} from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            ducimus quos voluptate quis eveniet rerum nam quod hic minima
            nesciunt!`,
  },
  {
    id: 2,
    name: "Sepatu Lama Sekali",
    price: 240000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, `,
  },
  {
    id: 3,
    name: "Sepatu Mantap",
    price: 690000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, `,
  },
  {
    id: 4,
    name: "Sepatu Eropa",
    price: 770000,
    image: "/img/shoes-1.jpg",
    description: `Lorem ipsum dolor sit, `,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  // const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // window.location.href = "/login";
    navigate("/login");
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const navigate = useNavigate();

  //useRef

  const cartRef = useRef(null);

  return (
    <>
      <Fragment>
        <div className="flex justify-end h-10 bg-blue-600 text-white items-center py-8 px-10">
          {email}
          <Button variant="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="flex justify-center py-5">
          <div className="flex w-4/6 flex-wrap">
            {products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header
                  image={product.image}
                  name={product.name}
                />
                <CardProducts.Body name={product.name}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProducts>
            ))}
          </div>
          <div className="w-2/6 p-5">
            <h1 className="text-blue-600 text-3xl font-bold mb-4">{""}Cart</h1>
            <table className="w-full text-left table-auto border-separate border-spacing-2">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id} className="border-b">
                      <td className="p-2">{product.name}</td>
                      <td className="p-2">{formatRupiah(product.price)}</td>
                      <td className="p-2">{item.qty}</td>
                      <td className="p-2">
                        {formatRupiah(item.qty * product.price)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-b">
                  <td className="font-bold p-2" colSpan={3}>
                    Total Price
                  </td>
                  <td className="font-bold p-2">{formatRupiah(totalPrice)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    </>
  );
};
export default ProductPage;
