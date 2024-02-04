import React from 'react'
import "../Stylecss/BtnAlign.css"
import Btn from './Btn'
import FacebookIcon from '@material-ui/icons/Facebook';
import EditIcon from '@material-ui/icons/Edit';

const BtnAlign = () => {
    return (
        <div className="btnAlign">
            <div className="btn_g1">
            <Btn icon={<EditIcon/>} text="Edit" bgColor="black" />
            </div>
            
            <div style={{width:"185px"}} class="double btn_g2">
                <Btn overlap text="Bride" bgColor="#57BAB7" />
                <Btn zindex text="Groom" />
            </div>
            
            <div className="btn_g2">
            <Btn icon={<FacebookIcon/>} text="Facebook" bgColor="#4267B2" />
            </div>

            <div style={{width:"185px"}} class="double btn_g2">
                <Btn overlap text="Bride" />
                <Btn  text="Groom" bgColor="#57BAB7"/>
            </div>
            
            <div className="btn_g3">
            <Btn text="Send invite" bgColor="#fabdb1" />
            </div>
            
        </div>
    )
}

export default BtnAlign
