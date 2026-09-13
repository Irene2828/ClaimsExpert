export default function Testimonials() {
  const card1Title = "“Isabelle obtained results in one week that I was not able to get in 2.5 years.”";
  const card1Body = "I highly recommend Isabelle Guertin – her expertise made a massive difference for my family.\n\nFollowing an extremely expensive incident in my house, I made a claim to my insurance company – the only claim I made in my life. For over two and a half years, the insurance dragged out the claim, did not reply to follow up emails nor calls in a timely fashion – sometimes, not replying at all. I staggered to follow ups to give the insurance firm plenty of time to reply – it made no difference. At one point, the insurance firm even cancelled my claim, sending me a letter during a Canada Post strike that I only received months later. They wound up re-opening my file when and then did not get back to me for months.\n\nI wound up hiring the services of Isabelle Guertin. After a brief call outlining the case, she told me her hourly rate and her estimate of how many hours it would take for her to work on my claim, representing my interests. It was a perfectly reasonable estimate.\n\nWithin one week, she got results. The insurance company wrote a significant, 5 figure cheque to reimburse me for work done to rectify the incident. Her fixed consulting fee came to approx. 5% of the total reimbursement, and she manage to obtain results in one week that I was not able to get in 2.5 years.\n\nNext, she continued intervening and negotiating with the insurer for more work. They made an offer that I was ready to accept. However, she noticed that there were items that they should cover, resulting in an extra $10,000 payment, on top their initial offer, to fix/replace the items that were damaged.\n\nShe is an insurance expert. She knows details about insurance that the average consumer, the average household, does not know. She is extremely professional, knowledgeable, ethical. She is very, very good at what she does – representing your interests on insurance claims. I highly recommend her.";
  const card1Author = "— Peter, Montreal";

  return (
    <section id="testimonials" className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-24 lg:py-28 flex flex-col items-center">
        <div className="w-full flex flex-col items-center text-center mb-12 lg:mb-16">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#E5E7EB] text-[#0E223F] border border-[#E5E7EB] text-[10.5px] tracking-[0.18em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-[#0E223F] text-[32px] lg:text-[44px] mt-6 max-w-[24ch] mx-auto text-center">
            A track record clients trust.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto items-stretch">
          {/* Card 1 (White Card) */}
          <div className="bg-white rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border border-[#0E223F]/15 min-h-[360px] flex flex-col justify-between text-left relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col justify-between h-full w-full gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  Homeowner & Policyholder
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-[#0E223F] mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-[#0E223F]/10 mb-5" />
                <div style={{ maxHeight: "110px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p className="font-inter font-normal text-[13.5px] lg:text-[14px] leading-[1.65] text-[#0E223F]/85 text-left whitespace-pre-line">
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-[#0E223F]/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Dark Blue Card - Temporary duplicate copy) */}
          <div className="bg-[#0E223F] rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 relative overflow-hidden shadow-[0_24px_64px_rgba(14,34,63,0.14)] border border-white/15 min-h-[360px] flex flex-col justify-between text-left">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/[0.04] pointer-events-none" />
            <div className="relative flex flex-col justify-between h-full w-full z-10 gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  Municipal Client
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-white mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-white/15 mb-5" />
                <div style={{ maxHeight: "110px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p className="font-inter font-normal text-[13.5px] lg:text-[14px] leading-[1.65] text-white/80 text-left whitespace-pre-line">
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer is-dark mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-white/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 (White Card - Temporary duplicate copy) */}
          <div className="bg-white rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border border-[#0E223F]/15 min-h-[360px] flex flex-col justify-between text-left relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col justify-between h-full w-full gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  Commercial Property Owner
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-[#0E223F] mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-[#0E223F]/10 mb-5" />
                <div style={{ maxHeight: "110px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p className="font-inter font-normal text-[13.5px] lg:text-[14px] leading-[1.65] text-[#0E223F]/85 text-left whitespace-pre-line">
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-[#0E223F]/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="h-2 w-8 rounded-full bg-[#0E223F]" />
          <span className="h-2 w-2 rounded-full bg-[#0E223F]/20" />
          <span className="h-2 w-2 rounded-full bg-[#0E223F]/20" />
        </div>
      </div>
    </section>
  );
}
