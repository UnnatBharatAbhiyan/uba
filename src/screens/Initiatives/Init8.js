import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/Init8/1.jpg";
import init_pic_2 from "../../Images/Initiatives/Init8/2.jpg";
import init_pic_3 from "../../Images/Initiatives/Init8/3.jpg";
export const Init8 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} 
      title="WEBINAR CUM TRAINING ON MENSTRUAL HYGIENE"
      date=" February, 2021"
      village=" Chharba"
        p1="Globally, at least 500 million women and girls lack proper access to menstrual hygiene facilities. Menstrual hygiene is vital to the empowerment and well-being of women and girls worldwide. It is about more than just access to sanitary pads and appropriate toilets though those are important."

        p2="UNNAT BHARAT ABHIYAN, IIT ROORKEE, collaborated with the Goonj organization, conducted a webinar cum training on Menstrual Hygiene in Chharba village. We emphasized the importance of menstrual hygiene and trained the women to make cloth pads using a straightforward method but improvising on the hygiene level."
      />
    </>
  )
}
