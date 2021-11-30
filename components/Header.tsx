import Link from 'next/link';

interface HeaderProps {
    //used to set active
}

const Header: React.FC = () => {

    return (
        <header className="p-2 flex">
            <div className="flex-grow">
                <h1 className="text-4xl">Ian Price</h1>
            </div>
            <nav className="flex flex-grow-0">
                <ul className="flex flex-row mt-auto mb-auto">
                    <li className="pr-2">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="pr-2">
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;