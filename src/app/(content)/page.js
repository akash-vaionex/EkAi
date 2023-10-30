import { Services } from '@/components/Layout/home/services'
import {
  Hero,
  About,
  Features,
  ContactCard,
} from '../../components/Layout/home'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Services />
      <Features />
      <ContactCard />
    </div>
  )
}
