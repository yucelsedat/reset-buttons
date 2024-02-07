import React,{ useState } from "react";


function SetText ({matrix}) {
  
  if ( matrix.color ==='mavi') {
    return (
      <p>
        {matrix.color} butona {matrix.maviCount} kez tıklandı
      </p>
    );
  } else if ( matrix.color === 'sari') {
    return (
      <p>
        {matrix.color} butona {matrix.sariCount} kez tıklandı
      </p>
    );
  } else {
    return <p></p>
  }
  
  
}

function App() {

  const [matrix, setMatrix] = useState({
    color: '',
    maviCount: 0,
    sariCount: 0
  })

  const updateMatrix = (renk) => {

    if( renk === 'mavi') {
      setMatrix(previousState => {
        return { ...previousState, color: renk, maviCount: previousState.maviCount +1}
      });
    } else {
      setMatrix(previousState => {
        return { ...previousState, color: renk, sariCount: previousState.sariCount +1}
      });
    }
  }

  const clearMatrix = () => {
    console.log("sifirlandi")
    setMatrix( previousState => {
      return { ...previousState, color: '', maviCount: 0, sariCount: 0}
    })
  }
  
  return (
    <div style={ { width: '20%', margin: '100px auto', textAlign: 'center', border: '1px solid black', padding: '50px'}}>
        <SetText matrix = {matrix} />  
          <button type="button" onClick = {() => updateMatrix('sari')}>
            sari
          </button>
          <button type="button" onClick = {() => updateMatrix('mavi')}>
            mavi
          </button>
          <button type="button" onClick = {() => clearMatrix()}>
            sifirla
          </button>
    </div> 
  )  
}

export default App;