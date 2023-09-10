import { useEffect, useState } from 'react';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])

    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue-Top h-[235px] md:h-[250px] rounded-b-[10px] pt-8 px-6 xl:mb-[160px] md:mb-[400px] mb-[900px] md:flex md:flex-col">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-semibold mb-5 md:sr-only">Total Followers: 23,004</p>
            <hr className="border-Dark-Grayish-Blue mb-4 md:hidden" />
            <div className="flex justify-between lg:items-center">
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue ml-2 font-semibold mb-5 sr-only md:not-sr-only">Total Followers: 23,004</p>
                <div className='flex gap-2'>
                    <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                    <label htmlFor="darkmode" className="bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2.5px] overflow-hidden relative">
                        <input onClick={handleClick} type="checkbox" id="darkmode" className="peer sr-only" />
                        <div className="peer-checked:bg-Toggle-gradient w-full h-full absolute top-0 left-0"></div>
                        <div className="w-[18px] h-[18px] absolute right-1 bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[-24px] dark:bg-Dark-Desaturated-Blue transition-all duration-300"></div>
                    </label>
                </div>
            </div>
        </header>
    );
}

export default Header;
