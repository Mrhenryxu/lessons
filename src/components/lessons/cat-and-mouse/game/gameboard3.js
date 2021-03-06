const map = [
	{		// Game start
		id: 1,		// 0
		result: null,		// 0 - Cat wins, 1 - Mouse wins, null - Game not end
		position: {		// Position of the mouse
			left: 85,
			top: 40
		},
		left: 2,
		right: 1
	},
	{
		id: 2,		// 1
		result: null,
		position: {
			left: 65,
			top: 21
		},
		left: 7,
		right: 3
	},
	{
		id: 3,	// 2
		result: null,
		position: {
			left: 68,
			top: 72
		},
		left: 5,
		right: 7
	},
	{
		id: 4,	// 3
		result: null,
		position: {
			left: 45,
			top: 6
		},
		left: 4,
		right: 6
	},
	{
		id: 5,	// 4
		result: null,
		position: {
			left: 25,
			top: 23
		},
		left: 7,
		right: 6
	},
	{
		id: 6,	// 5
		result: null,
		position: {
			left: 26,
			top: 72
		},
		left: 6,
		right: 7
	},
	{
		id: 7,	// 6
		result: 0,	// Game over: cat wins
		position: {
			left: 6,
			top: 42
		}
		// Mouse move ends here, no left and right property
	},
	{
		id: 8,	// 7
		result: 1,	// Game over: mouse wins
		position: {
			left: 46,
			top: 40
		}
		// Mouse move ends here, no left and right property
	}
];

export default {
	id: 1,
	map
};