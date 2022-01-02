import "./Receipe.css"
import { useFetch } from '../../hooks/useFetch'
import {useParams} from "react-router-dom"

export default function Receipe() {
  const {id} = useParams()
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes/'+ id)
    return (
      <div className="receipe">
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && (
          <>
            <h2 className="page-title">{data.title}</h2>
            <p>{data.cookingTime} to go.</p>
            <ul>
              {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className="method">{data.method}</p>
          </>
        )}
      </div>
    )
}
