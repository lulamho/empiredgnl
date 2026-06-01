import { Bell, BookOpen, Calendar, ChevronRight, MessageSquare, MoreHorizontal, Video } from 'lucide-react';
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
        <BottomTab icon={<MessageSquare aria-hidden="true" size={22} strokeWidth={2} />} label="Cộng đồng" onClick={() => navigate('/')} />
        <BottomTab icon={<BookOpen aria-hidden="true" size={22} strokeWidth={2} />} label="Khoá học" onClick={() => navigate('/courses')} />
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
