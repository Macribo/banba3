import React from 'react';
import './baile.css';
import $ from 'jquery';

export class Baile extends React.Component {

    constructor() {
        super();
        this.state = {
        }

    }

    jQueryCode = () => {

        var map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        //Map code
        var WATER = 0;
        var ISLAND = 1;
        var PIRATE = 2;
        var HOME = 3;
        //The size of each cell
        var SIZE = 10;
        //The number of rows and columns
        var ROWS = map.length;
        var COLUMNS = map[0].length;
        refresh();
        function refresh() {
            //Clear the stage of img tag cells
            //from the previous turn

            //refresh the game by looping through the map arrays
            for (var row = 0; row < ROWS; row++) {
                for (var column = 0; column < COLUMNS; column++) {
                    //Create an img tag called cell
                    var cell = document.createElement("img");
                    //Set its CSS class to "cell"
                    cell.setAttribute("class", "cell");
                    //Add the img tag to the <div id="stage"> tag
                    $('#stage').append(cell);
                    //Find the correct image for this map cell
                    switch (map[row][column]) {
                        case WATER:
                            cell.src = "../images/water.png";
                            break;
                        case ISLAND:
                            cell.src = "../images/island.png";
                            break;
                        case PIRATE:
                            cell.src = "../images/pirate.png";
                            break;
                        case HOME:
                            cell.src = "../images/home.png";
                            break;
                        default: break
                    }
                    //Position the cell
                    cell.style.top = row * SIZE + "%";
                    cell.style.left = column * SIZE + "%";
                }
            }



        }
    }
    componentDidMount() {
        this.jQueryCode();
    }

    render() {
        return (
            <>

                <div className="container">
                    <div id="stage"></div>
                    <p id="output"></p>
                </div>
            </>

        )
    }

}