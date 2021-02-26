const ContactForm = (props) => {
    const inputValueName = React.useRef('input name')
    const inputValueNumber = React.useRef('input number')
    const [contactList, setContactList] = React.useState([])
    const addContact = () => {
        let newArr = contactList;
        let obj = {
            name: inputValueName.current.value,
            number: inputValueNumber.current.value
        }        
        newArr.push(obj);
        setContactList(newArr);
        props.setContactName([...props.contactName, inputValueName.current.value]);
        props.setContactNumber([...props.contactNumber, inputValueNumber.current.value]);
        inputValueName.current.value = ''
        inputValueNumber.current.value = ''
        console.dir(newArr);
    }
    return (
        <div>
            <input ref={inputValueName} type="text" className="input-name"/>
            <input ref={inputValueNumber} type="tel" className="input-number"/>
            <button onClick={addContact}>Add</button>            
        </div>
    )
}

const ContactList = (props) => {
    return (
        <div>
            <div>{props.contactName}</div>
            <div>{props.contactNumber}</div>
        </div>
    )
}

const ContactContainer = () => {
    const [contactName, setContactName] = React.useState('')
    const [contactNumber, setContactNumber] =React.useState('')
    return <section>
        <ContactForm contactName={contactName} setContactName={setContactName} contactNumber={contactNumber} setContactNumber={setContactNumber} />
        <ContactList contactName={contactName} contactNumber={contactNumber}/>
    </section>        
    
}

ReactDOM.render(<ContactContainer />, document.getElementById('root'))