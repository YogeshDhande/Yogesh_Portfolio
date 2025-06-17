import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-scroll";
import resumePdf from "../../resume/resume.pdf";
import './button.css';

const Button = ({btnText, isNavBtn}) => {
  const handleOnClick= (e) => {
    if (!isNavBtn) {
      e.preventDefault();
      window.open(resumePdf, "_blank");
    }
  }
  return (
    <div style={{display: 'inline-block'}}>
    <Link to={isNavBtn ? 'contact': ''} className="btn flex__center hire__btn" onClick={handleOnClick}>
      {btnText}
      <div className="flex__center icon">
        <FaArrowUpRightFromSquare />
      </div>
    </Link>
    </div>
  );
};

export default Button;
