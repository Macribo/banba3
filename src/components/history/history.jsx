import React from 'react';
import '../concept/concept.css'
import './history.css';
import $ from 'jquery';
import { BtnA } from '../ui/btn-a'
import { BtnM } from '../ui/btn-m'
import { BtnB } from '../ui/btn-b'
import { BtnSelect } from '../ui/btn-select'
import { BtnStart } from '../ui/btn-start'
let avatar = localStorage.getItem('avatar');

// alert(avatar);
function setPlayerIcon() {

}
export class History extends React.Component {
    constructor() {
        super();
        this.state = {
            story: 0
        }
    }
    jQueryCode = () => {
        //jshint esversion:6






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
            if (story > 2) {

                // hum1.play();
            }
            //end of manifesto - begin game y/n?
            if (story === 22) {
                // playBtn.style.display='inline';
                // fwdBtn.style.animation='fade-out 0.25s forwards';
                // fwdBtn.style.visibility='hidden';
                // playBtn.style.animation='fade-in 1s';
                console.log("story === 5");
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


    }


    componentDidMount() {
        this.jQueryCode();

    }

    bBtnDown = (e) => {

        this.setState({ engMode: true })
        console.log("engMode:" + this.state.engMode)
    }
    bBtnUp = () => {
        this.setState({ engMode: false })

        console.log("engMode:" + this.state.engMode)
    }
    render() {





        return (
            <>
                <div id="history">

                    <div className="container" id="kungfu">

                        <div id="top" className="row justify-content-center ">

                            <div>
                                {
                                    this.props.engMode === true ?
                                        <>
                                            <h2 id="story-eng">{this.props.engTexts[this.state.story]}</h2>

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
                            <video autoPlay muted loop id="myVideo">
                                <source src="./fís/k0.mp4" type="video/mp4" />
                            </video>
                            <div id="middle-hist" className="justify-content-center">
                                <div className="row">

                                </div>


                            </div>





                            <div className="ui">


                            </div>

                            <div className="under-stage-left">

                                <div className="directional-pad">
                                    <div className='grid-container'>

                                        <div className="grid-item"></div>
                                        <div className="grid-item" id="north" onTouchEnd={ ()=>{this.setState({ story: this.state.story + 1 })}}>


                                        </div>
                                        <div className="grid-item" ></div>
                                        <div className="grid-item" id="west" onTouchEnd={ ()=>{this.setState({ story: this.state.story - 1 })}}>
                                        </div>
                                        <div className="grid-item" ><div className="btn-middle-history" /></div>
                                        <div className="grid-item" id="east"onTouchEnd={ ()=>{this.setState({ story: this.state.story + 1 })}}>

                                        </div>
                                        <div className="grid-item"></div>
                                        <div className="grid-item" id="south"
                                        onTouchEnd={ ()=>{this.setState({ story: this.state.story -1 })}}>
                                        </div>
                                        <div className="grid-item"></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                </div>
                <div className="output2" id="output2"></div>



            </>

        )
    }

}