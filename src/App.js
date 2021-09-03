
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Comments}  from './components/Comments'
import {InputField} from './components/InputField'
import {addMessage, getComments} from './store/commentSlice'
import {useHTTP} from "./hooks/useHTTP"
import {Pagination} from './components/Pagination'
import './App.scss'

export const App = () => {
  const dispatch = useDispatch()
  const current_pages = useSelector(state => state.comments.current_page) 
  const { request } = useHTTP() 

  const[name, setName] = useState('')
  const[text, setText] = useState('')

  const addNewComment = async () => {
    if(name.trim().length && text.trim().length){    
    const res = await request(`https://jordan.ashton.fashion/api/goods/30/comments`,'POST',{text,name})
    if(res){
      dispatch(addMessage({text, name}))
    }
    setName('')
    setText('')
    alert('Комментарий добавлен!')
  }else{
    alert('Все поля для ввода должны быть заполнены! Повторите попытку.')
  }
  
  }

  useEffect( () => {
    
    async function fetchData() {
      let response = await request(`https://jordan.ashton.fashion/api/goods/30/comments?page=${current_pages}`)      
      const {data, total, current_page, last_page, last_page_url, prev_page_url, next_page_url, first_page_url} = response
      
      dispatch(getComments({data, total, current_page, last_page, last_page_url, prev_page_url, next_page_url, first_page_url}))
    }

  fetchData()
    
  }, [request, dispatch, current_pages]) 

  
  return (
    <div className="comment">              
          <InputField name={name} text={text} addNewMessage={addNewComment} 
            handelName={setName} handelText={setText}/>        
          <Comments/>
          <Pagination/>
          
    </div>
  )
}

