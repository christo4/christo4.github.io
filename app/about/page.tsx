import Image from 'next/image'
import profilePic from "../../pictures/Chris2.jpg"

const About = () => {
      return (
      <main className="container mx-auto px-4 flex items-center h-5/6">
        <div className="border border-gray-300 p-2 rounded-[50%] inline-block" style={{width: '200px', height: '200px'}}>
              <Image
                src={profilePic}
                alt="Picture of the author"
                className="rounded-full aspect-square object-cover"
                placeholder="blur"
              />
            </div>
        <section className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
          <article id="about">
            <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
            <p>
              <b>I am passionate about learning new technologies and applying them to solve real-world problems.</b>
            </p>
            <p>
              As a Software Test Designer at Hexagon | NovAtel, I am part of a team that ensures the quality and reliability of software products that provide high-precision positioning solutions for various industries, such as agriculture, aerospace, and autonomous vehicles. I design and execute test cases, create and maintain test automation frameworks and tools, and analyze and report test results using my skills in Python and other technologies.
            </p>
            <p>
              I have a Bachelor of Science in Computer Science from the University of Calgary, where I learned how to work in teams and collaborate on diverse projects. I also gained valuable experience in developing and maintaining database systems and user interfaces in ASP.NET and SQL as a Junior Programmer at Tenaris, and in coordinating and developing a global Industrial Control Systems (ICS) cyber security course as a Cyber Security Analyst at Shell. 
            </p>
          </article>
        </section>
      </main>
      )
  }

export default About;