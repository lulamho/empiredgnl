import { Bell, Calendar, ChevronLeft, ChevronRight, Clock3, Download, FileText, MoreHorizontal, Table2, Video, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import imgCourseTeacher from '../../assets/prototype/course-teacher.png';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

function StatusBar() {
  return (
    <div className="sticky bg-white flex h-[50px] items-start pt-[21px] top-0 w-full z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1 items-center justify-center min-w-px pl-4 pr-1.5">
          <p className="font-[590] leading-[22px] text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] shrink-0 w-[124px]" />
        <div className="flex flex-1 gap-[7px] items-center justify-center min-w-px pl-1.5 pr-4">
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

function WeekDay({ day, date, active = false, dot = false, selected = false, onClick }: { day: string; date: string; active?: boolean; dot?: boolean; selected?: boolean; onClick?: () => void }) {
  return (
    <button className={`flex w-9 flex-col items-center gap-0.5 ${active || selected ? 'items-start' : ''}`} onClick={onClick}>
      <span className="w-full text-center text-[12px] leading-4 text-[#525252]">{day}</span>
      <span className={`flex min-h-[42px] w-9 flex-col items-center justify-center rounded-[24px] px-2 py-1 text-[14px] font-medium leading-5 ${active ? 'bg-[#f99d0d] text-white' : selected ? 'bg-[#fef5e7] text-[#171717]' : 'text-[#171717]'}`}>
        {date}
        {dot && <span className={`mt-0.5 size-1.5 rounded-full ${active ? 'bg-white' : 'bg-[#f99d0d]'}`} />}
      </span>
    </button>
  );
}

function MonthCell({ date, active = false, blank = false, dot = false }: { date?: string; active?: boolean; blank?: boolean; dot?: boolean }) {
  return (
    <button className={`flex min-h-[42px] flex-col items-center justify-center border-b border-[#e5e5e5] px-1 py-2 text-[14px] font-medium leading-5 ${active ? 'bg-[#f99d0d] text-white' : blank ? 'text-transparent' : 'text-[#171717]'}`}>
      {!blank && (
        <>
          <span>{date}</span>
          {dot && <span className={`mt-0.5 size-1.5 rounded-full ${active ? 'bg-white' : 'bg-[#f99d0d]'}`} />}
        </>
      )}
    </button>
  );
}

function MonthCalendar() {
  const cells = [
    { blank: true }, { blank: true }, { blank: true }, { blank: true },
    { date: '1' }, { date: '2' }, { date: '3' },
    { date: '4' }, { date: '5' }, { date: '6' }, { date: '7' }, { date: '8' }, { date: '9' }, { date: '10' },
    { date: '11' }, { date: '12' }, { date: '13' }, { date: '14' }, { date: '15' }, { date: '16' }, { date: '17' },
    { date: '18' }, { date: '19' }, { date: '20' }, { date: '21' }, { date: '22', dot: true }, { date: '23', dot: true }, { date: '24', dot: true },
    { date: '25', dot: true }, { date: '26', dot: true }, { date: '27', dot: true }, { date: '28', dot: true }, { date: '29', dot: true }, { date: '30', active: true, dot: true }, { date: '31', dot: true },
  ];

  return (
    <div className="grid grid-cols-7 bg-white">
      {['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'].map((day) => (
        <div key={day} className="flex items-center justify-center px-1 py-2">
          <p className="text-center text-[12px] leading-4 text-[#525252]">{day}</p>
        </div>
      ))}
      {cells.map((cell, index) => (
        <MonthCell key={index} {...cell} />
      ))}
    </div>
  );
}

type SessionStatus = 'online' | 'offline';

type SessionDetail = {
  title: string;
  date: string;
  time: string;
  status: SessionStatus;
};

function LessonRow({ time, title, muted = false, empty = false, onClick }: { time: string; title?: string; muted?: boolean; empty?: boolean; onClick?: () => void }) {
  const isInteractive = !empty && Boolean(onClick);

  return (
    <div className="flex w-full items-start">
      <div className="flex min-h-[54px] w-[88px] shrink-0 items-center px-1 py-3">
        <p className="text-[12px] leading-4 text-[#525252]">{time}</p>
      </div>
      <button className={`flex min-h-[54px] flex-1 flex-col justify-center border-t px-1 py-3 text-left ${isInteractive ? 'active:bg-[#bdd8fa]' : 'cursor-default'} ${empty ? 'border-[#e5e5e5] bg-white' : muted ? 'border-[#171717] bg-[#f5f5f5]' : 'border-[#1e69f3] bg-[#e8f0fe]'}`} disabled={!isInteractive} onClick={onClick}>
        {!empty && (
          <>
            <p className={`text-[12px] font-semibold leading-4 text-[#171717] ${muted ? 'line-through' : ''}`}>{title}</p>
            <p className={`text-[11px] leading-[14px] text-[#525252] ${muted ? 'line-through' : ''}`}>Hỗ trợ học viên</p>
          </>
        )}
      </button>
    </div>
  );
}

function DetailItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-3 py-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fef5e7] text-[#f99d0d]">
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-[12px] leading-4 text-[#737373]">{label}</p>
        {children}
      </div>
    </div>
  );
}

function SessionDetailSheet({ session, onClose }: { session: SessionDetail; onClose: () => void }) {
  const isOnline = session.status === 'online';

  return (
    <div className="fixed inset-0 left-0 right-0 z-[70] mx-auto max-w-[393px]">
      <button aria-label="Đóng chi tiết buổi học" className="absolute inset-0 bg-black/20" onClick={onClose} />
      <section className="absolute bottom-0 left-0 right-0 max-h-[86%] overflow-auto rounded-t-3xl bg-[#fafafa] pb-[104px] pt-3">
        <div className="h-10 px-2">
          <button aria-label="Đóng" className="flex size-8 items-center justify-center rounded-full bg-black/50 text-white active:opacity-75" onClick={onClose}>
            <X aria-hidden="true" size={22} strokeWidth={2} />
          </button>
        </div>
        <div className="px-8 py-1">
          <h2 className="text-[16px] font-semibold leading-6 text-[#171717]">{session.title}</h2>
        </div>
        <div className="px-4">
          <div className="rounded-lg bg-white px-4">
            <DetailItem icon={<Calendar aria-hidden="true" size={20} strokeWidth={2} />} label="Ngày">
              <p className="text-[14px] font-medium leading-5 text-[#171717]">{session.date}</p>
            </DetailItem>
            <DetailItem icon={<Clock3 aria-hidden="true" size={20} strokeWidth={2} />} label="Thời gian">
              <p className="text-[14px] font-medium leading-5 text-[#171717]">{session.time}</p>
            </DetailItem>
            <DetailItem icon={<FileText aria-hidden="true" size={20} strokeWidth={2} />} label="Tài liệu">
              <div className="flex w-full items-center gap-2 rounded border border-[#e5e5e5] p-1">
                <div className="flex size-[30px] shrink-0 items-center justify-center rounded-[2px] bg-[#e8f0fe] text-[#1e69f3]">
                  <FileText aria-hidden="true" size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium leading-4 text-black">Filename.pdf</p>
                  <p className="text-[11px] leading-[14px] text-[#525252]">2 MB</p>
                </div>
                <button className="flex shrink-0 items-center gap-1 rounded px-2 py-1 text-[#f99d0d] active:bg-[#fff3df]">
                  <span className="text-[14px] font-semibold leading-5">Tải xuống</span>
                  <Download aria-hidden="true" size={18} strokeWidth={2} />
                </button>
              </div>
            </DetailItem>
            <DetailItem icon={<Video aria-hidden="true" size={20} strokeWidth={2} />} label="Lớp học">
              <div className="flex items-center gap-2">
                <p className="min-w-0 flex-1 text-[14px] font-medium leading-5 text-[#171717]">Empire Live Chat</p>
                <span className={`inline-flex items-center gap-1 rounded-[20px] px-2 py-1 text-[12px] font-medium leading-4 ${isOnline ? 'bg-[#eaf8f1] text-[#32b670]' : 'bg-[#f5f5f5] text-[#737373]'}`}>
                  <span className={`size-2 rounded-full ${isOnline ? 'bg-[#32b670]' : 'bg-[#a3a3a3]'}`} />
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </DetailItem>
            <div className="flex w-full items-center gap-3 py-3">
              <img alt="" className="size-10 shrink-0 rounded-full object-cover" src={imgCourseTeacher} />
              <div className="min-w-0 flex-1">
                <p className="text-[12px] leading-4 text-[#737373]">Giáo viên</p>
                <p className="text-[14px] font-medium leading-5 text-[#171717]">Thầy Tus</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[34px] left-0 right-0 flex gap-3 border-t border-[#e5e5e5] bg-white p-2">
          <button className="flex flex-1 items-center justify-center rounded-xl p-3 text-[#f99d0d] active:bg-[#fff3df]">
            <span className="text-[16px] font-semibold leading-6">Xem bài giảng</span>
          </button>
          <button className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-6 py-3 text-white ${isOnline ? 'bg-[#f99d0d] active:opacity-80' : 'bg-[#a3a3a3]'}`} disabled={!isOnline}>
            <span className="text-[16px] font-semibold leading-6">{isOnline ? 'Vào lớp' : 'Kết thúc'}</span>
            {isOnline && <ChevronRight aria-hidden="true" size={22} strokeWidth={2} />}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex h-[34px] items-center justify-center bg-white">
          <div className="h-[5px] w-[144px] rounded-full bg-black" />
        </div>
      </section>
    </div>
  );
}

function BottomTab({ active, icon, label, onClick }: { active?: boolean; icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button className={`flex flex-1 flex-col items-center gap-0.5 rounded-[50px] px-0.5 py-1 active:opacity-60 ${active ? 'bg-[#fef5e7]' : ''}`} onClick={onClick}>
      <div className={`flex size-6 items-center justify-center ${active ? 'text-[#f99d0d]' : 'text-black/50'}`}>{icon}</div>
      <p className={`text-[10px] font-medium leading-3 ${active ? 'text-[#f99d0d]' : 'text-black/50'}`}>{label}</p>
    </button>
  );
}

function CommunityTabIcon() {
  return (
    <svg aria-hidden="true" className="h-[18.154px] w-[18.616px]" fill="none" viewBox="0 0 18.6155 18.1538">
      <path d="M18.6155 18.1538L15.077 14.6152H5.30775C4.82125 14.6152 4.40475 14.442 4.05825 14.0955C3.71175 13.7492 3.5385 13.3327 3.5385 12.846V12.2308H14.4233C14.9203 12.2308 15.3457 12.0537 15.6997 11.6997C16.0537 11.3457 16.2307 10.9202 16.2307 10.423V3.5H16.8462C17.3327 3.5 17.7493 3.67325 18.0958 4.01975C18.4423 4.36625 18.6155 4.78275 18.6155 5.26925V18.1538ZM1.5 10.1463L2.9155 8.73075H12.4233C12.5129 8.73075 12.5866 8.70192 12.6443 8.64425C12.7019 8.58658 12.7307 8.51283 12.7307 8.423V1.80775C12.7307 1.71792 12.7019 1.64417 12.6443 1.5865C12.5866 1.52883 12.5129 1.5 12.4233 1.5H1.80775C1.71808 1.5 1.64433 1.52883 1.5865 1.5865C1.52883 1.64417 1.5 1.71792 1.5 1.80775V10.1463ZM0 13.7693V1.80775C0 1.31058 0.177 0.885 0.531 0.531C0.885 0.177 1.31058 0 1.80775 0H12.4233C12.9202 0 13.3457 0.177 13.6997 0.531C14.0537 0.885 14.2307 1.31058 14.2307 1.80775V8.423C14.2307 8.92017 14.0537 9.34575 13.6997 9.69975C13.3457 10.0537 12.9202 10.2308 12.4233 10.2308H3.5385L0 13.7693Z" fill="currentColor" />
    </svg>
  );
}

function CourseTabIcon() {
  return (
    <svg aria-hidden="true" className="h-[16.885px] w-[21px]" fill="none" viewBox="0 0 21 16.8845">
      <path d="M9.75 14.6848V4.85375C9.0475 4.39608 8.28725 4.05283 7.46925 3.824C6.65125 3.59517 5.82817 3.48075 5 3.48075C4.4 3.48075 3.83942 3.52783 3.31825 3.622C2.79708 3.71633 2.2615 3.8705 1.7115 4.0845C1.63467 4.11017 1.58017 4.14708 1.548 4.19525C1.516 4.24325 1.5 4.29608 1.5 4.35375V13.8115C1.5 13.9013 1.53208 13.9671 1.59625 14.0087C1.66025 14.0504 1.73075 14.0552 1.80775 14.023C2.28208 13.8615 2.78267 13.7372 3.3095 13.65C3.8365 13.5628 4.4 13.5193 5 13.5193C5.82817 13.5193 6.63392 13.6132 7.41725 13.801C8.20058 13.9888 8.97817 14.2834 9.75 14.6848ZM10.5 16.8845C9.69367 16.2897 8.82383 15.8301 7.8905 15.5057C6.95717 15.1814 5.99367 15.0193 5 15.0193C4.38983 15.0193 3.7905 15.0868 3.202 15.222C2.6135 15.3573 2.04617 15.5564 1.5 15.8193C1.14367 15.9833 0.804583 15.9573 0.48275 15.7413C0.160917 15.5253 0 15.2192 0 14.823V3.9655C0 3.75 0.0555001 3.54775 0.1665 3.35875C0.277333 3.16958 0.43725 3.03333 0.64625 2.95C1.32308 2.6205 2.0285 2.37658 2.7625 2.21825C3.4965 2.05992 4.24233 1.98075 5 1.98075C6.16283 1.98075 7.17275 2.12083 8.02975 2.401C8.88675 2.68117 9.78642 3.10325 10.7288 3.66725C10.8993 3.76092 11.0288 3.87758 11.1173 4.01725C11.2058 4.15708 11.25 4.32892 11.25 4.53275V14.6848C12.0218 14.2834 12.7994 13.9888 13.5828 13.801C14.3661 13.6132 15.1718 13.5193 16 13.5193C16.6 13.5193 17.1635 13.5628 17.6905 13.65C18.2173 13.7372 18.7179 13.8615 19.1923 14.023C19.2693 14.0552 19.3398 14.0504 19.4038 14.0087C19.4679 13.9671 19.5 13.9013 19.5 13.8115V2.58475C19.6538 2.63592 19.8051 2.69233 19.9538 2.754C20.1026 2.8155 20.2488 2.88725 20.3923 2.96925C20.5948 3.05892 20.7467 3.19517 20.848 3.378C20.9493 3.56067 21 3.7565 21 3.9655V14.823C21 15.2192 20.8327 15.5221 20.498 15.7318C20.1633 15.9413 19.8114 15.964 19.4423 15.8C18.9026 15.5435 18.3433 15.3493 17.7645 15.2173C17.1857 15.0853 16.5975 15.0193 16 15.0193C15.0063 15.0193 14.0428 15.1814 13.1095 15.5057C12.1762 15.8301 11.3063 16.2897 10.5 16.8845ZM13.8462 11.5V1L16.9038 0V10.5L13.8462 11.5Z" fill="currentColor" />
    </svg>
  );
}

function ScheduleTabIcon() {
  return (
    <svg aria-hidden="true" className="h-[19.115px] w-[17px]" fill="none" viewBox="0 0 17 19.1152">
      <path d={svgPaths.p19883580} fill="currentColor" />
    </svg>
  );
}

function LiveTabIcon() {
  return (
    <svg aria-hidden="true" className="h-[15px] w-[18.519px]" fill="none" viewBox="0 0 18.519 15">
      <path d={svgPaths.p2171e100} fill="currentColor" />
    </svg>
  );
}

export default function ScheduleScreen() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [selectedWeekDate, setSelectedWeekDate] = useState('30');
  const [sessionDetail, setSessionDetail] = useState<SessionDetail | null>(null);
  const isPreviousDay = viewMode === 'week' && selectedWeekDate === '28';
  const selectedDateLabel = selectedWeekDate === '28' ? 'Thứ Năm, 28/5/2026' : 'Thứ Bảy, 30/5/2026';
  const openSessionDetail = (title: string, time: string, status: SessionStatus) => {
    setSessionDetail({
      title,
      time,
      date: selectedDateLabel,
      status,
    });
  };

  return (
    <div className="bg-[#f5f5f5] overflow-auto relative size-full">
      <StatusBar />

      <div className="sticky top-[50px] z-40 bg-white h-12 flex items-center justify-between px-2">
        <button className="size-8 active:opacity-60" onClick={() => navigate('/profile')}>
          <img alt="" className="size-full rounded-full object-cover" src={imgNavProfile} />
        </button>
        <h1 className="font-semibold leading-6 text-[16px] text-[#171717]">Thời khoá biểu</h1>
        <button aria-label="Thông báo" className="flex size-8 items-center justify-center active:opacity-60">
          <Bell aria-hidden="true" size={22} strokeWidth={2} />
        </button>
      </div>

      <main className="pb-[96px]">
        <section className="bg-white px-3 py-1">
          <div className="flex items-center gap-0">
            <button className={`flex min-h-10 flex-1 items-center justify-center gap-0.5 rounded-[50px] p-2 ${viewMode === 'week' ? 'bg-[#fef5e7] text-[#f99d0d]' : 'text-black/50'}`} onClick={() => setViewMode('week')}>
              <Table2 aria-hidden="true" size={20} strokeWidth={2} />
              <span className="text-[14px] font-medium leading-5">Tuần</span>
            </button>
            <button className={`flex min-h-10 flex-1 items-center justify-center gap-0.5 rounded-[50px] p-2 ${viewMode === 'month' ? 'bg-[#fef5e7] text-[#f99d0d]' : 'text-black/50'}`} onClick={() => setViewMode('month')}>
              <Calendar aria-hidden="true" size={20} strokeWidth={2} />
              <span className="text-[14px] font-medium leading-5">Tháng</span>
            </button>
          </div>
        </section>

        <section className="bg-white">
          <div className="flex items-center gap-2 px-3 py-1">
            <h2 className="flex-1 font-semibold leading-6 text-[16px] text-[#171717]">Tháng 5</h2>
            <div className="flex gap-2 rounded-[50px] bg-[#f5f5f5] p-1">
              <button aria-label="Tuần trước" className="flex items-center justify-center rounded-full bg-white px-2 py-1 active:opacity-60">
                <ChevronLeft aria-hidden="true" size={16} strokeWidth={2} />
              </button>
              <button aria-label="Tuần sau" className="flex items-center justify-center rounded-full bg-white px-2 py-1 active:opacity-60">
                <ChevronRight aria-hidden="true" size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
          {viewMode === 'week' ? (
            <div className="flex items-center justify-between px-3 py-2">
              <WeekDay day="Hai" date="25" />
              <WeekDay day="Ba" date="26" />
              <WeekDay day="Tư" date="27" dot />
              <WeekDay day="Năm" date="28" selected={selectedWeekDate === '28'} dot onClick={() => setSelectedWeekDate('28')} />
              <WeekDay day="Sáu" date="29" dot />
              <WeekDay day="Bảy" date="30" active={selectedWeekDate === '30'} dot onClick={() => setSelectedWeekDate('30')} />
              <WeekDay day="CN" date="1" />
            </div>
          ) : (
            <MonthCalendar />
          )}
        </section>

        <section className={`${viewMode === 'week' ? 'mt-3' : 'mt-1'} bg-white px-3`}>
          <LessonRow time="8:00 - 9:30" title="Buổi 1" muted={isPreviousDay} onClick={() => openSessionDetail('Buổi 1', '8:00 - 9:30', isPreviousDay ? 'offline' : 'online')} />
          <LessonRow time="11:00 - 12:00" title="Buổi 2" muted onClick={() => openSessionDetail('Buổi 2', '11:00 - 12:00', 'offline')} />
          <LessonRow time="12:00 - 13:00" title="Buổi 3" muted={isPreviousDay} onClick={() => openSessionDetail('Buổi 3', '12:00 - 13:00', isPreviousDay ? 'offline' : 'online')} />
          <LessonRow time="13:00 - 14:00" title="Buổi 4" muted={isPreviousDay} onClick={() => openSessionDetail('Buổi 4', '13:00 - 14:00', isPreviousDay ? 'offline' : 'online')} />
          <LessonRow time="14:00 - 15:00" empty />
          <LessonRow time="15:00 - 16:00" empty />
          <LessonRow time="16:00 - 17:00" empty />
          <LessonRow time="17:00 - 18:00" empty />
        </section>
      </main>

      <div className="fixed bottom-[34px] left-0 right-0 mx-auto flex h-[54px] max-w-[393px] items-center border-t border-[#e5e5e5] bg-white p-1 z-50">
        <BottomTab icon={<CommunityTabIcon />} label="Cộng đồng" onClick={() => navigate('/')} />
        <BottomTab icon={<CourseTabIcon />} label="Khoá học" onClick={() => navigate('/courses')} />
        <BottomTab active icon={<ScheduleTabIcon />} label="TKB" />
        <BottomTab icon={<LiveTabIcon />} label="Live" onClick={() => navigate('/live')} />
        <BottomTab icon={<MoreHorizontal aria-hidden="true" size={22} strokeWidth={2} />} label="Khác" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto flex h-[34px] max-w-[393px] items-center justify-center bg-white">
        <div className="h-[5px] w-[144px] rounded-full bg-black" />
      </div>
      {sessionDetail && <SessionDetailSheet session={sessionDetail} onClose={() => setSessionDetail(null)} />}
    </div>
  );
}
