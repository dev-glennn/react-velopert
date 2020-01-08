import React from 'react'
//컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고 dispatch로 감싸는 작업을 간단히 할 수 있는 유틸 함수
// import { bindActionCreators } from 'redux'
//컴포넌트와 리덕스를 연동하기 위한 함수
//connect(리덕스 스토어 안의 상태를 props로 넘겨주는 함수, 액션 생성 함수를 props로 넘겨주는 함수)
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

// const mapStateToProps = state => ({
//   number: state.counter.number,
// })

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   },
// })

export default connect(
  state => ({
    number: state.counter.number,
  }),
  //bindActionCreators 내에 담은 함수가 객체 형태로 넘어감, 선언한 뒤 호출⭐
  //   dispatch => bindActionCreators({ increase, decrease }, dispatch),
  { increase, decrease },
)(CounterContainer)
