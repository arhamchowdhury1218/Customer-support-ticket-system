import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";

const fetchCustomerTickets = async () => {
  const response = await fetch("/customer_tickets.json");
  const responseJson = response.json();
  return responseJson;
};

const loadCustomertickets = fetchCustomerTickets();

function App() {
  return (
    <div className="max-w-full md:w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomerTickets
        loadCustomertickets={loadCustomertickets}
      ></CustomerTickets>
    </div>
  );
}

export default App;
