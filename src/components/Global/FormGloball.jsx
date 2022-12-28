import React from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap'
import BrandLogo from '../Sell/BrandLogo'
import emailjs from 'emailjs-com'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class FormGlobal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            modele: '',
            set: '',
            condition: 3,
            comment: '',
            wantedPrice: '',
            authorization: false,
            phone: '',
            name: '',
            email: '',
            wantedModel: '',
            validAuth: true,
            validName: true,
            validEmail: true
        }
        this.handleSelectSet = this.handleSelectSet.bind(this)
        this.handleCommentInput = this.handleCommentInput.bind(this)
        this.onBrandLogoClick = this.onBrandLogoClick.bind(this);
        this.handleCondition = this.handleCondition.bind(this)
        this.handleBrandInput = this.handleBrandInput.bind(this)
        this.handleModelInput = this.handleModelInput.bind(this)
        this.handleSendButton = this.handleSendButton.bind(this)
        this.conditionText = this.conditionText.bind(this)
        this.handleWantedPriceInput = this.handleWantedPriceInput.bind(this)
        this.handleWantedModelInput = this.handleWantedModelInput.bind(this)
        this.handleCHeckBox = this.handleCHeckBox.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleName = this.handleName.bind(this)

    }
    handleCHeckBox(e) {
        console.log(e.target.value)
        this.setState({
            authorization: !this.state.authorization,
            validAuth: !this.state.validAuth
        })


    }
    handleWantedPriceInput(e) {
        this.setState({
            wantedPrice: e.target.value
        })

    }
    handleWantedModelInput(e) {
        this.setState({
            wantedModel: e.target.value
        })
    }
    onBrandLogoClick(e) {
        console.log(e.target.id)
        this.setState({
            brand: e.target.id
        })
    }
    handleSelectSet(event) {
        this.setState({
            set: event.target.value
        })
    }

    handleBrandInput(event) {
        this.setState({
            brand: event.target.value
        })
    }
    handleModelInput(event) {
        this.setState({
            modele: event.target.value
        })
    }
    handleCondition(event) {
        this.setState({
            condition: event.target.value
        })
    }
    handleCommentInput(event) {
        this.setState({
            comment: event.target.value
        })
    }
    /* eslint-disable */
    conditionText(t) {
        let textToreturn;
        if (this.state.condition == 0) {
            textToreturn = t('condition-0')
        }
        if (this.state.condition == 1) {
            textToreturn = t('condition-1')
        }
        if (this.state.condition == 2) {
            textToreturn = t('condition-2')
        }
        if (this.state.condition == 3) {
            textToreturn = t('condition-3')
        }
        if (this.state.condition == 4) {
            textToreturn = t('condition-4')
        }
        if (this.state.condition == 5) {
            textToreturn = t('condition-5')
        }
        if (this.state.condition == 6) {
            textToreturn = t('condition-10')
        }

        return textToreturn
    }


    resetInput() {
        this.setState({
            brand: '',
            modele: '',
            set: '',
            condition: 3,
            comment: '',
            wantedPrice: '',
            wantedModel: '',
            authorization: false,
            validAuth: true,
            phone: '',
            name: '',
            validName: true,
            email: '',
            validEmail: true
        })
        document.getElementById("authorizationCheck").checked = false
    }
    
    handleSendButton(e) {
        const { name, email, authorization } = this.state
        e.preventDefault();
        if (name.length < 1) {
            this.notifyError('name is required')
            this.setState({ validName: false })
        } else if (email.length < 1) {
            this.setState({ validName: true })
            this.notifyError('email is required')
            this.setState({ validEmail: false })
        } else if (authorization === false) {
            this.setState({ validEmail: true })
            this.notifyError('your authorization is required')
            this.setState({ validAuth: false })
        } else if (name.length > 1 && email.length > 1) {
            this.setState({ validName: true })
            this.setState({ validEmai: true })
            this.setState({ validAuth: true })
            this.sendEmail()
        }

    }
    sendEmail() {
        let that = this
        emailjs.sendForm('service_jklklpo', 'template_nrwxgzo', '#my-form', 'user_qVW1EQYpGrCCZBiy6lnqy')
            .then(function (response) {
                console.log(response.status, response.text);
                if (response.status === 200) {
                    that.resetInput()
                    that.notify()
                } else {
                    that.resetInput()
                    that.notifyError()
                }
            });

    }


    notify = () => toast.success("Message envoyé, nous vous répondrons sous 48H", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    notifyError = (message) => toast.error(message || "Something went wrong", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    handleEmail(e) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(e.target.value)){
            this.setState({validEmail: true})
        }
        else{
            this.setState({validEmail: false})
        }
        this.setState({
            email: e.target.value
        })
    }
    handleName(e) {
        if(e.target.value.length >0){
            this.setState({validName: true})
        }
        this.setState({
            name: e.target.value
        })
    }
    handlePhone(e) {
        this.setState({
            phone: e
        })
    }


    render() {
        const t = this.props.t
        const wantModel = this.props.wantModel
        const formFrom = this.props.formFrom
        const isValidEmail = this.state.validEmail
        const isValidAuth = this.state.validAuth
        const isValidName = this.state.name.length>0
        return (
            <form id="my-form">
                <h2 className="my-underline">{t('form-sell-your-watch')}</h2>

                {formFrom === "Sell" &&
                    <input type="text" name="formName" required="required" value="Sell" style={{ display: "none" }} />
                }
                {formFrom === "Trade" &&
                    <input type="text" name="formName" required="required" value="Trade" style={{ display: "none" }} />
                }


                {/* Brand */}
                <div className="inputBox">
                    <BrandLogo onBrandLogoClick={this.onBrandLogoClick} />
                    <br />
                    <input type="text" name="brand" required="required" value={this.state.brand} onChange={this.handleBrandInput} />
                    <span>{t('form-sell-brand')}</span>
                </div>
                {/* modele */}
                <div className="inputBox">
                    <input type="text" name="modele" required="required" value={this.state.modele} onChange={this.handleModelInput} />
                    <span>{t('form-sell-model')}</span>
                </div>
                {/* wanted price */}
                <div className="inputBox">
                    <input type="number" name="wantedPrice" required="required" value={this.state.wantedPrice} onChange={this.handleWantedPriceInput} />
                    <span>Prix désiré</span>
                </div>
                {/* wanted model */}
                {wantModel &&
                    <div className="inputBox">
                        <input type="text" name="wantedModel" required="required" value={this.state.wantedModel} onChange={this.handleWantedModelInput} />
                        <span>Modele désiré</span>
                    </div>}
                {/* Range Condition */}
                <div className="inputBox">

                    <label for="customRange" className="form-label">{t('form-sell-condition')} : {this.conditionText(t)}</label>

                    {/* <label for="customRange" className="form-label">{t('form-sell-condition')} : {this.state.condition}</label> */}
                    <input type="range" name="condition" className="form-range" min="0" max="5" step="1" id="customRange" onChange={this.handleCondition} value={this.state.condition} style={{ border: "none" }} />
                </div>
                <br />

                {/* Select box and paper */}
                <div>
                    <span>{t('form-sell-box-paper')}</span><br />
                    <Form.Select name="set" value={this.state.set} onChange={this.handleSelectSet}>
                        <option name="set" value="box">{t('form-sell-box')}</option>
                        <option name="set" value="paper">{t('form-sell-paper')}</option>
                        <option name="set" value="paper and box">{t('form-sell-paper-and-box')}</option>
                        <option name="set" value="nothing">{t('form-sell-nothing')}</option>
                    </Form.Select>
                </div>
                <br /><br />
                <h2 className="my-underline">Vos informations:</h2>
                <br />
                <PhoneInput
                    name="phone"
                    placeholder="Enter phone number"
                    value={this.state.phone}
                    onChange={this.handlePhone}
                />
                <div className="inputBox">
                    <input style={{ paddingTop: "30px" }} className={this.state.validName ? "good-input" : "wrong-input"} type="text" name="name" required="required" value={this.state.name} onChange={this.handleName} />
                    <span className={this.state.validName ? "good-valid" : "wrong-valid"} >Nom <i style={{ color: 'red' }}>*</i></span>
                </div>
                <div className="inputBox">
                    <input style={{ paddingTop: "30px" }} className={this.state.validEmail ? "good-input" : "wrong-input"} type="email" name="email" required="required" value={this.state.email} onChange={this.handleEmail} />
                    <span className={this.state.validEmail ? "good-valid" : "wrong-valid"} >Email<i style={{ color: 'red' }} value="*">*</i></span>
                    { !isValidEmail && <p className="inputValidator">Valid email is required</p>}
                </div>

                <div className="inputBox">
                    <textarea style={{ paddingTop: "30px" }} type="textarea" rows="5" name="comment" required="required" value={this.state.comment} onChange={this.handleCommentInput} />
                    <span>{t('form-sell-comment')}</span>
                </div>
                <br />
                <div>
                    <Form.Check id="authorizationCheck" className={this.state.validAuth ? "good-valid" : "wrong-valid"} type="checkbox" name="authorization" label="J'autorise WMC à me contacter" value={this.state.authorization} onChange={this.handleCHeckBox} />
                </div>
                <br />

                {/* Send Button */}
                <div className="inputBox">
                    <input className="btn btn-lg btn-secondary" type="submit" name="" value={t('send')} onClick={this.handleSendButton} disabled={isValidEmail ? "" : "disabled"} />
                </div>
                <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>Nous achetons uniquement des montres 100% certifiées authentiques </p>
            </form>
        )
    }
}

export default withTranslation()(FormGlobal);