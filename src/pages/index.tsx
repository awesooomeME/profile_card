import Image from 'next/image'
import { Kumbh_Sans } from 'next/font/google'
import bg_top from '../../public/bg-pattern-top.svg'
import bg_bottom from '../../public/bg-pattern-bottom.svg'
import bg_card from '../../public/bg-pattern-card.svg'
import profile from '../../public/image-victor.jpg'
import CardData from '../components/cardData'

const kumbh_sans = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className={`${kumbh_sans.className} h-screen w-screen flex justify-center 
      items-center relative bg-dark_cyan overflow-hidden`}>
      <div className='w-full h-auto absolute top-0 left-0
        -translate-x-1/2 rotate-45 -translate-y-2/3'>
        <Image src={bg_top} alt='' className='w-full h-full'/>
      </div>
      <div className='w-full h-auto absolute left-0 top-0
        translate-x-1/4 translate-y-1/4'>
        <Image src={bg_bottom} alt='' className='w-full h-full'/>
      </div>
      <div className='w-[90%] md:w-1/4 h-1/2 md:h-3/5 z-10 bg-white rounded-xl overflow-hidden
        flex flex-col'>
        <div className='w-full h-auto'>
          <Image src={bg_card} alt='banner' className='w-full h-auto'/>
        </div>
        <div className='flex-1 flex items-center flex-col relative'>
          <div className='rounded-full overflow-hidden w-[28%] bg-white
              p-2 -translate-y-1/2'>
            <Image src={profile} alt='profile picture' className='w-full h-auto rounded-full'/>
          </div>
          <h1 className='text-2xl md:text-3xl font-semibold'>
            Victor Crest <span className='font-normal text-dark_gray'>26</span>
          </h1>
          <h1 className='tracking-wide pt-3 text-lg md:text-xl pb-10'>
            London
          </h1>
          <hr className='text-dark_grayish_blue w-full pt-5'/>
          <div className='flex justify-around w-full'>
            <CardData heading='80K' desc='Followers'/>
            <CardData heading='803K' desc='Likes'/>
            <CardData heading='1.4K' desc='Photos'/>
          </div>
        </div>
      </div>
    </main>
  )
}
