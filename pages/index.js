import styles from '../styles/Homepage.module.css';
import Meta from '../components/Meta'
import Nav1 from '../components/Nav'
import Ann from '../components/Ann';
import Showcase from '../components/homepage/Showcase'
import About from '../components/homepage/About';
import Caards from '../components/homepage/Caards';

//import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Meta title={'Future Cayla'} />
      <Nav1 />
      <Ann />
      <Showcase />
      <About />
      <Caards />
    </div>
  )
}
