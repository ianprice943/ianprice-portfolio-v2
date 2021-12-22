import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
    //used to set active
}

const Header: React.FC = () => {
    return (
        <header className="p-2 flex flex-col-reverse sm:flex-row">
            <div className="sm:flex-grow">
                <h1 className="text-4xl">Ian Price</h1>
            </div>
            <nav className="flex sm:flex-grow-0">
                <ul className="flex sm:flex-row sm:mt-auto sm:mb-auto">
                    <li className="sm:pr-2 hover:underline">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="sm:pr-2 hover:underline">
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                    <li className="sm:pr-2 hover:underline">
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
            <ThemeSwitcher />
        </header>
    )
}

export default Header;