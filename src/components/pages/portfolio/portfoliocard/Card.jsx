import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./card.css";

const Card = ({ data }) => {
  return (
    <>
      <Container>
        <div className="card__box">
          {data.map((item, index) => (
            <div key={index} className="card__item">
              <img src={item.image} alt="" />
              {item.name}
              <div className="card__btn d-flex justify-content-start gap-4">
                <Button>
                  <a href={item.live} target="_blank">
                    Live Demo
                  </a>
                </Button>

                <Button>
                  <a href={item.code}>Code</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Card;
