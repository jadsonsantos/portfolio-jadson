'use client'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  children: React.ReactNode
  slidesToShow?: number
  slidesToScroll?: number
  initialSlide?: number
  infinite?: boolean
  dots?: boolean
  arrows?: boolean
  centerMode?: boolean
  centerPadding?: string
  autoplay?: boolean
  speed?: number
  autoplaySpeed?: number
  cssEase?: string
}

const Carousel: React.FC<Props> = ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  infinite = true,
  dots = true,
  arrows = true,
  centerMode = false,
  centerPadding = '',
  autoplay = false,
  speed = 800,
  autoplaySpeed = 800,
  cssEase = 'linear'
}: Props) => {
  const settings: Settings = {
    dots,
    arrows,
    infinite,
    initialSlide,
    autoplay,
    speed,
    autoplaySpeed,
    cssEase,
    slidesToShow,
    slidesToScroll,
    centerMode,
    centerPadding,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: slidesToShow >= 2 ? slidesToShow - 1 : slidesToShow,
          slidesToScroll,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
