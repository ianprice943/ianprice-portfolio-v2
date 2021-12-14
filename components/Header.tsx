import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeaderProps {
    //used to set active
}

const Header: React.FC = () => {

    const [theme, setTheme] = useState([checkUserTheme()]);

    const changeUserTheme = () => {
        const curTheme = checkUserTheme();
        if(curTheme === 'dark') {
            document.documentElement.classList.remove('dark');
            setTheme(['light']);
        } else {
            document.documentElement.classList.add('dark');
            setTheme(['dark']);
        }
    }

    return (
        <header className="p-2 flex flex-col-reverse sm:flex-row">
            <div className="sm:flex-grow">
                <h1 className="text-4xl">Ian Price</h1>
            </div>
            <nav className="flex sm:flex-grow-0">
                <ul className="flex sm:flex-row sm:mt-auto sm:mb-auto">
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
                    <li className="sm:pr-2">
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
            <div onClick={changeUserTheme}>
                <input type="checkbox" name="toggle-switch" id="toggle-switch" />
                <label htmlFor="toggle-switch">
                    <span><svg className="h-8 w-8 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg></span>
                    <span><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg></span>
                    <span className="ball"><svg className="h-8 w-8 text-blue-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" /></svg></span>
                </label>
            </div>
        </header>
    )
}

function checkUserTheme(): string {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        return 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        return 'light'
    }
}

export default Header;