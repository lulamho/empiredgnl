import { BookOpen, ChevronLeft, ChevronRight, Headphones, ListChecks, Lock, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import imgProfileStatCourse from '../../assets/prototype/profile-stat-course.svg';
import imgProfileStatLessons from '../../assets/prototype/profile-stat-lessons.svg';
import imgProfileStatTests from '../../assets/prototype/profile-stat-tests.svg';
import imgProfileStatTime from '../../assets/prototype/profile-stat-time.svg';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

function StatusBar() {
  return (
    <div className="absolute left-0 top-0 z-30 flex h-[50px] w-full items-start pt-[21px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex min-w-px flex-1 items-center justify-center pl-4 pr-1.5">
          <p className="text-center text-[17px] font-[590] leading-[22px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] w-[124px] shrink-0" />
        <div className="flex min-w-px flex-1 items-center justify-center gap-[7px] pl-1.5 pr-4">
          <div className="relative h-[12.226px] w-[19.2px] shrink-0">
            <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" />
            </svg>
          </div>
          <div className="relative h-[12.328px] w-[17.142px] shrink-0">
            <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" />
            </svg>
          </div>
          <div className="relative h-[13px] w-[27.328px] shrink-0">
            <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
              <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
              <path d={svgPaths.p3bbd9700} fill="white" opacity="0.4" />
              <rect fill="white" height="9" rx="2.5" width="21" x="2" y="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="flex min-w-[172px] flex-1 items-start gap-2 rounded-lg bg-white p-3">
      <img alt="" className="size-10 shrink-0 object-contain" src={icon} />
      <div className="min-w-0 flex-1">
        <p className="text-[16px] font-bold leading-6 text-[#f99d0d]">{value}</p>
        <p className="text-[12px] leading-4 text-[#737373]">{label}</p>
      </div>
    </div>
  );
}

function MenuCell({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button className="flex min-h-[60px] w-full items-center gap-2 bg-white py-2 pl-3 pr-2 text-left active:bg-[#fafafa]" onClick={onClick}>
      <div className="flex size-6 shrink-0 items-center justify-center text-[#f99d0d]">{icon}</div>
      <p className="min-w-0 flex-1 text-[16px] leading-6 text-[#171717]">{label}</p>
      <ChevronRight aria-hidden="true" className="shrink-0 text-[#171717]" size={22} strokeWidth={2} />
    </button>
  );
}

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full overflow-auto bg-[#fafafa]">
      <StatusBar />

      <section className="flex flex-col items-center gap-4 bg-gradient-to-b from-[#f99d0d] to-[#fafafa]/0 pb-2 pt-[50px]">
        <div className="relative flex h-12 w-full items-center justify-center">
          <button aria-label="Quay lại" className="absolute left-2 flex size-8 items-center justify-center text-white active:opacity-70" onClick={() => navigate(-1)}>
            <ChevronLeft aria-hidden="true" size={26} strokeWidth={2} />
          </button>
          <h1 className="w-[313px] text-center text-[16px] font-semibold leading-6 text-white">Hồ sơ cá nhân</h1>
        </div>

        <img alt="" className="size-32 rounded-full object-cover" src={imgNavProfile} />

        <div className="w-full px-3 text-center">
          <p className="truncate text-[20px] font-semibold leading-7 text-[#171717]">Nguyễn Thuỳ Linh</p>
          <p className="truncate text-[14px] leading-5 text-[#525252]">thuylinh@email.com</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 px-3">
          <StatCard icon={imgProfileStatCourse} label="Khoá học" value="3" />
          <StatCard icon={imgProfileStatTime} label="Giờ học" value="2:36:48" />
          <StatCard icon={imgProfileStatLessons} label="Bài học" value="18" />
          <StatCard icon={imgProfileStatTests} label="Bài kiểm tra" value="6" />
        </div>
      </section>

      <section className="mx-3 mt-3 overflow-hidden rounded-lg pb-[48px]">
        <MenuCell icon={<BookOpen aria-hidden="true" size={22} strokeWidth={2} />} label="Khoá học của tôi" onClick={() => navigate('/profile/courses')} />
        <MenuCell icon={<ListChecks aria-hidden="true" size={22} strokeWidth={2} />} label="Bài tập, bài kiểm tra" onClick={() => navigate('/profile/tests')} />
        <MenuCell icon={<UserRound aria-hidden="true" size={22} strokeWidth={2} />} label="Thông tin cá nhân" onClick={() => navigate('/profile/info')} />
        <MenuCell icon={<Lock aria-hidden="true" size={22} strokeWidth={2} />} label="Đổi mật khẩu" onClick={() => navigate('/profile/password')} />
        <MenuCell icon={<Headphones aria-hidden="true" size={22} strokeWidth={2} />} label="Hỗ trợ" onClick={() => navigate('/profile/support')} />
      </section>

      <div className="fixed bottom-0 left-0 right-0 mx-auto flex h-[34px] max-w-[393px] items-center justify-center">
        <div className="h-[5px] w-[144px] rounded-full bg-black" />
      </div>
    </div>
  );
}
