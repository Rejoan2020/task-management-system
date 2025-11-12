import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import Search from "./Search"
import Tasktable from "./tasks/Tasktable"
function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero className="text-red-500"/>
        <section className="mb-20" id="tasks">
          <div className="container">
            <Search />
            <Tasktable />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
