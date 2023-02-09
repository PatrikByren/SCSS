import React from 'react';
import Image from '../../asset/images/showcase-img.png'

const Showcase = () => {
    return (
        <section className='showcase'>
            <div className='container'>
                <div className='content'>
                    <div className='titles'>
                        <p className='title-2'> GET UP TO 40% OFF</p>
                        <p className='title-1'>Don't Miss This Opportunity</p>
                        <p className='title-3'>Online shopping free home delivery over $100</p>
                        <div className='d-flex justify-content-start mt-4'>
                            <button className='btn btn-theme'>SHOP NOW</button>
                        </div>
                    </div>

                </div>
                <img src={Image} alt="background" />

            </div>
        </section>
    );
}

export default Showcase;
