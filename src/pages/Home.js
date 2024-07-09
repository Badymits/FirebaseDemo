import { Link, Navigate } from 'react-router-dom'
import {getDocs, collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase/config'
import { useEffect,useState } from 'react';
import { CiTrash } from "react-icons/ci";

// styles
import './Home.css'
import EditModal from '../components/EditModal';
import Article from './Article';

export default function Home({ user }) {

  const [articles, setArticles] = useState(null);
  const [article, setArticle] = useState(null)
  const [editModal, setEditModal] = useState(false)

  useEffect(() => {
    const ref = collection(db, 'article');
    // onSnapshot(ref, (snapshot)=>{
    //     console.log(snapshot);
    //     let results = []
    //      snapshot.docs.forEach(doc => {
    //        results.push({id: doc.id, ...doc.data()});
    //      });
    //     setArticles(results);
    //   })

    getDocs(ref)
      .then((snapshot)=>{
        let results = []
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        setArticles(results);
      })    
  },[article])

  
  const handleDelete = async (id) => {
    const ref = doc(db, 'article', id)
    alert('deleted!')
    await deleteDoc(ref);
  }

  const toggleModal = (article) => {
    
    console.log(article)
    setArticle(article)
    setEditModal(true)
  }

  const closeModal = () => {
    setEditModal(false)
    
  }

  return (
    <div className="home">
      
      {   user ? 
      <div>
        {editModal && <EditModal {...article} closeModal={closeModal}/>}
        <h2 className='text-2xl pb-5'>Articles</h2>      
        {articles && articles.map(article => (
          <div key={article.id} className="card relative ">
            <h3 className='text-xl font-semibold pb-2'>{article.title}</h3>
            <p className='text-lg pb-4'>Written by: <span className='font-semibold'>{article.author}</span></p>
            <Link to={`/articles/${article.id}`} className='underline text-blue-400'>Read More...</Link>
            <div className='flex items-center gap-4 float-right'>
              <button className='bg-blue-500 rounded-md hover:bg-blue-300 p-1 text-white' onClick={() => toggleModal(article)}>Edit Article</button>
              <CiTrash className='text-4xl cursor-pointer hover:bg-gray-300 rounded-full p-1' onClick={() => handleDelete(article.id)}/>
              
            </div>
            
          </div>
        ))}
      </div>
       :
        <Navigate to='/login'/>
      }
      
    </div>
  )
}
