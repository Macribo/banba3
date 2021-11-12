/* eslint-disable no-sparse-arrays */
import React from 'react';
import '../concept/concept.css'
import './intro.css';
import $ from 'jquery';
import { BtnSelect } from '../ui/btn-select';
import { BtnStart } from '../ui/btn-start';
import { Redirect } from "react-router-dom";
// import  LeftHalf  from '../../img/About1/0.png';
// import  RightHalf  from '../../img/';
import { BinaryCode } from '../binary-code/binaryCode';
import { BtnA } from '../ui/btn-a';
import { BtnM } from '../ui/btn-m';
import { BtnB } from '../ui/btn-b';
import mobile from '../../img/mobile.png';
import promptVid from '../../vid/blueRabbit.mp4';
import closer from '../../audio/closer.mp3';
import slowBleeps from '../../audio/closer.mp3';
import runLand from '../../vid/2.mp4'
import './typewrite.css'

;
import historyVid from '../../vid/blueRabbit.mp4';
import desktopVid from '../../vid/windows.mp4';
import blueRabbit from '../../img/About1/blue-rabbit.png';
import slide0 from '../../img/About1/0a.png'
import slide1 from '../../img/About1/1a.png';
import slide2 from '../../img/About1/bit.gif';
import slide4 from '../../img/About1/0b.png';
import slide3 from '../../img/About1/ogham-3.png'
import slide5 from '../../img/About1/2d.gif'
import slide6 from '../../img/About1/3.png'
import slide7 from '../../img/About1/4.png'
import slide8 from '../../img/About1/5.png'
import slide9 from '../../img/About1/6.png'
import slide10 from '../../img/About1/7.png'
import slide13 from '../../img/About1/2.gif'
import slide11 from '../../img/About1/logo@2x.png'
import slide14 from '../../img/About1/3.gif'
import slide15 from '../../img/About1/4.gif'
import slide16 from '../../img/About1/5.gif'
import slide17 from '../../img/About1/ascii.gif'
import slide18 from '../../img/About1/chief.png'
import slide19 from '../../img/About1/1798.png'
import slide21 from '../../img/About1/gpo.png'
import slide22 from '../../img/About1/feicimthu.png'
import fieldHor from '../../img/bg4.png'
import btn0 from '../../img/About1/0.png';
import btn1 from '../../img/About1/1.png';
import btn2 from '../../img/About1/2.png';
import btn3 from '../../img/About1/3.png';
import btn4 from '../../img/About1/4.png';
import btn5 from '../../img/About1/5.png';
import btn6 from '../../img/About1/6.png';
import btn7 from '../../img/About1/7.png';



import btn0Dark from '../../img/About1/og/0.png';
import btn1Dark from '../../img/About1/og/1.png';
import btn2Dark from '../../img/About1/og/2.png';
import btn3Dark from '../../img/About1/og/3.png';
import btn4Dark from '../../img/About1/og/4.png';
import btn5Dark from '../../img/About1/og/5.png';
import btn6Dark from '../../img/About1/og/6.png';
import btn7Dark from '../../img/About1/og/7.png';



let changeVid = () => {
    $('#history-vid').remove()
  
    $('#history').append(`
<video autoPlay muted loop id="history-vid">
                                <source id="history-vid" src=${blueRabbit} type="video/mp4" />
                            </video>
`)

}


let avatar = localStorage.getItem('avatar');
// alert(avatar);
function setPlayerIcon() {

}
export class Intro extends React.Component {
    constructor() {
        super();

        this.state = {
            redirect:null,
            story: 0,
            toggleStartOptions: false,
            showFromMenu: false
        }
    }


    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

    }
	toggleImg(imageId){

		return <>
			<img src={btn1} />
</>
	
    
// alert();
	}
    bBtnDown = (e) => {

        this.setState({ engMode: true })
        console.log("engMode:" + this.state.engMode)
    }
    bBtnUp = () => {
        this.setState({ engMode: false })

        console.log("engMode:" + this.state.engMode)
    }

    toggleStartOptions = () => {
        if (this.state.showFromMenu === true) {
            this.setState({ showFromMenu: false })
            console.log('showFromMenu ' + this.state.showFromMenu)
        }
        else if (this.state.showFromMenu === false)
            this.setState({ showFromMenu: true })
        console.log('showFromMenu ' + this.state.showFromMenu)


    }

    resize() {
        this.setState({ mobile: window.innerWidth >= 760 });
        this.setState({ mobileHor: window.innerWidth >= window.innerHeight });
    }

    linuxHistory = ()=>{
        // window.location.replace('http://167.172.184.73:3000/ls')
        this.setState({ redirect: "/ls" });
    }

    restartApp = ()=>{
        // window.location.replace('http://167.172.184.73:3000/ls')
        this.setState({ redirect: "/" });
    }


    incrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story + 1 }) }
    decrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story - 1 }) }
    decrementStoryByFour = (ev) => { ev.preventDefault();this.setState({ story: this.state.story - 4 }) }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        return (
            <>
                <div id="music" ></div>




                <div id="history">
                    {/* <video autoPlay muted loop id={this.state.story===1?"history-vid":"hidden"}>
                        <source id="history-vid" src={desktopVid} type="video/mp4" />
                    </video> */}
                    <video autoPlay muted loop id={this.state.story>=2?"history-vid":"hidden"}>
                        <source id="history-vid" src={historyVid} type="video/mp4" />
                    </video>
                    <div className="about-og">{this.state.story === 0 ? <img src={slide0} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 1 ? <img src={slide1} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 2 ? <img className="slide" src={slide0} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 3 ? <img src={slide2} alt="2 frames of animation, old school j-rpg swishing blue cape. reversing." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 4 ? <img src={slide4} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 5 ? <img src={slide4} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 6 ? <img src={slide5} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about-og">{this.state.story === 7 ? <img src={slide6} alt="eye of a wild wounded hawk." /> : null}
                    </div>
                    <div className="about-og">{this.state.story === 8 ? <img src={slide7} alt="Shore. wild sky." /> : null}
                    </div>

                    <div className="about-og" id="aoife">{this.state.story === 9 ? <img src={slide8} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about-og">{this.state.story === 10 ? <img src={slide9} alt="." /> : null}
                    </div>

                    <div className="about-og">{this.state.story === 11 ? <img src={slide10} alt="." /> : null}
                    </div>


                    {/* <div className="about">{this.state.story === 15 ? <img src={slide16} alt="." /> : null}
                    </div> */}

{/* 
                                    <div className="about">{this.state.story === 12 ? <img src={slide} alt="." /> : null}
                    </div> */}
                    <div className="about-og">{this.state.story === 12 ? 
                        <>
                        <div className="bits-holder">

                            
                            <img src={slide13}  className="about-og bits" alt="representation of bits" />
                            <br />
                            
                            <img src={slide14}  className="about-og bits" alt="representation of bits" />
                            <br />
                            <img src={slide15}  className="about-og bits" alt="representation of bits" />
                            <br />
                            
                                                        
                            <img src={slide13}  className="about-og bits" alt="representation of bits" />
                            <br />
                            
                            <img src={slide16}  className="about-og bits" alt="representation of bits" />
                            <br />
                            <img src={slide14}  className="about-og bits" alt="representation of bits" />
                            <br />
                            
                            <img src={slide15}  className="about-og bits" alt="representation of bits" />
                            
                        </div>
                         </>: null}
                    </div>
                    <div className="about-og">{this.state.story === 13 ? 
                        
                        
                        <>
                        <div className="bits-holder">

                            
<img src={slide13}  className="about-og bits faint" alt="representation of bits" />
<br />

<img src={slide14}  className="about-og bits faint" alt="representation of bits" />
<br />
<img src={slide15}  className="about-og bits faint" alt="representation of bits" />
<br />

                            
<img src={slide13}  className="about-og bits faint" alt="representation of bits" />
<br />

<img src={slide16}  className="about-og bits faint" alt="representation of bits" />
<br />
<img src={slide14}  className="about-og bits faint" alt="representation of bits" />
<br />

<img src={slide15}  className="about-og bits faint" alt="representation of bits" />
<img src={slide17}  className="about-og ascii" alt="representation of bits" />

</div>
 </>: null}
                    </div>
                    {/* <div className="about-og">{this.state.story === 14  ? <img src={slide21} alt="1935 – The Death of Cúchulainn, by Oliver Sheppard" /> : null}</div> */}

                    <div className="about about-soc">{this.state.story === 18 || this.state.story === 19 ? <img src={slide22} alt="social media icons" /> : null}</div>

                    <div className="container" id="kungfu">

                        <div id="top" className="row justify-content-center ">

                          
                        </div>

                        <div id="middle" className="row justify-content-center">



                            <div id="middle-hist" className="justify-content-center">
                                <div className="row">
                                </div>


                            </div>



                            <div className="ui">


                            </div>

                            <div className="under-stage-left">

                            </div>


                        </div>
                    </div>



                </div>
                <div className="output2" id="output2"></div>


                <div className="select-and-start-btns-history">
                    <BtnSelect onClick={this.toggleStartOptions} />
                    <BtnStart 
                    onTouchStart={this.bBtnDown} onTouchEnd={this.bBtnUp} >

                    </BtnStart>


                </div>
                <div className="directional-pad-hist">
                    <div className='grid-container'>

                        <div className="grid-item"></div>
                        <div className="grid-item" id="north"  onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >


                        </div>
                        <div className="grid-item" ></div>
                        <div className="grid-item" id="west"  onMouseUp={this.decrementStory} onTouchEnd={ this.decrementStory}  >
                        </div>
                        <div className="grid-item" ><div className="btn-middle-history" /></div>
                        <div className="grid-item" id="east"  onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >

                        </div>
                        <div className="grid-item"></div>
                        <div className="grid-item" id="south"
                        onMouseUp={this.decrementStory} onTouchEnd={ this.decrementStory} >
                        </div>
                        <div className="grid-item"></div>
                    </div>
                </div>


                <div className="select-options">

                    <button className="start-options-button" onTouchStart={this.setGerman}>
                        <img src="german" alt="German flag" /></button>

                    <button className="start-options-button" onTouchStart={() => { this.setState({ german: true, english: false, polish: false }) }}> <img src="polish" alt="Polish flag" /></button>
                    <button className="start-options-button" onTouchStart={() => { this.setState({ german: false, english: true, polish: false }) }}> <img src="english" alt="English flag" /></button>

                </div>


                {this.state.mobile ? <div id='prompt-hor'>
							<video autoPlay muted loop id="prompt-vid"><source src={runLand} type="video/mp4" alt=" remember the dream speed of falling and fly along the memory of wind" /></video>
                            <div className="container">

                            <div class="typed-out"></div>
                            </div>
							<div id="hills-overlay" />


							{this.state.engMode ? <><h3>For visitors on desktop please press 12 or right click and select inspect. Then  select </h3> <img alt="toggle mobile icon" src={mobile}></img><p>chun aithris a dhéanamh ar gléas soghluaiste</p><p>to simulate mobile device</p></> : <div className="mobile-mode"><img alt="toggle mobile icon" src={mobile}></img></div>}<br />
							{/* <img id="ciaroga" src={ciaroga} /> */}
						</div> : null


						}

              {this.state.showFromMenu ?
                <div className="fromLang">
                        <button className="from-options-button fromEng" onTouchStart={this.handleFromLang}>E</button>
                        <button className="from-options-button fromGae" onTouchStart={this.handleFromLang}>G</button>
                        <button className="from-options-button fromPol" onTouchStart={this.fromPol}>P</button>

                </div> :null}
                {/* 
                <div className="toLang">

                <div className="to-options">
                <button className="to-options-button fromEng" onTouchStart={this.handleFromLang}>E</button>
                <button className="to-options-button fromGae" onTouchStart={this.handleFromLang}>G</button>
                    <button className="to-options-button fromPol" onTouchStart={this.handleFromLang}>P</button>
                </div>

                </div> */}
 
 
 
				{/* <div id="ogham-0">

<img  alt="representation of binary 000" className="ogham-element" src={btn0Dark}></img>
<img  alt="representation of binary 001"  className="ogham-element"  src={btn1Dark}></img>
<img alt="representation of binary 010" className="ogham-element"src={btn2Dark}></img>
<img alt="representation of binary 011" className="ogham-element"src={btn3Dark}></img>
<img alt="representation of binary 100" className="ogham-element" src={btn4Dark}></img>
<img alt="representation of binary 101" className="ogham-element"src={btn5Dark}></img>
<img alt="representation of binary 110" className="ogham-element" src={btn6Dark}></img>
<img alt="representation of binary 111" className="ogham-element"src={btn7Dark}></img>

</div> */}

<div className="left-half-container">
{/* <img src={LeftHalf} id='left-half' alt="right frame of screen." /> */}

</div>
<div className="right-half-container">

<div id="story-hoss">
                                {
                                    this.props.engMode === true ?
                                        <>
                                            <h2 className="the-craic" id="storyTexts" onTouchEnd={this.incrementStory}>{this.props.engTexts[this.state.story]}</h2>
                                        </>
                                        :

                                        null}
                                {this.props.engMode === false ?

                                    <>
                                        <h2 className="the-craic" id="story" >{this.props.storyTexts[this.state.story]}</h2>

                                    </>
                                    : null}
                            </div>

                             <div id= { this.state.story=== 2?"choices":"hide"}>
                                    <button className="choices-btns the-craic" id="choices-0" onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >a náid</button>
                                    <br/>
                                    <button className="choices-btns the-craic" id="choices-1" onMouseUp={this.decrementStory} onTouchEnd={ this.decrementStory}  >a haon</button>
                                    
                             </div>


                             <div id= { this.state.story=== 4?"choices":"hide"}>
                                    <button className="choices-btns the-craic" id="choices-0" onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >a náid</button>
                                    <br/>
                                    <button className="choices-btns the-craic" id="choices-1" onMouseUp={this.decrementStoryByFour} onTouchEnd={ this.decrementStoryByFour}  >a haon</button>
                                    
                             </div>


                             <div id= { this.state.story=== 11?"choices":"hide"}>
                                    <button className="choices-btns the-craic" id="choices-0" onMouseUp={this.decrementStoryByFour} onTouchEnd={ this.decrementStoryByFour}  >a náid</button>
                                    <br/>
                                    <button className="choices-btns the-craic" id="choices-1" onMouseUp={this.incrementStory} onTouchEnd={ this.incrementStory}  >a seacht</button>
                                    
                             </div>


                             <div id= { this.state.story=== 14?"choices":"hide"}>
                                    <button className="choices-btns the-craic" id="choices-0" onTouchEnd={ this.linuxHistory}  ><img src={blueRabbit} alt="" /></button>
                                    <br/>
                                    <button className="choices-btns the-craic" id="choices-1" onMouseUp={this.decrementStoryByFour} onTouchEnd={ this.restartApp}  >Siar</button>
                                    
                             </div>

</div>
            </>

        )
    }

}