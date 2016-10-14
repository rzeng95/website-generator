const initialState = {
    isCondensed : true
}

export default function viewChange (state=initialState, action) {
    switch (action.type) {
        case 'TOGGLE_VIEW':
            //console.log('in toggle view of reducer');
            return Object.assign({}, state, {
                isCondensed: !state.isCondensed
            })
        default:
            return state;
    }
}
