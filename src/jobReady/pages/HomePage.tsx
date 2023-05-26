import PoweredByInfoJobs from '../../components/PoweredByInfoJobs'
import { FadeIn } from '../../components/Transitions'
import Footer from '../components/Footer'
import HomeDividerSection from '../components/home/HomeDividerSection'
import HomeHeader from '../components/home/HomeHeader'
import HomeHowIsTheProcessSection from '../components/home/HomeHowIsTheProcessSection'
import HomeWhatIsSection from '../components/home/HomeWhatIsSection'

export default function HomePage() {
  return (
    <FadeIn>
      <PoweredByInfoJobs />
      <HomeHeader />
      <HomeDividerSection />
      <HomeWhatIsSection />
      <HomeHowIsTheProcessSection />
      <Footer />
    </FadeIn>
  )
}
