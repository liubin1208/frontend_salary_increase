const colors = ['♠', '♣', '♥', '♦'] as const;
const values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
] as const;
type Values = (typeof values)[number];
type Colors = (typeof colors)[number];

function createCard(value: Values, color: Colors) {}

createCard('7', '♣');
