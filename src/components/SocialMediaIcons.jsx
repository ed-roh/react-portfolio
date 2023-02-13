import { FaGithubAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="www.linkedin.com/in/batel-haiylo"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="linkedin-link" src="../assets/linkedin.png" /> */}
        <FaLinkedinIn/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/BatelHaiylo"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="twitter-link" src="../assets/twitter.png" /> */}
        <FaGithubAlt/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.behance.net/HAIYLOB"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="facebook-link" src="../assets/facebook.png" /> */}
        <FaBehance/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img alt="instagram-link" src="../assets/instagram.png" /> */}
        <FaWhatsapp/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
