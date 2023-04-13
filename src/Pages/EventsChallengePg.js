import logo from '../logo.svg';
import Menus from '../Components/Menus';
import Menu2 from '../Components/Menu2';
import Footer from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddIcon from '@mui/icons-material/Add';
import ListGroup from 'react-bootstrap/ListGroup';
import './Style.css';


function EventsChallengePg() {


  useEffect(() => {
    function getEvents() {
      axios
        .get("http://localhost:8070/Events/getEvents")
        .then((res) => {
          setFeedback(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getFD();

  }, []);

  return (
    <div className="App">
      <Menus/>
      <Menu2/>
      <div className="HeaderEvent">
        <div className="content-title" id="headerEvent">
          Events & Challenges 
        </div>
        <div className="HeaderEvent-sub-title">
          Browse to particpate and know more about the organic food <br/>industry.
        </div>
        <div className = "HeaderEvent-btn">
          <Button variant="primary" id ="browse" href="/Add">
            <AddIcon id="add"/>
            <div className = "btn-title">
               Add Events & Challenges
            </div>
          </Button>{' '}
        </div>
      </div>

      <div className="EventsInfo">
        <div className="content-title" id="eventsInfo">
          Upcoming <span id="title-second">Events</span> 
        </div>
      </div>
      <div className="Events">
      <div className="Cards">

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/tree-planting.jpg")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Tree planting campaign at Deathly Hallows</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more">
               Read more
            </div>
      </Button>{' '}
    </Card>

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/water.jpg")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Clean Water for Organic farming workshop</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more">
               Read more
            </div>
      </Button>{' '}
    </Card>

   <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/works.jpg")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Organic farming workshop for newbies to Organic farming</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more" >
               Read more
            </div>
      </Button>{' '}
    </Card>

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/workshop.jpg")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Organic farming workshop for greenhouse farming</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more">
               Read more
            </div>
      </Button>{' '}
    </Card>

    </div>
    </div>

      <div className="EventsInfo">
        <div className="content-title" id="eventsInfo">
          Upcoming <span id="title-second">Challenges</span> 
        </div>
      </div>

            <div className="Events">
      <div className="Cards">

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/challenge4.png")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Plant one tree for a day challenge </Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more" href="/Create">
               Read more
            </div>
      </Button>{' '}
    </Card>

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/challenge1.jpg")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Go vegan for better tomorrow challenge</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more" >
               Read more
            </div>
      </Button>{' '}
    </Card>

   <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/challenge2.png")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Diary Free day challenge</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more" >
               Read more
            </div>
      </Button>{' '}
    </Card>

    <Card id="event-card">
      <Card.Img variant="top" src={require("../Assets/challenge3.png")} />
      <Card.Body>
        <Card.Title id="eventInfo-date">Created on 22nd January 2023</Card.Title>
        <Card.Title id="eventInfo-title">Go vegan for better tomorrow challenge</Card.Title>
        <Card.Text id="eventInfo-descript">
          Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" id="author">
        <ListGroup.Item>
          <img id="profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </ListGroup.Item>
        <ListGroup.Item id="auth-name">Marina Lin</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" id ="more" href="/Create">
            <div className = "btn-title" id="more" >
               Read more
            </div>
      </Button>{' '}
    </Card>

    </div>
    </div>
<Footer/>
    </div>
  );
}

export default EventsChallengePg;
