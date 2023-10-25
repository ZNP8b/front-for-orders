import Image from "next/image"
import Link from "next/link"

const links = [
  {
    name: 'Доставка',
    svg: (<svg className="group-hover:fill-black duration-250" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>)
  },
  {
    name: 'Самовывоз',
    svg: (<svg className="fill-white duration-250 group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 320 512"><path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z" /></svg>)
  }
]

const sortLinks = ['Время доставки', 'Готовые блюда', 'Упакованные блюда']

const Header = () => {
  return (
    <div className="flex justify-around gap-1 flex-col text-xl md:flex-row md:text-base lg:text-xl 2xl:text-2xl">
      {
        links.map((item) => (
          <Link
            className="group flex bg-[#343A40] text-white justify-center items-center 
            font-bold uppercase gap-3 flex-1 py-4 hover:text-black hover:bg-white 
            transition-all duration-250"
            href='/'>
            <div className="md:hidden xl:flex">
              {/* <Image src={item.url} alt="icon" width={40} height={40} /> */}
              {item.svg}
            </div>
            <span>{item.name}</span>
          </Link>
        ))
      }

      <div className="flex flex-[3] flex-col md:flex-row">

        <span
          className="flex flex-1 justify-center items-center md:text-sm lg:text-xl 2xl:text-2xl
         text-white text-center bg-[#343A40] text-[#F9F9F9]/80 py-4">
          Сортировать по
        </span>

        {
          sortLinks.map((item) => (
            <Link
              className="flex flex-1 bg-[#343A40] text-white justify-center items-center 
          text-center py-4 hover:text-black hover:bg-white transition-colors duration-250"
              href='/'>

              <span className="px-3">{item}</span>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Header