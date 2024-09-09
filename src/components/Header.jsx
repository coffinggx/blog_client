import Logo from "./Logo"
import Nav from "./Nav"
import SearchBox from "./SearchBox"
export default function Header() {  
  return (
    <header className="bg-white shadow-md shadow-gray-400 flex-wrap flex  sticky top-0 z-[20] mx-auto w-full items-center justify-between p-5">
      <Logo/>
      <SearchBox/>
      <Nav/>
    </header>
  )
} 