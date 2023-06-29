import React from 'react';
import logo from "../../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-36">
        <div>
         <img src={logo} alt="" />
          <p>By the 1950s, two visions for how to <br /> achieve machine intelligence emerged. <br /> One vision, known as Symbolic.</p>
          <div>
   
          <div className="grid grid-flow-col gap-4">
  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.08-14.58a1.498 1.498 0 0 0-1.48 2.57 5.522 5.522 0 0 1 1.55 3.85 1.5 1.5 0 0 0-.62 1.21v.58a1.5 1.5 0 0 0 3 0v-.59c0-.84-.13-1.66-.39-2.44a5.5 5.5 0 0 0-2.08-2.88zm-3.46-1.42a1.499 1.499 0 1 0-2.12-2.12 1.499 1.499 0 0 0 2.12 2.12z"></path></svg></a>


  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M20.64 4.471c-.252-.136-.527-.227-.81-.265.293-.176.518-.454.624-.796-.275.162-.578.276-.897.336-.257-.274-.623-.445-1.027-.445-.778 0-1.407.629-1.407 1.406 0 .11.012.22.036.326-.491-.026-.952-.132-1.367-.33v.037c0 1.086.774 1.993 1.797 2.201-.188.051-.387.079-.592.079-.145 0-.285-.015-.422-.044.287.891 1.113 1.537 2.092 1.555-.767.598-1.729.954-2.777.954-.18 0-.358-.011-.533-.033.982.628 2.148.99 3.396.99 4.075 0 6.31-3.379 6.31-6.31l-.007-.286c.43-.313.805-.703 1.099-1.151zm-2.64-3.471c-1.656 0-3 1.344-3 3 0 .23.028.454.08.672-2.5-.126-4.726-1.356-6.217-3.225-.26.443-.411.956-.411 1.503 0 1.036.527 1.948 1.324 2.481-.489-.016-.948-.149-1.35-.372v.038c0 1.445 1.03 2.654 2.396 2.929-.253.07-.519.107-.795.107-.194 0-.383-.018-.57-.053.405 1.28 1.57 2.209 2.956 2.23-1.087.853-2.461 1.36-3.958 1.36-.256 0-.509-.015-.76-.045 1.408.901 3.081 1.43 4.896 1.43 5.875 0 9.088-4.863 9.088-9.088v-.43c.63-.442 1.18-.991 1.62-1.62h-.002v-.001c-.446.63-.995 1.18-1.626 1.62-.112-.05-.227-.094-.345-.132.141-.367.22-.762.22-1.178 0-1.656-1.344-3-3-3zm0 1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-8 9c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm0-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm8 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></a>
</div>

  </div>
        </div> 
        
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Price</a> 
          <a className="link link-hover">Tracking</a> 
          <a className="link link-hover">Report & flung</a> 
          <a className="link link-hover">Term & Policy</a>
        </div> 
        <div>
          <span className="footer-title">Resources</span> 
          <a className="link link-hover">Project</a> 
          <a className="link link-hover">Challenges</a> 
          <a className="link link-hover">For Business</a> 
          <a className="link link-hover">Support</a>
        </div> 
        <div>
          <span className="footer-title">Our Company</span> 
          <a className="link link-hover">Reporting</a> 
          <a className="link link-hover">Our in time</a> 
          <a className="link link-hover">Management</a>
        </div>
      </footer>
    );
};

export default Footer;