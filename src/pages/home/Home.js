import "./Home.css"
import {useFetch} from "../../hooks/useFetch"
import ReciepeList from "../../components/ReciepeList"


export default function Home() {

  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    return (
      <div className="home">
      
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <ReciepeList data1 = {data}/>}
        
      </div>
    )
}
