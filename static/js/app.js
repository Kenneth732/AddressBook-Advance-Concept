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

class PersonalContact extends Contact {
    constructor(firstName, lastName, phoneNumber, emailAddress, dateOfBirth) {
        super(firstName, lastName, phoneNumber, emailAddress);
        this._dateOfBirth = dateOfBirth;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    getAge() {
        const today = new Date();
        const dob = new Date(this._dateOfBirth);
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            return age - 1;
        }
        return age;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, phoneNumber, emailAddress, dateOfBirth) {
        const contact = new PersonalContact(firstName, lastName, phoneNumber, emailAddress, dateOfBirth);
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
        const dateOfBirth = prompt('Enter new dateOfBirth:', contact.dateOfBirth);

        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNumber = phoneNumber;
        contact.emailAddress = emailAddress;
        contact.dateOfBirth = dateOfBirth; // Added this line to update date of birth
        this.displayContact();
    }

    displayContact() {
        const contactContainer = document.querySelector('#contacts');
        contactContainer.innerHTML = '';


    }
}

