import CodeBlock from "./CodeBlock";
import SocialHandles from "./SocialHandles";
import "../styles/header.css";
import { profile } from "../assets";
import Button from "../ui/button";
import { HEADER_TEXT, MY_NAME, SOFTWARE_ENGINEER } from "../uiContants";

const code =
`const developer ={
  firstName:"Yogesh",
  lastName:"Dhande",
  aka:"Mr.Dominic",
  hobby:repeat = () =>{
    //eat();
    //sleep();
    //code();
    //repeat();
    }
}`;
const Header = () => {
  return (
    <div id="header">
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column flex__center header__title">
            <span className="text__role shine">{SOFTWARE_ENGINEER}</span>
            <h1 className="h1">Hello I'm <br/><span>{MY_NAME}</span></h1>
            <Button btnText={'Download Resume'} isNavBtn={false}/>
          </div>
          <div className="column">
            <img src={profile} className="profile__image" alt="Profile" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">{HEADER_TEXT}</p>
            <SocialHandles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
