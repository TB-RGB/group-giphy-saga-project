import { useDispatch } from "react-redux"

const SearchItem =({ giphy })=>{
    const dispatch = useDispatch()

    const addFavorite = ()=>{
        dispatch({type: 'SEND_FAVORITE', payload: { url: giphy.images.original.url}})
    }


    return(
        <>
        <div>
            <div>
                <img src={giphy.images.original.url} alt="" />
            </div>
            <button onClick={()=>addFavorite()}>Add Favorite</button>
        </div>
        </>
    )
}

export default SearchItem