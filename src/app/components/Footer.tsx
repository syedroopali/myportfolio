import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">My Portfolio</h2>
            <p className="mt-2 text-gray-400">Muhammad Ali</p>
            <p className="text-gray-400">ali@gmail.com</p>
            <p className="text-gray-400">0310-0000000</p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0 space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link href="/">
              <div className="hover:text-gray-300">Home</div>
            </Link>
            <Link href="/about">
              <div className="hover:text-gray-300">About</div>
            </Link>
            <Link href="/projects">
              <div className="hover:text-gray-300">Projects</div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-gray-300">Contact</div>
            </Link>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.839 9.839 0 01-2.828.775A4.93 4.93 0 0023.337 3a9.867 9.867 0 01-3.127 1.195A4.92 4.92 0 0016.616 3a4.92 4.92 0 00-4.92 4.92c0 .385.043.76.127 1.121A13.953 13.953 0 011.64 3.151a4.92 4.92 0 001.523 6.573A4.904 4.904 0 01.964 9.72v.061a4.918 4.918 0 003.946 4.827 4.908 4.908 0 01-2.212.084 4.921 4.921 0 004.6 3.417A9.867 9.867 0 010 19.539a13.894 13.894 0 007.548 2.213c9.056 0 14.01-7.507 14.01-14.01 0-.213-.004-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.75 3H4.25A1.25 1.25 0 003 4.25v15.5A1.25 1.25 0 004.25 21h15.5A1.25 1.25 0 0021 19.75V4.25A1.25 1.25 0 0019.75 3zM8.337 17.896H5.675V9.17h2.662v8.726zm-1.334-9.872a1.546 1.546 0 110-3.091 1.546 1.546 0 010 3.091zm10.112 9.872h-2.662v-4.347c0-1.035-.017-2.367-1.442-2.367-1.443 0-1.664 1.127-1.664 2.292v4.422h-2.662V9.17h2.554v1.18h.036c.356-.675 1.224-1.386 2.52-1.386 2.693 0 3.188 1.773 3.188 4.08v4.852z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.248c-5.632 0-10.222 4.59-10.222 10.222 0 4.524 2.937 8.366 7.008 9.725.512.094.68-.222.68-.491v-1.805c-2.839.617-3.438-1.174-3.438-1.174-.467-1.188-1.146-1.502-1.146-1.502-.937-.64.071-.626.071-.626 1.037.072 1.58 1.065 1.58 1.065.921 1.579 2.422 1.123 3.012.859.093-.666.36-1.123.654-1.382-2.268-.259-4.653-1.135-4.653-5.051 0-1.115.397-2.027 1.049-2.739-.105-.259-.453-1.296.098-2.699 0 0 .854-.272 2.8 1.046a9.802 9.802 0 015.097 0c1.945-1.318 2.797-1.046 2.797-1.046.553 1.403.206 2.44.1 2.699.653.711 1.048 1.623 1.048 2.739 0 3.928-2.389 4.788-4.66 5.042.371.32.698.948.698 1.915v2.83c0 .27.166.587.683.489 4.07-1.36 7.006-5.201 7.006-9.725 0-5.631-4.591-10.222-10.222-10.222z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
