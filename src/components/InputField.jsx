export const InputField = (props) => {

    const {name, text, addNewMessage, handelName, handelText} = props

    return(
        <>
        <div className='form__group field'>
            <input name="name" type="input" id="name" className="form__field" 
            onChange={(e)=>handelName(e.target.value)} value={name}>
            </input>  
            <label htmlFor="name" className="form__label">Имя</label>
        </div>

        <div className='form__group field'>
            <textarea name="text" id="text" className="form__field__text" 
            onChange={(e)=>handelText(e.target.value)} value={text}></textarea>  
            <label className="form__label__text" >Оставте коментарий</label>          
        </div>

        <button type="submit" className="btn" onClick={addNewMessage} >Отправить</button>
        </>
    )
}
