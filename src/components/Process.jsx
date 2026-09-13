export default function Process() {
  const processSteps = [
    {
      n: "01",
      title: "Review & Assessment",
      desc: "Understanding the circumstances, reviewing the available documentation, and identifying the key factual, technical, and liability issues.",
    },
    {
      n: "02",
      title: "Investigation & Analysis",
      desc: "Gathering and organizing the relevant evidence, assessing liability, causation and damages, and identifying any additional information required for a complete analysis.",
    },
    {
      n: "03",
      title: "Recommendations & Resolution",
      desc: "Providing a clear, well-supported assessment of the file and practical recommendations to help my client make informed decisions and move toward an appropriate resolution.",
    },
  ];

  return (
    <section id="process" className="bg-[#E0F2FE] border-t border-[#0E223F]/[0.06]">
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-28 lg:py-36">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-[#0E223F]/10 text-[10.5px] tracking-[0.18em] uppercase font-medium">
            How I Work
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-[#0E223F] text-[36px] lg:text-[48px] mt-6 text-center">
            A clear, structured approach.
          </h2>
          <p className="font-inter text-[17px] lg:text-[18px] leading-[1.7] text-[#0E223F]/70 mt-6 mx-auto max-w-[60ch] text-center">
            Every file begins with understanding the facts, identifying the issues, and determining the appropriate path forward.
          </p>
        </div>
        <div className="relative mt-16 lg:mt-20 w-full">
          <div className="hidden md:block absolute top-[48px] lg:top-[56px] left-0 right-0 h-px bg-[#0E223F]/15" aria-hidden="true" />
          <div className="md:hidden absolute left-[28px] top-[12px] bottom-[12px] w-px bg-[#0E223F]/15" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-8 w-full relative z-10">
            {processSteps.map((step) => (
              <div key={step.n} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center min-w-0 gap-5 md:gap-0">
                <span className="font-inter not-italic font-normal text-[64px] lg:text-[80px] leading-none tracking-[-0.05em] text-[#0E223F] bg-[#E0F2FE] px-4 md:px-5 select-none shrink-0 relative z-10 -ml-4 md:ml-0">
                  {step.n}
                </span>
                <div className="flex flex-col items-start md:items-center text-left md:text-center min-w-0 flex-1 md:flex-initial">
                  <h3 className="font-inter font-semibold text-[20px] lg:text-[22px] leading-[1.25] tracking-[-0.01em] text-[#0F172A] mt-1 md:mt-6">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[15px] leading-7 text-[#4B5563] mt-2 md:mt-3 max-w-[42ch] md:max-w-[32ch] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
