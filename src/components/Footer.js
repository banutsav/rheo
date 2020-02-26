import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact Us</h2>
      <p>
      If you would like to schedule a Free Consulation then
      please do not hesitate to reach out to us. We are available from Monday to Saturday
      8 am &mdash; 6 pm Eastern Time
      </p>
      {/*<ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>*/}
    </section>
    <section>
      <h2>Dhruv Ralhan</h2>
      <dl className="alt">
        {/*<dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>*/}
        <dt>Phone</dt>
        <dd>(352) 233-1616</dd>
        <dt>Email</dt>
        <dd>ralhandhruv@gmail.com</dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="#"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-linkedin alt">
            <span className="label">Linkedin</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Rheo Computing 2020. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
