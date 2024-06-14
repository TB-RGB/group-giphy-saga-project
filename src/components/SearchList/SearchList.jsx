import { useSelector } from "react-redux"
import ImageList from '@mui/material/ImageList';
import SearchItem from "../SearchItem/SearchItem"





import './SearchList.css'
 const SearchList = () => {
const giphyList = useSelector(store => store.searchResults)
console.log('giphyList', giphyList)
    return (
        <>

      
          
        
      
    
<ImageList cols={3}>
        {giphyList.map((giphy) => 
            <SearchItem key={giphy.id} giphy={giphy}/>
        )}
        
        </ImageList>
        </>
    )
    
}

export default SearchList