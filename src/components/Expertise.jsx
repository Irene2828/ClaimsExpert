import { useState } from 'react';

export default function Expertise() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            Independent claims expertise for municipalities and policyholders, with a focus on thorough investigation, technical analysis and fair, well-supported outcomes.
          </p>
        </div>
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 w-full max-w-full min-w-0">
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-8 min-h-[360px] w-full min-w-0 flex flex-col">
            <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
              01
            </span>
            <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
              Municipal Civil Liability
            </h3>
            <p className="font-inter text-[12px] tracking-[0.05em] uppercase text-white/50 mt-2 font-medium text-left">
              Primary Practice
            </p>
            <div className="w-full h-px bg-white/10 my-5" />
            <p
              className="font-inter text-[14px] lg:text-[15px] leading-7 text-white/70 text-left [text-wrap:pretty]"
              style={{ textWrap: "pretty", textAlign: "left" }}
            >
              Investigation and handling of municipal liability claims involving property damage and bodily injury.
              {expandedCards[1] ? (
                " With extensive experience working directly with municipalities, I understand their operational realities, procedures, and the particular considerations involved in municipal claims. Each file is assessed through factual investigation, liability analysis, and damage evaluation, leading to clear, practical recommendations tailored to the municipality’s specific circumstances."
              ) : " "}
              {" "}
              <button
                type="button"
                onClick={() => toggleCard(1)}
                className="inline-flex items-center text-white/90 hover:text-white font-medium ml-1.5 transition-colors underline cursor-pointer"
              >
                {expandedCards[1] ? "Read less" : "read more"}
              </button>
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-8 min-h-[360px] w-full min-w-0 flex flex-col">
            <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
              02
            </span>
            <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
              Public Adjuster Services
            </h3>
            <p className="font-inter text-[12px] tracking-[0.05em] uppercase text-white/50 mt-2 font-medium text-left">
              For Policyholders
            </p>
            <div className="w-full h-px bg-white/10 my-5" />
            <p
              className="font-inter text-[14px] lg:text-[15px] leading-7 text-white/70 text-left [text-wrap:pretty]"
              style={{ textWrap: "pretty", textAlign: "left" }}
            >
              Independent claims assistance for individuals navigating a property insurance claim.
              {expandedCards[2] ? (
                " I provide policyholders with the technical knowledge and claims expertise needed to understand their coverage, assess the information presented, and make informed decisions throughout the claims process, with the objective of reaching a fair settlement in accordance with their insurance policy."
              ) : " "}
              {" "}
              <button
                type="button"
                onClick={() => toggleCard(2)}
                className="inline-flex items-center text-white/90 hover:text-white font-medium ml-1.5 transition-colors underline cursor-pointer"
              >
                {expandedCards[2] ? "Read less" : "read more"}
              </button>
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-8 min-h-[360px] w-full min-w-0 flex flex-col">
            <span className="font-inter text-[12px] tracking-[0.2em] font-medium" style={{ color: "#00ACC1" }}>
              03
            </span>
            <h3 className="font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-white mt-6 text-left">
              Damage Assessment & Technical Analysis
            </h3>
            <p className="font-inter text-[12px] tracking-[0.05em] uppercase text-white/50 mt-2 font-medium text-left">
              Technical Expertise
            </p>
            <div className="w-full h-px bg-white/10 my-5" />
            <p
              className="font-inter text-[14px] lg:text-[15px] leading-7 text-white/70 text-left [text-wrap:pretty]"
              style={{ textWrap: "pretty", textAlign: "left" }}
            >
              Detailed analysis of property damage, causation, repair estimates, and supporting documentation.
              {expandedCards[3] ? (
                " I assess the scope and value of a loss to identify what can reasonably be attributed to the event and provide a clear, well-supported evaluation of the damages."
              ) : " "}
              {" "}
              <button
                type="button"
                onClick={() => toggleCard(3)}
                className="inline-flex items-center text-white/90 hover:text-white font-medium ml-1.5 transition-colors underline cursor-pointer"
              >
                {expandedCards[3] ? "Read less" : "read more"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
