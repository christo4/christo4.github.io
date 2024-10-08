import Link from 'next/link';

export default function Header() {
    return (
      <header className="text-black py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <nav className="hidden md:block">
            <ul className="flex gap-x-6">
              {/* Navigation links */}
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }