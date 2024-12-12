import { DarkMode } from "./DarkMode"
import DropdownListManu from "./DropdownListManu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4"

            >
                {/* logo */}
                <Logo />

                {/* search */}
                <Search />

                {/* darkmode & profile */}
                <div className="flex gap-4">
                    <DarkMode />
                    <DropdownListManu />
                </div>
            </div>
        </nav>
    )
}
export default Navbar