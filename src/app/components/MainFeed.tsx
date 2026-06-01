import { useNavigate } from 'react-router';
import svgPaths from "../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh";
import imgCreateStoryProfile from "../../assets/prototype/create-story-profile.png";
import imgNavProfile from "../../assets/prototype/nav-profile.png";
import imgPostProfileOther from "../../assets/prototype/post-profile-other.png";
import imgPostProfileVanAnh from "../../assets/prototype/post-profile-van-anh.png";
import imgStoryProfile1 from "../../assets/prototype/story-profile-1.png";
import imgStoryProfile2 from "../../assets/prototype/story-profile-2.png";
import imgStory from "../../assets/prototype/story-bg-1.png";
import imgStory1 from "../../assets/prototype/story-bg-2.png";
import imgVideoImage from "../../imports/SanhChungMainScreen-2/e2e34c76235c831f4fa418191930138d4bc2d321.png";
import imgVideoImage1 from "../../imports/SanhChungMainScreen-2/5052b7b5112fb64b5f487cb959038bf783018ef9.png";

export default function MainFeed() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f5f5] overflow-auto relative size-full">
      {/* Status Bar */}
      <div className="sticky bg-white content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-full z-50">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-w-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
                <p className="font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
              </div>
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-[124px]" />
          <div className="flex-[1_0_0] min-w-px relative">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
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
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sticky bg-white h-[48px] left-0 top-[50px] w-full z-40 flex items-center justify-between px-2">
        <div className="size-[32px] cursor-pointer active:opacity-50" onClick={() => navigate('/profile')}>
          <img alt="" className="size-full rounded-full" src={imgNavProfile} />
        </div>
        <p className="font-semibold text-[16px] text-[#171717]">Cộng đồng</p>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[10.42%_18.75%_9.62%_18.75%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19.1923">
              <path d={svgPaths.p2c8de00} fill="#171717" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="flex flex-col gap-2 p-2 w-full">
        <div className="bg-white rounded-[50px] w-full flex p-1">
          <div className="bg-[#fef5e7] flex-1 rounded-[50px] flex gap-1 items-center justify-center py-2">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[10.42%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                  <path d={svgPaths.pd89ce00} fill="#F99D0D" />
                </svg>
              </div>
            </div>
            <p className="font-medium text-[#f99d0d] text-[14px]">Sảnh chung</p>
          </div>
          <div
            className="flex-1 flex gap-1 items-center justify-center py-2 cursor-pointer active:opacity-50"
            onClick={() => navigate('/groups')}
          >
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[19.55%_7.49%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4035 14.6155">
                  <path d={svgPaths.p364bdd00} fill="black" fillOpacity="0.5" />
                </svg>
              </div>
            </div>
            <p className="font-medium text-[14px] text-black opacity-50">Nhóm</p>
          </div>
          <div
            className="flex-1 flex gap-1 items-center justify-center py-2 cursor-pointer active:opacity-50"
            onClick={() => navigate('/events')}
          >
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[9.94%_14.58%_10.42%_14.58%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19.1152">
                  <path d={svgPaths.p19883580} fill="black" fillOpacity="0.5" />
                </svg>
              </div>
            </div>
            <p className="font-medium text-[14px] text-black opacity-50">Sự kiện</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-[50px] w-full flex gap-2 items-center px-3 py-2">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[14.1%_14.18%_14.26%_14.18%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.192 17.1923">
                <path d={svgPaths.p35993800} fill="#737373" />
              </svg>
            </div>
          </div>
          <p className="flex-1 font-normal text-[#737373] text-[14px]">Tìm kiếm cộng đồng</p>
        </div>
      </div>

      {/* Stories Hero */}
      <div className="px-2 py-3">
        <div className="flex gap-3 overflow-x-auto">
          {/* Create Story */}
          <button
            className="bg-gradient-to-b from-[#f99d0d] to-[#a964f7] h-[213px] w-[120px] rounded-xl flex flex-col items-center justify-center shrink-0 cursor-pointer active:opacity-90"
            onClick={() => navigate('/create-story')}
          >
            <div className="size-[48px] mb-2">
              <img alt="" className="size-full rounded-full" src={imgCreateStoryProfile} />
            </div>
            <p className="font-semibold text-[14px] text-white">Tạo tin</p>
          </button>

          {/* Story 1 */}
          <div className="relative h-[213px] w-[120px] rounded-xl overflow-hidden shrink-0">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgStory} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f99d0d] to-[#a964f7] opacity-30" />
            <div className="relative h-full flex flex-col justify-between p-2">
              <div className="size-[48px]">
                <img alt="" className="size-full rounded-full" src={imgStoryProfile1} />
              </div>
              <p className="font-semibold text-[14px] text-white">Tên học sinh</p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="relative h-[213px] w-[120px] rounded-xl overflow-hidden shrink-0">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgStory1} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f99d0d] to-[#a964f7] opacity-30" />
            <div className="relative h-full flex flex-col justify-between p-2">
              <div className="size-[48px]">
                <img alt="" className="size-full rounded-full" src={imgStoryProfile2} />
              </div>
              <p className="font-semibold text-[14px] text-white">Tên học sinh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="flex flex-col gap-2 pb-[100px]">
        {[1, 2, 3].map((postId) => (
          <div key={postId} className="bg-white cursor-pointer active:bg-gray-50" onClick={() => navigate(`/post/${postId}`)}>
            {/* Author */}
            <div className="flex gap-2 items-center p-2">
              <div
                className="size-[40px] cursor-pointer active:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/personal-feed');
                }}
              >
                <img alt="" className="size-full rounded-full" src={postId === 1 ? imgPostProfileVanAnh : imgPostProfileOther} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[14px] text-[#171717]">
                  {postId === 1 ? 'Vân Anh' : postId === 2 ? 'Nguyễn Tú' : 'Lê Minh'}
                </p>
                <div className="flex gap-1 items-center text-[12px] text-[#737373]">
                  <span>{postId === 2 ? 'Học sinh' : 'Giáo viên'}</span>
                  <span>•</span>
                  <span>{postId === 3 ? '5' : '8'} ngày trước</span>
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[10.42%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
                        <path d={svgPaths.p3d553300} fill="#737373" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-2 py-1">
              <p className="font-normal text-[14px] text-[#171717]">
                {postId === 3 ? 'Mình rất hào hứng với chủ đề này, mọi người cùng thảo luận nhé!' : 'Đây là bài viết. Viết cái gì thì sẽ hiển thị ở đây hết.'}
              </p>
            </div>

            {/* Image */}
            <div className="w-full aspect-[447/252]">
              <img alt="" className="w-full h-full object-cover" src={postId === 1 ? imgVideoImage : imgVideoImage1} />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-2 py-3">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 items-center">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[7.93%_6.25%_14.58%_10.42%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.4967">
                        <path d={svgPaths.p351c6f00} fill="#171717" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-normal text-[14px] text-[#171717]">{postId === 3 ? 200 : 128}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[10.42%_10.42%_12.34%_10.42%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.4487">
                        <path d={svgPaths.p2465bd80} fill="#171717" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-normal text-[14px] text-[#171717]">{postId === 3 ? 15 : 6}</span>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[10.42%_18.75%_10.42%_10.42%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 15.8333">
                    <path d={svgPaths.p22cb7c00} fill="#171717" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bg-white bottom-[34px] flex h-[54px] items-center left-0 p-1 right-0 max-w-[393px] mx-auto z-50 border-t border-[#e5e5e5]">
        <div className="bg-[#fef5e7] flex-1 rounded-[50px] flex flex-col gap-0.5 items-center py-1">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[10.42%_11.22%_13.94%_11.22%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6155 18.1538">
                <path d={svgPaths.p1a6c4500} fill="#F99D0D" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[#f99d0d] text-[10px]">Cộng đồng</p>
        </div>
        <button className="flex-1 flex flex-col gap-0.5 items-center py-1 active:opacity-60" onClick={() => navigate('/courses')}>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[10.42%_6.25%_19.23%_6.25%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.8845">
                <path d={svgPaths.p19be9500} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">Khoá học</p>
        </button>
        <div className="flex-1 flex flex-col gap-0.5 items-center py-1">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[9.94%_14.58%_10.42%_14.58%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19.1152">
                <path d={svgPaths.p19883580} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">TKB</p>
        </div>
        <div className="flex-1 flex flex-col gap-0.5 items-center py-1">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[18.75%_11.42%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.519 15">
                <path d={svgPaths.p2171e100} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">Live</p>
        </div>
        <div className="flex-1 flex flex-col gap-0.5 items-center py-1">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[41.67%_16.67%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
                <path d={svgPaths.p1ad01b00} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">Khác</p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bg-white bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
    </div>
  );
}
