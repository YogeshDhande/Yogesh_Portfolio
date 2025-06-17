import "../styles/projectCard.css";
import { VIEW_DEMO } from "../uiContants";

const ProjectCard = ({
  title,
  image,
  category,
  description,
  stacks,
  demoLink,
}) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          <img src={image} alt="Project" />
        </div>
      </div>
      <div className="project__card-bottom">
        <div className="flex__center project__info">
          <div className="img">
            <img src={image} alt="Project" />
          </div>
          <div>
            <h3 className="title">{title}</h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>
        <p className="text__muted description">{description}</p>
        <div className="flex__center stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt={stack.name} />
            </div>
          ))}
        </div>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            window.open(demoLink, "_blank");
          }}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <div className="front">
            <span>{VIEW_DEMO}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
