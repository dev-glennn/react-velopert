//모듈이름/
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initialState = {
  number: 0,
}

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      }
    case DECREASE:
      return {
        number: state.number - 1,
      }
    default:
      return state
  }
}

//export 는 여러개, export default 는 단 한개만 내보낼 수 있음
//export 는 {} 안에 export default 는 {} 없이 불러올 수 있음
export default counter
