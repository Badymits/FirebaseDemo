import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase/config'
// styles
import './create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()   
    const article = {title,author,body};
    const ref = collection(db, 'article')
    await addDoc(ref,article)

    // setTitle("");
    // setAuthor("");
    // setDescription("");

    navigate('/')
  }

  return (
    <div className="create">
      <h2 className="text-2xl pb-2 font-semibold">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className='border-[1px] pl-7'>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="border-[1px] border-black"
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
            className="border-[1px] border-black"
          />
        </label>

        <label>
          <span>Body:</span>
          <textarea 
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
            className="border-[1px] border-black resize-none"
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}