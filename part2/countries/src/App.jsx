import { useState , useEffect} from 'react'
import axios from 'axios'

const CountryList = ({countries}) => {
  if (countries===null) {
    return null
  }

  if (countries.length > 10) {
    return(<p>Too many matches, specify another filter</p>)
  }

  return(countries.map(country => <p key={country}>{country}</p>))
}

const App = () => {
  const [countryList, setCountryList] = useState(null)
  const [countries, setCountries] = useState(null)
  const [searchText, setSearchText] = useState('')

  const allURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  useEffect(()=>{
    axios.get(allURL).then(response=>{
      console.log(response)
      setCountryList(response.data)
      console.log(countryList)
    }
    )
  },[])

  const searchCountries = (event) => {
    const newText = event.target.value
    setSearchText(newText)
    if (newText.length === 0) {
      setCountries(null)
      return null
    }
    const searchResults = []
    for (const country of countryList) {
      if (country.name.common.toLowerCase().includes(newText)){
        searchResults.push(country.name.common)
      }
    }
    if (searchResults.length === 0) {
      setCountries(null)
    }
    if (searchResults.length > 0) {
      setCountries(searchResults)
    }
  }

  return(
    <>
    <div>
      find countries <input value={searchText} onChange={searchCountries}/>
    </div>
    <div>
      <CountryList countries={countries}/>
    </div>
    </>
  )
}
export default App