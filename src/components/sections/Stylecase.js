import React from 'react';
import MenuLink from '../individuals/MenuLink';

const Stylecase = () => {
    return (
        <section className='stylecase'>
            <div className='container'>
                <div className='officestyle'><p className='title-2'>Office<br /> Style</p><MenuLink name="SHOP NOW" link="/Product" /></div>
                <div className='offer'><div className='conetent'><p className='title-2'>50% Offer</p> <p className='title-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore</p>
                    <button className='btn btn-theme'>FLASE SALE</button></div></div>
                <div className='partystyle'><p className='title-2'>Party<br /> Style</p><MenuLink name="SHOP NOW" link="/Product" /></div>
            </div>

        </section>

    )
}

export default Stylecase