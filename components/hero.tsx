import { FlipWords } from "./ui/FlipWords"



const Hero = () => {
    const words = ["tester", "designer", "analyst"]
    return (
        <div className="pb-20 pt-36">
            <div>
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                    Hi, I&apos;m Christopher Rodriguez 
                    <FlipWords words={words} /> <br />
                </div>
            </div>
        </div>
    )
}

export default Hero;