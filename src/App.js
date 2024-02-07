import React,{ useState } from "react";
import './style.css'


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
    <div className = "App">
        <SetText matrix = {matrix} />  
          <button className="btn sari" type="button" onClick = {() => updateMatrix('sari')}>
            sari
          </button>
          <button className="btn mavi" type="button" onClick = {() => updateMatrix('mavi')}>
            mavi
          </button>
          <button className="btn" type="button" onClick = {() => clearMatrix()}>
            sifirla
          </button>
    </div> 
  )  
}

export default App;