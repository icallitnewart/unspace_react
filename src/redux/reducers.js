import { combineReducers } from "redux";

const initFlickr = {
    flickr : [
        {
            type: "popular",
            data: []
        },
        {
            type: "modern",
            data: []
        },
        {
            type: "contemporary",
            data: []
        },
        {
            type: "minimalist",
            data: []
        },
        {
            type: "mid-century",
            data: []
        }
    ]
}


const flickrReducer = (state = initFlickr, action)=> {
    switch(action.type) {
        case "SET_FLICKR" :
            return { ...state, flickr: action.payload }
        default : 
            return state;
    }
}

const noticeReducer = (state = [], action)=> {
    switch(action.type) {
        case "SET_NOTICE" :
            return { ...state, notice: action.payload }
        default :
            return state;
    }
}

const reducers = combineReducers({
    flickrReducer,
    noticeReducer
})

export default reducers;