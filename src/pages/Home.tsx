import { useNavigate } from "react-router-dom";

export default function() {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Scene it</h1>
            <h2 className="text-appear">
                Guess the movie from a single frame
            </h2>
            <button
                style={{ marginTop: "8px" }}
                onClick={() => navigate("/game")}
            >
                Start Game
            </button>
        </div>
    )
}