import React from "react";
import {uuid} from "uuidv4"
import './App.css';
import Header from "./Header";
import { useState , useEffect} from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts]=useState([]);
  const addContactHandler =(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(), ...contacts }])
  };

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>contact.id !== id);
    setContacts(newContactList)
  }


  useEffect(()=>{
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)))
    if(retriveContacts) setContacts(retriveContacts)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])


  return (
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
