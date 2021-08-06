import "./App.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import ProductScreen from "./screen/ProductScreen/ProductScreen";
function App() {
  return (
    <>
      <Appbar />
      <ProductScreen />
      <Footer />
    </>
  );
}

export default App;
