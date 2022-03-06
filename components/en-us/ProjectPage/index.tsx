import Header from '@/components/Atoms/Header'
import Footer from '@/components/Atoms/Footer'
// import RecentBlogs from '@/components/en-us/IndexPage/RecentBlogs'

interface Propos {
  readonly project: string | [],
}

const Projects = ({ project }: Propos) => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex-col container mx-auto mt-8 pr-8 sm:pr-2 justify-center">
        </div>
        <div className="col-span-2 pr-5">
          hogehoge
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
