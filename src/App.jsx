import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to KnowBox</h1>
        <p>Your gateway to endless learning opportunities.</p>
      </main>
    </>
  );
}

export default App;
