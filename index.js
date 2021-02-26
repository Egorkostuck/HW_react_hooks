const ContactForm = (props) => {
    const inputValueName = React.useRef('Add name');
    const inputValueNumber = React.useRef('Add number');
    const addContact = () => {
        props.setContactName([...props.contactName, inputValueName.current.value]);
        props.setContactNumber([...props.contactNumber, inputValueNumber.current.value]);
        inputValueName.current.value = '';
        inputValueNumber.current.value = '';
    };
    return (
        <div>
            <input ref={inputValueName} className="input-name" />
            <input ref={inputValueNumber} type="number" className="input-number" />
            <button onClick={addContact}> Add </button>
        </div>
    )
}

const ContactList = (props) => {
    return(
        <div>
            <div>{props.contactName}</div>
            <div>{props.contactNumber}</div>
        </div>
    )
}

const ContactContainer = () => {
    const [contactName, setContactName] = React.useState([]);
    const [contactNumber, setContactNumber] = React.useState([]);    
    
    return <section>
        <ContactForm contactName={contactName} setContactName={setContactName} contactNumber={contactNumber} setContactNumber={setContactNumber} />
        <ContactList contactName={contactName} contactNumber={contactNumber} />
    </section>
}

ReactDOM.render(<ContactContainer />, document.getElementById('root'));