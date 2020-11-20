function move_pet () {
    playerPet.setPosition(playerSprite.x + randint(9, 10), playerSprite.y + randint(9, 10))
}
function update () {
    move_pet()
}
let playerSprite: Sprite = null
let playerPet: Sprite = null
playerPet = sprites.create(img`
    . 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 
    7 f f 7 7 f f 7 7 
    7 f 1 7 7 f 1 7 7 
    7 7 7 7 7 7 7 7 7 
    7 7 f f f f f f 7 
    7 7 7 f 2 2 2 f 7 
    7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 . 
    `, SpriteKind.Player)
playerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . 
    . . f 8 1 8 8 8 8 8 1 8 f . . 
    . . f 8 1 8 8 8 8 8 1 8 f . . 
    . . . f f f f f f f f f . . . 
    . . . . f 6 6 6 6 6 f . . . . 
    . . f f f f f f f f f f f . . 
    . f f 9 9 9 9 9 9 9 9 9 f f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f f 9 9 9 9 9 9 9 9 9 f f . 
    . . f f f f f f f f f f f . . 
    . . . f 1 1 f . f 1 1 f . . . 
    . . . . f f . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(playerSprite)
forever(function () {
    update()
})
