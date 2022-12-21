import {configureStore} from "@reduxjs/toolkit"
import playerReducer from "./PlayerStore"

export default configureStore({
    reducer:{
        player:playerReducer
    },
})