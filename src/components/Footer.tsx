import barndLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer  sm:footer-horizontal bg-gray-50 text-content text-gray-900 p-10">
        <div>
          <img src={barndLogo} alt="barndLogo" />
          <div>
            <p className="text-lg py-4">
              Curated tools, technologies, and resources for developers building{" "}
              <br />
              modern software.
            </p>
            <div className="flex items-center gap-5">
              <a className="font-bold" href="https://github.com/">
                Github
              </a>
              <a className="font-bold" href="https://twitter.com/">
                Twitter
              </a>
              <a className="font-bold" href="https://linkedin.com/">
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Project</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of service</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal bg-gray-50 text-gray-900 p-10 items-center">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>Privacy</a>
          <a>Terms</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
