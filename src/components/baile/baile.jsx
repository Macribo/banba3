import React from 'react';
import './baile.css'
export class Baile extends React.Component {

	constructor() {
		super();
		this.state = {
		}

		var gameMap =
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

		var gameObjects =
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, "P", 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
		var PLAYER = "P";
	
	
	    var playerRow;
    var playerColumn;
	var ROWS = gameMap.length;
    var COLUMNS = gameMap[0].length;

    for (var row = 0; row < ROWS; row++) {
        for (var column = 0; column < COLUMNS; column++) {
            if (gameObjects[row][column] === PLAYER) {
                playerRow = row;
                playerColumn = column;
            }



        }
        // gameObjects[playerRow][playerColumn] = '../img/characters/feitheamh1.gif'

    }

	}




	render() {
		return (
			<>

            

				<div className="baile">

					<div className="sea"></div>
					<div className="countyMap"></div>

					<div id="middle-hist" className="justify-content-center">

						<div id="stageBG">
{}
						</div>
						<div id="tall-order" className="justify-content-center">
							<div id="stage"></div>

						</div>

					</div>
				</div>
			</>

		)
	}

}