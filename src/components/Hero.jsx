

export default function Hero() {
  return (
    <section className="text-center px-[20px] py-[80px]">

      {/* Avatar */}
      <div className="mb-[30px] flex justify-center">
        <img
          src="https://via.placeholder.com/120"
          className="w-[120px] rounded-full"
        />
      </div>

      {/* Title */}
      <h1 className="text-[48px] leading-[1.2] mb-[20px] font-bold">
        I do code and <br />
        make content{" "}
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          about it
        </span>
      </h1>

      {/* Text */}
      <p className="text-[#aaa] text-[14px] leading-[1.8] mb-[30px] max-w-[620px] mx-auto">
        I am a seasoned full-stack software engineer with strong focus on backend systems and scalable architecture.
      </p>

      {/* Buttons */}
      <div className="mb-[50px]">

        <a className="inline-block px-[30px] py-[12px] rounded-[25px] text-[14px] bg-white text-black mx-[10px]">
          Get In Touch
        </a>

        <a className="inline-block px-[30px] py-[12px] rounded-[25px] text-[14px] border border-white mx-[10px]">
          Download CV
        </a>

      </div>

      {/* Experience With */}
      <div>
        <p className="text-[#666] text-[12px] mb-[15px]">
          EXPERIENCE WITH
        </p>

        <div className="space-x-[20px] text-[14px] opacity-70">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node</span>
          <span>AWS</span>
        </div>
      </div>

    </section>
  );
}
