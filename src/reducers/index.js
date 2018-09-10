import { CHANGE_STATE } from '../constants'

const performAction = (state = { val : 'primary' }, action) => {

    switch(action.type) {
        
        case CHANGE_STATE:
            console.log('state: ',state,' action ', action);
            let val = state.val == 'primary' ? 'secondary' : 'primary'
            return { val }
        
        default:
            return state
    }
}

export default performAction