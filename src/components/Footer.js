import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/samuel-melanson/"
          rel="noreferrer">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/melansonS" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href="mailto:samuelmelanson@live.com">
          <HiOutlineMail className="email-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
