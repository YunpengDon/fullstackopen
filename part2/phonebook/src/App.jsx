import { useState } from 'react'

const Filter = (props) => {
  return(
    <div>
        filter shown with <input value={props.value} onChange={props.onChange}/>
    </div>
  )
}

const PersonFormLable = (props) => {
  return(
    <div>
          {props.lable}: <input value={props.value} onChange={props.onChange}/>
    </div>
  )
}


const PersonForm = (props) => {
  return(
    <form>
        {props.items.map(item=>
        <PersonFormLable key={item.lable} lable={item.lable} value={item.value} onChange={item.onChange}/>)}
        <div>
          <button type='submit' onClick={props.buttonClick} >add</button>
        </div>
      </form>
  )
}

const Persons = ({persons, filterWith}) => {
  return(
    <div>
        {persons.map(person => {
          if (person.name.toLowerCase().includes(filterWith)){
            return <p key={person.name}>{person.name} {person.number}</p>
          }
        })}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterWith, setFilterWith] = useState('')
  
  const addName = (event) => {
    event.preventDefault()

    let newNameObject = {
      name: newName,
      number: newNumber,
    }

    // Prevent the user from being able to add names that already exist in the phonebook.
    for (const person of persons) {
      if (person.name === newNameObject.name) {
        alert(`${newName} is already added to phonebook`)
        return 0
      }
    }

    setPersons(persons.concat(newNameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterWith(event.target.value)
  }
  
  const formItems = [
    {lable: 'name', value: newName, onChange: handleNameChange},
    {lable: 'number', value: newNumber, onChange: handleNumberChange}
  ]

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterWith} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm items={formItems} buttonClick={addName}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterWith={filterWith}/>
    </div>
  )
}

export default App