import profilePic from "../images/ProfilePic.jpg"

function Lobby() {
    return (
        <section className="lobby" id="lobby">
            <div className="lobby__content">
                <img src={profilePic} alt="Profile"></img>
                <h1>Mathieu <span className="pseudo">&#40;NecodZ&#41;</span> ESDRAS</h1>
                <h2>FRONT-END DEVELOPER</h2>
            </div>
        </section>
    )
}
export default Lobby