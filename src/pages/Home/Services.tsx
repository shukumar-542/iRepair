import Container from '@/components/ui/Container';
import BatteryReplacement from '@/components/ui/serviceCard/BatteryReplacement';
import ChipReplacement from '@/components/ui/serviceCard/ChipReplacement';
import DataRecovery from '@/components/ui/serviceCard/DataRecovery';

const Services = () => {
    return (
        <div>
            <Container className='mt-28'>
            <div className='flex flex-col justify-center text-center items-center'>
                <h1 className='text-6xl font-semibold'>Services that we provide.</h1>
                <p className='max-w-[80ch] mt-10 mb-20'>We provide various computer repair services and solutions for our new and regular customers.
                    Feel free to find out more below.</p>
            </div>
            <div className='grid grid-cols-12 gap-5 my-10'>
                <BatteryReplacement></BatteryReplacement>
                <ChipReplacement></ChipReplacement>
                <DataRecovery></DataRecovery>
                <div className="h-[200px] bg-red-500 rounded-md col-span-12" ></div>
                <div className="h-[200px] bg-red-500 rounded-md col-span-12 lg:col-span-4" ></div>
                <div className="h-[200px] bg-red-500 rounded-md col-span-12 lg:col-span-4" ></div>
                <div className="h-[200px] bg-red-500 rounded-md col-span-12 lg:col-span-4" ></div>
                
            </div>
        </Container>
        </div>
    );
};

export default Services;