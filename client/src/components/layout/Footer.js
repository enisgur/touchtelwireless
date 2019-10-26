import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <div className="title">Contact Us :</div>
          <span>(619) 644-1871</span>
        </div>
        <div className="address">
          <div className="title">Address</div>
          <h6>Grossmont Center</h6>
          <br />
          <span>5500 Grossmont Boulevard suite b La Mesa, CA 91942 USA </span>
          <span className="address-details">
            Next to Wallmart, Front of the Barnes & Nobles
          </span>
          {/* <div>
            <a
              style="position: relative; top: 50px;"
              href="https://www.google.com/maps/dir//Touch-Tel+Wireless/data=!4m8!4m7!1m0!1m5!1m1!1s0x80d957133b841ba9:0xf6389ca27323c351!2m2!1d-117.0098714!2d32.7778304"
            >
              Check on Map
            </a>
          </div> */}
        </div>
        <div className="hours">
          <div className="title">Bussiness Hours</div>
          <table>
            <tbody>
              <tr>
                <th className="day">Mon:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Tue:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Wed:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Thu:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Fri:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Sat:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>9:00 PM</td>
              </tr>
              <tr>
                <th className="day">Sun:</th>
                <td>10:00 AM</td>
                <td>-</td>
                <td>7:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="copyright">
          Copy-Right 2019 &copy; Touch-Tel Wireless
        </div>
      </div>
    </footer>
  );
};

export default Footer;
