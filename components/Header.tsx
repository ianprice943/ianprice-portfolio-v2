import Link from 'next/link';
import { useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC<{active:string}> = ({active}) => {

    useEffect(() => {
        setActiveLink(active);
    }, [active]);

    return (
        <header className="p-2 flex flex-col-reverse sm:flex-row">
            <div className="sm:flex-grow">
                <h1 className="text-4xl">Ian Price</h1>
            </div>
            <nav className="flex sm:flex-grow-0">
                <ul className="flex justify-evenly mx-auto flex-row sm:my-auto">
                    <li className="sm:pr-2 hover:underline">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-2 sm:pr-2 hover:underline">
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

function setActiveLink(active:string) {
    if (active === 'home') {
        document.querySelector('li:first-of-type')?.classList.add('underline');
    } else if (active === 'resume') {
        document.querySelector('li:nth-of-type(2)')?.classList.add('underline');
    } else if (active === 'portfolio') {
        document.querySelector('li:last-of-type')?.classList.add('underline');
    }
}

export default Header;