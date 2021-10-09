/* eslint-disable no-sparse-arrays */
import React from 'react';
import '../concept/concept.css'
import './history.css';
import $ from 'jquery';
import { BtnSelect } from '../ui/btn-select';
import { BtnStart } from '../ui/btn-start';
import { BtnA } from '../ui/btn-a';
import { BtnM } from '../ui/btn-m';
import { BtnB } from '../ui/btn-b';
import mobile from '../../img/mobile.png';
import promptVid from '../../vid/j1.mp4';
import closer from '../../audio/closer.mp3';
import slowBleeps from '../../audio/closer.mp3';


import historyVid from '../../vid/windows.mp4';
import blueRabbit from '../../vid/blueRabbit.mp4';
import slide0 from '../../img/About1/backgrounds/meafar-0.jpg';
import slide1 from '../../img/About1/mouse-icons/mouse-arrow.png';
import slide2 from '../../img/About1/backgrounds/ubuntu-landscape.png';
import slide3 from '../../img/About1/amergin.png'
import slide4 from '../../img/About1/blue-cape.gif'
import slide5 from '../../img/About1/apple-microsoft.png'
import slide6 from '../../img/About1/linux-logo.png'
import slide7 from '../../img/About1/blue-cape.gif'
import slide8 from '../../img/About1/linux.png'
import slide9 from '../../img/About1/storm.png'
import slide11 from '../../img/About1/banba_poster-0.png'
import slide13 from '../../img/About1/king.gif'
import slide14 from '../../img/About1/Daniel-Maclise.png'
import slide15 from '../../img/About1/pale.png'
import slide16 from '../../img/About1/ard.png'
import slide17 from '../../img/About1/spencer.png'
import slide18 from '../../img/About1/chief.png'
import slide19 from '../../img/About1/1798.png'
import slide21 from '../../img/About1/gpo.png'
import slide22 from '../../img/About1/feicimthu.png'



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
export class History extends React.Component {
    constructor() {
        super();

        this.state = {

            story: 0,
            toggleStartOptions: false,
            showFromMenu: false
        }
    }
    jQueryCode = () => {
        //jshint esversion:6

        //music
        var bleeps = document.createElement('audio');
        bleeps.setAttribute('src', `${closer}`);

        var bleepsSlow = document.createElement('audio');
        bleepsSlow.setAttribute('src', `${slowBleeps}`);








        // $('#overlay-bearla').t('<h1>Name:</h1>');
        $('#shield-holder').on('touchstart', function () {
            $('#overlay-bearla').fadeIn();



        });
        $('#shield-holder').on('touchend', function () {
            $('#overlay-bearla').fadeOut();


        })
        //   let overlayBearla =   document.getElementById('overlay-bearla');
        //   let touchFís = (e) =>{
        // // overlayBearla.style();
        // alert();
        // }
        // let touchFísEnd = () =>{
        //   // alert('end')

        //   }

        let story = 0;





        //Initialize the gameMessage
        var gameMessage = ``;





        $('#south').on('touchend', function () {
            story--;

        });


        $('#east').on('touchend', function () {
            // alert(story)
            story++;


            playGame();
            refresh();


        });
        $('#west').on('touchend', function () {
            story--;
            playGame();
            refresh();

        });

        $('#north').on('touchend', function () {
            stepBack();
            story++;

            playGame();
            refresh();

        });

        let engTexts = [
            `Long long ago...`,
            `
            According to legend,
            Gaelic people descend
            from an Iberian tribe
            called the Milesians. 
            `,
            `Breogán son of Brath
            son of Bile Galamh Míl Espáine
            had seven sons 
            `,
            `    One of whom
              was named
            <br/>Amergin <br/>
            of the Bright Knees<span ">*</span><br/>
            Soldier of Spain <br/>
            <br/>
        <h5 >    *Birth of Song  </h5>
            
            `,
            `Amergin 
           and the Milesians
           voyaged to the island of
            the Dé Dannan tribe.`,
            `The druids of Dé Danann 
            raised a magical storm
            to keep Amergín’s 
            expedition from reaching land. 
            `,
            `But Amergín had powers of poetry`,

            `I am the wind which breaths upon the sea<br/>
          I am the wave of the ocean<br/>
          I am the murmur of the billows`,

            `I am Stag of Seven Tines<br/>
          I am a Hawk on a Cliff<br/>
          I am a beam of the sun<br/>
          I am the fairest of plants`,

            `I am a word of science<br/>
           I am the point of the lance of battle`,
            `...(I am) a Song on a Spear<br/>
           an Enchantment of Winds.`
            ,
            `The kings of Dé Danann 
        were killed in single combat
         by the sons of Míl Espáine.`

            ,

            `The Dé Danann 
        retreated into the Earth,
        and for thousands of years 
        Gaelic civilization 
        flourished in Ireland.`
            ,

            `In <span style="color:white">1169 CE</span>, deposed King Diarmait Mac Murchada solicited Norman Mercenaries to quell rebellion in Leinster.`
            ,
            `King Henry II of England used this to declare the conquered cities 
        crown-land. So began 800 years of English rule in Ireland.`
            ,

            `By 1500 AD, despite centuries of military campaigning,
        English law existed only around Dublin Castle.`
            ,

            `
        Beseiged Gaelic Italian and Spanish forces were slaughtered at Ard na Caithne in Corca Dhuibhne, by lord Grey de Wilton.`
            ,
            `After the 'Grey faith' massacre, Edmund Spencer wrote to Queen Elizebeth, and explained why the Irish kept resisting English rule:`
            ,


            `"Soe that the speach being Irish, 
        the hart must needes be Irishe; 
        for out of the aboundance of the hart, 
        the tonge speaketh"<br/>
        <h6>A Veue of The Present State of Ireland</h6>`
            ,
            `Gaelic Ireland's final strongholds fell and as the last Ulster chieftains were forced into exile, So ended the Gaelic order.`,


            `Edmund Spencer was wrong.
            The heart can be Irish, whilst the tongue speaks English. 
        
            `,
            `When the tongue is Gaelic, what speaketh the heart ?
            
           
            </p> </span>`,










        ]
        let storyTexts = [

            `Fadó fado...`,
            `Ón treabh Ibírach 'Míl Espáine'
     a dtagann na Gael,
     de réir na finscéalíochta. 
    `,
            `Bhí seachtar ag Galamh mac Bile mac Brath Míl Espáine,`,

            `File agus draoí dunne den seachtar,<br/> 
    Amergin Glúingel Míl Espáine.`,

            `Thóg Amergín ar aistear mara go hOileann na Tuaithe Dé Danann a muintir.`,

            `Chas draoithe Dé Danann na Mílaoisigh síar le stoirm dríochta`,

            `Ach bhí bua na filíochta ag Amergin...`,
            `<span style="font-family:aonchlo;font-weight: 900;">Am gaeth i m-muir <br/>
Am tond trethan<br/>
Am fuaim mara...</span>
`,
            `<span style="font-family:aonchlo;font-weight: 900;">Am dam seċt ndirend <br/>
Am séig i n-aill<br/>
Am dér gréne<br/>
Am cain lubai...</span>
`,

            `<span style=" font-family:aonchlo;font-weight: 900;">Am bri danae<br/>
Am bri i fodb fras feoċtu<br/>
Am dé delbas do ċind codnu...</span>
`,
            `<span style=" font-family:aonchlo;font-weight: 900;">...Cáinte im gai<br/> 
cainte gaiṫe.</span>
`,

            `
Chiúnaigh an stoirm.
Bris na Míl Espáinaigh 
ar forsaí Dé Dannan.
`,
            `Cúlaigh na Túithe 
agus lonnaigh na Mílaoisigh in Éireann.
Bin tús cíannta Gaelach, de réir an finscéalíocht.`,

            `I <span style="color:goldenrod">1169 AD</span>, Lorg Rí theistithe Diarmait Mac Murchada cabhair galamhas Normánach chun éirí amach Laighean a chuir faoi chois.`
            ,
            `Tapaidh Anraí II an deis úinéireacht a maíomh ar na ionnaíthe treascartha. Sin mar a thosnaigh 800 blíain Sasannachas in Éireann.`
            ,

            `In aineoinn fachtasíocht mílata na cheadta blíana,
Faoí 1500AD, Ní raibh dlí Sassanach i bheidhm ach tímpeal ar caisleán Átha Cliath.`
            ,

            `
<span style="color:goldenrod">1580AD</span> <br/>
Slad Tiarna Grey de Wilton forsaí Gaelach Idálach agus Spánach i Ard na Caithne in Corca Dhuibhne.`
            ,
            `Bhí an file Edmund Spencer i finné an slad. Mínigh sé dá ḃanríonn  "why the Irish keep resisting English rule":`
            ,

            `"Soe that the speach being Irish, 
the hart must needes be Irishe; 
for out of the aboundance of the hart, 
the tonge speaketh"<br/>
<h6>A Veue of The Present State of Ireland</h6>`
            ,
            `Briseadh ar daingeannacha na Gael i <span style="color:goldenrod">1607AD</span>.
    Díbríodh na Taoisaigh, 
    agus bin an ord ársa Gaelach 
   briste ar deireadh.`,

            `Tá rogha Gaelach aisghabhtha againn ar bhonn prionsabal oideachas agus dlí.`,
            `When the tongue is Gaelic, what sayeth the heart?`

        ];
        let storyGer = [
            `Vor langer, langer Zeit...`,
            `
            Der Legende nach,
            Gälische Menschen steigen ab
            von einem iberischen Stamm
            genannt die Milesianer. 
            `,
            `Breogán von Brath
            von Bile Galamh Míl Espáine
            hatte sieben Söhne 
            `,
            ` Einer von ihnen
              hieß
           Amergin
            Geburt des Liedes
            Soldat von Spanien 
            
            `,
            `Amergin 
           und die Milesier
           auf der Reise zur Insel
            der Stamm der Dé Dannan`,
            `Die Druiden von Dé Danann 
            hob einen magischen Sturm 
             
            Expedition Amergin vor dem Erreichen des Landes. 
            `,
            `Aber Amergin hatte die Kraft der Poesie`,

            `<h5>Ich bin der Wind, der auf dem Meer atmet
          Ich bin die Welle des Ozeans
          Ich bin das Murmeln der Wogen`,

            `Ich bin Hirsch von sieben Zinken
          Ich bin ein Falke auf einer Klippe
          Ich bin ein Strahl der Sonne
          Ich bin die schönste aller Pflanzen`,

            , `Ich bin ein Wort der Wissenschaft
           Ich bin die Spitze der Lanze der Schlacht`,
            `...(Ich bin) ein Lied auf einem Speer
           ein Zauber der Winde.`
            ,
            `Die Könige von Dé Danann 
        wurden in Einzelkampf getötet.
         von den Söhnen von Míl Espáine.`

            ,

            `Der Dé Danann 
        zog sich in die Erde zurück,
        und seit Tausenden von Jahren 
        Gälische Zivilisation 
        blühte in Irland auf.`
            ,

            `In 1169 CE, forderte der abgesetzte König Diarmait Mac Murchada normannische Söldner auf, die Rebellion in Leinster niederzuschlagen.`
            ,
            `König Heinrich II. von England benutzte dies, um die eroberten Städte zu erklären 
        Kronland. So begannen 800 Jahre englischer Herrschaft in Irland.`
            ,

            `Um 1500 n. Chr., trotz jahrhundertelanger militärischer Kampagnen,
        Englisches Recht existierte nur rund um das Dubliner Schloss.`
            ,

            `
        Belagerte gälische italienische und spanische Truppen wurden bei Ard na Caithne in Corca Dhuibhne von Lord Grey de Wilton abgeschlachtet.`
            ,
            `Nach dem 'Grey faith'-Massaker schrieb Edmund Spencer an Königin Elizebeth und erklärte, warum die Iren sich weiterhin der englischen Herrschaft widersetzten: `
            ,


            `"Sooo, dass die Rede irisch ist, 
        der Hirsch muss Irishe sein; 
        denn aus dem Überfluss des Hirsches 
        die Tonge spricht"
        -Eine Warteschlange des gegenwärtigen Staates Irland`
            ,
            `Die letzten Hochburgen des gälischen Irland fielen, und als die letzten Ulster Häuptlinge ins Exil gezwungen wurden, endete die gälische Ordnung.`,


            `Edmund Spencer lag falsch.
            Das Herz kann irisch sein, während die Zunge Englisch spricht. 
        
            `,
            `Aber wenn die Zunge gälisch ist, was sagt das Herz?
        
            `



        ]



        function narrate(story) {
            $('#top-content-ire').html = storyTexts[story];
            $('#top-content-eng').html = storyTexts[story];
            console.log("test! " + story);
        }
        //test

        function stepBack() {
            story--;
            playGame();
        }
        function stepFwd() {
            story++;
            playGame();
        }
        function playGame() {
            narrate(story);
            console.log("hello narrate!");
            progressStory(story);
            console.log(story);
        }

        function progressStory() {

            if (story > 1) {
                // bckBtn.style.display = 'inline';
                // bckBtn.style.animation = 'delay-fade-in 1s';
                // fwdBtn.style.animation = 'slide-button-right 1s forwards';
                console.log("hello bckBtn?");
            }
            else {
                //I want this, it's not working yet:
                //bckBtn.style.animation='fade-out 0.25s forwards';
                //instead, I'm just setting display to 'none'
                // bckBtn.style.display = 'none';
                // fwdBtn.style.animation = 'slide-button-left 1s forwards';

            }
            if (story === 7) {
                // bleeps.play()
            }
            if (story === 11) {
                // bleeps.pause();
                // bleepsSlow.play();

            }
            if (story === 12) {
                // bleepsSlow.pause();

            }
            if (story === 17) {

                if (bleepsSlow.paused === false) {
                    // bleepsSlow.pause();
                } else {
                    // bleepsSlow.play();
                }
                // alert("story = 22");
            }
            if (story === 16){
                changeVid();

            }
            if (story === 20) {

                // playBtn.style.display='inline';
                // fwdBtn.style.animation='fade-out 0.25s forwards';
                // fwdBtn.style.visibility='hidden';
                // playBtn.style.animation='fade-in 1s';
                window.location.replace('http://167.172.184.73:3000/champions')
            }



        }


        function refresh() {
            //Render the location
            // output.innerHTML = map[mapLocation];
            // image.src = "../images/" + images[mapLocation];



            //Display the game message

        }

        // $('#myVideo').touchstart(function () {
        //     alert();
        // });

        let historyVid = document.getElementById('history-vid');
        historyVid.playbackRate = 0.6;
    }


    componentDidMount() {
        this.jQueryCode();
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

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

    incrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story + 1 }) }
    decrementStory = (ev) => { ev.preventDefault();this.setState({ story: this.state.story - 1 }) }
    render() {


        return (
            <>
                <div id="music" ></div>
                <div id="history">
                    <video autoPlay muted loop id="history-vid">
                        <source id="history-vid" src={historyVid} type="video/mp4" />
                    </video>

                    <div className="about">{this.state.story === 0 ? <img src={slide0} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about">{this.state.story === 1 ? <img src={slide1} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about">{this.state.story === 2 ? <img class="slide" src={slide1} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about4">{this.state.story === 3 ? <img src={slide5} alt="2 frames of animation, old school j-rpg swishing blue cape. reversing." /> : null}
                    </div>
                    <div className="about4">{this.state.story === 4 ? <img src={slide2} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about">{this.state.story === 5 ? <img src={slide6} alt="slide illustritative of text." /> : null}
                    </div>
                    <div className="about">{this.state.story === 6 ? <img src={slide6} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about">{this.state.story === 7 || this.state.story === 8 || this.state.story === 9
                        || this.state.story === 10

                        ? <img src={slide8} alt="eye of a wild wounded hawk." /> : null}
                    </div>
                    <div className="about about13">{this.state.story === 11 ? <img src={slide13} alt="Shore. wild sky." /> : null}
                    </div>

                    <div className="about about14" id="aoife">{this.state.story === 12 ? <img src={slide14} alt="slide illustritative of text." /> : null}
                    </div>

                    <div className="about ">{this.state.story === 13 ? <img src={slide16} alt="." /> : null}
                    </div>

                    <div className="about ">{this.state.story === 14 ? <img src={slide17} alt="." /> : null}
                    </div>


                    {/* <div className="about">{this.state.story === 15 ? <img src={slide16} alt="." /> : null}
                    </div> */}


                                    <div className="about">{this.state.story === 15 ? <img src={slide18} alt="." /> : null}
                    </div>
                    <div className="about">{this.state.story === 16 ? <img src={slide19}  id="rebel" alt="." /> : null}
                    </div>

                    <div className="about">{this.state.story === 17  ? <img src={slide21} alt="1935 – The Death of Cúchulainn, by Oliver Sheppard" /> : null}</div>

                    <div className="about about-soc">{this.state.story === 18 || this.state.story === 19 ? <img src={slide22} alt="social media icons" /> : null}</div>

                    <div className="container" id="kungfu">

                        <div id="top" className="row justify-content-center ">

                            <div id="story-hoss">
                                {
                                    this.props.engMode === true ?
                                        <>
                                            <h2 id="storyTexts">{this.props.engTexts[this.state.story]}</h2>
                                        </>
                                        :

                                        null}
                                {this.props.engMode === false ?

                                    <>
                                        <h2 id="story">{this.props.storyTexts[this.state.story]}</h2>

                                    </>
                                    : null}
                            </div>

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
                    <>
                        <video autoPlay muted loop id="prompt-vid"><source src={promptVid} type="video/mp4" alt=" fly the winds" /></video>
                        <h2 className="mobile-mode">
                            I gcomhair cuirteoirí ar ríomhaire baile, brú <span id="f12">f12</span> nó clé-clic agus roghnaigh <span id="inspect">inspect</span>, le do thoil. Ansin roghnaigh </h2><img alt="toggle mobile icon" src={mobile}></img> <h4>chun aithris a dhéanamh ar gléas soghluaiste   |   to simulate mobile device</h4></><br /> </div> : null
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
            </>

        )
    }

}