# 🔥 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기


```
😶 Download

$ yarn create react-app react-redux-tutorial
$ cd react-redux-tutorial
$ yarn add redux react-redux redux-devtools-extension redux-actions immer 
```

## 작업 환경 설정

📣 __Prettier__ 적용
`.prettierrc `
```javascript
{
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

## UI 준비하기

컴포넌트 분리
- __프레젠테이셔널 컴포넌트__ : 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여주기만 함
- __컨테이너 컴포넌트__ : 리덕스와 연동되어 있는 컴포넌트, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치 하기도 함


`/components/` 내에 컴포넌트 생성

## 리덕스 관련 코드 작성하기

__⭐ Ducks 패턴으로 작성__
 : 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성하는 방식
 
 1. 액션 타입 정의
 2. 액션 생성 함수 만들기
 3. 초기 상태 및 리듀서 함수 만들기
 4. 루트 리듀서 만들기
: `combineReducers` 유틸 함수 사용
 
 
 ## 리액트 애플리케이션에 리덕스 적용하기
 
 1. 스토어 만들기
 2. Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기
 3. Redux DevTools의 설치 및 적용
 
 
 ## 컨테이너 컴포넌트 만들기

1. 컨테이너 만들기
: `connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)`
- mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
- mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
: `bindActionCreators` 유틸 함수 사용

## 리덕스 더 편하게 사용하기

1. redux-actions : 액션 생성 함수를 더 짧은 코드로 작성 가능
: `createAction` , `handleActions` 함수 사용
2. immer
: `propduce` 사용


## Hooks를 사용하여 컨테이너 컴포넌트 만들기

1. useSelector 로 상태 조회하기
⭐ connect함수를 사용하지 않고도 리덕스 상태를 조회할 수 있음
: `const 결과 = useSelector(상태 선택 함수);`

2. useDispatch를 사용하여 액션 디스패치하기

```javascript
const dispatch = useDiapatch()
dispatch({ type: 'SAMPLE_ACTION' })

```

3. useStore를 사용하여 리덕스 스토어 사용하기
: 어쩌다가 스토어에 직접 접근해야 하는 상황에만 사용, 흔치 않음

4. useActions 유틸 Hook을 만들어서 사용하기

5. connect 함수와의 주요 차이점

- connect : 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화 됨
- useSelector : 최적화 작업이 자동으로 이루어지지 않으므로, 성능 최적화를 위해서는 `React.memo`를 컨테이너 컴포넌트에 사용해 주어야 함
