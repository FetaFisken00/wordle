import React from 'react'

export default function Keyboard({keyList, handleButtonPress}: any) {
  return (
    <div className="keyboard">
        <button onClick={handleButtonPress} className={keyList[0].letter_q.class} data-key="Q">Q</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_e.class} data-key="E">E</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_r.class} data-key="R">R</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_w.class} data-key="W">W</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_t.class} data-key="T">T</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_y.class} data-key="Y">Y</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_u.class} data-key="U">U</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_i.class} data-key="I">I</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_o.class} data-key="O">O</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_p.class} data-key="P">P</button>
        <div className="space"></div>
        <button  onClick={handleButtonPress} className={keyList[0].letter_a.class} data-key="A">A</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_s.class} data-key="S">S</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_d.class} data-key="D">D</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_f.class} data-key="F">F</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_g.class} data-key="G">G</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_h.class} data-key="H">H</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_j.class} data-key="J">J</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_k.class} data-key="K">K</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_l.class} data-key="L">L</button>
        <div  className="space"></div>
        <button onClick={handleButtonPress} data-delete className="key large">*SVG*</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_z.class} data-key="Z">Z</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_x.class} data-key="X">X</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_c.class} data-key="C">C</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_v.class} data-key="V">V</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_b.class} data-key="B">B</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_n.class} data-key="N">N</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_m.class} data-key="M">M</button>
        <button onClick={handleButtonPress} data-enter className="key large">Enter</button>
    </div>
  )
}
