import BestSeller from "../components/BestSeller"
import HeroSection from "../components/HeroSection"
import LatestCollection from "../components/LatestCollection"
import NewsLetter from "../components/NewsLetter"
import Policy from "../components/Policy"


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <NewsLetter/>
    </div>
  )
}

export default Home