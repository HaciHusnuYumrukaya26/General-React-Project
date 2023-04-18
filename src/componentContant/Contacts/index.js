import React, { useState, useEffect } from "react";
import ContactForm from "./Form";
import ContactList from "./List";
import "./style.css";
const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Haci",
      phone_number: "111111",
    },
    {
      fullname: "Haci2",
      phone_number: "2221122",
    },
    {
      fullname: "Haci3",
      phone_number: "332211",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <ContactList contacts={contacts} />
      <ContactForm addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
