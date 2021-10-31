import React from 'react'
import '../styles/footer.css'

export default function FooterApp() {
  return (
    <div>
        <div className="footer-dark">
          <footer>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 item text">
                          <h3>Nike X</h3>
                          <p>
                            This website is developed for job test purpose,
                            using React, Bootstrap, and some other plugin for
                            the client side.
                            Any feedback is really appreciated,
                            hit me up on twkoza@gmail.com.
                          </p>
                      </div>
                  </div>
                  <p class="copyright">News Update © 2021</p>
              </div>
          </footer>
      </div>
    </div>
  )
}
