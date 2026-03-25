import './App.css'
import List from './components/List';

function App() {
  const nickname = '매튜'
  const sweetPotato = '고구마'
  const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
  return (
     <>
      <strong className='school'>상명대학교</strong>
      <p style={{color: 'purple', fontWeight:'bold', fontSize:'1rem'}}>{nickname}/김용민</p>
      <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
      <ul>
        {array.map((yaho, idx) => (
          // 어떤 요소가 추가/삭제/변경 되었는지 구분하기 위해 key
          <List key={idx} tech={yaho}/>
        ))}
      </ul>
     </>
  )
}

export default App