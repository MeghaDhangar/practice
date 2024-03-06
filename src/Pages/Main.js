import React from 'react';
import girl from '../images/Girls web developer.jpg';

function Main() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#d3d2e7' }}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="intro-text">
              <h2>Hi, My name is Megha Dhangar and I am a passionate ReactJs Developer</h2>
            </div>
            <div className="mb-3">
            <button type="button" className="btn btn-secondary me-2" style={{ backgroundColor: 'rgb(19, 15, 77)' }}>Visit Linkedin</button>
              <button type="button" className="btn btn-secondary" style={{ backgroundColor: 'rgb(19, 15, 77)' }}>Visit Github</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <div className="  d-flex justify-content-center align-items-center" style={{ height: '400px', width: '450px', border:'5px solid ', borderRadius: '65px', margin: '20px', border: '1px solid' }}>
              <img src={girl} alt="Girl Web Developer" className="border-5" style={{ height: '100%', width: '100%', borderRadius: '65px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
