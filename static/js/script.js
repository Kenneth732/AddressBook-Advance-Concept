class Contact {
    constructor(firstName, lastName, phoneNumber, emailAddress) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._emailAddress = emailAddress;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }
    set emailAddress(value) {
        this._emailAddress = value;
    }
}

class ExtendedContact extends Contact {
    constructor(firstName, lastName, phoneNumber, emailAddress, additionalInfo) {
        super(firstName, lastName, phoneNumber, emailAddress);
        this._additionalInfo = additionalInfo;
    }

    get additionalInfo() {
        return this._additionalInfo;
    }

    set additionalInfo(value) {
        this._additionalInfo = value;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, phoneNumber, emailAddress) {
        const contact = new Contact(firstName, lastName, phoneNumber, emailAddress);
        this.contacts.push(contact);
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
    }

    editContact(index) {
        const contact = this.contacts[index];

        const firstName = prompt('Enter new firstName:', contact.firstName);
        const lastName = prompt('Enter new lastName:', contact.lastName);
        const phoneNumber = prompt('Enter new phoneNumber:', contact.phoneNumber);
        const emailAddress = prompt('Enter new emailAddress:', contact.emailAddress);

        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNumber = phoneNumber;
        contact.emailAddress = emailAddress;
        this.displayContact();
    }

    displayContact() {
        const contactContainer = document.querySelector('#contacts');
        contactContainer.innerHTML = '';

        this.contacts.forEach((contact, index) => {
            const contactElement = document.createElement('div');
            contactElement.innerHTML = `
            <h3>${contact.firstName} ${contact.lastName}</h3>
            <p>Phone Number: ${contact.phoneNumber}</p>
            <p>Email Address: ${contact.emailAddress}</p>
            <button class="delete-button">Delete</button>
            <button class="edit-button">Edit</button>
          `;
            contactContainer.appendChild(contactElement);

            const deleteButton = contactElement.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                this.deleteContact(index);
                this.displayContact();
            });

            const editButton = contactElement.querySelector('.edit-button');
            editButton.addEventListener('click', () => {
                this.editContact(index);
                this.displayContact();
            });
        });
    }
}

const addressBook = new AddressBook();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const phoneNumber = document.querySelector('#phone-number').value;
    const emailAddress = document.querySelector('#email-address').value;

    const contact = new Contact(firstName, lastName, phoneNumber, emailAddress);
    addressBook.addContact(contact);
    addressBook.displayContact();
});

addressBook.displayContact();

























