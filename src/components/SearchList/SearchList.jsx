import { useSelector } from "react-redux"
import SearchItem from "../SearchItem/SearchItem"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';




import './SearchList.css'
 const SearchList = () => {
const giphyList = useSelector(store => store.searchResults)
console.log('giphyList', giphyList)
    return (
        <>

      
          
        
      
    
        <div className="search-list-container">
        {giphyList.map((giphy) => 
            <SearchItem key={giphy.id} giphy={giphy}/>
        )}
        </div>
        </>
    )
    
}

export default SearchList