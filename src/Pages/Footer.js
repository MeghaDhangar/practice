import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12">
                            <h4>Megha's Developer Portfalio</h4>
                              <div>
                                <h4>i'll Get Back To You !</h4>
                                <input type='text' />
                                <button type="button" class="btn btn-outline-primary">Click Me</button>
                              </div>
                            
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                        <h4>Quick Link</h4>
                        <div style={{}}> 
                        <div> 
                            <Link className='linkk'>👉 Home</Link>
                        </div>
                        <div> 
                            <Link className='linkk'>👉 About</Link>
                        </div>
                        <div> 
                            <Link className='linkk'>👉 Projects</Link>
                        </div>
                        <div> 
                            <Link className='linkk'>👉 Contect Me</Link>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12">
                        <h4>Contact Me</h4>
                        <div>
                       <h5> 📌 Sandalpur, India</h5>
                       <h5> +9196070767</h5>
                       <h5>meghadhangar1301@gmail.com</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
