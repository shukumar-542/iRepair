import '../App.css'
import Button from './Home/Button';
import HeroNav from './Home/HeroNav';
const Hero = () => {
    return (
        <div>
            <HeroNav></HeroNav>
            <section className='hero-container'>
                <div className='content space-y-5 flex flex-col items-center justify-center'>
                    <h1 className='font-extrabold  p-0 m-0 '>
                        <span className='text-[64px]'>
                            Brand New event Packages
                        </span>
                        <br />
                        <span className='text-yellow text-[56px]'>For Winter</span>
                    </h1>
                    <p className='max-w-[80ch] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.</p>
                    <Button></Button>
                </div>
            </section>
            <div className='h-[100vh]'></div>
        </div>
    );
};

export default Hero;