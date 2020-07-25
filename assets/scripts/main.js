let game = Bagel.init({
    id: "game",
    width: 800,
    height: 450,
    state: "game",
    game: {
        assets: {
            spritesheets: [
                {
                    id: "Tiles",
                    src: "assets/imgs/tiles.png",
                    frames: [19],
                    animations: ["0"]
                }
            ],
            imgs: [
                {
                    id: "Level0",
                    src: "assets/imgs/level0.png"
                },
                {
                    id: "Nine.idle.0",
                    src: "assets/imgs/nine.png"
                }
            ]
        },
        sprites: [
            {
                id: "Tiles",
                type: "tileEngine",
                state: "game",
                tilesheet: "Tiles",
                tileProperties: {
                    "0.0": {
                        hitbox: []
                    }
                },
                level: 0,
                levels: [
                    {
                        palette: {
                            "00000000": "0.0",
                            "000000ff": "0.1"
                        }
                    }
                ],
                levelPrefix: "Level",
                tileResolution: 16
            },
            {
                id: "Player",
                type: "tilePlayer",
                width: 1,
                height: 1,
                tileEngine: "Tiles",
                imgPrefix: "Nine",
                animations: {
                    idle: {
                        prefix: "idle",
                        frames: 1
                    }
                },
                physics: {
                    gravity: 0.2,
                    friction: 0.8,
                    airResistance: 0.95
                }
            }
        ],
        plugins: [
            {
                src: "tiles.js"
            }
        ]
    }
});
