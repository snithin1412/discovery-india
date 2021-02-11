import './App.css';
import Template from './components/templates/Template';

const carouselData = [
  {
    heading: "Mission Frontline",
    subHeading:"Superstar Rana Daggubati spends time with India's finest of the Border Security Force at an outpost in Jaisalmer, Rajasthan in this discovery+ original.",
    tag1: "Must Try",
    tag2: "Trending",
    image: {
      img: "mission.jpeg",
      imgAlt: "Mission Frontline"
    }
  },
  {
    heading: "Secrets Of Sinauli",
    subHeading:"Uncover Indian secrets buried for over 4000 years in this historical thriller that follows one of the greatest finds of the century. Neeraj Pandey's Secrets Of Sinauli is a discovery+ India original, presented by Manoj Bajpayee.",
    tag1: "New",
    tag2: "Don't Miss",
    image: {
      img: "secrets.jpeg",
      imgAlt: "Secrets Of Sinauli"
    }
  },
  {
    heading: "Gold Rush",
    subHeading:"Hard-working gold miners risk their lives for a chance at striking it rich.",
    tag1: "Binge Now",
    tag2: "Fan Fave",
    image: {
      img: "gold-rush.jpeg",
      imgAlt: "Gold Rush"
    }
  },
  {
    heading: "2 Nations 1 Obsession",
    subHeading:"The rivalry between the Australian and Indian cricket teams is explored.",
    tag1: "Must Try",
    tag2: "Trending",
    image: {
      img: "two-nations.jpeg",
      imgAlt: "2 Nations 1 Obsession"
    }
  }
];

const headerData = {
  logo: {
    logo: "discovery-logo.png",
    logoAlt: "Discovery",
    list: "items.jpg",
    listAlt: "List"
  },
  nav: {
    nav1: "Home",
    nav2: "Explore",
    nav3: "Shorts",
    nav4: "MindBlown",
    nav5: "Premium"
  },
  search: {
  search: "Search for shows, episodes, shorts etc.",
  button: "Sign In"
  }
}

const categoryData = {
  category1: {
    image: "adventures.jpg",
    text: "Adventures"
  },
  category2: {
    image: "animals.jpg",
    text: "Animals"
  },
  category3: {
    image: "nature.jpg",
    text: "Nature"
  },
  category4: {
    image: "auto.jpg",
    text: "Auto"
  },
  category5: {
    image: "food.jpg",
    text: "Food"
  },
  category6: {
    image: "lifestyle.jpg",
    text: "Lifestyle"
  }
}

function App() {
  return (
    <div className="App">
      <Template headerData={headerData} carouselData={carouselData} categoryData={categoryData} />
    </div>
  );
}

export default App;
