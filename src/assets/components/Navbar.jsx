

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-[80px] py-[25px]">

      <div className="font-bold text-[18px]">
        LOGO
      </div>

      <div className="flex items-center">
        <a className="ml-[30px] text-[14px] text-[#aaa] hover:text-white" href="#">Home</a>
        <a className="ml-[30px] text-[14px] text-[#aaa] hover:text-white" href="#">Projects</a>
        <a className="ml-[30px] text-[14px] text-[#aaa] hover:text-white" href="#">Experience</a>
        <a className="ml-[30px] text-[14px] text-[#aaa] hover:text-white" href="#">Contact</a>
      </div>

    </nav>
  );
}
