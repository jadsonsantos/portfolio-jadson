'use client'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  children: React.ReactNode
  slidesToShow?: number
  slidesToScroll?: number
  dots?: boolean
  arrows?: boolean
  centerMode?: boolean
  centerPadding?: string
}

const Carousel: React.FC<Props> = ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  dots = true,
  arrows = true,
  centerMode = false,
  centerPadding = ''
}: Props) => {
  const settings: Settings = {
    dots,
    arrows,
    infinite: true,
    speed: 500,
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
