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
}
