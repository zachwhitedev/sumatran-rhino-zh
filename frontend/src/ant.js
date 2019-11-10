body {
    background-color: rgb(218, 217, 216);
}
h1,
h2 {
    margin: 10px;
    margin-bottom: 25px;
    font-family: ‘Montserrat Alternates’, sans-serif;
    text-shadow: 2px 2px 2px #86C6EC;
}
.button-container{
    text-align: center;
}
@media only screen and (min-width:723px){
    .button-container{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        text-align: -webkit-center;
    }
    .answer {
        margin-bottom: 20px;
        font-size: 20px;
    }
}
.answer {
    border: 1px solid #3B88CA;
    padding: 5px 10px 5px 20px;
    width: 100%;
    padding-left: 30px;
    position: relative;
}
.answer.selected {
    color: #4F4C4C;
    background-color: #85F96A;
    margin-right: 5%;
}
.answer:hover {
    color: #4F4C4C;
    background-color: #85F96A;
}
.answer:focus {
    outline: none;
}
.results span.correct {
    color: #C8FFBB;
}
.results span.failed {
    color: #941313;
}
.error {
   color:  #941313;
}
.letter {
    color: #4F4C4C;
    width: 30px;
    position: absolute;
    left: 0;
    text-align: center;
    height: 28px;
    top: 0;
    padding: 5px;
    text-transform: uppercase;
}
.btn {
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    margin-right: 5%;
    outline: none;
}
.confirm-button {
    margin-top: 5px;
    text-align: left;
}
.btn-stop {
    color: #4F4C4C;
    background-color: #07D1FF;
    font-weight: bold;
    border-radius: 42%;
    box-shadow: 13px 11px 7px #0000009E;
    outline: none;
}
.btn-stop:hover {
    color: #4F4C4C;
    background-color: #0691B1;
    font-weight: bold;
    border-radius: 42%;
    box-shadow: 13px 11px 7px #0000009E;
    outline: none;
}
.bubble-container {
    text-align: right;
    margin-right: 163px;
}
@media only screen and (min-width: 630px){
    .bubble-container {
        margin-right: 205px;
    }
}
.hello {
    max-width: 175px;
    margin-top: 20px;
    padding-top: 35px;
}
.rhino-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: -27px;
}
.btn:focus {
    outline: none !important;
}
.grass-container {
    text-align: left;
}
img {
    width: 11.5em;
}