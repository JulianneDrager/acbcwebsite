import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen from "./Components/Screen/Screen";
import ThankyouGeneral from "Components/Thank You/Thankyou";
import ContactSponsor from "Components/Contact/ContactSponsor";
import ContactSubscribe from "Components/Contact/ContactSubscribe";
import { ContactContextProvider } from "Components/Context/ContactContext";
import PaymentForm from "Components/Sqare/PaymentForm";
import Admin from "Components/Admin/AdminMain";
import Services from "Components/Terms/Services";
import Privacy from "Components/Terms/Privacy";
import RegisterForm from "Components/Contact/RegisterForm";
import Login from "Components/Admin/Login";
import ThankyouTexas from "Components/Thank You/ThankyouTexas";
import CreateUser from "Components/Admin/CreateUser";
import Agendas from "Components/Events/Agendas";
import Success from "Components/Admin/Success";

function App() {
  return (
    <BrowserRouter>
      <ContactContextProvider>
        {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
        <Routes>
          <Route exact path="/create-user" element={<CreateUser />} />
          <Route exact path="" element={<Screen />} />
          <Route exact path="/sponsor" element={<ContactSponsor />} />
          <Route exact path="/subscribe" element={<ContactSubscribe />} />
          <Route
            exact
            path="/event-details/grand-rapids-michigan-round-up-2024"
            element={<RegisterForm />}
          />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/payment" element={<PaymentForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/agendas" element={<Agendas />} />
          <Route
            exact
            path="/thankyou/:firstName"
            element={<ThankyouGeneral />}
          />
          <Route
            exact
            path="/thankyou-texas/:firstName"
            element={<ThankyouTexas />}
          />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </ContactContextProvider>
    </BrowserRouter>
  );
}

export default App;
