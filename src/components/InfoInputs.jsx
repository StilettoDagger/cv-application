export function NameInput({ onChange, personalInputs }) {
    return (
        <div id="name-input">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" id="firstName" value={personalInputs.firstName.value} onChange={onChange} />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" id="lastName" value={personalInputs.lastName.value} onChange={onChange} />
        </div>
    )
}

export function EmailInput({ onChange, personalInputs }) {
    return (
        <div id="email-input">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" value={personalInputs.email.value} onChange={onChange} />
        </div>
    )
}

export function NationalityInput({ onChange, personalInputs }) {
    return (
        <div id="nationality-input">
            <label htmlFor="nationality">Nationality: </label>
            <input type="text" name="nationality" id="nationality" value={personalInputs.nationality.value} onChange={onChange} />
        </div>
    )
}

export function PhoneInput({ onChange, personalInputs }) {
    return (
        <div id="phone-input">
            <label htmlFor="phone">Phone: </label>
            <input type="tel" name="phone" id="phone" value={personalInputs.phone.value} onChange={onChange} />
        </div>
    )
}