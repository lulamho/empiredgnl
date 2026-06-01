import svgPaths from "./svg-o3n29tlnwb";
import imgImage1 from "./582e0b7ce994845a40443b1caaeb4faba48aebcc.png";

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
    <div className="absolute bg-white content-stretch flex h-[40px] items-center left-0 right-0 top-[98px]" data-name="Tab Menu">
      <div className="flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="Tab Menu">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center whitespace-nowrap">Bài viết</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-[40px] min-w-px relative" data-name="Tab Menu">
        <div aria-hidden="true" className="absolute border-[#f99d0d] border-b-2 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[20px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f99d0d] text-[14px] text-center whitespace-nowrap">Tài liệu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.p15bd2100} fill="var(--fill-0, #F99D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#171717] text-[16px] w-[376px]">Upload tài liệu tại đây</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-[376px]">Hỗ trợ PDF, MP4, Word (Tối đa 10MB)</p>
    </div>
  );
}

function Upload() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center justify-center py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Upload">
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-[1.5px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <Frame2 />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Tiêu đề tài liệu</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#737373] text-[16px]">{`VD: Bộ đề ôn thi HSA 2024 `}</p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Môn học/ Kỳ thi</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[16px] whitespace-nowrap">Đánh giá năng lực (HSA)</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative size-full">
          <Text1 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron-down">
            <div className="absolute inset-[34.78%_26.44%_37.28%_26.44%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.7075">
                <path d={svgPaths.p1f4cd00} fill="var(--fill-0, #171717)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Gắn thẻ (tags)</p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#737373] text-[16px]">HSA, ôn thi 2024...</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[2px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Mô tả ngắn</p>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#737373] text-[16px]">Tóm tắt nội dung tài liệu để mọi người dễ dàng tìm kiếm...</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[96px] pt-[12px] px-[12px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 p-[12px] right-0 top-[138px]" data-name="Main">
      <Upload />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input/ Normal">
        <Label />
        <Input />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input/ Normal">
        <Label1 />
        <Input1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input/ Normal">
        <Label2 />
        <Input2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input/ Normal">
        <Label3 />
        <Input3 />
      </div>
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

export default function NhomChiaSeTaiLieu() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[24px] size-full" data-name="[Nhom] Chia se tai lieu">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[852px] left-1/2 top-1/2 w-[393px]" data-name="image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <div className="absolute bg-white inset-0" />
        </div>
      </div>
      <MobileNav />
      <TabMenu />
      <Main />
      <div className="absolute bg-white content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame1 />
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