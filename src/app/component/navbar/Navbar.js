'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import logo from '../../../../public/img/logo.png';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownOpen2, setMobileDropdownOpen2] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  let dropdownTimeout1;
  let dropdownTimeout2;

  const handleMouseEnter1 = () => {
    clearTimeout(dropdownTimeout1);
    setDropdownOpen(true);
  };

  const handleMouseLeave1 = () => {
    dropdownTimeout1 = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleMouseEnter2 = () => {
    clearTimeout(dropdownTimeout2);
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    dropdownTimeout2 = setTimeout(() => {
      setDropdownOpen2(false);
    }, 400);
  };


  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0c0f14fa] shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Desktop & Mobile Navbar Wrapper */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-12 w-auto lg:h-20" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link href="#" className="text-[#A8ABBA] hover:text-white transition">
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <button
              className="flex items-center space-x-1 text-[#A8ABBA] hover:text-white transition"
            >
              <span>Destinations</span>
              <AiOutlineDown className="text-sm" />
            </button>

            {dropdownOpen2 && (
              <div className="absolute top-full mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link href="/Istanbul" className="block px-4 py-2 hover:text-blue-500">
                  Istanbul, Turkey
                </Link>
                <Link href="/Dubai" className="block px-4 py-2 hover:text-blue-500">
                  Dubai, UAE
                </Link>
                <Link href="/Kuala-Lumpur" className="block px-4 py-2 hover:text-blue-500">
                  Kuala Lumpur, Malaysia
                </Link>
                <Link href="/London" className="block px-4 py-2 hover:text-blue-500">
                  London, UK
                </Link>
                <Link href="/Riyadh" className="block px-4 py-2 hover:text-blue-500">
                  Riyadh, Saudi Arabia
                </Link>
              </div>
            )}
          </div>


          <Link href="/Blogs/1" className="text-[#A8ABBA] hover:text-white transition">
            Blog
          </Link>

          {/* Information Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <button className="flex items-center space-x-1 text-[#A8ABBA] hover:text-white transition">
              <span>Information</span>
              <AiOutlineDown className="text-sm" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-44 bg-white text-black rounded shadow-lg">
                <Link href="/payment" className="block px-4 py-2 hover:text-blue-500">
                  Pricing
                </Link>
                <Link href="/Terms&conditions" className="block px-4 py-2 hover:text-blue-500">
                  Terms & Conditions
                </Link>
                <Link href="/Privac" className="block px-4 py-2 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          <Link href="#About Us" className="text-[#A8ABBA] hover:text-white transition">
            About Us
          </Link>
          <Link href="#gallery" className="text-[#A8ABBA] hover:text-white transition">
            Scholarships
          </Link>
        </div>

        {/* Desktop Register Button */}
        <div className="hidden lg:block">
          <Link href="/RegisterNow">
            <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-4 rounded-full border-2 border-[#027CAC] hover:bg-transparent transition">
              Register Now
            </button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="relative flex items-center justify-between lg:hidden w-full">
          {/* Logo already above */}
          {/* Register Now: Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/RegisterNow">
             <button className="bg-[#027CAC] text-white font-semibold py-2 px-3 rounded-full border-2 border-[#027CAC] hover:bg-transparent transition text-[10px] sm:text-sm md:text-base lg:text-[13px]">
  Register Now
</button>

            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
  <div className="lg:hidden fixed top-4 bottom-4 left-4 right-4 z-50 bg-gray-900 text-white p-6 rounded-xl shadow-lg overflow-y-auto">
    {/* Close Button */}
    <div className="flex justify-end">
      <button onClick={() => setMobileMenuOpen(false)}>
        <AiOutlineClose className="w-6 h-6" />
      </button>
    </div>

    <nav className="mt-6 space-y-4">
      <Link href="#home" className="block py-2 px-4 hover:bg-blue-500 rounded">
        Home
      </Link>

      {/* Destinations Mobile */}
      <button
        className="flex justify-between w-full items-center py-2 px-4 hover:bg-blue-500 rounded"
        onClick={() => setMobileDropdownOpen2(!mobileDropdownOpen2)}
      >
        <span>Destinations</span>
        <AiOutlineDown className={`transition-transform ${mobileDropdownOpen2 ? 'rotate-180' : ''}`} />
      </button>
      {mobileDropdownOpen2 && (
        <div className="ml-4 space-y-2">
          <Link href="/Istanbul" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Istanbul, Turkey
          </Link>
          <Link href="/Dubai" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Dubai, UAE
          </Link>
          <Link href="/Kuala-Lumpur" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Kuala Lumpur, Malaysia
          </Link>
          <Link href="/London" className="block py-2 px-4 hover:bg-blue-500 rounded">
            London, UK
          </Link>
          <Link href="/Riyadh" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Riyadh, Saudi Arabia
          </Link>
        </div>
      )}

      <Link href="/Blogs/1" className="block py-2 px-4 hover:bg-blue-500 rounded">
        Blog
      </Link>

      {/* Information Mobile */}
      <button
        className="flex justify-between w-full items-center py-2 px-4 hover:bg-blue-500 rounded"
        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
      >
        <span>Information</span>
        <AiOutlineDown className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      {mobileDropdownOpen && (
        <div className="ml-4 space-y-2">
          <Link href="/payment" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Pricing
          </Link>
          <Link href="/Terms&conditions" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Terms & Conditions
          </Link>
          <Link href="/Privac" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Privacy Policy
          </Link>
        </div>
      )}

      <Link href="#About Us" className="block py-2 px-4 hover:bg-blue-500 rounded">
        About Us
      </Link>
      <Link href="#gallery" className="block py-2 px-4 hover:bg-blue-500 rounded">
        Scholarships
      </Link>
    </nav>
  </div>
)}

    </nav>
  );
}

export default Navbar;
