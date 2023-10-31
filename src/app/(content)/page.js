import { Services } from '@/components/Layout/home/services'
import {
  Hero,
  About,
  Features,
  ContactCard,
} from '../../components/Layout/home'
import Testimonial from '@/components/Layout/home/testimonial'

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Services />
      <Features />
      <ContactCard />
    </div>
  )
}
