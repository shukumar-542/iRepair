import Container from "@/components/ui/Container";
import macbook1 from "@/assets/images/macbook 1.png"
const About = () => {
    return (
        <Container className="grid grid-cols-1 lg:grid-cols-2  items-center mb-10">
            <div>
                <img src={macbook1} alt="" />
            </div>
            <div>
                <h1 className="font-semibold text-[60px] mb-6">Who we are</h1>
                <p className="mb-6">At iRepair, we love MacBooks as much as you do. That’s why we offer fast, reliable, and affordable repair services for all kinds of MacBooks. Whether you need a screen replacement, a battery upgrade, or a software fix, we have the skills and experience to get your MacBook back to its best. We serve both individuals and businesses in Bangladesh, and we guarantee your satisfaction. Don’t let a broken MacBook ruin your day. Contact iRepair today and let us take care of it.</p>
                <div className="lg:flex  justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <h1>98%</h1>
                        <span>Successful repair</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1>2K+</h1>
                        <span>Successful repair</span>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default About;