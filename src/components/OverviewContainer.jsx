import data from '../../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

const convertNumberToK = (number) => {
    if(number >= 10000) {
        number = (number/1000);
        return `${number}k`
    } else {
        return number;
    }
    
}

export const OverviewContainer = () => {

    return (
        <section className=' max-w-[1600px] w-full mx-auto absolute top-[190px] md:top-[140px] left-0 right-0 md:flex flex-wrap'>
            {
                data.social_overview.map(overview => 
                    <OverviewCard 
                        key={overview.id} 
                        network={overview.network}
                        user={overview.user}
                        audience={convertNumberToK(overview.audience)}
                        audienceType={overview.audienceType}
                        isUp={overview.isUp}
                        today={overview.today}
                    />
                )
            }
        </section>
    )
}

console.log(data.overview_today);

export const OverviewToday = () => {
    return (
        <section className='max-w-[1600px] w-full mx-auto'>
            <h1 className='text-xl ml-6 mb-6 font-bold text-Dark-Grayish-Blue dark:text-Desaturated-Blue'>Overview-Today</h1>
            <div className='md:flex flex-wrap'>
                {
                    data.overview_today.map(overview => 
                        <OverviewTodayCard
                            key={overview.id}
                            network={overview.network}
                            statsType={overview.statsType}
                            stats={convertNumberToK(overview.stats)}
                            porcentage={overview.porcentage}
                            isUp={overview.isUp}
                        />
                    )
                }
            </div>
        </section>
    );
}

