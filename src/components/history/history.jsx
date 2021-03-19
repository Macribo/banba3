import React from 'react';
import '../concept/concept.css'
import './history.css';
import $ from 'jquery';
import { BtnA } from '../ui/btn-a'
let avatar = localStorage.getItem('avatar');

// alert(avatar);
function setPlayerIcon() {

}
export class History extends React.Component {
    constructor() {
        super();
        this.state = {
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

        let story = 2;





        //Initialize the gameMessage
        var gameMessage = ``;






        $('#fwdBtn').on('touchend', function () {
            // alert(story)
            // story++;
        });


        function narrate(story) {
            // output2.innerHTML = storyTexts[story];
            // output2.className=''; 
            console.log("test! " + story);
        }
        //test

        function stepBack() {
            // story--;
            playGame();
        }
        function stepFwd() {
            // story++;
            playGame();
        }
        function playGame() {
            narrate(story);
            console.log("hello narrate!");
            render();
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
            if (story === 5) {
                // playBtn.style.display='inline';
                // fwdBtn.style.animation='fade-out 0.25s forwards';
                // fwdBtn.style.visibility='hidden';
                // playBtn.style.animation='fade-in 1s';
                console.log("story === 5");
            }
            if (story === 1) {


            }
            if (story === 2) {
                // setTimeout(function () { cubes.style.display = "inline"; }, 1000);
                // setTimeout(function () { cubes.style.display = "none"; }, 3500);
                // output2.style.top = "-399px";
                // output2.style.left = "150px";

            }

            if (story === 3) {
                // output2.style.top = "-520px";
                // output2.style.left = "-100px";

            }

            if (story === 4) {
                //update button styles if player is coming back from events on story 5 
                // fwdBtn.style.left='-42px';
                // fwdBtn.style.display='inline';
                // fwdBtn.style.visibility='visible';
                // playBtn.style.display='none';
            }



        }


        function render() {
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

    render() {





        return (
            <>
                <div id="history">
                    <BtnA id="next" />

                    <div class="container" id="kungfu">

                        <div id="top" class="row justify-content-center ">
                            <h4 id="top-content">select language:</h4>
                        </div>


                        <div id="middle" class="row justify-content-center">
                            <video autoplay muted loop id="myVideo">
                                <source src="./fís/k0.mp4" type="video/mp4" />
                            </video>
                            <div id="middle-hist" class="justify-content-center">
                                <div class="row">

                                </div>


                            </div>

                            <img id="shield-holder" class="img-fluid" src="./img/deetsFrame.png"/>

                                <div class="flegs col-md-8 mx-auto">
                                    <div id="ó"><img id="anÓImgFéin" src="./img/btn-icons/0.png"/></div>
                                        <div id="go">
                                            <img id="anGoImgFéin" src="./img/btn-icons/1.png"/>
    </div>

                                        </div>
                                        <div class="btn-group" role="group" aria-label="Basic example">
      
       <button type="button" id="prev" class="btn  btn-secondary"><img src="./img/nav/left.png" alt="left-btn"/> </button>
                                                <button type="button" id="next" class="btn btn-secondary"><img src="./img/nav/right.png" alt="right-btn"/>   </button> </div> 
        
        <button type="button" id="dev" class="btn btn-secondary">Dev</button>
  </div>
                                        </div>



</div>


            </>

        )
    }

}