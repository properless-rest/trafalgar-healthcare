
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import Services from "./components/subcomponents/services/Services.jsx";
import Providers from "./components/subcomponents/providers/Providers.jsx";
import Download from "./components/subcomponents/download/Download.jsx";
import Customers from "./components/subcomponents/customers/Customers.jsx";
import Articles from "./components/subcomponents/articles/Articles.jsx";

import './App.css'

function App() {
  return (
    <>
      <div className="except-footer">
        <Navbar />
        <Hero />
        <Main>
            <Services />
            <Providers />
            <Download />
            <Customers />
            <Articles />
        </Main>
      </div>
      <Footer />
    </>
  );
}

export default App
