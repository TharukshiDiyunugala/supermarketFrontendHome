import React from 'react'

const Carousal = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 h-500" src="/images/Supermarket_web.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="/images/Supermarket_web.jpg" alt="Second slide" style={{ height: '500px' }}/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="/images/Supermarket_web.jpg" alt="Third slide" style={{ height: '500px' }}/>
      </div>
    </div>

    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>

    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>
  )
}

export default Carousal