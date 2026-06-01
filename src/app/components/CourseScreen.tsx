import { useNavigate } from 'react-router';
import imgCourseTeam from '../../assets/prototype/live-detail-team.png';
import imgCourseThumbEnglish from '../../assets/prototype/course-thumb-english.png';
import imgCourseThumbVsat from '../../assets/prototype/course-thumb-vsat.png';
import imgFlame from '../../assets/prototype/course-flame.svg';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import imgStar from '../../assets/prototype/course-star.svg';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

type CourseCardProps = {
  compact?: boolean;
  hot?: boolean;
  image: string;
  onClick?: () => void;
  price?: string;
  rating: string;
  teacher?: string;
  title: string;
};

function CourseCard({ compact = false, hot = false, image, onClick, price, rating, teacher = 'Empire Team', title }: CourseCardProps) {
  return (
    <button className={`bg-white overflow-hidden rounded text-left active:opacity-90 ${compact ? 'w-[188px] min-w-[188px]' : 'w-[268px] min-w-[268px]'}`} onClick={onClick}>
      <div className="aspect-[304/228] overflow-hidden w-full">
        <img alt="" className="size-full object-cover" src={image} />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex gap-1 items-center">
          <img alt="" className="size-[24px] rounded-full object-cover" src={imgCourseTeam} />
          <p className="flex-1 text-[14px] leading-5 text-[#525252] truncate">{teacher}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold leading-6 text-[16px] text-[#171717] line-clamp-2">{title}</p>
          {price && <p className="font-bold leading-6 text-[16px] text-[#f99d0d]">{price}</p>}
        </div>
        <div className="flex gap-2 items-center">
          <div className="border border-[#e5e5e5] flex gap-0.5 items-center rounded-[20px] px-2 py-1">
            <img alt="" className="size-4" src={imgStar} />
            <span className="font-medium text-[12px] leading-4 text-black">{rating}</span>
          </div>
          {hot && (
            <div className="bg-[#ee3a2f] flex gap-0.5 items-center rounded-[20px] px-2 py-1">
              <img alt="" className="size-4" src={imgFlame} />
              <span className="font-medium text-[12px] leading-4 text-white">Hot</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

function StatusBar() {
  return (
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
  );
}

export default function CourseScreen() {
  const navigate = useNavigate();
  const categories = ['Tất cả khoá học', 'Luyện thi đánh giá năng lực', 'Luyện thi TNPT', 'Đại học môn Toán', 'Tiếng Anh chuyên sâu', 'Bài thi trắc nghiệm'];

  return (
    <div className="bg-[#fafafa] overflow-auto relative size-full">
      <StatusBar />

      <div className="sticky bg-white h-[48px] left-0 top-[50px] w-full z-40 flex items-center justify-between px-2">
        <button className="size-[32px] cursor-pointer active:opacity-50" onClick={() => navigate('/profile')}>
          <img alt="" className="size-full rounded-full" src={imgNavProfile} />
        </button>
        <p className="font-semibold text-[16px] text-[#171717]">Khoá học</p>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[10.42%_18.75%_9.62%_18.75%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19.1923">
              <path d={svgPaths.p2c8de00} fill="#171717" />
            </svg>
          </div>
        </div>
      </div>

      <main className="pb-[110px]">
        <div className="p-2">
          <div className="bg-white rounded-[50px] w-full flex gap-2 items-center px-3 py-2">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[14.1%_14.18%_14.26%_14.18%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.192 17.1923">
                  <path d={svgPaths.p35993800} fill="#737373" />
                </svg>
              </div>
            </div>
            <p className="flex-1 font-normal text-[#737373] text-[14px]">Tìm kiếm khoá học</p>
          </div>
        </div>

        <section className="flex flex-col gap-2 px-4 pb-4 pt-2">
          <h2 className="font-semibold leading-7 text-[20px] text-[#171717]">Danh mục</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="border border-[#171717] min-h-10 rounded-[50px] px-3 py-2 text-[14px] leading-5 text-[#171717] active:bg-white"
                onClick={() => {
                  if (category === 'Tất cả khoá học') {
                    navigate('/courses/all');
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2 px-4 pb-6">
          <div className="flex items-center">
            <h2 className="flex-1 font-semibold leading-7 text-[20px] text-[#171717]">
              <span className="text-[#f99d0d]">6</span> khoá học của tôi
            </h2>
            <button className="flex gap-1 items-center px-2 py-1 active:opacity-60" onClick={() => navigate('/courses/my')}>
              <span className="font-semibold text-[14px] leading-5 text-[#f99d0d]">Tất cả</span>
              <span className="text-[#f99d0d] text-[20px] leading-5">›</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-1">
            <CourseCard image={imgCourseThumbVsat} onClick={() => navigate('/courses/vsat')} rating="4.9" title="Đánh giá năng lực V-SAT" />
            <CourseCard image={imgCourseThumbEnglish} onClick={() => navigate('/courses/vsat')} rating="4.7" title="Chương trình Toán - Lý - Hóa nâng cao" />
            <CourseCard image={imgCourseThumbVsat} onClick={() => navigate('/courses/vsat')} rating="4.8" title="Chương trình luyện thi đại học toàn diện" />
          </div>
        </section>

        <section className="flex flex-col gap-2 px-4 pb-6">
          <h2 className="font-semibold leading-7 text-[20px] text-[#171717]">Khoá học nổi bật</h2>
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-1">
            <CourseCard compact hot image={imgCourseThumbVsat} onClick={() => navigate('/courses/vsat')} price="1.250.000đ" rating="4.9" title="Tổ hợp 6 môn kiến thức - Nền tảng THPT" />
            <CourseCard compact image={imgCourseThumbVsat} onClick={() => navigate('/courses/vsat')} price="1.450.000đ" rating="4.8" title="Chương trình luyện thi đại học toàn diện" />
            <CourseCard compact image={imgCourseThumbEnglish} onClick={() => navigate('/courses/vsat')} price="1.300.000đ" rating="4.7" teacher="Phoenix Crew" title="Bồi dưỡng kiến thức nâng cao THPT" />
          </div>
        </section>
      </main>

      <div className="fixed bg-white bottom-[34px] flex h-[54px] items-center left-0 p-1 right-0 max-w-[393px] mx-auto z-50 border-t border-[#e5e5e5]">
        <button className="flex-1 flex flex-col gap-0.5 items-center py-1 active:opacity-60" onClick={() => navigate('/')}>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[10.42%_11.22%_13.94%_11.22%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6155 18.1538">
                <path d={svgPaths.p1a6c4500} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">Cộng đồng</p>
        </button>
        <div className="bg-[#fef5e7] flex-1 rounded-[50px] flex flex-col gap-0.5 items-center py-1">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[10.42%_6.25%_19.23%_6.25%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.8845">
                <path d={svgPaths.p19be9500} fill="#F99D0D" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[#f99d0d] text-[10px]">Khoá học</p>
        </div>
        <button className="flex-1 flex flex-col gap-0.5 items-center py-1 active:opacity-60" onClick={() => navigate('/schedule')}>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[9.94%_14.58%_10.42%_14.58%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19.1152">
                <path d={svgPaths.p19883580} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">TKB</p>
        </button>
        <button className="flex-1 flex flex-col gap-0.5 items-center py-1 active:opacity-60" onClick={() => navigate('/live')}>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[18.75%_11.42%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.519 15">
                <path d={svgPaths.p2171e100} fill="black" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-medium text-[10px] text-black opacity-50">Live</p>
        </button>
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

      <div className="fixed bg-white bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
    </div>
  );
}
