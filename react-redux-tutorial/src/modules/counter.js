import { createAction, handleActions } from 'redux-actions'

//모듈이름/
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성 함수 만들기
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState = {
  number: 0,
}

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
)

//export 는 여러개, export default 는 단 한개만 내보낼 수 있음
//export 는 {} 안에 export default 는 {} 없이 불러올 수 있음
export default counter
