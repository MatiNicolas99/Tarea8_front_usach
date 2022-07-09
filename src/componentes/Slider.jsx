import chill from "../img/chill.png"
import chill2 from "../img/chill2.jpg"
import chill3 from "../img/chill3.jpg"

export const Slider = () => {
  return (
    <main className="main">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={chill} className="d-block w-100" alt="chill"/>
                    </div>
                    <div className="carousel-item">
                        <img src={chill2} className="d-block w-100" alt="chill2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={chill3} className="d-block w-100" alt="chill3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="main__info">
                <div className="main__welcome">
                    <h1>¡Bienvenido!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sapiente ad tenetur voluptates
                        eaque dolorem delectus laborum doloribus culpa eos?</p>
                </div>
            </div>
        </main>
  )
}
