import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E1A34] py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Top row */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + tagline */}
          <div>
            <a
              href="/"
              aria-label="Kaizen Health home"
              className="inline-block"
            >
              <Image
                src="/images/logo/kaizen-logo-light.svg"
                alt="Kaizen Health"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-6 max-w-xs text-lg leading-relaxed text-gray-200">
              Connecting Families, <br /> Simplifying Health.
            </p>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Find Us</h4>
            <address className="not-italic leading-relaxed">
              1875 Mission St, Ste 103
              <br />
              San Francisco, CA, 94103
              <br />
              <a
                href="mailto:info@kaizenhealth.io"
                className="hover:text-primary"
              >
                info@kaizenhealth.io
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-primary">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/updates" className="hover:text-primary">
                  Updates
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/docs/privacy" className="hover:text-primary">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-primary">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Social media
            </h4>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://twitter.com/kaizenhealthio"
                  aria-label="Twitter"
                  className="hover:text-primary"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.162 5.656a8.303 8.303 0 01-2.357.646 4.114 4.114 0 001.806-2.27 8.224 8.224 0 01-2.605.986 4.104 4.104 0 00-6.993 3.743A11.649 11.649 0 013.197 4.459a4.103 4.103 0 001.27 5.477 4.068 4.068 0 01-1.857-.514v.052a4.11 4.11 0 003.292 4.025 4.094 4.094 0 01-1.853.07 4.109 4.109 0 003.833 2.85A8.233 8.233 0 012 18.382a11.616 11.616 0 006.29 1.846c7.547 0 11.675-6.254 11.675-11.676 0-.178-.004-.355-.012-.531A8.34 8.34 0 0022.162 5.656z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61562247803536&mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  aria-label="Facebook"
                  className="hover:text-primary"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 13.5h2.5l1-4h-3.5v-2c0-.97 0-1.94 2-1.94H19.5V2.14c-.326-.043-1.557-.14-2.857-.14-2.715 0-4.643 1.657-4.643 4.7v2.8H9v4h3v8.5h4V13.5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kaizenhealthio"
                  target="_blank"
                  aria-label="Instagram"
                  className="hover:text-primary"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6-1.75a1 1 0 110 2 1 1 0 010-2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/kaizen-health-io"
                  aria-label="LinkedIn"
                  className="hover:text-primary"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.94 5a2.94 2.94 0 11-5.88 0 2.94 2.94 0 015.88 0zM3 8.48h3.88V21H3V8.48zM9.34 8.48H13.32v1.69c.71-1.28 2.38-2.09 4.38-2.09 4.19 0 4.94 2.76 4.94 6.35V21h-3.94v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.46-2.15 2.95V21H9.34V8.48z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kaizen Health. All rights reserved
        </div>
      </div>
    </footer>
  );
}
