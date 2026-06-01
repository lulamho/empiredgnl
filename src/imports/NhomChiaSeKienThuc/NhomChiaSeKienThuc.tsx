import svgPaths from "./svg-abztcrhtyy";
import imgImage1 from "./582e0b7ce994845a40443b1caaeb4faba48aebcc.png";
import imgProfilePicture from "../../assets/prototype/nav-profile.png";

function MobileNav() {
  return (
    <div className="absolute bg-white h-[48px] left-0 top-[50px] w-[393px]" data-name="Mobile Nav">
      <div className="-translate-y-1/2 absolute left-[8px] overflow-clip size-[24px] top-1/2" data-name="Close">
        <div className="absolute inset-[22.28%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3075 13.3075">
            <path d={svgPaths.p23a30a00} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#171717] text-[16px] text-center top-[12px] w-[313px]">Chia sẻ kiển thức</p>
      <div className="-translate-y-1/2 absolute bg-[#fbbd5d] content-stretch flex gap-[4px] items-center justify-center opacity-50 px-[16px] py-[4px] right-[8px] rounded-[8px] top-1/2" data-name="Button">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Đăng bài</p>
      </div>
    </div>
  );
}

function TabMenu() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Tab Menu">
      <div className="flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="Tab Menu">
        <div aria-hidden="true" className="absolute border-[#f99d0d] border-b-2 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f99d0d] text-[14px] text-center whitespace-nowrap">Bài viết</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="Tab Menu">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center whitespace-nowrap">Tài liệu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <div className="bg-[#f99d0d] h-[24px] relative shrink-0 w-px" data-name="caret" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#737373] text-[14px]">Chia sẻ bài viết hoặc đặt câu hỏi cho nhóm...</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Text Area">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[16px] relative size-full">
          <div className="relative shrink-0 size-[32px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProfilePicture} width="32" />
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[98px] w-[393px]">
      <TabMenu />
      <TextArea />
    </div>
  );
}

function Lesson() {
  return (
    <div className="bg-[#fef5e7] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="Lesson">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Image">
        <div className="absolute inset-[14.58%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p23835080} fill="var(--fill-0, #F99D0D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Lesson1() {
  return (
    <div className="bg-[#fef5e7] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="Lesson">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Video">
        <div className="absolute inset-[18.75%_11.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.519 15">
            <path d={svgPaths.p2171e100} fill="var(--fill-0, #F99D0D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Lesson2() {
  return (
    <div className="bg-[#fef5e7] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="Lesson">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Docs">
        <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
            <path d={svgPaths.p26cadf80} fill="var(--fill-0, #F99D0D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-[276px] content-stretch flex gap-[16px] items-start left-0 p-[8px] right-0">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <Lesson />
      <Lesson1 />
      <Lesson2 />
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

function Row() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">q</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">w</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">e</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">r</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">t</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">y</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">u</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">i</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">o</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">p</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative size-full">
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">a</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">s</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">d</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">f</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">g</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">h</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">j</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">k</p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
            <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
              <p className="leading-[30px]">l</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-w-px relative" data-name="Row 3">
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">z</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">x</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">c</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">v</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">b</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">n</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
          <p className="leading-[30px]">m</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[23px] text-center top-[calc(50%-1px)] uppercase">
          <p className="leading-[28px]">{`\u{10019D}`}</p>
        </div>
      </div>
      <Row3 />
      <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[23px] text-center top-[calc(50%-1px)] uppercase">
          <p className="leading-[28px]">{`\u{101088}`}</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
        <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-2px] text-[#595959] text-[18px] text-center top-[calc(50%-0.5px)]">
          <p className="leading-[21px]">ABC</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative rounded-[8.5px]" data-name="Space">
        <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[8.5px]" data-name="Space">
          <div className="absolute bg-[#141414] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#595959] text-[25px] text-center top-[calc(50%-2px)]">
            <p className="leading-[30px]">{` `}</p>
          </div>
        </div>
      </div>
      <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
        <div className="absolute bg-[#08f] inset-0 rounded-[8.5px]" data-name="BG" />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[19px] text-center text-white top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">{`\u{100147}`}</p>
        </div>
      </div>
    </div>
  );
}

function EmojiAndMic() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Emoji and Mic">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between pl-[36px] pr-[39px] pt-[12px] relative size-full">
          <div className="relative shrink-0 size-[26.92px]" data-name="Emoji">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.92 26.92">
              <path d={svgPaths.p2d450400} fill="var(--fill-0, #222B59)" fillOpacity="0.63" id="Emoji" />
            </svg>
          </div>
          <div className="h-[28.213px] relative shrink-0 w-[18.866px]" data-name="Mic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8657 28.2129">
              <path d={svgPaths.p10f8a600} fill="var(--fill-0, #222B59)" fillOpacity="0.63" id="Mic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <div className="absolute inset-0 rounded-[27px]" data-name="Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27px]">
          <div className="absolute bg-[rgba(255,255,255,0.6)] inset-0 rounded-[27px]" />
          <div className="absolute bg-[rgba(51,51,51,0.2)] inset-0 mix-blend-plus-lighter rounded-[27px]" />
          <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[27px]" />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative size-full">
            <Row />
            <Row1 />
            <Row2 />
            <Row4 />
          </div>
        </div>
      </div>
      <EmojiAndMic />
    </div>
  );
}

export default function NhomChiaSeKienThuc() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[24px] size-full" data-name="[Nhom] Chia se kien thuc">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[852px] left-1/2 top-1/2 w-[393px]" data-name="image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <div className="absolute bg-white inset-0" />
        </div>
      </div>
      <MobileNav />
      <Frame3 />
      <Frame1 />
      <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-end left-0 w-[393px]" data-name="Keyboard">
        <Keyboard />
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}