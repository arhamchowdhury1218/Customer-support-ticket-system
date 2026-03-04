import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import { useState } from "react";

const fetchCustomerTickets = async () => {
  const response = await fetch("/customer_tickets.json");
  const responseJson = response.json();
  return responseJson;
};

const loadCustomertickets = fetchCustomerTickets();

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);

  const handleInProgressCount = (count) => {
    console.log("handleInProgressCount", count);
    setInProgressCount(count);
  };

  return (
    <div className="max-w-full md:w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner inProgressCount={inProgressCount}></Banner>
      <CustomerTickets
        loadCustomertickets={loadCustomertickets}
        handleInProgressCount={handleInProgressCount}
      ></CustomerTickets>
    </div>
  );
}

export default App;
