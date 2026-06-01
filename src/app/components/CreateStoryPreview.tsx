import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import svgPaths from "../../imports/SanhChungTaoTinXong/svg-q92vimqnf9";

export default function CreateStoryPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const [caption, setCaption] = useState('Ahihi, do ngok 😄');
  const storyText = location.state?.text || 'Mùa hè tới rồi';

  return (
    <div className="bg-black overflow-clip relative size-full">
      {/* Status Bar */}
      <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-[393px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-w-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
                <p className="font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
              </div>
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-[124px]" />
          <div className="flex-[1_0_0] min-w-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
                <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                    <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" />
                  </svg>
                </div>
                <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                    <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" />
                  </svg>
                </div>
                <div className="h-[13px] relative shrink-0 w-[27.328px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                    <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
                    <path d={svgPaths.p3bbd9700} fill="white" opacity="0.4" />
                    <rect fill="white" height="9" rx="2.5" width="21" x="2" y="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute h-[699px] left-0 top-[48px] w-[393px]">
        <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(163.353deg, rgb(250, 177, 61) 3.2957%, rgb(226, 101, 86) 51.257%, rgb(234, 101, 203) 96.558%)" }} />

        {/* Text Area */}
        <div className="absolute content-stretch flex items-center justify-center left-0 p-[16px] top-[50px] w-[393px]">
          <p className="font-semibold leading-[40px] text-[32px] text-white text-center tracking-[-0.2px] whitespace-nowrap">{storyText}</p>
          <div className="bg-white h-[40px] relative shrink-0 w-[2px]" />
        </div>

        {/* Mobile Nav */}
        <div className="absolute h-[48px] left-0 top-[2px] w-[393px]">
          <button
            className="absolute left-[8px] top-1/2 -translate-y-1/2 overflow-clip size-[24px] cursor-pointer active:opacity-50"
            onClick={() => navigate(-1)}
          >
            <div className="absolute inset-[22.28%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3075 13.3075">
                <path d={svgPaths.p23a30a00} fill="white" />
              </svg>
            </div>
          </button>
          <p className="absolute left-1/2 -translate-x-1/2 font-semibold leading-[24px] text-[16px] text-center text-white top-[12px] w-[313px]">Tạo tin</p>
        </div>

        {/* Right Toolbar */}
        <div className="absolute -translate-y-1/2 bg-white content-stretch flex flex-col h-[160px] items-start p-[8px] right-[8px] rounded-[50px] top-[calc(50%-3.5px)]">
          <div className="bg-[#fef5e7] flex-[1_0_0] min-h-px relative rounded-[20px]">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.51%_10.18%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9296 12.5963">
                      <path d={svgPaths.p3b186100} fill="#F99D0D" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[14.58%_10.42%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 14.1667">
                      <path d={svgPaths.p369cb8c0} fill="#737373" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.75%_11.42%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4325 12.5">
                      <path d={svgPaths.p350a0080} fill="#737373" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] rounded-[4px] top-[663px]">
          <p className="font-normal leading-[20px] relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap">{caption}</p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[8px] top-[769px] w-[393px]">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <p className="font-medium leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Màu:</p>
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <circle cx="13" cy="13" fill="url(#paint0_linear_1)" r="12.5" stroke="white" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1" x1="6.49618" x2="10.7706" y1="1" y2="26.427">
                    <stop stopColor="#FAB13D" />
                    <stop offset="0.514265" stopColor="#E26556" />
                    <stop offset="1" stopColor="#EA65CB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="url(#paint0_linear_2)" r="12" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2" x1="5.49618" x2="9.77063" y1="0" y2="25.427">
                  <stop stopColor="#84D3A9" />
                  <stop offset="1" stopColor="#4B87F5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="url(#paint0_linear_3)" r="12" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3" x1="5.49618" x2="9.77063" y1="0" y2="25.427">
                  <stop stopColor="#BA83F9" />
                  <stop offset="1" stopColor="#81B233" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="url(#paint0_linear_4)" r="12" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4" x1="5.49618" x2="9.77063" y1="0" y2="25.427">
                  <stop stopColor="#E26556" />
                  <stop offset="1" stopColor="#4B87F5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="url(#paint0_linear_5)" r="12" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5" x1="5.49618" x2="9.77063" y1="0" y2="25.427">
                  <stop stopColor="#84D3A9" />
                  <stop offset="1" stopColor="#A0C566" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="url(#paint0_linear_6)" r="12" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6" x1="5.49618" x2="9.77063" y1="0" y2="25.427">
                  <stop stopColor="#84D3A9" />
                  <stop offset="1" stopColor="#EF7733" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <button
          className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 cursor-pointer active:opacity-70"
          onClick={() => navigate('/')}
        >
          <p className="font-semibold leading-[24px] relative shrink-0 text-[#f99d0d] text-[16px] text-center whitespace-nowrap">Đăng</p>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-[34px] left-0 right-0">
        <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 -translate-x-1/2 w-[144px]">
          <div className="bg-white h-[5px] relative rounded-[100px] w-[144px]" />
        </div>
      </div>
    </div>
  );
}
