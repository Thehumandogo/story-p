input.onButtonPressed(Button.A, function () {
    if (scene == 2) {
        basic.showString("" + ((0 as any) > (128 as any)))
        basic.showIcon(IconNames.Sword)
        basic.pause(2000)
        scene = 3
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Half))
        music.play(music.stringPlayable("A G F E D C B A ", 120), music.PlaybackMode.InBackground)
    }
    if (scene == 8) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 9) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 10) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 11) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 12) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 13) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 14) {
        basic.showString("you see guards in the distance")
        scene = 6
    }
    if (scene == 15) {
        basic.showString("You see bandits and shove ground bread down their throats, earning the title of hero and gaining fame and riches")
        basic.showString("You win")
    }
    if (scene == 1) {
        basic.showString("You see 2 paths")
        basic.pause(2000)
        basic.showString("A for left, B for right")
        scene = 2
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (scene == 4) {
        basic.showString("You dodge left")
        basic.showIcon(IconNames.Yes)
        basic.showString("You escaped safely")
        scene = 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (scene == 2) {
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 8
    }
    if (scene == 8) {
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 9
    }
    if (scene == 9) {
        basic.showString("You Vomit")
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 10
    }
    if (scene == 10) {
        basic.showString("You Vomit")
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 11
    }
    if (scene == 12) {
        basic.showString("You Vomit")
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 13
    }
    if (scene == 11) {
        basic.showString("You Vomit")
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 12
    }
    if (scene == 13) {
        basic.showString("You Vomit Less This Time")
        basic.showString("You see a piece of ground bread, Click A to ignore and B to eat")
        scene = 14
    }
    if (scene == 14) {
        basic.showString("You gain ground bread immunity")
        basic.showString("click A to explore")
        scene = 15
    }
})
input.onGesture(Gesture.Shake, function () {
    if (scene == 3) {
        basic.showString("\"The ground shakes\"")
        basic.showString("A dragon appears")
        basic.showIcon(IconNames.Skull)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        scene = 4
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (scene == 4) {
        basic.showString("You roll right")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.showString("You find a secret passage")
        scene = 6
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (scene == 7) {
        basic.showString("You cast a spell")
        for (let i = 0; i <= 3; i++) {
            basic.showIcon(IconNames.Diamond)
            music.playTone(392, music.beat(BeatFraction.Quarter))
            basic.showIcon(IconNames.SmallDiamond)
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.showString("Victory!")
        }
    }
})
let scene = 0
scene = 1
let playerName = "Hero"
basic.showString("...!")
basic.showString("Welcome to the enchanted forest, click A to start")
basic.forever(function () {
    if (scene == 5) {
        if (input.soundLevel() > 128) {
            basic.showString("Your shout echos")
            basic.showString("help arrives")
            basic.showIcon(IconNames.Happy)
            scene = 6
        }
    }
    if (scene == 6) {
        if (input.soundLevel() < 50) {
            basic.showString("you whisper")
            basic.showString("The guards don't notice you")
            basic.pause(2000)
            basic.showString("You sneak past")
            scene = 7
        }
    }
})
basic.forever(function () {
	
})
