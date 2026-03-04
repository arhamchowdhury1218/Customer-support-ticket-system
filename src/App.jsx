import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchCustomerTickets = async () => {
  const response = await fetch("/customer_tickets.json");
  const responseJson = response.json();
  return responseJson;
};

const loadCustomertickets = fetchCustomerTickets();

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolveCount, setResolveCountCount] = useState(0);

  const handleInProgressCount = (count) => {
    setInProgressCount(count);
  };

  const handleResolveCount = (count) => {
    setResolveCountCount(count);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgressCount}
        handleResolveCount={handleResolveCount}
        resolveCount={resolveCount}
      ></Banner>
      <CustomerTickets
        loadCustomertickets={loadCustomertickets}
        handleInProgressCount={handleInProgressCount}
        handleResolveCount={handleResolveCount}
      ></CustomerTickets>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
