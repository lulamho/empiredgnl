import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import imgProfilePicture from "../../assets/prototype/create-story-profile.png";
import imgVideoImage from "../../imports/SanhChungBaiVietChiTiet-3/e2e34c76235c831f4fa418191930138d4bc2d321.png";
import svgPaths from "../../imports/SanhChungBaiVietChiTiet-3/svg-6zq1t9jcsb";

function StatusBar() {
  return (
    <div className="sticky bg-white flex h-[50px] items-start left-0 pt-[21px] top-0 w-full z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1 items-center justify-center min-w-px pl-4 pr-1.5">
          <p className="font-[590] leading-[22px] text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] shrink-0 w-[124px]" />
        <div className="flex flex-1 items-center justify-center gap-[7px] min-w-px pl-1.5 pr-4">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          <div className="h-[13px] relative shrink-0 w-[27.328px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
              <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
              <path d={svgPaths.p3bbd9700} fill="black" opacity="0.4" />
              <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostDetail() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [showReplies1, setShowReplies1] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white overflow-auto relative size-full">
      <StatusBar />

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

      {/* Post Content */}
      <div className="pb-[200px]">
        {/* Author */}
        <div className="flex gap-2 items-center p-2">
          <div
            className="size-[40px] cursor-pointer active:opacity-50"
            onClick={() => navigate('/personal-feed')}
          >
            <img alt="" className="size-full rounded-full object-cover" src={imgProfilePicture} />
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

        {/* Post Text */}
        <div className="px-2 py-1">
          <p className="font-normal text-[14px] text-[#171717]">Đây là bài viết. Viết cái gì thì sẽ hiển thị ở đây hết.</p>
        </div>

        {/* Image */}
        <div className="w-full aspect-[447/252]">
          <img alt="" className="w-full h-full object-cover" src={imgVideoImage} />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-2 py-3">
          <div className="flex gap-4 items-center">
            <button
              className="flex gap-1 items-center cursor-pointer active:opacity-50"
              onClick={toggleLike}
            >
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[12.5%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
                    <path d={svgPaths.p351c6f00} fill={isLiked ? '#f99d0d' : '#171717'} />
                  </svg>
                </div>
              </div>
              <span className={`font-normal text-[14px] ${isLiked ? 'text-[#f99d0d]' : 'text-[#171717]'}`}>{likeCount}</span>
            </button>
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
          <button className="cursor-pointer active:opacity-50">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                  <path d={svgPaths.p22cb7c00} fill="#171717" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col gap-2 p-2">
          {/* Comment 1 */}
          <div className="flex gap-2 items-start">
            <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
              <span className="text-[#895607] text-[14px] font-semibold">L</span>
            </div>
            <div className="flex-1">
              <div className="p-2">
                <div className="flex gap-1 items-center text-[11px] mb-1">
                  <span className="font-semibold text-[#171717] text-[12px]">Admin</span>
                  <span className="text-[#737373]">•</span>
                  <span className="text-[#737373]">1 ngày trước</span>
                </div>
                <p className="text-[#171717] text-[12px]">Chào mọi người </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <button
                  className="text-[#f99d0d] text-[12px] font-semibold px-2 py-1 cursor-pointer active:opacity-50"
                  onClick={() => navigate(`/post/${postId}/reply/1`)}
                >
                  Phản hồi
                </button>
                <div className="flex gap-1 items-center">
                  <span className="text-[20px]">😊</span>
                  <span className="text-[#171717] text-[12px] font-medium">2</span>
                </div>
              </div>
              <button
                className="flex gap-1 items-center mt-1 cursor-pointer active:opacity-50"
                onClick={() => setShowReplies1(!showReplies1)}
              >
                <div className="h-px w-6 bg-[#e5e5e5]" />
                <span className="text-[#f99d0d] text-[12px] font-semibold">
                  {showReplies1 ? 'Ẩn phản hồi' : 'Xem 2 phản hồi'}
                </span>
              </button>
            </div>
          </div>

          {/* Nested Replies */}
          {showReplies1 && (
            <div className="ml-10 flex flex-col gap-2">
              {/* Reply 1 */}
              <div className="flex gap-2 items-start">
                <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
                  <span className="text-[#895607] text-[14px] font-semibold">U</span>
                </div>
                <div className="flex-1">
                  <div className="p-2">
                    <p className="font-semibold text-[#171717] text-[12px]">User</p>
                    <p className="text-[#171717] text-[12px]">Đây là phản hồi của user</p>
                  </div>
                </div>
              </div>

              {/* Reply 2 */}
              <div className="flex gap-2 items-start">
                <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
                  <span className="text-[#895607] text-[14px] font-semibold">U</span>
                </div>
                <div className="flex-1">
                  <div className="p-2">
                    <p className="font-semibold text-[#171717] text-[12px]">User</p>
                    <p className="text-[#171717] text-[12px]">Đây là phản hồi của user</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Comment 2 */}
          <div className="flex gap-2 items-start">
            <div className="size-[32px] rounded-full bg-[#FEF5E7] flex items-center justify-center shrink-0">
              <span className="text-[#895607] text-[14px] font-semibold">L</span>
            </div>
            <div className="flex-1">
              <div className="p-2">
                <div className="flex gap-1 items-center text-[11px] mb-1">
                  <span className="font-semibold text-[#171717] text-[12px]">Admin</span>
                  <span className="text-[#737373]">•</span>
                  <span className="text-[#737373]">1 ngày trước</span>
                </div>
                <p className="text-[#171717] text-[12px]">Chào mọi người </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <button
                  className="text-[#f99d0d] text-[12px] font-semibold px-2 py-1 cursor-pointer active:opacity-50"
                  onClick={() => navigate(`/post/${postId}/reply/2`)}
                >
                  Phản hồi
                </button>
                <div className="flex gap-1 items-center">
                  <span className="text-[20px]">😊</span>
                  <span className="text-[#171717] text-[12px] font-medium">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Comment Bar */}
      <div className="fixed bg-white bottom-0 border-t border-[#e5e5e5] flex flex-col gap-2 left-0 pb-[34px] pt-2 px-2 right-0 max-w-[393px] mx-auto z-50">
        <button
          className="bg-white border border-[#e5e5e5] rounded-[50px] w-full px-3 py-2 text-left cursor-pointer active:bg-gray-50"
          onClick={() => navigate(`/post/${postId}/reply`)}
        >
          <span className="font-normal text-[#737373] text-[14px]">Viết bình luận...</span>
        </button>
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
          <button className="bg-[#fbbd5d] opacity-50 rounded-lg px-4 py-1">
            <span className="font-semibold text-[14px] text-white">Gửi</span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bg-white bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto pointer-events-none flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
    </div>
  );
}
