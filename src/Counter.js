import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Elements/Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-x-4">
        <Button variant="bg-black">Button Tes</Button>
        <Button>Button Tes 2</Button>
      </div>
      <p>Anda telah mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(0)}>Hapus</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Kurang
      </button>
    </div>
  );
}

export default Counter;
