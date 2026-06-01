import svgPaths from "./svg-3hp195pwxf";
import imgRectangle3 from "./1f6eac243914cd085e1b41c6193080a9793cd554.png";
import imgProfilePicture from "./651da58ba951c521e4f9d42318452e67aa609f3f.png";
import imgProfilePicture1 from "./f9b3b936d2ffcdd5782cf04b384186a3a141522a.png";
import imgProfilePicture2 from "./f9b3b936d2ffcdd5782cf04b384186a3a141522a.png";
import imgProfilePicture3 from "./f9b3b936d2ffcdd5782cf04b384186a3a141522a.png";
import imgProfilePicture4 from "./dda754ae6c708a5bea9f20c2abc1b2533b844e1e.png";
import imgProfilePicture5 from "./e9ba9e4edf0d98edbcedc4b43ea36d151371ddd1.png";
import imgVideoImage from "./5052b7b5112fb64b5f487cb959038bf783018ef9.png";

function Info() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 p-[16px] right-px" data-name="Info">
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[80%] to-[rgba(0,0,0,0.8)]" data-name="bg-overlay" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-w-full not-italic relative shrink-0 text-[20px] text-white tracking-[-0.12px] w-[min-content]">Nhóm cộng đồng A</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">Nhóm công khai • 10 thành viên • 6 bài viết</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="aspect-[377/212] relative shrink-0 w-full">
      <div className="absolute inset-[0_0.27%_0_0]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <Info />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="mr-[-12px] relative shrink-0 size-[24px]" data-name="Profile Picture">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProfilePicture} width="24" />
      </div>
      <div className="mr-[-12px] relative shrink-0 size-[24px]" data-name="Profile Picture">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FEF5E7)" id="base" r="12" />
        </svg>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%+0.5px)] not-italic text-[#895607] text-[12px] text-center top-[calc(50%-8px)] whitespace-nowrap">S</p>
      </div>
      <div className="mr-[-12px] relative shrink-0 size-[24px]" data-name="Profile Picture">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProfilePicture1} width="24" />
      </div>
      <div className="mr-[-12px] relative shrink-0 size-[24px]" data-name="Profile Picture">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FEF5E7)" id="base" r="12" />
        </svg>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%+0.5px)] not-italic text-[#895607] text-[12px] text-center top-[calc(50%-8px)] whitespace-nowrap">N</p>
      </div>
      <div className="mr-[-12px] relative shrink-0 size-[24px]" data-name="Profile Picture">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProfilePicture2} width="24" />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Profile Picture">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProfilePicture3} width="24" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <Frame18 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f99d0d] text-[14px] w-[360px]">+5</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip pb-[4px] relative shrink-0 w-full" data-name="Hero">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture4} width="40" />
      </div>
      <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[50px]" data-name="Chat Box">
        <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <div className="bg-[#f99d0d] h-[24px] opacity-0 relative shrink-0 w-px" data-name="caret" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#737373] text-[12px]">Chia sẻ kiến thức với nhóm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Post1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Post">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Post">
      <Post1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.56%_0.82%_2.78%_0.82%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7375 14.6663">
        <g id="Group">
          <path d={svgPaths.p17a29f00} fill="var(--fill-0, #EB5500)" id="Vector" />
          <path d={svgPaths.p86fd6c0} fill="var(--fill-0, #EB5500)" id="Vector_2" />
          <path d={svgPaths.p10286d80} fill="var(--fill-0, #EB5500)" id="Vector_3" />
          <path d={svgPaths.p287d2580} fill="var(--fill-0, #EB5500)" id="Vector_4" />
          <path d={svgPaths.p18441380} fill="var(--fill-0, #EB5500)" id="Vector_5" />
          <path d={svgPaths.p2bacd00} fill="var(--fill-0, #EB5500)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function UserGroup() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user-group 1">
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fdeee5] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[50px] shrink-0">
      <UserGroup />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#eb5500] text-[12px] whitespace-nowrap">Nhóm cộng đồng A</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Học sinh</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Vừa mới đây</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Earth">
        <div className="absolute inset-[10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
            <path d={svgPaths.p3d553300} fill="var(--fill-0, #737373)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">Nguyễn Thuỳ Linh</p>
      <Frame19 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture4} width="40" />
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#171717] text-[14px]">
            <p className="leading-[20px] mb-0">Bộ đề ôn thi HSA 2024.</p>
            <p className="leading-[20px]">Mọi người xem qua tài liệu này nhé!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="overflow-clip relative rounded-[2px] shrink-0 size-[40px]" data-name="Image">
      <div className="absolute bg-[#e8f0fe] inset-0" data-name="img" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Docs">
        <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
            <path d={svgPaths.p26cadf80} fill="var(--fill-0, #1E69F3)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Đánh giá n...pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#525252] text-[12px] w-full">2 MB</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="max-w-[180px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-w-[inherit] pl-[4px] pr-[12px] py-[4px] relative size-full">
          <Image />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="thumb">
        <div className="absolute inset-[7.93%_6.25%_14.58%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.4967">
            <path d={svgPaths.p351c6f00} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">128</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Comment">
        <div className="absolute inset-[10.42%_10.42%_12.34%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.4487">
            <path d={svgPaths.p2465bd80} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">6</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
          <Frame9 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Share">
            <div className="absolute inset-[10.42%_18.75%_10.42%_10.42%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 15.8333">
                <path d={svgPaths.p22cb7c00} fill="var(--fill-0, #171717)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Học sinh</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">8 ngày trước</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Earth">
        <div className="absolute inset-[10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
            <path d={svgPaths.p3d553300} fill="var(--fill-0, #737373)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">Nguyễn Tú</p>
      <Frame20 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture5} width="40" />
          </div>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Post3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Đây là bài viết. Viết cái gì thì sẽ hiển thị ở đây hết.</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="thumb">
        <div className="absolute inset-[7.93%_6.25%_14.58%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.4967">
            <path d={svgPaths.p351c6f00} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">128</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Comment">
        <div className="absolute inset-[10.42%_10.42%_12.34%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.4487">
            <path d={svgPaths.p2465bd80} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">6</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
          <Frame14 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Share">
            <div className="absolute inset-[10.42%_18.75%_10.42%_10.42%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 15.8333">
                <path d={svgPaths.p22cb7c00} fill="var(--fill-0, #171717)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Main">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Mobile Post">
        <Frame16 />
        <Frame5 />
        <Post2 />
        <Frame23 />
        <Frame8 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Mobile Post">
        <Frame11 />
        <Post3 />
        <div className="aspect-[447/252] relative shrink-0 w-full" data-name="video-image">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#f99d0d] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoImage} />
          </div>
        </div>
        <Frame13 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-163px] w-[393px]" data-name="Container">
      <Hero />
      <Post />
      <Main />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

export default function NhomPostChiaSeTaiLieu() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[24px] size-full" data-name="[Nhom] Post Chia Se Tai Lieu">
      <Container />
      <div className="absolute bg-white h-[48px] left-0 top-[50px] w-[393px]" data-name="Mobile Nav">
        <div className="-translate-y-1/2 absolute left-[8px] overflow-clip size-[24px] top-1/2" data-name="Arrow Back">
          <div className="absolute inset-[9.78%_27.42%_9.78%_26.44%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.073 19.3075">
              <path d={svgPaths.p28947000} fill="var(--fill-0, #171717)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#171717] text-[16px] text-center top-[12px] w-[313px]">Nhóm cộng đồng A</p>
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
    </div>
  );
}