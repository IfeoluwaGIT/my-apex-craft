import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            We are a consultancy firm specializing in professional document preparation, proofreading, and customized solutions. Our mission is to elevate your business and academic goals through excellence.
          </p>
          <div className="mt-4">
            <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">Courses</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Accreditations</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Stay updated with our latest news, tips, and services. No spam, we promise!
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded text-gray-800"
            />
            <button className="bg-white text-green-900 font-semibold py-2 rounded hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <p className="text-gray-300 mb-4">Connect with us on social media:</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
          <p className="mt-6 text-gray-400">
            Phone: +123 456 7890 <br />
            Email: support@consultancy.com
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Consultancy Firm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
