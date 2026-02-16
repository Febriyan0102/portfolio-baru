
function Card() {
  return (
    <div className="bg-[#111] rounded-[12px] overflow-hidden">

      <img src="https://via.placeholder.com/600x300" />

      <div className="p-[20px] text-left">
        <p className="text-[12px] text-[#777]">CLICK HERE TO VISIT</p>
        <h3 className="font-bold">PROJECT TITLE</h3>
      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section className="px-[80px] py-[80px] text-center">

      <h2 className="text-orange-500 mb-[40px] font-bold text-[24px]">
        PROJECTS
      </h2>

      <div className="grid grid-cols-2 gap-[30px]">
        <Card />
        <Card />
      </div>

    </section>
  );
}
