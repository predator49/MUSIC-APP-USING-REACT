import { useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return(<>
    <label> Artist Name </label>
    <input ref={artist}  type="text" className="form-control"  placeholder="Seach Your Song"/>
    <button className="btn btn-info " onClick={()=>{

            fn(artist.current.value);
    }}>Search it</button>
    </>)
}