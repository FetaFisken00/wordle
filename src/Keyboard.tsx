import React from 'react'

export default function Keyboard({keyList, handleButtonPress}: any) {
  return (
    <div className="keyboard">
        <button onClick={handleButtonPress} className={keyList[0].letter_q.class} key={keyList[0].letter_q.key}>Q</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_w.class} key={keyList[0].letter_w.key}>W</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_e.class} key={keyList[0].letter_e.key}>E</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_r.class} key={keyList[0].letter_r.key}>R</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_t.class} key={keyList[0].letter_t.key}>T</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_y.class} key={keyList[0].letter_y.key}>Y</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_u.class} key={keyList[0].letter_u.key}>U</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_i.class} key={keyList[0].letter_i.key}>I</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_o.class} key={keyList[0].letter_o.key}>O</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_p.class} key={keyList[0].letter_p.key}>P</button>
        <div className="space"></div>
        <button  onClick={handleButtonPress} className={keyList[0].letter_a.class} key={keyList[0].letter_a.key}>A</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_s.class} key={keyList[0].letter_s.key}>S</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_d.class} key={keyList[0].letter_d.key}>D</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_f.class} key={keyList[0].letter_f.key}>F</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_g.class} key={keyList[0].letter_g.key}>G</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_h.class} key={keyList[0].letter_h.key}>H</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_j.class} key={keyList[0].letter_j.key}>J</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_k.class} key={keyList[0].letter_k.key}>K</button>
        <button  onClick={handleButtonPress} className={keyList[0].letter_l.class} key={keyList[0].letter_l.key}>L</button>
        <div className="space"></div>
        <button data-enter className="key large">Enter</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_z.class} key={keyList[0].letter_z.key}>Z</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_x.class} key={keyList[0].letter_x.key}>X</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_c.class} key={keyList[0].letter_c.key}>C</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_v.class} key={keyList[0].letter_v.key}>V</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_b.class} key={keyList[0].letter_b.key}>B</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_n.class} key={keyList[0].letter_n.key}>N</button>
        <button onClick={handleButtonPress} className={keyList[0].letter_m.class} key={keyList[0].letter_m.key}>M</button>
        <button data-delete className="key large">*SVG*</button>
    </div>
  )
}
