import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import imgCourseTeam from '../../assets/prototype/live-detail-team.png';
import imgCourseThumbEnglish from '../../assets/prototype/course-thumb-english.png';
import imgCourseThumbVsat from '../../assets/prototype/course-thumb-vsat.png';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import imgStar from '../../assets/prototype/course-star.svg';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

type CourseCardProps = {
  image: string;
  onClick?: () => void;
  rating: string;
  teacher?: string;
  title: string;
};

function CourseCard({ image, onClick, rating, teacher = 'Empire Team', title }: CourseCardProps) {
  return (
    <button className="bg-white overflow-hidden rounded text-left active:opacity-90 w-full min-w-0" onClick={onClick}>
      <div className="aspect-[304/228] overflow-hidden w-full">
        <img alt="" className="size-full object-cover" src={image} />
      </div>
      <div className="flex flex-col gap-2 p-2 min-h-[136px]">
        <div className="flex gap-1 items-center">
          <img alt="" className="size-[24px] rounded-full object-cover" src={imgCourseTeam} />
          <p className="flex-1 text-[14px] leading-5 text-[#525252] truncate">{teacher}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold leading-6 text-[16px] text-[#171717] line-clamp-2">{title}</p>
        </div>
        <div className="mt-auto flex gap-2 items-center">
          <div className="border border-[#e5e5e5] flex gap-0.5 items-center rounded-[20px] px-2 py-1">
            <img alt="" className="size-4" src={imgStar} />
            <span className="font-medium text-[12px] leading-4 text-black">{rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function FeaturedListIcon() {
  return (
    <svg aria-hidden="true" className="h-[15px] w-[19px]" fill="none" viewBox="0 0 19 15">
      <rect height="13.5" rx="1.75" stroke="currentColor" strokeWidth="1.5" width="17.5" x="0.75" y="0.75" />
      <path d="M5 4.75H14M5 7.5H14M5 10.25H11.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function CategoryDropdown({ onClose }: { onClose: () => void }) {
  const rows = [
    { label: 'Khoá Học Backend', active: true, expanded: true },
    { child: true, label: 'PHP' },
    { child: true, label: 'Java' },
    { child: true, label: '.Net' },
    { label: 'Khoá Học Front End' },
    { label: 'Khoá Học Design' },
    { label: 'Khoá Học Testing' },
    { inset: true, label: 'Phân Tích Yêu Cầu' },
    { inset: true, label: 'Kiểm Thử Tự Động' },
    { inset: true, label: 'Kiểm Thử Bảo Mật', regular: true },
  ];

  return (
    <div className="absolute left-3 top-[166px] z-40 flex h-[300px] max-h-[300px] w-[313px] flex-col overflow-hidden rounded-[20px] bg-white/85 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <div className="flex items-center gap-2 py-2 pl-3 pr-1">
        <p className="min-w-0 flex-1 text-[16px] font-semibold leading-6 text-[#171717]">Danh Mục Khoá Học</p>
        <button aria-label="Đóng danh mục" className="flex size-6 items-center justify-center rounded-full active:bg-black/5" onClick={onClose}>
          <X aria-hidden="true" size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        {rows.map((row) => (
          <button
            key={row.label}
            className={`flex min-h-10 w-full items-center gap-0.5 py-2 pr-1 text-left active:opacity-70 ${
              row.active ? 'rounded-xl bg-[#fef5e7] pl-3 text-[#f99d0d]' : row.child ? 'pl-6 text-[#171717]' : row.inset ? 'pl-4 text-[#171717]' : 'pl-3 text-[#171717]'
            }`}
          >
            <span className={`min-w-0 flex-1 text-[14px] leading-5 ${row.regular || row.child ? 'font-normal' : 'font-medium'}`}>{row.label}</span>
            {row.expanded ? (
              <ChevronDown aria-hidden="true" className="shrink-0 text-[#f99d0d]" size={20} strokeWidth={2} />
            ) : !row.child ? (
              <ChevronRight aria-hidden="true" className="shrink-0 text-[#171717]" size={20} strokeWidth={2} />
            ) : null}
          </button>
        ))}
        <div className="absolute right-0 top-0 h-[174px] w-1 rounded-[20px] bg-black/10" />
      </div>
    </div>
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
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const courses = [
    { image: imgCourseThumbVsat, rating: '4.9', title: 'Đánh giá năng lực V-SAT...' },
    { image: imgCourseThumbEnglish, rating: '4.7', title: 'Chương trình Toán - Lý - Hóa nâng cao' },
    { image: imgCourseThumbVsat, rating: '4.8', title: 'Khóa luyện thi đại học tổng hợp 5 môn' },
    { image: imgCourseThumbVsat, rating: '4.6', title: 'Luyện tập tiếng Anh chuyên sâu - IELTS' },
    { image: imgCourseThumbVsat, rating: '4.6', title: 'Luyện tập tiếng Anh chuyên sâu - IELTS' },
    { image: imgCourseThumbVsat, rating: '4.6', title: 'Luyện tập tiếng Anh chuyên sâu - IELTS' },
  ];

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
        <section className="flex flex-col gap-2 p-3">
          <div className="flex h-12 items-center rounded-[50px] bg-white p-1">
            <button className="flex min-h-10 flex-1 items-center justify-center rounded-[50px] bg-[#fef5e7] px-2 py-1 text-[14px] font-medium leading-5 text-[#f99d0d]">
              Khoá học của tôi
            </button>
            <button className="flex min-h-10 flex-1 items-center justify-center rounded-[50px] px-2 py-1 text-[14px] font-medium leading-5 text-black/50" onClick={() => navigate('/courses/all')}>
              Tất Cả
            </button>
          </div>

          <div className="flex gap-2 items-start">
            <button aria-label="Danh mục" className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-[#f99d0d] text-white active:opacity-75" onClick={() => setIsCategoryOpen((current) => !current)}>
              <FeaturedListIcon />
            </button>
            <div className="bg-white rounded-[50px] flex min-w-0 flex-1 gap-1 items-center p-2">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[14.1%_14.18%_14.26%_14.18%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.192 17.1923">
                    <path d={svgPaths.p35993800} fill="#737373" />
                  </svg>
                </div>
              </div>
              <p className="flex-1 font-normal text-[#737373] text-[14px] leading-5 truncate">Tìm kiếm khoá học</p>
            </div>
          </div>
        </section>

        {isCategoryOpen && <CategoryDropdown onClose={() => setIsCategoryOpen(false)} />}

        <section className="flex flex-col gap-2 px-3 pb-4">
          <h2 className="font-semibold leading-7 text-[20px] text-[#171717]">
            <span className="text-[#f99d0d]">6</span> khoá học của tôi
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {courses.map((course, index) => (
              <CourseCard key={`${course.title}-${index}`} {...course} onClick={() => navigate('/courses/vsat')} />
            ))}
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
