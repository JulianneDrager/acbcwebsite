import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen from "./Components/Screen/Screen";
import ThankyouGeneral from "Components/Thank You/Thankyou";
import ContactSponsor from "Components/Contact/ContactSponsor";
import ContactSubscribe from "Components/Contact/ContactSubscribe";
import { ContactContextProvider } from "Components/Context/ContactContext";
import PaymentForm from "Components/Sqare/PaymentForm";
import Admin from "Components/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <ContactContextProvider>
        {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
        <Routes>
          <Route exact path="tmp/bootcamp" element={<Screen />} />
          <Route exact path="/sponsor" element={<ContactSponsor />} />
          <Route exact path="/subscribe" element={<ContactSubscribe />} />
          <Route exact path="tmp/payment" element={<PaymentForm />} />

          <Route exact path="/admin" element={<Admin />} />

          <Route
            exact
            path="tmp/thankyou/:name"
            element={<ThankyouGeneral />}
          />
        </Routes>
      </ContactContextProvider>
    </BrowserRouter>
  );
}

export default App;
