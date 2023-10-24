import Image from "next/image"
import Link from "next/link"

const links = [
  {
    name: 'Доставка',
    url: 'delivery_icon.svg'
  },
  {
    name: 'Самовывоз',
    url: 'pedestrian-man.svg'
  }
]

const sortLinks = ['Время доставки', 'Готовые блюда', 'Упакованные блюда']

const Header = () => {
  return (
    <div className="flex justify-around gap-[2px] flex-col text-xl md:flex-row md:text-base lg:text-xl 2xl:text-2xl">
      {
        links.map((item) => (
          <Link
            className="flex bg-[#343A40] text-white justify-center items-center 
          font-bold uppercase gap-3 flex-1 py-4"
            href='/'>
            <div className="md:hidden xl:flex">
              <Image src={item.url} alt="icon" width={40} height={40} />
            </div>
            <span>{item.name}</span>
          </Link>
        ))
      }

      <span
        className="flex flex-1 justify-center items-center md:text-sm lg:text-xl 2xl:text-2xl
         text-white text-center bg-[#343A40] text-[#F9F9F9]/80 py-4">
        Сортировать по
      </span>

      {
        sortLinks.map((item) => (
          <Link
            className="flex flex-1 bg-[#343A40] text-white justify-center items-center 
            text-center py-4"
            href='/'>

            <span>{item}</span>
          </Link>
        ))
      }

    </div>
  )
}

export default Header