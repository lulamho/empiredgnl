import { useNavigate } from 'react-router';
import imgCourseTeam from '../../assets/prototype/live-detail-team.png';
import imgCourseThumb from '../../assets/prototype/course-thumb-vsat.png';
import imgFlame from '../../assets/prototype/course-flame.svg';
import imgStar from '../../assets/prototype/course-star.svg';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

type CourseListItemProps = {
  hot?: boolean;
  price: string;
  rating: string;
  teacher?: string;
  title: string;
};

const allCourses = [
  { title: 'Đánh giá năng lực V-SAT', price: '1.250.000đ', rating: '4.9' },
  { title: 'Khóa học Toán - Lý - Hóa nâng cao', price: '1.500.000đ', rating: '4.8', hot: true },
  { title: 'Luyện thi Đại học môn Văn - Anh', price: '1.100.000đ', rating: '4.7' },
  { title: 'Chuẩn bị kiến thức Tiểu học toàn diện', price: '900.000đ', rating: '4.6', hot: true },
  { title: 'Chuẩn bị kiến thức Tiểu học toàn diện', price: '900.000đ', rating: '4.6' },
  { title: 'Chương trình phát triển kỹ năng mềm cho học sinh THCS', price: '1.200.000đ', rating: '4.9', teacher: 'Future Leaders' },
];

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

function BackNav({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="sticky bg-white h-[48px] left-0 top-[50px] w-full z-40 flex items-center justify-center">
      <button aria-label="Quay lại" className="absolute left-2 p-1 active:opacity-50" onClick={() => navigate('/courses')}>
        <div className="overflow-clip relative size-[24px]">
          <div className="absolute inset-[9.78%_27.42%_9.78%_26.44%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.073 19.3075">
              <path d="M9.65375 19.3075L0 9.65375L9.65375 0L11.073 1.41925L2.8383 9.65375L11.073 17.8883L9.65375 19.3075Z" fill="#171717" />
            </svg>
          </div>
        </div>
      </button>
      <p className="font-semibold leading-6 text-[16px] text-[#171717] text-center w-[313px]">{title}</p>
    </div>
  );
}

function CourseListItem({ hot = false, price, rating, teacher = 'Empire Team', title }: CourseListItemProps) {
  return (
    <div className="border-b border-[#e5e5e5] flex items-start gap-0 overflow-hidden py-2">
      <div className="overflow-hidden rounded size-[88px] shrink-0">
        <img alt="" className="size-full object-cover" src={imgCourseThumb} />
      </div>
      <div className="flex flex-1 flex-col gap-2 min-w-0 p-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center min-w-0">
            <img alt="" className="size-[24px] rounded-full shrink-0 object-cover" src={imgCourseTeam} />
            <p className="flex-1 min-w-0 text-[14px] leading-5 text-[#525252] truncate">{teacher}</p>
          </div>
          <div className="flex flex-col gap-0.5 text-[16px] leading-6">
            <p className="font-semibold text-[#171717] line-clamp-2">{title}</p>
            <p className="font-bold text-[#f99d0d] whitespace-nowrap">{price}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center h-6">
          <div className="border border-[#e5e5e5] flex gap-0.5 items-center rounded-[20px] px-2 py-1">
            <img alt="" className="size-4" src={imgStar} />
            <span className="font-medium text-[12px] leading-4 text-black">{rating}</span>
          </div>
          {hot && (
            <div className="bg-[#db3e2c] flex gap-0.5 items-center rounded-[50px] px-2 py-1">
              <img alt="" className="size-4" src={imgFlame} />
              <span className="font-semibold text-[12px] leading-4 text-white">Hot</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto flex items-center justify-center bg-white">
      <div className="bg-black h-[5px] rounded-full w-[144px]" />
    </div>
  );
}

export function AllCoursesScreen() {
  return (
    <div className="bg-white overflow-auto relative size-full">
      <StatusBar />
      <BackNav title="Tất cả khóa học" />
      <main className="flex flex-col px-3 pb-[46px] pt-3">
        {allCourses.map((course, index) => (
          <CourseListItem key={`${course.title}-${index}`} {...course} />
        ))}
      </main>
      <HomeIndicator />
    </div>
  );
}

export function MyCoursesScreen() {
  return (
    <div className="bg-white overflow-auto relative size-full">
      <StatusBar />
      <BackNav title="Luyện thi đánh giá năng lực" />
      <div className="sticky top-[98px] z-30 border-b border-[#e5e5e5] bg-white flex">
        {['V-ACT', 'HSA', 'TSA'].map((tab, index) => (
          <button key={tab} className={`min-h-10 px-5 py-2 text-[14px] leading-5 font-medium ${index === 0 ? 'border-b-2 border-[#f99d0d] text-[#f99d0d]' : 'text-black/50'}`}>
            {tab}
          </button>
        ))}
      </div>
      <main className="flex flex-col px-3 pb-[46px] pt-3">
        {allCourses.map((course, index) => (
          <CourseListItem key={`${course.title}-${index}`} {...course} />
        ))}
      </main>
      <HomeIndicator />
    </div>
  );
}
