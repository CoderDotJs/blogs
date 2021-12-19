import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // <footer className="text-center">
        //     <h1>brandName</h1>
        //     <p>All right reserved @ 2022</p>
        // </footer>
        <footer class="bg-light text-center">
  <div class="container p-4 pb-0">
    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div class="col-md-5 col-12">
            <div class="form-outline mb-4">
              <input type="email" id="form5Example27" class="form-control" />
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary text-white mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>

  <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    );
};

export default Footer;