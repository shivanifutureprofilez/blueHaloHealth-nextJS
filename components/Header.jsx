
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Popup from "./Popup";
import CommingSoonBookButton from "./CommingSoonBookButton";
import { useRouter } from "next/router";
import DropDown from "./DropDown";
import { RiArrowDropDownLine } from "react-icons/ri";
import RoutesLists from "@/pages/api/RoutesLists";
import Popup1 from "./Popup1";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ageGroupsLists, setAgeGroupsLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const navLinks = [
    // { name: "Home", href: "/" },
    // { name: "Core Services ", href: "/service" },
    // { name: "About", href: "/about" },
    // **************Hidden for now**********************
    // { name: "Resources", href: "/resources" },
    // { name: "Events", href: "/events" },
    // *****************************************************
    // { name: "Blogs", href: "/https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" },
    // { name: "Contact", href: "/contact-us" },
  ];


  const [action, setAction] = useState();
  const { query } = useRouter();
  useEffect(() => {
    if (query.join == 'waitlist') {
      setAction('open')
    }
  }, [query]);


  const fetchGroups = async () => {
    const lists = new RoutesLists();
    const data = lists.getAgeGroups();
    data.then((res) => {
      setAgeGroupsLists(res?.data?.ageGroupList || []);
      setLoading(false)
    }).catch((err) => {
      setAgeGroupsLists([]);
      console.log("err", err)
      setLoading(false)
    });
  }
  useEffect(() => {
    fetchGroups();
  }, []);
  return (
    <header className="bg-[#F7F4F0] sticky top-0 z-50  " >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-green-dark text-[24px] md:text-[26px] font-bold"
          >
            BlueHaloHealth
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-7">
            <Link
              href='/'
              className="text-gray-800 hover:text-[#00D967] font-medium transition"
            >
              Home
            </Link>
            <Link
              href='/about'
              className="text-gray-800 hover:text-[#00D967] font-medium transition"
            >
              About
            </Link>
            <DropDown menuwidth="min-w-[250px]"
              btnclasses={'hover:text-[#00D967] text-gray-800 cursor-pointer font-medium transition focus:outline-none'}
              label="Services"
              onSelect={(item) => console.log('selected', item)}
              align="left"
            >
              {ageGroupsLists && ageGroupsLists?.map((group, idx) => (
                <div className="   grid grid-cols-1 space-y-2   group">
                  <Link href={`/service?agegroup=${group?._id}`} >
                    <p className="px-4 py-5 hover:bg-[#F7F4F0] hover:bg-gray-100 text-sm ">{group?.title}</p>
                    <hr className="text-gray-200 "/>
                  </Link>

                  <div className="  absolute left-full top-0   hidden group-hover:block bg-white shadow-lg p-3  min-w-[300px] rounded-md z-50">
                    {group.services?.map((srv) => (
                      <Link key={srv._id} href={`/service/detail/${srv?._id}`}>
                        <p className="text-sm  py-2 hover:text-blue-500 cursor-pointer">
                          {srv.name}
                        </p>
                        <hr className="text-gray-200 mt-2"/>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}


            </DropDown>
            {/* <p className="font-bold text-sm">Autism & Developmental Therapy</p>
                <ul className="mb-2 border-b mt-1 border-gray-200 pb-3">
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">0-6 Early Years</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'><li className="text-sm text-gray-500">6-12 School Age</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">13-17 Adolescents</li></Link>
                </ul>
                <p className="font-bold text-sm">Neurodevelopmental</p>
                <ul className="mb-2 border-b mt-1 border-gray-200 pb-3">
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">0-6 Early Years</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'><li className="text-sm text-gray-500">6-12 School Age</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">13-17 Adolescents</li></Link>
                </ul>
                <p className="font-bold text-sm"> Mental Health & Behaviour Health Counselling </p>
                <ul className="mb-2 border-b mt-1 border-gray-200 pb-3">
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">0-6 Early Years</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">6-12 School Age</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">13-17 Adolescents</li></Link>
                </ul>
                <p className="font-bold text-sm">Psychiatry, Medication Management,</p>
                <ul className="mb-2  mt-1 border-gray-200 pb-3">
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">0-6 Early Years</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">6-12 School Age</li></Link>
                  <Link href='/service?agegroup=68f098aae07796e988820b2b'> <li className="text-sm text-gray-500">13-17 Adolescents</li></Link>
                </ul> */}


            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[#00D967] font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <a href="https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" className="text-gray-800 hover:text-[#00D967] font-medium transition">Blogs</a>
            <Link
              href='/contact-us'
              className="text-gray-800 hover:text-[#00D967] font-medium transition"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden gap-4 lg:flex">


            {/* <Button
              title="Book Free Consultation"
              className="button bg-green-dark text-[15px] px-5 py-2"
            /> */}
            <Popup1 action={action} />
            {/* <Button
              title="Patient Portal"
              className="button bg-green-dark text-[15px] px-5 py-2"
            /> */}
            {/* <Link
                  // title="Patient Portal"
                  href="/"
                  className="bg-white border !border-[#009C4A]  text-center  text-black  rounded-lg font-semibold 
              hover:bg-green-50 transition inline-block text-[15px] px-5 py-2"
                  // onClick={() => setIsMobileMenuOpen(false)}
                  
                >
                Patient Portal
                </Link> */}
            <Popup1 classes={`bg-white border !border-[#009C4A]  text-center  text-black  rounded-lg font-semibold 
              hover:bg-green-50 transition inline-block text-[15px] px-5 py-2 cursor-pointer`}
              // content={`Patient Portal`} 
              btnText={`Patient Portal`} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <FiX
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl cursor-pointer text-gray-800"
              />
            ) : (
              <FiMenu
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-2xl cursor-pointer text-gray-800"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="p-6 fixed md:relative top-[50px]  w-full md:block">
          <div className=" rounded-2xl  w-full max-w-[100%]  lg:hidden bg-white shadow-lg border-t border-gray-100">
            <ul className="max-h-[70vh] overflow-auto flex flex-col space-y-4 px-6 py-4 text-gray-800 font-medium">
              <Link
                href='/'
                className="block hover:text-[#00D967] transition"
              >
                Home
              </Link>
              <Link
                href='/about'
                className="block hover:text-[#00D967] transition"
              >
                About
              </Link>
             <DropDown
          menuwidth="w-full sm:min-w-[300px]"
          btnclasses="hover:text-[#00D967] text-gray-800 cursor-pointer font-medium transition focus:outline-none"
          label="Services"
          onSelect={(item) => console.log('selected', item)}
          align="left"
        >
  <div className="w-full">
    {ageGroupsLists?.map((group, idx) => (
      <div key={idx} className="border-b border-gray-200">

        {/* Parent Item */}
        <details className="group w-full">
          <summary className="px-4 py-3 flex justify-between items-center cursor-pointer select-none text-sm font-semibold hover:bg-gray-100">
            {group?.title}
            <span className="transition group-open:rotate-90">
              ▶
            </span>
          </summary>

          {/* Sub Menus */}
          <div className="bg-white px-4 pb-3 space-y-1">
            {group.services?.map((srv) => (
              <Link key={srv._id} href={`/service/detail/${srv?._id}`}>
                <p className="text-sm py-2 hover:text-blue-500">{srv.name}</p>
              </Link>
            ))}
          </div>
        </details>

      </div>
    ))}
  </div>
</DropDown>

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block hover:text-[#00D967] transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <a href="https://phpdemo.futureprofilez.com/wp/blue-halo-health-blog/" className="block hover:text-[#00D967] transition">Blogs</a>
              <Link
                href='/contact-us'
                className="block hover:text-[#00D967] transition"
              >
                Contact
              </Link>
            </ul>
            <div className="p-4 grid gap-2 justify-left ">
              {/* <Button
                  title="Book Free Consultation"
                  className="button w-full bg-green-dark text-[14px] px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                /> */}
              <Popup1 action={action} classes={`button w-full bg-green-dark text-[14px] px-4 py-2`} />
              {/* <Link
                  // title="Patient Portal"
                  href="/"
                  className=" text-center w-full border border-green-600 text-green-600  rounded-lg font-semibold  w-full hover:bg-green-50 transition inline-block text-[14px] px-4 py-2"
                  // onClick={() => setIsMobileMenuOpen(false)}
                  
                >
                Patient Portal
                </Link> */}
              <Popup1 classes={`text-center cursor-pointer w-full border border-green-600 text-green-600  rounded-lg font-semibold   hover:bg-green-50 transition inline-block text-[14px] px-4 py-2`}
                // content={`Patient Portal`} 
                btnText={`Patient Portal`} />

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
