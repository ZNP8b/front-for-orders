import Order from "./components/Order";

export default function Home() {
  return (
    <main className="">
      <div className="flex max-w-fit flex-wrap justify-center">
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </main>
  )
}
