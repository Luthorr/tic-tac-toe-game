export const CROSS = 'cross';
export const NOUGHT = 'nought';
export const REPEAT = 'repeat';
export const DRAW = 'draw';

export const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const INITIAL_BOARD_STATE = ['', '', '', '', '', '', '', '', ''];
export const INITIAL_CURRENT_PLAYER_STATE = CROSS;
export const INITIAL_GAME_RESULT_STATE = {
  winner: '',
  ended: false,
};

export const INITIAL_SCORE_STATE = {
  cross: 0,
  draw: 0,
  nought: 0,
};

export const COLOR_AQUA = 'aqua';
export const COLOR_PRIMARY_LIGHTER = 'primary-lighter';
export const COLOR_GOLD = 'gold';
export const COLOR_GRAY = 'gray';
