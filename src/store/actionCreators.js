import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODE_ITEM } from './actionTypes'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: SUBMIT_TODO_ITEM
})
export const getItemDeleteAction = (index) => ({
    type: DELETE_TODE_ITEM,
    index
})