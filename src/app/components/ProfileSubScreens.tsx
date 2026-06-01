import { BookOpen, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, Eye, Facebook, Mail, Phone, Timer, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgCourseTeam from '../../assets/prototype/live-detail-team.png';
import imgCourseThumb from '../../assets/prototype/course-thumb-vsat.png';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import imgStar from '../../assets/prototype/course-star.svg';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

function StatusBar() {
  return (
    <div className="sticky left-0 top-0 z-50 flex h-[50px] w-full flex-col items-start bg-white pt-[21px]">
      <div className="flex w-full items-center justify-between">
        <div className="min-w-px flex-1">
          <div className="flex size-full items-center justify-center pl-4 pr-1.5">
            <p className="whitespace-nowrap text-center text-[17px] font-[590] leading-[22px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
          </div>
        </div>
        <div className="h-[10px] w-[124px] shrink-0" />
        <div className="min-w-px flex-1">
          <div className="flex size-full items-center justify-center gap-[7px] pl-1.5 pr-4">
            <div className="relative h-[12.226px] w-[19.2px] shrink-0">
              <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="black" fillRule="evenodd" />
              </svg>
            </div>
            <div className="relative h-[12.328px] w-[17.142px] shrink-0">
              <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="black" fillRule="evenodd" />
              </svg>
            </div>
            <div className="relative h-[13px] w-[27.328px] shrink-0">
              <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
                <path d={svgPaths.p3bbd9700} fill="black" opacity="0.4" />
                <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
              </svg>
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
    <div className="sticky left-0 top-[50px] z-40 flex h-[48px] w-full items-center justify-center bg-white">
      <button aria-label="Quay lại" className="absolute left-2 flex size-8 items-center justify-center active:opacity-50" onClick={() => navigate(-1)}>
        <ChevronLeft aria-hidden="true" size={28} strokeWidth={2} />
      </button>
      <p className="w-[313px] text-center text-[16px] font-semibold leading-6 text-[#171717]">{title}</p>
    </div>
  );
}

function HomeIndicator({ white = true }: { white?: boolean }) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 mx-auto flex h-[34px] max-w-[393px] items-center justify-center ${white ? 'bg-white' : 'bg-[#fafafa]'}`}>
      <div className="h-[5px] w-[144px] rounded-full bg-black" />
    </div>
  );
}

function Shell({ children, title, white = true }: { children: React.ReactNode; title: string; white?: boolean }) {
  return (
    <div className={`relative size-full overflow-auto ${white ? 'bg-white' : 'bg-[#fafafa]'}`}>
      <StatusBar />
      <BackNav title={title} />
      {children}
      <HomeIndicator white={white} />
    </div>
  );
}

const profileCourses = [
  { title: 'Đánh giá năng lực V-SAT', rating: '4.9', teacher: 'Empire Team' },
  { title: 'Khóa học Toán - Lý - Hóa nâng cao', rating: '4.8', teacher: 'Empire Team' },
  { title: 'Luyện thi Đại học môn Văn - Anh', rating: '4.7', teacher: 'Empire Team' },
  { title: 'Chuẩn bị kiến thức Tiểu học toàn diện', rating: '4.6', teacher: 'Empire Team' },
  { title: 'Chuẩn bị kiến thức Tiểu học toàn diện', rating: '4.6', teacher: 'Empire Team' },
  { title: 'Chương trình phát triển kỹ năng mềm cho học sinh THCS', rating: '4.9', teacher: 'Future Leaders' },
];

function ProfileCourseRow({ rating, teacher, title }: { rating: string; teacher: string; title: string }) {
  return (
    <button className="flex w-full items-start gap-0 border-b border-[#e5e5e5] py-2 text-left active:bg-[#fafafa]">
      <img alt="" className="size-[88px] shrink-0 rounded object-cover" src={imgCourseThumb} />
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-2">
        <div className="flex min-w-0 items-center gap-1">
          <img alt="" className="size-6 shrink-0 rounded-full object-cover" src={imgCourseTeam} />
          <p className="min-w-0 flex-1 truncate text-[14px] leading-5 text-[#525252]">{teacher}</p>
        </div>
        <p className="line-clamp-2 text-[16px] font-semibold leading-6 text-[#171717]">{title}</p>
        <div className="flex w-fit items-center gap-0.5 rounded-[20px] border border-[#e5e5e5] px-2 py-1">
          <img alt="" className="size-4" src={imgStar} />
          <span className="text-[12px] font-medium leading-4 text-black">{rating}</span>
        </div>
      </div>
    </button>
  );
}

export function ProfileCoursesScreen() {
  return (
    <Shell title="Khoá học của tôi">
      <main className="flex flex-col px-3 pb-[46px] pt-3">
        <h2 className="mb-2 text-[20px] font-semibold leading-7 text-[#171717]"><span className="text-[#f99d0d]">18</span> khoá học</h2>
        {profileCourses.map((course, index) => (
          <ProfileCourseRow key={`${course.title}-${index}`} {...course} />
        ))}
      </main>
    </Shell>
  );
}

const profileTests = [
  { action: 'Làm ngay', questions: '124 câu', status: 'Chưa làm', statusClass: 'bg-[#f5f5f5] text-[#525252]', time: '195 phút', title: 'Đánh giá năng lực V-SAT' },
  { action: 'Tiếp tục', questions: '80 câu', status: 'Đang diễn ra', statusClass: 'bg-[#e8f0fe] text-[#1e69f3]', time: '120 phút', title: 'Thực hành kỹ năng lập trình' },
  { action: 'Xem kết quả', questions: '60 câu', status: 'Hoàn thành', statusClass: 'bg-[#eaf8f1] text-[#32b670]', time: '90 phút', title: 'Kiểm tra kiến thức cơ bản' },
  { action: 'Làm ngay', questions: '50 câu', status: 'Chưa làm', statusClass: 'bg-[#f5f5f5] text-[#525252]', time: '75 phút', title: 'Bài tập thực tế về mạng máy tính' },
  { action: 'Xem kết quả', questions: '40 câu', status: 'Hoàn thành', statusClass: 'bg-[#eaf8f1] text-[#32b670]', time: '60 phút', title: 'Đánh giá kỹ năng mềm' },
  { action: 'Xem kết quả', questions: '40 câu', status: 'Hoàn thành', statusClass: 'bg-[#eaf8f1] text-[#32b670]', time: '60 phút', title: 'Đánh giá kỹ năng mềm' },
];

function ProfileTestRow({ action, questions, status, statusClass, time, title }: (typeof profileTests)[number]) {
  return (
    <div className="flex w-full items-start gap-0 border-b border-[#e5e5e5] py-2">
      <img alt="" className="size-[88px] shrink-0 rounded object-cover" src={imgCourseThumb} />
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2 p-2">
        <div className={`rounded-full px-2 py-1 text-[12px] font-medium leading-4 ${statusClass}`}>{status}</div>
        <p className="line-clamp-2 text-[16px] font-semibold leading-6 text-[#171717]">{title}</p>
        <div className="flex items-center gap-2 text-[12px] leading-4 text-[#525252]">
          <span className="flex items-center gap-0.5"><Check size={14} strokeWidth={2} className="text-[#f99d0d]" />{questions}</span>
          <span className="flex items-center gap-0.5"><Timer size={15} strokeWidth={2} className="text-[#f99d0d]" />{time}</span>
        </div>
        <button className="flex min-h-8 items-center gap-1 rounded bg-[#f99d0d] px-2 py-1 text-[14px] font-semibold leading-5 text-white active:opacity-80">
          {action}
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export function ProfileTestsScreen() {
  return (
    <Shell title="Bài tập, bài kiểm tra">
      <main className="flex flex-col px-3 pb-[46px] pt-3">
        <h2 className="mb-2 text-[20px] font-semibold leading-7 text-[#171717]"><span className="text-[#f99d0d]">6</span> bài kiểm tra</h2>
        {profileTests.map((test, index) => (
          <ProfileTestRow key={`${test.title}-${index}`} {...test} />
        ))}
      </main>
    </Shell>
  );
}

function InputBlock({ children, label, tall = false }: { children: React.ReactNode; label: string; tall?: boolean }) {
  return (
    <label className="flex w-full flex-col">
      <span className="px-3 py-0.5 text-[14px] font-semibold leading-5 text-[#171717]">{label}</span>
      <div className={`flex w-full items-center gap-1 rounded border border-[#d4d4d4] px-3 py-3 text-[16px] leading-6 ${tall ? 'min-h-[126px] items-start' : 'min-h-[46px]'}`}>
        {children}
      </div>
    </label>
  );
}

export function ProfileInfoScreen() {
  return (
    <Shell title="Thông tin cá nhân" white={false}>
      <main className="pb-[46px]">
        <section className="flex items-center gap-3 px-4 py-4">
          <img alt="" className="size-20 shrink-0 rounded-full object-cover" src={imgNavProfile} />
          <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
            <button className="rounded-lg bg-[#f99d0d] px-2 py-1 text-[14px] font-semibold leading-5 text-white">Đổi ảnh đại diện</button>
            <p className="text-[11px] leading-[14px] text-[#737373]">JPG, PNG, WEBP — tối đa 5MB.</p>
          </div>
        </section>
        <section className="px-4 pb-2">
          <p className="truncate text-[20px] font-semibold leading-7 text-[#171717]">Nguyễn Thuỳ Linh</p>
          <p className="truncate text-[14px] leading-5 text-[#525252]">thuylinh@email.com</p>
        </section>
        <section className="flex flex-col gap-4 bg-white px-4 py-2">
          <InputBlock label="Họ và tên"><span>Nguyễn Thuỳ Linh</span></InputBlock>
          <InputBlock label="Email"><span>thuylinh@email.com</span></InputBlock>
          <InputBlock label="Ngày sinh"><span className="flex-1">1/2/2009</span><CalendarDays size={22} /></InputBlock>
          <div className="flex w-full flex-col">
            <p className="px-3 py-0.5 text-[14px] font-semibold leading-5 text-[#171717]">Giới tính</p>
            <div className="flex px-3 py-2">
              <span className="flex flex-1 items-center gap-1 text-[14px] leading-5"><span className="size-5 rounded-full border border-black" />Nam</span>
              <span className="flex flex-1 items-center gap-1 text-[14px] leading-5"><span className="flex size-5 items-center justify-center rounded-full border-2 border-[#f99d0d]"><span className="size-2.5 rounded-full bg-[#f99d0d]" /></span>Nữ</span>
            </div>
          </div>
          <InputBlock label="Tỉnh/ Thành phố"><span className="flex-1">Hồ Chí Minh</span><ChevronDown size={22} /></InputBlock>
          <InputBlock label="Facebook"><span>facebook.com/thuylinh2k9</span></InputBlock>
          <InputBlock label="Trường học"><span>THCS Hồng Bàng</span></InputBlock>
          <InputBlock label="Giới thiệu bản thân" tall><span className="text-[#737373]">Viết vài dòng giới thiệu bản thân</span></InputBlock>
        </section>
      </main>
    </Shell>
  );
}

function PasswordInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <InputBlock label={label}>
      <span className="min-w-0 flex-1 text-[#737373]">{placeholder}</span>
      <Eye size={22} strokeWidth={2} />
    </InputBlock>
  );
}

export function ProfilePasswordScreen() {
  return (
    <Shell title="Đổi mật khẩu" white={false}>
      <main className="pb-[118px]">
        <section className="flex flex-col gap-4 bg-white px-4 py-2">
          <PasswordInput label="Mật khẩu cũ" placeholder="Nhập mật khẩu cũ" />
          <PasswordInput label="Nhập mật khẩu mới" placeholder="Nhập mật khẩu mới" />
          <PasswordInput label="Nhập lại mật khẩu mới" placeholder="Nhập mật khẩu cũ" />
        </section>
        <section className="px-4 py-2 text-[12px] leading-4">
          <p className="font-semibold text-[#171717]">Yêu cầu mật khẩu mới:</p>
          <ul className="ml-[18px] list-disc text-[#525252]">
            <li>Ít nhất 6 ký tự</li>
            <li>Ít nhất 1 chữ hoa</li>
            <li>Ít nhất 1 chữ thường</li>
            <li>Ít nhất 1 số</li>
            <li>Ít nhất 1 ký tự đặc biệt</li>
          </ul>
        </section>
      </main>
      <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-white p-2">
        <button className="min-h-12 w-full rounded-2xl bg-[#fbbd5d] px-6 py-3 text-[16px] font-semibold leading-6 text-white opacity-50">Cập nhật mật khẩu</button>
      </div>
    </Shell>
  );
}

function SupportCell({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <button className="flex min-h-[60px] w-full items-center gap-2 bg-white py-2 pl-3 pr-2 text-left active:bg-[#fafafa]">
      <div className="flex size-6 shrink-0 items-center justify-center text-[#f99d0d]">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] leading-5 text-[#737373]">{label}</p>
        <p className="truncate text-[16px] leading-6 text-[#171717]">{value}</p>
      </div>
      <ChevronRight size={22} strokeWidth={2} />
    </button>
  );
}

export function ProfileSupportScreen() {
  return (
    <Shell title="Hỗ trợ" white={false}>
      <main className="px-4 pt-4">
        <section className="overflow-hidden rounded-lg">
          <SupportCell icon={<Mail size={22} strokeWidth={2} />} label="Email" value="dgnlempire01@gmail.com" />
          <SupportCell icon={<Phone size={22} strokeWidth={2} />} label="Hotline" value="098 858 5856" />
          <SupportCell icon={<Facebook className="text-[#1877f2]" size={24} strokeWidth={0} fill="currentColor" />} label="Facebook" value="facebook.com/empiredgnl" />
        </section>
      </main>
    </Shell>
  );
}
