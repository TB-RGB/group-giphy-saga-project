import { useDispatch } from "react-redux"
import { useState } from "react"


const SearchForm = () => {
const [searchText, setSearchText] = useState('')
const dispatch = useDispatch()

const handleChange = (event) => {

    setSearchText(event.target.value)
}

    const submitSearch = (event) => {
        event.preventDefault()
        console.log("In submitSearch")
dispatch({type: 'FETCH_SEARCH', payload: searchText})

    }
    return (
        <>
       <form onSubmit={submitSearch}>
        <input
        type='text'
        name='search'
        value={searchText}
        onChange={handleChange}></input>
        <button type="submit">Search</button>
       </form>
        </>
    )
    
    }
    
    export default SearchForm