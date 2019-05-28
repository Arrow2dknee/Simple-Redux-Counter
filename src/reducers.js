
const initState = {
  number: 0
}

const multiplyReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FIVE_MULTIPLES':
      return {
        number: state.number + 5 
      }
    default:
      return state;
  }
}

export default multiplyReducer;