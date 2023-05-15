import { ClassNames } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TypedDispatch } from "store";
import { loadMovisDeteilPrev } from "store/deteilpage/actions";
import "./styles.scss";

interface PrevInfoMovisProps{
    idPrevMovis: number,
    setShowPrev:(value: boolean)=>void
}


const PrevInfoMovis = ({idPrevMovis, setShowPrev}:PrevInfoMovisProps)=>{
    const [data, setData]=useState<any>();
    const dispatch: TypedDispatch = useDispatch();
useEffect(()=>{
    dispatch(loadMovisDeteilPrev(`${idPrevMovis}`)).then(res => setData(res?.data))},[])

    return(
<div onClick={()=>{setShowPrev(false)} }className="prev-movis">
   <div className="prev-movis-name"> {data ? `Name: ${data.name}`: "loading"}</div>
   <div className="prev-movis-genres"> {data ? `Genres: ${data.genres}`: " "}</div>
</div>
    )

}
export default PrevInfoMovis;