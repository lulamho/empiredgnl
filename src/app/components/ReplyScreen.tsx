import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import imgProfilePicture from "../../assets/prototype/post-profile-detail.png";
import imgVideoImage from "../../imports/SanhChungPhanHoi/e2e34c76235c831f4fa418191930138d4bc2d321.png";
import svgPaths from "../../imports/SanhChungPhanHoi/svg-hgyq32mpw8";

export default function ReplyScreen() {
  const navigate = useNavigate();
  const { postId, commentId } = useParams();
  const [replyText, setReplyText] = useState('');

  return (
    <div className="bg-white overflow-auto relative size-full">
      {/* Status Bar */}
      <div className="sticky bg-white flex h-[50px] items-center justify-between left-0 px-4 pt-5 top-0 w-full z-50">
        <p className="font-semibold text-[17px] text-black">9:41</p>
        <div className="h-[10px] w-[124px]" />
        <div className="flex gap-2 items-center">
          <div className="text-black">📶</div>
          <div className="text-black">📡</div>
          <div className="text-black">🔋</div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sticky bg-white border-b border-[#e5e5e5] h-[48px] left-0 top-[50px] w-full z-40 flex items-center justify-center">
        <button
          className="absolute left-2 p-1 cursor-pointer active:opacity-50"
          onClick={() => navigate(-1)}
        >
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[9.78%_27.42%_9.78%_26.44%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.073 19.3075">
                <path d={svgPaths.p28947000} fill="#171717" />
              </svg>
            </div>
          </div>
        </button>
        <p className="font-semibold text-[16px] text-[#171717]">Bài viết</p>
      </div>

      {/* Post Content - Compact */}
      <div className="pb-[300px]">
        {/* Author */}
        <div className="flex gap-2 items-center p-2">
          <div
            className="size-[40px] cursor-pointer active:opacity-50"
            onClick={() => navigate('/personal-feed')}
          >
            <img alt="" className="size-full rounded-full" src={imgProfilePicture} />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[14px] text-[#171717]">Vân Anh</p>
            <div className="flex gap-1 items-center text-[12px] text-[#737373]">
              <span>Giáo viên</span>
              <span>•</span>
              <span>8 ngày trước</span>
              <div className="overflow-clip relative shrink-0 size-[14px]">
                <div className="absolute inset-[10.42%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p3d553300} fill="#737373" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full aspect-[447/252]">
          <img alt="" className="w-full h-full object-cover" src={imgVideoImage} />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-2 py-3">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1 items-center">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.5%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                    <path d={svgPaths.p351c6f00} fill="#171717" />
                  </svg>
                </div>
              </div>
              <span className="font-normal text-[14px] text-[#171717]">128</span>
            </div>
            <div className="flex gap-1 items-center">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.5%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p2465bd80} fill="#171717" />
                  </svg>
                </div>
              </div>
              <span className="font-normal text-[14px] text-[#171717]">6</span>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[12.5%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                <path d={svgPaths.p22cb7c00} fill="#171717" />
              </svg>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col gap-2 p-2">
          {/* Comment 1 */}
          <div className="flex gap-2 items-start">
            <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
              <span className="text-[#895607] text-[14px] font-semibold">L</span>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl rounded-tl-sm p-2">
                <div className="flex gap-1 items-center text-[11px] mb-1">
                  <span className="font-semibold text-[#171717] text-[12px]">Admin</span>
                  <span className="text-[#737373]">•</span>
                  <span className="text-[#737373]">1 ngày trước</span>
                </div>
                <p className="text-[#171717] text-[12px]">Chào mọi người </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[#f99d0d] text-[12px] font-semibold px-2 py-1">Phản hồi</span>
                <div className="flex gap-1 items-center">
                  <span className="text-[20px]">😊</span>
                  <span className="text-[#171717] text-[12px] font-medium">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex gap-2 items-start">
            <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
              <span className="text-[#895607] text-[14px] font-semibold">L</span>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl rounded-tl-sm p-2">
                <div className="flex gap-1 items-center text-[11px] mb-1">
                  <span className="font-semibold text-[#171717] text-[12px]">Admin</span>
                  <span className="text-[#737373]">•</span>
                  <span className="text-[#737373]">1 ngày trước</span>
                </div>
                <p className="text-[#171717] text-[12px]">Chào mọi người </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[#f99d0d] text-[12px] font-semibold px-2 py-1">Phản hồi</span>
                <div className="flex gap-1 items-center">
                  <span className="text-[20px]">😊</span>
                  <span className="text-[#171717] text-[12px] font-medium">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Reply Input Area */}
          <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border-2 border-[#f99d0d]">
            <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
              <span className="text-[#895607] text-[14px] font-semibold">U</span>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl rounded-tl-sm p-2">
                <p className="font-semibold text-[#171717] text-[12px]">User</p>
                <p className="text-[#171717] text-[12px]">Đang phản hồi tới @Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar with Text */}
      <div className="fixed bg-white bottom-[270px] border-t border-[#e5e5e5] flex flex-col gap-2 left-0 pt-2 px-2 right-0 max-w-[393px] mx-auto z-50">
        <div className="bg-white border-2 border-[#f99d0d] rounded-[50px] w-full px-3 py-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Viết phản hồi..."
            className="w-full font-normal text-[14px] outline-none bg-transparent text-[#171717]"
            autoFocus
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p1fb6cf00} fill="#f99d0d" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
                  <path d={svgPaths.p369cb8c0} fill="#f99d0d" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13">
                  <path d={svgPaths.p350a0080} fill="#f99d0d" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
                  <path d={svgPaths.p28b35880} fill="#f99d0d" />
                </svg>
              </div>
            </div>
          </div>
          <button
            className={`rounded-lg px-4 py-1 cursor-pointer active:opacity-70 ${replyText.trim() ? 'bg-[#f99d0d]' : 'bg-[#fbbd5d] opacity-50'}`}
            onClick={() => {
              if (replyText.trim()) {
                navigate(-1);
              }
            }}
          >
            <span className="font-semibold text-[14px] text-white">Gửi</span>
          </button>
        </div>
      </div>

      {/* iOS Keyboard */}
      <div className="fixed bg-[#D1D5DB] bottom-0 left-0 right-0 max-w-[393px] mx-auto z-40">
        {/* Suggestions */}
        <div className="bg-white border-b border-gray-300 px-3 py-2 flex gap-2 overflow-x-auto">
          <div className="bg-gray-100 rounded-md px-3 py-1 text-sm whitespace-nowrap">"The"</div>
          <div className="bg-gray-100 rounded-md px-3 py-1 text-sm whitespace-nowrap">the</div>
          <div className="bg-gray-100 rounded-md px-3 py-1 text-sm whitespace-nowrap">to</div>
        </div>

        {/* Keyboard Grid */}
        <div className="p-1 pb-2">
          {/* Row 1 */}
          <div className="flex gap-[6px] mb-[12px] justify-center px-1">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
              <div key={key} className="bg-white rounded-md shadow-sm flex items-center justify-center h-[42px] flex-1 text-[23px] cursor-pointer active:bg-gray-200">
                {key}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-[6px] mb-[12px] justify-center px-4">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
              <div key={key} className="bg-white rounded-md shadow-sm flex items-center justify-center h-[42px] flex-1 text-[23px] cursor-pointer active:bg-gray-200">
                {key}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-[6px] mb-[12px] justify-center">
            <div className="bg-[#AEB3BB] rounded-md shadow-sm flex items-center justify-center h-[42px] px-3 cursor-pointer active:bg-gray-400">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[10.42%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
                    <path d={svgPaths.p14c88780} fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-[6px] flex-1 justify-center px-1">
              {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
                <div key={key} className="bg-white rounded-md shadow-sm flex items-center justify-center h-[42px] flex-1 text-[23px] cursor-pointer active:bg-gray-200">
                  {key}
                </div>
              ))}
            </div>
            <div className="bg-[#AEB3BB] rounded-md shadow-sm flex items-center justify-center h-[42px] px-4 cursor-pointer active:bg-gray-400">
              <span className="text-[20px] font-bold">⌫</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex gap-[6px]">
            <div className="bg-[#AEB3BB] rounded-md shadow-sm flex items-center justify-center h-[42px] px-3 text-[16px] cursor-pointer active:bg-gray-400">
              ABC
            </div>
            <div className="bg-white rounded-md shadow-sm flex items-center justify-center h-[42px] px-3 cursor-pointer active:bg-gray-200">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.5%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1fb6cf00} fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm flex items-center justify-center h-[42px] flex-1 text-[16px] cursor-pointer active:bg-gray-200">
              space
            </div>
            <div className="bg-[#0A84FF] rounded-md shadow-sm flex items-center justify-center h-[42px] px-8 text-white text-[16px] font-semibold cursor-pointer active:bg-blue-600">
              ↵
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="bg-white h-[34px] flex items-center justify-center">
          <div className="bg-black h-[5px] rounded-full w-[144px]" />
        </div>
      </div>
    </div>
  );
}
