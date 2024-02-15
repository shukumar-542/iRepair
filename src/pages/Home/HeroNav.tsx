
const HeroNav = () => {
    return (
        <div className=" fixed w-full z-[999] h-[96px]">
           <nav className="flex justify-between max-w-[1265px] py-[24px] mx-auto">
            <span className="text-white font-bold text-[32px]">Event <span className="text-yellow ">360</span></span>
            <ul className="flex space-x-[16px] text-white">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </nav>
        </div>
    );
};

export default HeroNav;