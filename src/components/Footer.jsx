import SocialHandles from "./SocialHandles";
import packageJson from '../../package.json';
import '../styles/footer.css';
import { MY_NAME, SOFTWARE_ENGINEER } from "../uiContants";

const Footer = () => {
  const appVersion = packageJson.version;
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="section__wrapper">
        <div className="base__logo" id="movingText">
          <div className="con">
            <h1 className="full__name shine">{MY_NAME} -</h1>
            <h1 className="full__name shine">{SOFTWARE_ENGINEER}</h1>
            <span className="divider"></span>
          </div>
          <div className="con">
            <h1 className="full__name shine">{MY_NAME} -</h1>
            <h1 className="full__name shine">{SOFTWARE_ENGINEER}</h1>
            <span className="divider">||</span>
          </div>
          <div className="con">
            <h1 className="full__name shine">{MY_NAME} -</h1>
            <h1 className="full__name shine">{SOFTWARE_ENGINEER}</h1>
            <span className="divider">||</span>
          </div>
        </div>
        <div className="flex__center footer__wrapper">
        <SocialHandles />
        <div className="copyright">
            <h3>&copy; {currentYear} {MY_NAME}. All right reserved</h3>
        </div>
        <div className="version">
          <p>v {appVersion}</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
