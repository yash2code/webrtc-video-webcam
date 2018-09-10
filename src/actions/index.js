import { CHANGE_STATE } from '../constants'

export const changeState = (val) => {
    const action = {
        type: 'CHANGE_STATE',
        val
    }
    return action
}