import "./App.css";
import Button from "./components/Elements/Button";
// import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const hargaPonsel = [
  { nama: "Xiaomi", harga: 2500000, diskon: 50 },
  { nama: "Samsung", harga: 4300000, diskon: 20 },
];

function Product({ nama, harga, diskon = 0 }) {
  return (
    <>
      <h2>{nama}</h2>
      <h3>{harga}</h3>
      <p>({diskon}%)</p>
    </>
  );
}

function App() {
  return (
    <div className="">
      <header className="">
        {hargaPonsel.map((ponsel, id) => (
          <Product
            key={id}
            nama={ponsel.nama}
            harga={ponsel.harga}
            diskon={ponsel.diskon}
          ></Product>
        ))}
        <Button variant="bg-black">More</Button>
        <RegisterPage />
        {/* <LoginPage /> */}
      </header>
    </div>
  );
}

export default App;
