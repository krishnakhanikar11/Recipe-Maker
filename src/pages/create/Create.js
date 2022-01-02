import "./Create.css"
import {useState,useRef, useEffect} from "react"
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from "react-router-dom"

export default function Create() {
  const [title,setTitle] = useState("")
  const [cookingTime,setCookingTime] = useState("")
  const [method,setMethod] = useState("")
  const [ingredient,setIngredient] = useState('')
  const [ingredients,setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const {postData, data, error } = useFetch('http://localhost:3000/recipes','POST')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title,ingredients,method,cookingTime: cookingTime + "minutes"})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = ingredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients,ing])
    }
    setIngredient('')
    ingredientInput.current.focus()
  }

  //redirect users when we get data
  useEffect(() => {
    if(data){
      history.push('/')
    }
  },[data])
    return (
      <div className='create'>
        <h2 className='page-title'>Add a new Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title:</span>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label>
            <span>Recipe ingredients:</span>
            <div className='ingredients'>
              <input
                type='text'
                onChange={(e) => setIngredient(e.target.value)}
                value={ingredient}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} className='btn'>
                add
              </button>
            </div>
          </label>
          <p>Current ingredients:{ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

          <label>
            <span>Recipe method:</span>
            <textarea
              type='text'
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>

          <label>
            <span>Cooking Time:</span>
            <input
              type='number'
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>

          <button className='btn'>Submit</button>
        </form>
      </div>
    )
}
