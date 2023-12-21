import React, { useState } from 'react';
import SkillBar from './components/skill_bar'; 
import './App.css';

const App = () => {
  const skillLst = [{skill:"PYTHON", lev:30},
                    {skill:"REACT", lev:15},
                    {skill:"C", lev:10}
                   ];
  let [state1, setstate1] = useState(true)
  const [state2, setstate2] = useState(0)

  const scroll = (sampleId) => {
    const scrollClassName = document.getElementById(sampleId); // ターゲットの要素IDを指定
    if (scrollClassName) {
      scrollClassName.scrollIntoView({ behavior: 'smooth'}); // スムーズなスクロール
    }
  };

  const changestate1 = () => {
    if(state1){
      setTimeout(() => {
        setstate1(true)
        console.log("state1 is now true")
      }, 1500); // 1500ミリ秒後に実行
    }
    console.log(state1)
    setstate1(!state1)
  }

  const changestate2 = () => {
    setstate2(state2 + 1)
  }
                   
  return (
    <div id='whole'>
        <div id='header' style={{justifyContent: 'center'}}>
          <div id='element1' style={{display: "flex", justifyContent: 'center', position: "relative", bottom: "-30px"}}>
            <button className='element1_1' onClick={() => scroll("icon")}>Skill</button>
            <button className='element1_1' style={{margin: "0px 100px"}} onClick={() => scroll("element3")}>Education</button>
            <button className='element1_1' onClick={() => scroll("element4")}>Hobby</button>
          </div>

          <div id='header_name' style={{margin: "70px 20px"}}>
            <div style={{}}>Kiyoya</div>
            <div style={{position: "relative", bottom: "40px"}}>Takahashi</div>
          </div>

          <div id="element1_2" style={{float: "right", margin: "-500px 100px"}}>
            {state1 ? (
              <button onClick={() => {changestate1(); changestate2();}}>  
                <img className="img1" src="/good1.jpg" alt="goodButton"/>
              </button>
            ) : (
              <button onClick={() => {changestate1(); changestate2();}}>  
                <img className="img1" src="/good2.jpg" alt="goodButton"/>
              </button>
            )}
            <div id="clickButtonCount" style={{margin: "0px 25px"}}>{state2}</div>
          </div>
        </div>


        <div id='icon' style={{margin: "-90px auto 0px"}}>
          <img id='icon_pic' src="batinnki.png" alt="icon"/>
        </div>


        <div id='body2'>
          <div className="hogeElement"></div>
          <div id='element2'>
            <div className='element_title'>Skill</div>
            <div className='element_maintext'>
              現在react,pythonを学習中です.
            </div>
            <div className="hogeMiniElement"></div>
            <div id='element2_skillBars' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>  {/* columnは子要素を縦要素に並べる */}
              {skillLst.map((hoge, index) => (
                <SkillBar key={index} skillname={hoge.skill} level={hoge.lev}/> /* props */
              ))}
            </div>
          </div>

          <div class="hogeElement" style={{marginTop: "40px"}}></div>
          <div id='element3'>
            <div className='element_title'>Education</div>
            <div className='element_maintext'>
              <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <div style={{marginRight: "30px"}}>"NOW!!" 20XX~</div>
                <div>○○○○大学</div>
              </div>
              <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <div style={{marginRight: "30px"}}>"High-school" (20YY~20ZZ)</div>
                <div>○○○○高校</div>
              </div>
            </div>
          </div>

          <div class="hogeElement" style={{marginTop: "40px"}}></div>
          <div id='element4'>
            <div className='element_title'>Hobby</div>
          </div>
        </div>
    </div>
  )
}
export default App