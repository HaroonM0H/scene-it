export default function Game() {
    return(
        //load first image from the database
        //display it in the center of the screen
        <div>
            <h1>Scene it</h1>
            <h2 className="text-appear">
                Guess the movie from a single frame
            </h2>
            <div className="game-container">
                <img src="/path/to/first/image.jpg" alt="Movie Scene" />
                <p>Guess the movie!</p>
            </div>
        </div>
    )
}