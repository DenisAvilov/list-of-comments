import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentPage} from './../store/commentSlice'


export const Pagination = () => {    

    const dispatch = useDispatch()

    // Последняя страница
    const last_page = useSelector(state => state.comments.last_page)

    // Текущая страница 
    const current_pages = useSelector(state => state.comments.current_page)

    //Порционная выдача страниц
    let paginationCountProps = 10,
        leftPortionBorder = 0,
        rightPortionBorder = 0,
        viwePortionPage = []

    const [modePage , setModePage] = useState(1)

    // Определяем минимальное значение пагинации
    leftPortionBorder = ( modePage - 1) * paginationCountProps + 1

    // Определяем максимальное значение пагинации
    rightPortionBorder =  modePage * paginationCountProps

    //Добавляем количество отображаемых страниц
    for(let i = 1; i < last_page; i++ ){   
    viwePortionPage.push( i )
    }

    const addCurrentPage =(e) =>{
        
        const current_page = +e.target.innerHTML
        dispatch(getCurrentPage({current_page})) 
 
    }


return(
    <div className="pagination">
            {leftPortionBorder > 1 && <span onClick={() => setModePage(modePage - 1)} > Назад </span>}

            {viwePortionPage.filter((f) => f >= leftPortionBorder && f <= rightPortionBorder)
            .map((p,i) => <span
            className={current_pages === p ? 'selectedPage' : ''}
            key={i}
            onClick={addCurrentPage}
            >{p}</span>)}
            
            { rightPortionBorder < last_page  &&  <span onClick={() => setModePage(modePage + 1)} > Дальше </span> }
    </div>
)
}

