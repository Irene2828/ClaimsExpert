export default function Expertise() {
  return (
    <section id="expertise" className="bg-[#0E223F] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="w-full max-w-[1336px] mx-auto px-8 lg:px-12 py-28 lg:py-36 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-transparent text-[10.5px] tracking-[0.18em] uppercase font-medium">
            Expertise
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-white text-[36px] lg:text-[52px] mt-6">
            Technical expertise. Clear analysis. Informed decisions.
          </h2>
          <p className="font-inter text-[17px] lg:text-[18px] leading-[1.7] text-white/70 mt-6 mx-auto max-w-[60ch]">
            Independent claims expertise for municipalities and policyholders, with a focus on <span className="text-white font-medium">thorough investigation, technical analysis and fair, well-supported outcomes.</span>
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 w-full max-w-full min-w-0 items-stretch">
          
          {/* Card 1 — Municipal Civil Liability */}
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-16 lg:pb-20 w-full min-w-0 flex flex-col justify-between h-full">
            <div>
              <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
                01
              </span>
              <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
                Municipal Civil Liability
              </h3>
              <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50 mt-2 font-medium text-left">
                - PRIMARY PRACTICE -
              </p>
              <div className="w-full h-px bg-white/10 my-5" />
              
              <p className="font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left">
                Investigation and handling of municipal liability claims involving property damage and bodily injury. With extensive experience working directly with municipalities, I understand their operational realities, procedures, and the particular considerations involved in municipal claims. Each file is assessed through:
              </p>
              
              <ul className="mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Factual investigation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Liability analysis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Damage evaluation</span>
                </li>
              </ul>
              
              <p className="font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left mt-6 mb-6">
                leading to clear, practical recommendations tailored to the municipality's specific circumstances.
              </p>
            </div>
          </div>

          {/* Card 2 — Public Adjuster Services */}
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-16 lg:pb-20 w-full min-w-0 flex flex-col justify-between h-full">
            <div>
              <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
                02
              </span>
              <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
                Public Adjuster Services
              </h3>
              <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50 mt-2 font-medium text-left">
                - FOR POLICYHOLDERS -
              </p>
              <div className="w-full h-px bg-white/10 my-5" />

              <p className="font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left">
                Independent claims assistance for individuals navigating a property insurance claim. I provide policyholders with the technical knowledge and claims expertise needed to:
              </p>
              
              <ul className="mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Understand their coverage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Assess the information presented</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Make informed decisions throughout the claims process</span>
                </li>
              </ul>
              
              <p className="font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left mt-6 mb-6">
                The objective is a fair settlement in accordance with their insurance policy.
              </p>
            </div>
          </div>

          {/* Card 3 — Damage Assessment & Technical Analysis */}
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-16 lg:pb-20 w-full min-w-0 flex flex-col justify-between h-full">
            <div>
              <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
                03
              </span>
              <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
                Damage Assessment & Technical Analysis
              </h3>
              <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50 mt-2 font-medium text-left">
                - TECHNICAL EXPERTISE -
              </p>
              <div className="w-full h-px bg-white/10 my-5" />

              <p className="font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left">
                Detailed analysis of property damage, causation, repair estimates, and supporting documentation. I assess the scope and value of a loss to:
              </p>
              
              <ul className="mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[14px] lg:text-[14.5px] leading-relaxed text-white/80 text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Identify what can reasonably be attributed to the event</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ACC1] font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>Provide a clear, well-supported evaluation of the damages</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
