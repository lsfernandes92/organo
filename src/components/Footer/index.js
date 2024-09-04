import "./Footer.css"

const Footer = () => {
  return(
    <footer className="footer">
      <div class="footer-socials">
        <img src="/images/fb.png" alt="Facebook's icon"></img>
        <img src="/images/tw.png" alt="Twitter's icon"></img>
        <img src="/images/ig.png" alt="Instagram's icon"></img>
      </div>
      <div class="footer-logo">
        <img src="/images/logo.png" alt="Logo from the Organo application"></img>
      </div>
      <p>Desenvolvido por Lucas</p>
    </footer>
  );
}

export default Footer;