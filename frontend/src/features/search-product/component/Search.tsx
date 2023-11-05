import React,{useEffect} from 'react'
import useSearch from '../hook/useSearch'

interface Items {
  _id : string;
  name: string;
  price:number ;
  imageName : string
}

interface SearchProps {
  setItems: React.Dispatch<React.SetStateAction<Items[] | undefined>>;
}

export default function Search(props: SearchProps) {
  const { setItems } = props;
    const {setSearchField} = useSearch(setItems)
    
  return (
    <input onChange={e=>setSearchField(e.target.value)} type="text" className="form-control mt-4" placeholder='Search for items' 
      style={{
        maxWidth: '800px',
        margin: '0 auto'
      }} />
  )
}
