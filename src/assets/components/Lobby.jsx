import profilePic from "../images/ProfilePic.jpg"

function Lobby({lobbyRef}) {

    return (
        <section className="lobby" id="lobby" ref={lobbyRef}>
            <div className="lobby__content">
                <img src={profilePic} alt="Profile"></img>
                <h1>Mathieu <span className="pseudo">&#40;NecodZ&#41;</span> ESDRAS</h1>
                <h2>&lt;FRONT-END DEVELOPER&gt;</h2>
            </div>
        </section>
    )
}
export default Lobby