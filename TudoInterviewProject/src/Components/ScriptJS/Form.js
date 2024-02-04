import React from 'react'
import "../Stylecss/Form.css"
import { Avatar } from '@material-ui/core';
import InputField from './InputField';
import Btn from './Btn';
import EditIcon from '@material-ui/icons/Edit';

const Form = () => {
    return (
        <div className="form">
            <div class="container">
                <h1 className="form__heading">Personal Details</h1>
                <div className="row my-5">

                        <div class="form__row1">
                            <div className="form__row__header">
                                <div class="form__fieldBorder__header">
                                    <Avatar src="https://ehonami.blob.core.windows.net/media/2016/02/ditch-this-man-zapper-to-increase-virility-800x600.jpg" className="form__Avatar" />
                                </div>
                                <div class="form__fieldBorder__header">
                                    <h5>Saman agarwal</h5>
                                    <p>Mob: 9953822945</p>
                                </div>


                            </div>
                        </div>


                        <div className="form__row1">
                            <div className="form__fieldBorder">
                                <InputField label="First Name" />
                            </div>
                            <div className="form__fieldBorder">
                                <InputField label="Last Name" />
                            </div>
                            

                        </div>


                        <div class="form__row1">
                            <div className="form__fieldBorder ">
                                <InputField label="Email" />
                            </div>
                        </div>


                        <div class="form__row1">
                            <div className="form__fieldBorder ">
                                <InputField label="Spouse First Name" />
                            </div>
                            <div className="form__fieldBorder ">
                                <InputField label="Spouse Last Name" />
                            </div>
                            

                        </div>


                        <h5>Invite Partner</h5>
                        <div class="form__row1">
                            <div className="form__fieldBorder ">
                                <InputField label="Email" />
                            </div>
                        </div>
                </div>

                <div>
                    <Btn icon={<EditIcon/>} right text="edit" bgColor="black" />
                    <Btn right text="cancel" bgColor="black" />
                    <Btn right text="save" bgColor="#fabdb1" />
                </div>
            </div>
        </div>
    )
}

export default Form
