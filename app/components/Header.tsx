import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-fit flex gap-1">
      <Link
        className="flex bg-[#343A40] text-white justify-center items-center font-bold text-2xl uppercase gap-4 py-5 px-12"
        href='/'>
        <div>
          <Image src="delivery_icon.svg" alt="delivery_icon" width={40} height={40} />
        </div>
        <span>Доставка</span>
      </Link>
    </div>
  )
}

export default Header