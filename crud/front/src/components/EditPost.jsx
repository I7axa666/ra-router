import { useParams } from "react-router-dom"

export default function EditPost() {

  const {id: postId} = useParams()
  
  
  return (
    <>
      <div className='post-title'>Инфо о пользователе</div>
      <div className='post-text'>
        <h3>{postId}</h3>
      </div>
      <div className='post-date'>Поле комментариев</div>
    </>
    
  )
}