'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDown, AiOutlineUp, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '../../../../public/img/logo.png';

function Navbar() {
  const pathname = usePathname();

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
    dropdownTimeout1 = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleMouseEnter2 = () => {
    clearTimeout(dropdownTimeout2);
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    dropdownTimeout2 = setTimeout(() => setDropdownOpen2(false), 400);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  // ✅ ACTIVE LINK STYLE (sirf underline add ki)
  const linkClass = (href) =>
    `relative text-black hover:text-blue-600 transition
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all
     ${pathname === href ? 'text-blue-600 after:w-full' : 'after:w-0 hover:after:w-full'}
    `;

  // Active class for dropdown links (desktop)
  const dropdownLinkClass = (href) =>
    `block cursor-pointer px-4 py-2 hover:text-blue-500 transition ${pathname === href ? 'text-blue-600' : ''}`;

  // Active class for mobile dropdown links
  const mobileDropdownLinkClass = (href) =>
    `block py-2 px-4 hover:bg-blue-100 rounded ${pathname === href ? 'text-blue-600' : ''}`;

  // Destination routes list to mark parent as active when any child is active
  const destinations = ['/Destinations', '/Istanbul-Turkey', '/Dubai-UAE', '/Kuala-Lumpur', '/London', '/Riyadh'];
  const isDestinationActive = destinations.some((d) => pathname?.startsWith(d));

  // Information routes list to mark parent as active when any child is active
  const information = ['/payment', '/Terms&conditions', '/Privac'];
  const isInfoActive = information.some((d) => pathname?.startsWith(d));
  // Register active
  const isRegisterActive = pathname === '/Register-Now';

  // Parent class for Destinations to show underline when any destination is active
  const destParentClass = (active) =>
    `relative flex items-center space-x-1 transition cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all ${
      active ? 'text-blue-600 after:w-full' : 'text-black after:w-0 hover:after:w-full hover:text-blue-600'
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#ffffffe7] shadow-md' : 'bg-[#ffffffd3]'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-2">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-14 md:h-18 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">

          <Link href="/" className={linkClass('/')}>Home</Link>

          {/* Destinations Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <Link href="/Destinations" className={destParentClass(isDestinationActive)}>
              <span>Destinations</span>
              {dropdownOpen2 ? <AiOutlineUp className="text-sm" /> : <AiOutlineDown className="text-sm" />}
            </Link>

            {dropdownOpen2 && (
              <div className="absolute top-full mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link href="/Istanbul-Turkey" className={dropdownLinkClass('/Istanbul-Turkey')}>Istanbul, Turkey</Link>
                <Link href="/Dubai-UAE" className={dropdownLinkClass('/Dubai-UAE')}>Dubai, UAE</Link>
                <Link href="/Kuala-Lumpur" className={dropdownLinkClass('/Kuala-Lumpur')}>Kuala Lumpur</Link>
                <Link href="/London" className={dropdownLinkClass('/London')}>London</Link>
                <Link href="/Riyadh" className={dropdownLinkClass('/Riyadh')}>Riyadh</Link>
              </div>
            )}
          </div>

          <Link href="/Blog" className={linkClass('/Blog')}>Blog</Link>

          {/* Information Dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <button className={destParentClass(isInfoActive)}>
              <span>Information</span>
              {dropdownOpen ? <AiOutlineUp className="text-sm" /> : <AiOutlineDown className="text-sm" />}
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-44 bg-white text-black rounded shadow-lg">
                <Link href="/payment" className={dropdownLinkClass('/payment')}>Pricing</Link>
                <Link href="/Terms&conditions" className={dropdownLinkClass('/Terms&conditions')}>Terms & Conditions</Link>
                <Link href="/Privac" className={dropdownLinkClass('/Privac')}>Privacy Policy</Link>
              </div>
            )}
          </div>

          <Link href="/About Us" className={linkClass('/AboutUs')}>
            About Us
          </Link>
          <Link href="/Scholarships" className={linkClass('/Scholarships')}>
            Scholarships
          </Link>
        </div>

        {/* Desktop Register Button */}
        <div className="hidden lg:block">
          <Link href="/Register-Now">
            <button className={`cursor-pointer font-semibold py-1 px-4 rounded-full border-2 border-blue-600 transition ${isRegisterActive ? 'bg-transparent text-blue-600' : 'bg-blue-600 hover:bg-blue-700 text-white hover:bg-transparent hover:text-blue-600'}`}>
              Register Now
            </button>
          </Link>
        </div>

        <div className="relative flex items-center justify-between lg:hidden w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/Register-Now">
              <button className={`font-semibold py-1 px-3 rounded-full border-2 border-blue-600 transition text-[10px] sm:text-sm ${isRegisterActive ? 'bg-transparent text-blue-600' : 'bg-blue-600 text-white hover:bg-transparent hover:text-blue-600'}`}>
                Register Now
              </button>
            </Link>
          </div>

          <button className="text-black ml-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? "" :<AiOutlineMenu className="w-6 h-6" /> }
          </button>
      </div>

      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-4 bottom-4 left-4 right-4 z-50 bg-white text-black p-6 rounded-xl shadow-lg overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)}>
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 space-y-4">
            <Link href="/" className="block py-2 px-4 hover:bg-blue-100 rounded">Home</Link>

            {/* Destinations Mobile */}
            <button
              className={`flex justify-between w-full items-center py-2 px-4 hover:bg-blue-100 rounded relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all ${isDestinationActive ? 'text-blue-600 after:w-full' : 'after:w-0 hover:after:w-full'}`}
              onClick={() => setMobileDropdownOpen2(!mobileDropdownOpen2)}
            >
              <span>Destinations</span>
              {mobileDropdownOpen2 ? (
                <AiOutlineUp className="transition-transform" />
              ) : (
                <AiOutlineDown className="transition-transform" />
              )}
            </button>

            {mobileDropdownOpen2 && (
              <div className="ml-4 space-y-2">
                <Link href="/Destinations" className={mobileDropdownLinkClass('/Destinations')}>Destinations</Link>

                <Link href="/Istanbul-Turkey" className={mobileDropdownLinkClass('/Istanbul-Turkey')}>Istanbul, Turkey</Link>
                <Link href="/Dubai-UAE" className={mobileDropdownLinkClass('/Dubai-UAE')}>Dubai, UAE</Link>
                <Link href="/Kuala-Lumpur" className={mobileDropdownLinkClass('/Kuala-Lumpur')}>Kuala Lumpur, Malaysia</Link>
                <Link href="/London" className={mobileDropdownLinkClass('/London')}>London, UK</Link>
                <Link href="/Riyadh" className={mobileDropdownLinkClass('/Riyadh')}>Riyadh, Saudi Arabia</Link>
              </div>
            )}

            <Link href="/Blog" className="block py-2 px-4 hover:bg-blue-100 rounded">Blog</Link>

            <button
              className={`flex justify-between w-full items-center py-2 px-4 hover:bg-blue-100 rounded relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all ${isInfoActive ? 'text-blue-600 after:w-full' : 'after:w-0 hover:after:w-full'}`}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <span>Information</span>
              {mobileDropdownOpen ? (
                <AiOutlineUp className="transition-transform" />
              ) : (
                <AiOutlineDown className="transition-transform" />
              )}
            </button>

            {mobileDropdownOpen && (
              <div className="ml-4 space-y-2">
                <Link href="/payment" className={mobileDropdownLinkClass('/payment')}>Pricing</Link>
                <Link href="/Terms&conditions" className={mobileDropdownLinkClass('/Terms&conditions')}>Terms & Conditions</Link>
                <Link href="/Privac" className={mobileDropdownLinkClass('/Privac')}>Privacy Policy</Link>
              </div>
            )}

            <Link href="#About Us" className="block py-2 px-4 hover:bg-blue-100 rounded">About Us</Link>
            <Link href="#gallery" className="block py-2 px-4 hover:bg-blue-100 rounded">Scholarships</Link>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
