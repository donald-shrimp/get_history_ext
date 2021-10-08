import React, { useRef } from 'react'
const App = () => {
  const textRef = useRef(null)

  // レンダリングの確認
  console.log('レンダリング')

  return (
    <>
      <input ref={textRef} type="text" />
      <button onClick={() => alert(textRef.current.value)}>値の確認</button>
    </>
  )
}

export default App