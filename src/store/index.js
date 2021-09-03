import { configureStore } from "@reduxjs/toolkit";
import commentReduser from './commentSlice'

export default configureStore({
    reducer: {
        comments: commentReduser,
    }
})