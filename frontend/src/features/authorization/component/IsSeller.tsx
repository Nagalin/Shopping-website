import { Outlet} from "react-router-dom"
import react ,{useState,useEffect} from 'react'
import axios from '../../../lib/axios'

const isSeller = ()=> {
   
    

    const [permision,setPermission] = useState<boolean>(false)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
  axios.get('/isSeller')
    .then(response => {
      if (response.status === 200) {
        setPermission(true);
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      setLoading(false);
    });
},[]);


    if(loading) return null
    if(permision) return <Outlet/>
    if(!loading && !permision) return (<h1>Unauthorized access</h1>)
}

export default isSeller