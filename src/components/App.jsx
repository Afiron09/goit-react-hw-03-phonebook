import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm.jsx";
import { ContactsList } from "./ContactsList/ContactsList.jsx";
import { Filter } from "./Filter/Filter.jsx";

export class App extends Component {
  state = {
    contacts: [],
  };

  handleAddContacts = (userContacts) => {
    if (
      this.state.contacts.some((contact) => contact.name === userContacts.name)
    ) {
      alert(`${userContacts.name} is already in contacts`);
    }
    this.setState({
      contacts: [userContacts, ...this.state.contacts],
    });
  };
  render() {
    return <div>App</div>;
  }
}
