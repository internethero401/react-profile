import React from 'react'
import '../App.css';

const SkillBar = ({skillname, level}) => {
  const left = level * 3
  const right = (100-level) * 3
  const between = 16 + (6 - skillname.length)/2*17  //17はfontsizeによって変える

  return (
    <div>
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ marginRight: `${between}px`, fontSize: "15px", fontFamily: "'Roboto Mono', sans-serif", color: "#333333", fontWeight: "bold"}}>{skillname}</div>
        <div style={{display: "flex", width: "100%", height: "10px", marginRight: `px`}}>
          <div style={{height: "12px", width: `${left}px`, backgroundColor: 'black'}}></div>
          <div style={{height: "12px", width: `${right}px`, backgroundColor: 'white'}}></div>
        </div>
      </div>
      <div style={{marginTop: "17px"}}></div>
    </div>

  )
}
export default SkillBar
