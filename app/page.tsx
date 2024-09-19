import Image from "next/image";
import Hero from "@/components/hero";
import profilePic from "../pictures/github_icon.png"

const Home = () => {
  return (
    <main className="relative bg-creme-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Image
          src={profilePic}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <Image
          src={profilePic}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </main>
  );
}

export default Home;