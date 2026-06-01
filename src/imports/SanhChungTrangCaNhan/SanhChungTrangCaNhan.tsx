import svgPaths from "./svg-5y69guem1p";
import imgCoverPhoto from "./ffa43fd071fcd412e7eafd756fa5915bc9343f68.png";
import imgProfilePicture from "../../assets/prototype/post-profile-detail.png";
import imgProfilePicture1 from "../../assets/prototype/post-profile-other.png";
import imgVideoImage from "./e2e34c76235c831f4fa418191930138d4bc2d321.png";

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#171717] text-[20px] tracking-[-0.12px] w-full">Vân Anh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] w-full">Giáo viên</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[12px] relative size-full">
        <div className="relative rounded-[133.333px] shrink-0 size-[64px]" data-name="Profile Picture">
          <div aria-hidden="true" className="absolute border-[2.667px] border-solid border-white inset-[-2.667px] pointer-events-none rounded-[136px]" />
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgProfilePicture} width="64" />
        </div>
        <Frame23 />
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cover">
      <div className="aspect-[393/168] mb-[-20px] relative shrink-0 w-full" data-name="cover-photo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f99d0d] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgCoverPhoto} />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">9</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#525252]">bài viết</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171717]">7</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#525252]">tài liệu</p>
    </div>
  );
}

function Post() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[4px] relative shrink-0 w-full whitespace-nowrap" data-name="Post">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[20px] not-italic px-[12px] py-[8px] relative size-full text-[14px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#171717] w-full">Giới thiệu bản thân sẽ hiện ở đây nha nha.</p>
          <Post />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Profile">
      <Cover />
      <Info />
    </div>
  );
}

function TabMenu() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Tab Menu">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] px-[20px] py-[8px] relative shrink-0" data-name="Tab Menu">
        <div aria-hidden="true" className="absolute border-[#f99d0d] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f99d0d] text-[14px] text-center whitespace-nowrap">Bài viết</p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[40px] px-[20px] py-[8px] relative shrink-0" data-name="Tab Menu">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center whitespace-nowrap">Cộng đồng chung</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Giáo viên</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">Vân Anh</p>
      <Frame16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture1} width="40" />
          </div>
          <Frame3 />
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Đây là bài viết. Viết cái gì thì sẽ hiển thị ở đây hết.</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
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

function Frame7() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
          <Frame6 />
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

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Giáo viên</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">9 ngày trước</p>
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">Vân Anh</p>
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture1} width="40" />
          </div>
          <Frame9 />
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Chia sẻ về dự án mới mình đang phát triển.</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="thumb">
        <div className="absolute inset-[7.93%_6.25%_14.58%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.4967">
            <path d={svgPaths.p351c6f00} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">256</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Comment">
        <div className="absolute inset-[10.42%_10.42%_12.34%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.4487">
            <path d={svgPaths.p2465bd80} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">12</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
          <Frame11 />
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

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">Nhà thiết kế</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2 ngày trước</p>
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">Hồng Nhung</p>
      <Frame18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Profile Picture">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProfilePicture1} width="40" />
          </div>
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Post4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#171717] text-[14px]">Cập nhật xu hướng thiết kế UI năm 2024.</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="thumb">
        <div className="absolute inset-[7.93%_6.25%_14.58%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.4967">
            <path d={svgPaths.p351c6f00} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">342</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Comment">
        <div className="absolute inset-[10.42%_10.42%_12.34%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.4487">
            <path d={svgPaths.p2465bd80} fill="var(--fill-0, #171717)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">18</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
          <Frame20 />
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

function Post1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="Post">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Mobile Post">
        <Frame2 />
        <Post2 />
        <div className="aspect-[447/252] relative shrink-0 w-full" data-name="video-image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#f99d0d] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoImage} />
          </div>
        </div>
        <Frame5 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Mobile Post">
        <Frame8 />
        <Post3 />
        <div className="aspect-[447/252] relative shrink-0 w-full" data-name="video-image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#f99d0d] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoImage} />
          </div>
        </div>
        <Frame10 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="Mobile Post">
        <Frame14 />
        <Post4 />
        <div className="aspect-[447/252] relative shrink-0 w-full" data-name="video-image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[#f99d0d] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgVideoImage} />
          </div>
        </div>
        <Frame19 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Container">
      <Profile />
      <TabMenu />
      <Post1 />
    </div>
  );
}

function IconL() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Icon L">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Back">
        <div className="absolute inset-[9.78%_27.42%_9.78%_26.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.073 19.3075">
            <path d="M9.65375 19.3075L0 9.65375L9.65375 0L11.073 1.41925L2.8383 9.65375L11.073 17.8883L9.65375 19.3075Z" fill="#171717" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconR() {
  return <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0 w-[80px]" data-name="Icon R" />;
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

export default function SanhChungTrangCaNhan() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="[Sanh Chung] Trang Ca Nhan">
      <Container />
      <div className="absolute content-stretch flex items-center justify-between left-0 p-[8px] top-[50px] w-[393px]" data-name="Mobile Nav">
        <IconL />
        <IconR />
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] relative rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
    </div>
  );
}
