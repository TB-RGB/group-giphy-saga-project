import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const SearchItem = ({ giphy }) => {
    const dispatch = useDispatch();

    const addFavorite = () => {
        dispatch({ type: 'SEND_FAVORITE', payload: { url: giphy.images.original.url } });
    };

    return (
        <div className="search-item">
            <ImageList>
            <ImageListItem className="image-container" sx={{ width: "100%", height: "100%" }}>
            <img 
                        srcSet={`${giphy.images.original.url}?fit=fill&auto=format&dpr=2 2x`}
                        src={`${giphy.images.original.url}?fit=fill&auto=format alt="" className="image" `}
                        className="image"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <ImageListItemBar
                        actionIcon={
                            <IconButton sx={{ color: 'rgba(255, 255, 255)' }}>
                                <InfoIcon onClick={addFavorite} />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            </ImageList>

        </div>
    );
};

export default SearchItem;
