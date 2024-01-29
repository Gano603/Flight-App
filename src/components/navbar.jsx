import { Link } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    { text: "Explore", to: "/explore" },
    { text: "Book", to: "/book" },
    { text: "Experience", to: "/experience" },
    { text: "Privilege Club", to: "/privilege_club" }
  ];

  return (
    <>
      <div className="w-screen grid grid-cols-3 place-items-center m-0 bg-transparent absolute font-bold">
        <div className="m-0">
                <img className = "w-32" src="../../public/assets/qatarairwayslogo.png" alt="" />
        </div>
        <div className="lg:grid grid-cols-4 sm:hidden md:hidden">
          {navItems.map((item, index) => (
            <Link key={index} to={item.to} className="text-white w-32">
              {item.text}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 place-items-center w-17">
          <Link key="" to = "/help" className="text-white text-sm ">Help</Link>
          <img src="../../public/assets/search.png" alt="" className="w-11"/>
        </div>
        <div className="text-white grid grid-cols-2 lg:place-items-center">
          <img src="../../public/assets/user_icon.png" className="w-11 m-0"alt="" />
          <h3 className=""><Link>Login</Link> | <Link>Sign Up</Link></h3>
        </div>
        </div>
      </div>
    </>
  );
}
