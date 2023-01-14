import { Button, Container } from 'reactstrap'
import './card.css'

const Card = ({data}) => {
    

   
  return (
    <>
      <Container>
        <div className='card__box'>
          {data.map((item, index) =>
            <div key={index} className="card__item">
              <img src="" alt="" />
              {item.name}
              <div className="card__btn d-flex justify-content-start gap-4">
              <Button>Live Demo</Button>
              <Button>Code</Button>
              </div>
            </div>
          )}  
        </div>
      </Container> 
    </>
      
  )
}

export default Card
