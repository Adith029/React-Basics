import React from 'react'

function MemoChild({data}) {
    console.log("Child initiated");

    data()
  return (
    <div><h1>Child Value</h1></div>
  )
}

// export default MemoChild
export const MemoChild1 =React.memo(MemoChild)