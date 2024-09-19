import Image from "next/image";
import githubPic from "../pictures/github_icon.png"
import linkedInPic from "../pictures/linkedin_icon.png"
import Link from "next/link";

export default function Header() {
    return (
      <header className="container mx-auto px-4">
        <ul className="flex gap-x-4">
          <Link href={"https://github.com/christo4"}>
            <Image
                src={githubPic}
                width={50}
                height={50}
                alt="Picture of the author"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/christopher-rodriguez-74259217a/"}>
            <Image
                src={linkedInPic}
                width={50}
                height={50}
                alt="Picture of the author"
            />
          </Link>
        </ul>
      </header>
    );
  }