// import { appcontext } from "./context/AppContextProvider";
// simport { useContext } from "react";
import Navbar from "./coms/Navbar";
import Content from "./coms/Content";
import Footer from './coms/Footer'
import "./App.css"
export default function App() {
  // const value = useContext(appcontext)
  return <div >
    {/* onClick={() => value.fetchcontent() */}
    <Navbar />
    <Content />
    <Footer />
  </div>;
}
