let game = Bagel.init({
    id: "game",
    width: 800,
    height: 450,
    state: "game",
    game: {
        assets: {

        },
        plugins: [
            {
                src: "tiles.js"
            }
        ]
    }
});
