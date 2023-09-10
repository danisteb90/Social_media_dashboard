import facebookLogo from '../assets/icon-facebook.svg';
import twitterLogo from '../assets/icon-twitter.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import youtubeLogo from '../assets/icon-youtube.svg';
import iconUp from '../assets/icon-up.svg';
import iconDown from '../assets/icon-down.svg';

const networkLogo = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

const networkColor = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram',
    YouTube: 'bg-YouTube'
}

export const OverviewCard = ({user, audience, audienceType, network, isUp, today}) => {
    return (
        <article className="bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden relative z-20 dark:hover:brightness-125 hover:brightness-95 cursor-pointer hover:-translate-y-[2px] hover:translate-x-[2px] transition duration-200 ease-in">
        <div className={`${networkColor[network]} w-full h-[4px]`}></div>
            <div className='flex justify-center items-center gap-2 p-6'>
                <img src={networkLogo[network]} alt={`Logo ${network}`} className="w-[20px] h-[20px]" />
                <p className='text-xs text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>{user}</p>
            </div>
            <div className='flex flex-col text-center justify-center items-center'>
                <p className='text-6xl font-bold text-Very-Dark-Blue dark:text-White mb-2 tracking-[-1px]'>{audience}</p>
                <p className='uppercase tracking-[5px] text-xs text-Dark-Grayish-Blue dark:text-Desaturated-Blue pl-3'>{audienceType}</p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-5'>
                <img src={isUp ? iconUp : iconDown} className='w-[10px] h-[5px]' alt='arrowUp' />
                <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-xs font-bold`}>{`${today} Today`}</p>
            </div>
        </article>
    );
}

export const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }) => {
    return (
        <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[326px] h-[125px] mx-auto rounded-[5px] p-7 mb-4 flex flex-col justify-center gap-6 dark:hover:brightness-125 hover:brightness-95 cursor-pointer hover:-translate-y-[2px] hover:translate-x-[2px] transition duration-200 ease-in'>
            <div className='flex justify-between'>
                <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue text-xs font-bold'>{statsType}</p>
                <img src={networkLogo[network]} alt={`Logo ${network}`} className="w-[20px] h-[20px]" />
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-3xl font-bold dark:text-White'>{stats}</p>
                <div className='flex justify-center items-center gap-1'>
                    <img src={isUp ? iconUp : iconDown} className='w-[8px] h-[4px]' alt='arrowUp' />
                    <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-xs font-bold`}>{`${porcentage}%`}</p>
                </div>
            </div>
        </article>
    );
}

