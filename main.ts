input.onButtonPressed(Button.A, function () {
    p1 = list[randint(0, 4)]
    p2 = list2[randint(0, 4)]
    if (p1 > p2) {
        basic.showString("" + (text_list))
        basic.showString("wins")
    } else if (p1 < p2) {
        basic.showString("" + (badman))
        basic.showString("wins")
    }
})
input.onButtonPressed(Button.B, function () {
    if (p1 > p2) {
        p1 += 1
        basic.showString("" + (p1))
    } else if (p1 < p2) {
        p2 += 1
        basic.showString("" + (p2))
    }
})
let p2 = 0
let p1 = 0
let list2: number[] = []
let badman: string[] = []
let list: number[] = []
let text_list: string[] = []
text_list = [
"Messi",
"spiderman",
"batman",
"Mickel Jordan",
"Romeo"
]
list = [
10,
7,
9,
6,
1
]
badman = [
"Tybalt",
"Joker",
"Thanos",
"DR Doom",
"Ronaldo"
]
list2 = [
7,
8,
1,
3,
1
]
