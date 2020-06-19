import { handleActions } from 'redux-actions';
const GET_ALL_BIOS = 'GET_ALL_BIOS';
const ADD_BIO = 'ADD_BIO';

const devActions = {
    getAllBiosActionCreator : (developers) => ({
        type: GET_ALL_BIOS,
        developers
    }),
    addBioActionCreator: (developer) => ({
        type: ADD_BIO,
        developer
    }),
    reducer: handleActions({
        [GET_ALL_BIOS]:(state, action) => ({
            ...state,
            developers:action.developers
        }),
        [ADD_BIO]: (state,action) => ({
            ...state,
            developers:[...state.developers,action.developer]
        })
    },{
        developers:[] //initial state
    })
}

export default devActions;