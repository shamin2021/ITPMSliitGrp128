import logo from '../logo.svg';
import Menus from '../Components/Menus';
import Menu2 from '../Components/Menu2';
import Footer from '../Components/Footer';
import StarIcon from '@mui/icons-material/Star';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function EventsChallengePg() {
  return (
    <div className="App">
      <Menus/>
      <Menu2/>
      <div className="moreInfo-events">
        <div className="moreInfo-image">
          <img id="moreInfo-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
        </div>
        <div className="moreInfo-details">
          <div className="content" id="type">Fundraiser</div>
          <div className="content" id="title">Tree planting campaign at Deathly Hallows</div>
          <div className="content" id="dateTitle">Event Date</div>
          <div className="content" id="date" >23rd January 2023</div>
          <div className="content" id="description">Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% more Vitamin C than conventionally grown.</div>
          <div className="content" id="list">
            <ul id="list">
              <li>Date</li>    
              <li>Notes</li>  
              <li>Participants</li>  
              <li>Bring</li>          
            </ul>
          </div>
        </div>
      </div>

      <div className="moreInfo-reviews">
        

        <div className = "moreInfo-custReview">

          <div className = "reviews">
            <div className="content" id="review-title">Reviews</div>

            <div className="moreInfo-reviewCust">
              <div className="moreInfo-reviewCust-profile">
                <div className="moreInfo-reviewCust-profilePic">
                  <img id="review-profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
                </div>
                <div className="review-content" id="moreInfo-reviewCust-profileName">Shamin</div>
              </div>
              <div className="moreInfo-reviewCust-review">
                <div className="review-content" id="date" >23rd January 2023</div>
                <div className="review-content" id="description">Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% more Vitamin C than conventionally grown.
                </div>
                <div className="stars">
                  <div className="star-review">
                    <StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/> 
                  </div>
                  <div className="star-review-cont">(4.0 reviews)</div>
                </div>
              </div>
            </div>
            <div className="moreInfo-reviewCust">
              <div className="moreInfo-reviewCust-profile">
                <div className="moreInfo-reviewCust-profilePic">
                  <img id="review-profile-pic" src={require("../Assets/background-food-symbols-6213980.jpg")}/>
                </div>
                <div className="review-content" id="moreInfo-reviewCust-profileName">Shamin</div>
              </div>
              <div className="moreInfo-reviewCust-review">
                <div className="review-content" id="date" >23rd January 2023</div>
                <div className="review-content" id="description">Sweet and Juicy California Grown Certified Organic Oranges. 25-30 Oranges. Picked when you place your order and shipped straight to your door. Organic Oranges have 30% more Vitamin C than conventionally grown.
                </div>
                <div className="stars">
                  <div className="star-review">
                    <StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/><StarIcon id="rev"/> 
                  </div>
                  <div className="star-review-cont">(4.0 reviews)</div>
                </div>
              </div>
            </div>

          </div>

          <div className = "leave-reviews">
            <div className="review-content" id="leave-title">Add an Experience</div>
            <div className="add-star-review">
                    <StarIcon /><StarIcon/><StarIcon/><StarIcon/><StarIcon/> 
            </div>
            <div className="add-review">
              <Form.Control type="password" placeholder="Experience" id="inputReview-Text" aria-describedby="passwordHelpBlock"/>
              <Form.Control type="password" placeholder="Email" id="inputReview" aria-describedby="passwordHelpBlock"/>
              <Button variant="primary" id ="add-submit">
                <div className = "btn-title" id="footer">
                  Contact Us
                </div>
              </Button>{' '}
            </div>
            
          </div>

        </div>
      </div>

      <Footer/>
      </div>
  );
}

export default EventsChallengePg;
