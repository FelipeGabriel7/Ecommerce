import { CartProvider } from "./context/CartContext";
import { PublicRoutes } from "./routes/routes.routes";


function App() {
  return (
    <>
      <CartProvider>
        <PublicRoutes />
      </CartProvider>
    </>
  );
}

export default App;
