import {createSlice} from '@reduxjs/toolkit'

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comment: [],
        total: 0,
        current_page: 1,
        last_page: 0,
        last_page_url: '',
        prev_page_url: '',
        next_page_url: '',
        first_page_url: '',
    },
    reducers: {
        addMessage(state, action){
            state.comment.push({
                name: action.payload.name,
                text: action.payload.text,
            })
        },
        getComments(state, action){           
            state.comment = [...action.payload.data]
            state.total = action.payload.total
            state.current_page = action.payload.current_page            
            state.last_page = action.payload.last_page
            state.last_page_url = action.payload.last_page_url
            state.prev_page_url = action.payload.prev_page_url
            state.next_page_url = action.payload.next_page_url
            state.first_page_url = action.payload.first_page_url
        },
        getCurrentPage(state, action){
            // debugger
            state.current_page = action.payload.current_page
        }

    },
})
//create action
export const {addMessage} = commentSlice.actions
export const {getComments} = commentSlice.actions
export const {getCurrentPage} = commentSlice.actions
// create reducer
export default commentSlice.reducer


