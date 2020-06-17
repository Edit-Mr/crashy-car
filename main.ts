input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.X, 1)
})
let emptyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(2, 0)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.Y, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = Math.randomRange(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(index2, 4))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y) && obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
