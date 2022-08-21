<template>
    <div>
        <div class="backdrop" v-if="showModal" @click="showModal = false">
            <div class="send-message">
                <h4 v-html="sendedMessage"></h4>
            </div>
        </div>

        <form @submit.prevent="sendMessage()" class="contact" ref="form">
            <div class="input-group">
                <label for="email" class="email">Email*</label>
                <input type="email" id="email" name="email" :class="{error: emailError}" placeholder="example@email.de" v-model="email" required 
                @change="checkIfValid(); checkIfEmailValid()"
                @click="emailError = false">
                <p class="errorMessage" v-if="emailError">Bitte geben Sie eine valide Email an.</p>
            </div>

            <div class="input-group">
                <label for="name" class="name">Name*</label>
                <input type="text" id="from_name" name="from_name" :class="{error: nameError}" placeholder="Ihr Name" v-model="from_name" required 
                @change="checkIfValid(); checkIfNameValid()"
                @click="nameError = false">
                <p class="errorMessage" v-if="nameError">Ihr Name kann keine Ziffern oder Sonderzeichen enthalten.</p>
            </div>
            
            <div class="input-group">
                <label for="message" class="message">Nachricht*</label>
                <textarea id="message" name="message" rows="5" cols="20" placeholder="Ihre Nachricht an uns..." v-model="message" required @input="checkIfValid()"></textarea>
            </div>

            <label class="container" >
                <i :class="[isChecked ?  checked : notChecked]" @click="isChecked = !isChecked; checkIfValid()"></i>
                <p @click="isChecked = !isChecked; checkIfValid()" style="margin-bottom: 0px;">
                    Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. 
                    Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann.*
                </p>
                <input type="checkbox" name="checkbox" :value="isChecked" required>
            </label>

            <vue-recaptcha class="captcha" :sitekey="siteKey" @verify="onVerify" v-if="showCaptcha"></vue-recaptcha>

            <p>* Kennzeichnet erforderliche Felder</p>

            <input type="submit" value="Senden" :class="[isValid ?  validClass : invalidClass]" style="margin-bottom: 0px;"> 
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { VueRecaptcha } from 'vue-recaptcha';

var emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
var nameRegExp = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&§*(){}|~<>;:[\]]{2,}$/;

export default {
    name: "contactForm",
    components: { VueRecaptcha },
    props: [],
    data() {
        return {
            isChecked: false,
            isValid: false,
            email: "",
            from_name: "",
            message: "",
            emailError: false,
            nameError: false,
            checked: "fa-solid fa-square-check",
            notChecked: "fa-regular fa-square",
            validClass: "button",
            invalidClass: "button-invalid",
            service_id: "service_1h0khe5",
            template_id: "template_sczrwi4",
            public_key: "YRzBUQlhNlsHfhCSU",
            sendedMessage: "",
            showModal: false,
            siteKey: "6LfbzpUhAAAAAOQvpGqOLnsTEsJ6wZMSAoifDw0P",
            captcha: false,
            showCaptcha: false,
            captchaResponse: ""
        }
    },
    methods: {
        checkIfValid() {
            if(this.isChecked && this.checkIfEmailValid() && this.checkIfNameValid() && this.message) {
                if(this.captcha) {
                    this.isValid = true
                    return true
                } else {
                    this.showCaptcha = true
                    this.isValid = false
                    return false
                }
            } else {
                this.showCaptcha = false
                this.isValid = false
                return false
            }
        },
        onVerify(response) {
            if(response){
                this.captcha = true
                this.captchaResponse = response
                this.checkIfValid()
            }
        },
        sendMessage() {
            if(this.checkIfValid()) {
                emailjs.send(this.service_id,this.template_id,{
                    email: this.email,
                    from_name: this.from_name,
                    message: this.message,
                    "g-recaptcha-response" : this.captchaResponse
                }, this.public_key).then(() => {
                            this.sendedMessage = "Vielen Dank für Ihre Nachricht! Wir werden Ihnen sobald wie möglich antworten."
                            this.showModal = true
                        }, (err) => {
                            consolge.log("EMAIL ERROR", err)
                            this.sendedMessage = `Leider ist beim Senden Ihrer Nachricht etwas schiefgelaufen. Bitte versuchen Sie es doch noch einmal
                            oder senden Sie uns über ihr Mailprogramm eine Mail direkt an <a href="mailto:eurasier@bohland.org">eurasier@bohland.org</a>.`
                            this.showModal = true
                        });
                this.from_name = ""
                this.email = ""
                this.message = ""
                this.isChecked = false
                this.showCaptcha = false
                this.captchaResponse = ""
                this.checkIfValid()
            }
        },
        checkIfEmailValid() {
            if(emailRegExp.test(this.email)) {
                this.emailError = false
                return true
            } else {
                if(this.email) {
                    this.emailError = true
                } else {
                    this.emailError = false
                }
                
                return false
            }
        },
        checkIfNameValid() {
            if(nameRegExp.test(this.from_name)) {
                this.nameError = false
                return true
            } else {
                if(this.from_name) {
                    this.nameError = true
                } else {
                    this.nameError = false
                }
                return false
            }
        }

    }
}
</script>

<style scoped>
:root {
  --backgroundColor: #dcdece;
  --mainText: #333D29;
  --mainTextLight: #70875A;
  --linkText: #936639;
  --focusedText: #582F0E;
  --higlightedText: #04A0A2;
  --errorText: #8C0707;
}

.contact {
    display: flex;
    flex-direction: column;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
}

input, textarea {
    border-radius: 8px;
    border: 2px solid var(--mainText);
    padding: 8px;
    margin: 4px 0px 0px 0px;
    font-family: "Avenir", Verdana, Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: normal;
    resize: none;
    outline: none;
}

input:focus, textarea:focus{
    border: 2px solid var(--higlightedText);
}

input.error {
    border: 2px solid #8C0707;
}


label {
    color: var(--mainText);
    font-size: 1.2em;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 4px;
}

/* The container */
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

i {
    font-size: 1.6em;
    margin-right: 8px;
}

i.fa-square:hover {
    color: var(--higlightedText);
}

i.fa-square-check:hover {
    color: var(--higlightedText);
}


.button, .button-invalid, .button:focus {
    color: white;
    background-color: var(--higlightedText);
    border: 0px;
    font-size: 1.4em;
    font-weight: normal;
    font-style: normal;
    font-family: "Avenir", Verdana, Helvetica, Arial, sans-serif;
    padding: 8px;
}

.button-invalid {
    background-color: #6BBCBD;
}

p.errorMessage {
    color: #8C0707;
    font-size: 0.8em;
    margin: 0px;
    margin-top: 2px;
}

.send-message {
    width: 400px;
    padding: 32px;
    margin: 0px;
    background: white;
    border-radius: 8px;
}

@media(max-width: 800px) {
    .send-message {
        width: 80%;
    }
}

.send-message h4, p {
    margin: 0px;
}

.backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.captcha {
    margin-bottom: 24px;
}
</style>