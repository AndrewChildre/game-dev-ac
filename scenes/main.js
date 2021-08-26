 const player = add ([
  sprite('player'),
  scale(0.8),
  pos(20,20),
  body()
])
const moveSpeed = 200

keyDown('right', () => {
  player.move(moveSpeed, 0)
})
keyDown('left', () => {
  player.move(-moveSpeed, 0)
})
addLevel([
  '       ',
  '      ',
  '     @ ',
  '     @  ',
  'xxxxxxx',

], {
  width: 40,
  height: 40,
  'x' : [sprite('ground'), solid()],
  '@' : [sprite('enemy'), body(), 'dangerous']
})

player.collides('dangerous', () => {
destroy(player)
})