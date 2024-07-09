import React, {useEffect, useState} from 'react'
import { IoMdClose } from "react-icons/io"; 

import { useNavigate } from 'react-router-dom'
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config'

const EditModal = ({title, id, author, body, closeModal}) => {

    const [newtitle, setTitle] = useState(title)
    const [newBody, setBody] = useState(body)

    const navigate = useNavigate()

    const editDocSubmit = async(e) => {
        e.preventDefault();

        let title = newtitle
        let body = newBody

        const article = {title, body}
        const ref = doc(db, 'article', id)
        
        await updateDoc(ref, article)
        alert('updated!')
        closeModal()
        navigate('/')
    }

    useEffect(() => {
        setTitle(title)
        setBody(body)
    }, [body, title])

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-[1px] border-black p-10 rounded-lg z-[50] shadow-2xl'>
        <h1 className='text-3xl font-semibold'>Edit Article</h1>
        
        <IoMdClose onClick={closeModal} className='cursor-pointer text-2xl absolute top-2 right-2 hover:bg-gray-400 rounded-full'/>
        
        <form action="" className='flex flex-col gap-2 p-5 w-[600px]' onSubmit={editDocSubmit}>
            <label htmlFor="" className='text-xl font-thin'>Title</label>
            <input type="text" name='title' value={newtitle} onChange={(e) => setTitle(e.target.value)} className='pl-1 my-1 border-[1px] border-black'/>
            
            <label htmlFor="" className='text-xl font-thin'>Author</label>
            <input type="text" name='author' value={author} readOnly  className='pl-1 my-1 border-[1px] border-black'/>
            
            <label htmlFor="" className='text-xl font-thin'>Body</label>
            <textarea type="text" name='title' value={newBody} onChange={(e) => setBody(e.target.value)} className='pl-1 my-1 border-[1px] border-black h-[200px] ' ></textarea>

            <button className='block bg-blue-400 hover:bg-blue-300 w-[200px] p-2 mt-4 text-white rounded-md' type='submit'>Save Changes</button>
        </form>
    </div>
  )
}

export default EditModal