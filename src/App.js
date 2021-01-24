import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact
        image="https://randomuser.me/api/portraits/women/2.jpg"
        name="Layla Bailey"
        status="online"
      online/>
      <Contact
        image="https://randomuser.me/api/portraits/women/14.jpg"
        name="Judy Frazier"
        status='offline'
      />
      <Contact
        image="https://randomuser.me/api/portraits/men/53.jpg"
        name="Clyde Myers"
        status="online"
      online/>

      <ContactList/>
    </div>
  );
}

export default App;
