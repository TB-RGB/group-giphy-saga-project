import { useDispatch } from "react-redux"
import { useState } from "react"
import { Button } from "@mui/material"


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
        setSearchText('')

    }
    return (
        <>
       <form onSubmit={submitSearch}>
        <input
        type='text'
        name='search'
        value={searchText}
        onChange={handleChange}></input>
        <Button type="submit">Search</Button>
       </form>
        </>
    )
    
    }
    
    export default SearchForm