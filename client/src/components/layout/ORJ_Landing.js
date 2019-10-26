import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="body">
      <div className="body-nav">
        <ul>
          <li>
            <Link to="#accessories">Accessories</Link>
          </li>
          <li>
            <Link to="#landyards">Landyards</Link>
          </li>
          <li>
            <Link to="#bluetooth-speakers">Bluetooth Speakers</Link>
          </li>
          <li>
            <Link to="#headphones">Headphones</Link>
          </li>
        </ul>
      </div>
      <div className="body-body">
        <div className="search">
          <input type="text" placeholder="&#128270; Search.." />
        </div>

        <div className="items">
          <div className="item">
            <div className="itemPic">
              <img src="img/mobile-phone-ORJ.jpg" alt="itemPic" />
            </div>
            <div className="itemDetails">
              <h3>Esoulk</h3>
              <h6>Vent Car Holder</h6>
              <p>
                Description here, it holds your phone in vent and also you can
                use at dashboard. Comes with super glue holder that you will
                love it.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="itemPic">
              <img src="img/mobile-phone-ORJ.jpg" alt="itemPic" />
            </div>
            <div className="itemDetails">
              <h3>Esoulk</h3>
              <h6>Vent Car Holder</h6>
              <p>
                Description here, it holds your phone in vent and also you can
                use at dashboard. Comes with super glue holder that you will
                love it.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="itemPic">
              <img src="img/mobile-phone-ORJ.jpg" alt="itemPic" />
            </div>
            <div className="itemDetails">
              <h3>Esoulk</h3>
              <h6>Vent Car Holder</h6>
              <p>
                Description here, it holds your phone in vent and also you can
                use at dashboard. Comes with super glue holder that you will
                love it.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="itemPic">
              <img src="img/mobile-phone-ORJ.jpg" alt="itemPic" />
            </div>
            <div className="itemDetails">
              <h3>Esoulk</h3>
              <h6>Vent Car Holder</h6>
              <p>
                Description here, it holds your phone in vent and also you can
                use at dashboard. Comes with super glue holder that you will
                love it.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="itemPic">
              <img src="img/mobile-phone-ORJ.jpg" alt="itemPic" />
            </div>
            <div className="itemDetails">
              <h3>Esoulk</h3>
              <h6>Vent Car Holder</h6>
              <p>
                Description here, it holds your phone in vent and also you can
                use at dashboard. Comes with super glue holder that you will
                love it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
