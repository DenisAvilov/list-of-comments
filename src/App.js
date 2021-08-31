
import './App.scss';

function App() {
  return (
    <div className="comment">     
      <form>
        <div className='form__group field'>
          <input name="name" type="input" id="name" className="form__field">
          </input>  
          <label htmlFor="name" className="form__label">Имя</label>
        </div>

        <div className='form__group field'>
          <textarea name="text" id="text" className="form__field__text" ></textarea>  
          <label className="form__label__text" >Оставте коментарий</label>          
        </div>

        <button type="submit" className="btn" >Отправить</button>
      </form>  

      <div className="comment__items" id="comment__view">
          <div className="comment__item">
            <div className="comment__item__name">Илья</div>   
            <div className="comment__item__text">
                name имя
                text комментарий
                Все поля обязательные для заполнения
                Вывести список комментариев
                            
                При клике на кнопку “Показать еще” - подгружать следующие комментарии
                Если больше нет комментариев, кнопка “Показать еще” должна быть скрыта
                Помимо кнопки “Показать еще” реализовать навигацию по комментариям с помощью пагинации
            </div>   
          </div>
          
          <div className="comment__item">
            <div className="comment__item__name">TOLA</div>   
            <div className="comment__item__text">
                name имя
                text комментарий
                Все поля обязательные для заполнения
                Вывести список комментариев
                            
                При клике на кнопку “Показать еще” - подгружать следующие комментарии
                Если больше нет комментариев, кнопка “Показать еще” должна быть скрыта
                Помимо кнопки “Показать еще” реализовать навигацию по комментариям с помощью пагинации
            </div>   
          </div>

          <div className="comment__item">
            <div className="comment__item__name">Илья</div>   
            <div className="comment__item__text">
                name имя
                text комментарий
                Все поля обязательные для заполнения
                Вывести список комментариев
                            
                При клике на кнопку “Показать еще” - подгружать следующие комментарии
                Если больше нет комментариев, кнопка “Показать еще” должна быть скрыта
                Помимо кнопки “Показать еще” реализовать навигацию по комментариям с помощью пагинации
            </div>   
          </div>

          <div className="comment__item">
            <div className="comment__item__name">Илья</div>   
            <div className="comment__item__text">
                name имя
                text комментарий
                Все поля обязательные для заполнения
                Вывести список комментариев
                            
                При клике на кнопку “Показать еще” - подгружать следующие комментарии
                Если больше нет комментариев, кнопка “Показать еще” должна быть скрыта
                Помимо кнопки “Показать еще” реализовать навигацию по комментариям с помощью пагинации
            </div>   
          </div>
      </div> 
     
      <div className="nav">
        <button className="nav__prev">{'<'}</button>
        <button className="nav__more">Показать еще</button>
        <button className="nav__next">{'>'}</button> 
      </div>

    </div>
  );
}

export default App;
