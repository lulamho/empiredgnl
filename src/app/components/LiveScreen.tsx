import { Bell, Calendar, ChevronRight, MoreHorizontal, Video } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgNavProfile from '../../assets/prototype/nav-profile.png';
import imgLiveEnglish from '../../assets/prototype/live-thumb-english.png';
import imgLiveLiterature from '../../assets/prototype/live-thumb-literature.png';
import imgLiveMath from '../../assets/prototype/live-thumb-math.png';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

function StatusBar() {
  return (
    <div className="sticky top-0 z-50 flex h-[50px] w-full items-start bg-white pt-[21px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex min-w-px flex-1 items-center justify-center pl-4 pr-1.5">
          <p className="text-center text-[17px] font-[590] leading-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] w-[124px] shrink-0" />
        <div className="flex min-w-px flex-1 items-center justify-center gap-[7px] pl-1.5 pr-4">
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
  );
}

function BottomTab({ active, icon, label, onClick }: { active?: boolean; icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button className={`flex flex-1 flex-col items-center gap-0.5 rounded-[50px] px-0.5 py-1 active:opacity-60 ${active ? 'bg-[#fef5e7]' : ''}`} onClick={onClick}>
      <div className={`flex size-6 items-center justify-center ${active ? 'text-[#f99d0d]' : 'text-black/50'}`}>{icon}</div>
      <p className={`text-center text-[10px] font-medium leading-3 ${active ? 'text-[#f99d0d]' : 'text-black/50'}`}>{label}</p>
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

type LiveItemProps = {
  image: string;
  title: string;
  status: 'live' | 'soon' | 'ended';
};

function LiveItem({ image, title, status, onClick }: LiveItemProps & { onClick?: () => void }) {
  const statusClass = {
    live: 'bg-[#e61e39] text-white gap-1',
    soon: 'bg-[#fcecf8] text-[#e53ebe]',
    ended: 'bg-[#f5f5f5] text-[#525252]',
  }[status];
  const statusText = {
    live: 'Trực tiếp',
    soon: '30 phút nữa',
    ended: 'Đã kết thúc',
  }[status];

  return (
    <button className="flex w-full items-center gap-3 rounded bg-white p-2 text-left active:opacity-75" onClick={onClick}>
      <img alt="" className="size-[72px] shrink-0 rounded-sm object-cover" src={image} />
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
        <div className="flex w-full flex-col gap-1">
          <p className="w-full truncate text-[14px] font-semibold leading-5 text-[#171717]">{title}</p>
          <p className="truncate text-[12px] leading-4 text-[#525252]">Empire Team</p>
        </div>
        <span className={`inline-flex min-h-6 items-center rounded-2xl px-2 py-1 text-[11px] font-medium leading-[14px] ${statusClass}`}>
          {status === 'live' && <span className="size-1.5 rounded-full bg-white" />}
          {statusText}
        </span>
      </div>
      <ChevronRight aria-hidden="true" className="shrink-0 text-[#171717]" size={24} strokeWidth={2} />
    </button>
  );
}

export default function LiveScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full overflow-auto bg-[#f5f5f5]">
      <StatusBar />

      <div className="sticky top-[50px] z-40 flex h-12 items-center justify-between bg-white px-2">
        <button className="size-8 active:opacity-60" onClick={() => navigate('/profile')}>
          <img alt="" className="size-full rounded-full object-cover" src={imgNavProfile} />
        </button>
        <h1 className="text-center text-[16px] font-semibold leading-6 text-[#171717]">Phòng Live</h1>
        <button aria-label="Thông báo" className="flex size-8 items-center justify-center active:opacity-60">
          <Bell aria-hidden="true" size={22} strokeWidth={2} />
        </button>
      </div>

      <main className="flex flex-col gap-3 px-3 py-2 pb-[104px]">
        <section className="flex flex-col gap-2">
          <h2 className="text-[14px] font-semibold leading-5 text-[#171717]">Hôm nay</h2>
          <div className="flex flex-col gap-3">
            <LiveItem image={imgLiveLiterature} status="live" title="Chữa đề thực chiến V-SAT Ngữ Văn 1" onClick={() => navigate('/live/vsat-ngu-van-1')} />
            <LiveItem image={imgLiveMath} status="soon" title="Chữa đề thực chiến V-SAT Toán" />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-[14px] font-semibold leading-5 text-[#171717]">28/5/2026</h2>
          <LiveItem image={imgLiveEnglish} status="ended" title="Chữa đề thực chiến V-SAT Anh" />
        </section>
      </main>

      <div className="fixed bottom-[34px] left-0 right-0 z-50 mx-auto flex h-[54px] max-w-[393px] items-center border-t border-[#e5e5e5] bg-white p-1">
        <BottomTab icon={<CommunityTabIcon />} label="Cộng đồng" onClick={() => navigate('/')} />
        <BottomTab icon={<CourseTabIcon />} label="Khoá học" onClick={() => navigate('/courses')} />
        <BottomTab icon={<Calendar aria-hidden="true" size={22} strokeWidth={2} />} label="TKB" onClick={() => navigate('/schedule')} />
        <BottomTab active icon={<Video aria-hidden="true" size={22} strokeWidth={2} />} label="Live" />
        <BottomTab icon={<MoreHorizontal aria-hidden="true" size={22} strokeWidth={2} />} label="Khác" />
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto flex h-[34px] max-w-[393px] items-center justify-center bg-white">
        <div className="h-[5px] w-[144px] rounded-full bg-black" />
      </div>
    </div>
  );
}
