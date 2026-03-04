import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import mail from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <div className="max-w-xl">
        <h4 className="text-2xl font-bold">CS — Ticket System</h4>
        <p>
          Empowering support teams with real-time data and seamless ticket
          management. Our CS Ticket System is designed to bridge the gap between
          complex technical issues and satisfied customers, ensuring every query
          is resolved with precision and care.
        </p>
      </div>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <img src={twitter} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <img src={facebook} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <img src={mail} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <img src={linkedin} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
