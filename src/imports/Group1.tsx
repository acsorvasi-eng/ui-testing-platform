import svgPaths from "./svg-shzmif2q7g";
import imgImage1 from "figma:asset/698113f513e18437f2037293be49591b7669c9a3.png";
import imgProjectTitle from "figma:asset/c38586fb2b545eeccd3851d58239d582bdda8e64.png";

function YettelWordmarkBlue() {
  return (
    <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 94.8582 25.9889">
        <g id="Yettel_Wordmark_Blue">
          <path d={svgPaths.p3a3d3600} fill="var(--fill-0, #B4FF00)" id="Vector" />
          <path d={svgPaths.p672f600} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
          <path d={svgPaths.p18441900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
          <path d={svgPaths.p3cbaf182} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
          <path d={svgPaths.p1c64d500} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
          <path d={svgPaths.p11e78780} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
          <path d={svgPaths.p22c83900} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#e5e9ec] tracking-[0.08px] w-[480px] whitespace-pre-wrap" data-name="text">
      <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.25] relative shrink-0 text-[32px] w-full">Welcome to Yettel !</p>
      <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-full">You’re one step away from thousands of hours of entertainment</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <div className="bg-[#b4ff00] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[20px] shrink-0 w-[120px]" data-name="Buttons">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Login</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] shrink-0 w-[120px]" data-name="Buttons">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Sign Up</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] shrink-0" data-name="Buttons">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Enter as Guest</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[72px] top-[calc(50%+0.28px)]" data-name="Info">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Brand Logos">
        <div className="h-[60.553px] relative shrink-0 w-[160px]" data-name="New logo">
          <YettelWordmarkBlue />
          <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40.1705 24.5573">
              <path d={svgPaths.p2a21ca80} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 60.5531 60.5531">
              <path d={svgPaths.p2df0ef00} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
      <Buttons />
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-black h-[720px] left-0 opacity-40 overflow-clip top-0 w-[1280px]" data-name="Desktop">
      <div className="absolute h-[720px] left-0 overflow-clip top-0 w-[1280px]" data-name="Splash_Image">
        <div className="absolute bg-[#1a1a1a] h-[720px] left-0 top-0 w-[1280px]" />
        <div className="absolute h-[1414px] left-[-392px] top-[-258.67px] w-[2210px]" data-name="projectTitle">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProjectTitle} />
        </div>
      </div>
      <div className="absolute h-[720px] left-0 top-0 w-[1280px]" data-name="Side Gradient" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
      <Info />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[721.991px] left-0 top-[20px] w-[1280px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Desktop />
    </div>
  );
}