import { useSelector } from "react-redux"
import SearchItem from "../SearchItem/SearchItem"

 const SearchList = () => {
const giphyList = useSelector(store => store.searchResults)
console.log('giphyList', giphyList)
    return (
        <>
        {giphyList.map((giphy) => 
            <SearchItem key={giphy.id} giphy={giphy}/>
        )}
        
        </>
    )
    
}

export default SearchList