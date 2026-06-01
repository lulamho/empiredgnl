import { ChevronLeft, CornerUpLeft, MoreHorizontal, Send, Users } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import imgLiveClassroom from '../../assets/prototype/live-detail-classroom.png';
import imgLiveTeam from '../../assets/prototype/live-detail-team.png';
import svgPaths from '../../imports/SanhChungMainScreen-2/svg-p6lq06vpnh';

function DarkStatusBar() {
  return (
    <div className="sticky top-0 z-50 flex h-[50px] w-full items-start bg-[#121212] pt-[21px]">
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

function AvatarInitial({ initial }: { initial: string }) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fef5e7]">
      <span className="text-[14px] leading-5 text-[#895607]">{initial}</span>
    </div>
  );
}

type ReplyTarget = {
  name: string;
  text: string;
};

function Discussion({ initial, name, time, text, open, onReveal, onClose, onReply }: { initial: string; name: string; time: string; text: string; open: boolean; onReveal: () => void; onClose: () => void; onReply: () => void }) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
    startY.current = event.clientY;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null || startY.current === null) return;

    const dx = event.clientX - startX.current;
    const dy = event.clientY - startY.current;
    startX.current = null;
    startY.current = null;

    if (Math.abs(dx) < 28 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) {
      onReveal();
    } else {
      onClose();
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button className="absolute right-0 top-0 flex h-full min-h-[52px] w-[101px] items-center justify-center gap-1 bg-[#262626] px-2 py-2 text-[#f99d0d]" onClick={onReply} type="button">
        <CornerUpLeft aria-hidden="true" size={20} strokeWidth={2} />
        <span className="text-[12px] font-medium leading-4">Trả lời</span>
      </button>
      <div
        className={`relative z-10 flex w-full touch-pan-y select-none items-start gap-2 bg-[#121212] px-3 py-1 transition-transform duration-200 ease-out ${open ? '-translate-x-[101px]' : 'translate-x-0'}`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <AvatarInitial initial={initial} />
        <div className="min-w-0 flex-1 py-1">
          <div className="flex items-center gap-0.5">
            <p className="truncate text-[12px] font-semibold leading-4 text-[#f99d0d]">{name}</p>
            <p className="text-[11px] leading-[14px] text-[#737373]">•</p>
            <p className="text-[11px] leading-[14px] text-white/60">{time}</p>
          </div>
          <p className="text-[12px] leading-4 text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function LiveDetailScreen() {
  const navigate = useNavigate();
  const [replyOpenKey, setReplyOpenKey] = useState<string | null>(null);
  const [replyTarget, setReplyTarget] = useState<ReplyTarget | null>(null);
  const discussions = [
    ['T', 'Nguyễn Thi', '9:30', 'Chào các bạn, cô ơi, up tiếp video bài số 3 giúp tụi em'],
    ['M', 'Trần Minh Quân', '9:45', 'Em đã hoàn thành phần bài tập cuối rồi ạ.'],
    ['H', 'Phạm Hồng Nhung', '10:00', 'Bạn nào cần hỗ trợ, mình sẵn sàng giúp đỡ nhé!'],
    ['T', 'Lê Thị Thu Trang', '10:15', 'Cô ơi, phần bài tập này khó quá, em chưa hiểu lắm.'],
    ['D', 'Đỗ Đức Duy', '10:30', 'Mình vừa gửi tài liệu tham khảo cho mọi người.'],
    ['N', 'Ngô Ngọc Nhi', '10:45', 'Ai muốn trao đổi nhóm thì phản hồi giúp nhé!'],
    ['V', 'Vũ Văn Vinh', '11:00', 'Em đã xem video bài số 3, rất hữu ích ạ.'],
    ['A', 'An Anh Dương', '11:15', 'Các bạn nhớ nộp bài đúng hạn để cô chấm nhé!'],
    ['K', 'Khánh Kiều', '11:30', 'Cảm ơn cô và các bạn đã hỗ trợ em trong quá trình học.'],
  ];

  return (
    <div className="relative size-full overflow-auto bg-[#121212] pb-[96px]">
      <DarkStatusBar />

      <div className="sticky top-[50px] z-40 flex h-12 items-center gap-2 bg-[#121212] p-2">
        <button aria-label="Quay lại" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/50 text-white active:opacity-75" onClick={() => navigate('/live')}>
          <ChevronLeft aria-hidden="true" size={22} strokeWidth={2} />
        </button>
        <h1 className="min-w-0 flex-1 truncate text-[16px] font-bold leading-6 text-white">Chữa đề thực chiến V-SAT Ngữ Văn 1</h1>
        <button aria-label="Tuỳ chọn" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/50 text-white active:opacity-75">
          <MoreHorizontal aria-hidden="true" size={22} strokeWidth={2} />
        </button>
      </div>

      <main>
        <img alt="" className="aspect-[393/221] w-full object-cover" src={imgLiveClassroom} />

        <section className="flex items-center gap-2 border-b border-[#404040] bg-[#121212] px-3 py-2">
          <img alt="" className="size-10 shrink-0 rounded-full object-cover" src={imgLiveTeam} />
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold leading-5 text-white">Phòng Live Emprie Team</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex min-h-6 items-center gap-1 rounded-2xl bg-[#e61e39] px-2 py-1 text-[11px] font-medium leading-[14px] text-white">
                <span className="size-1.5 rounded-full bg-white" />
                Trực tiếp
              </span>
              <span className="inline-flex min-h-6 items-center gap-0.5 rounded-2xl bg-[#262626] p-1 pr-2 text-[11px] font-medium leading-[14px] text-white">
                <Users aria-hidden="true" size={16} strokeWidth={2} />
                68 bạn đang học
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-2">
          {discussions.map(([initial, name, time, text]) => (
            <Discussion
              key={`${name}-${time}`}
              initial={initial}
              name={name}
              onClose={() => setReplyOpenKey(null)}
              onReply={() => {
                setReplyTarget({ name, text });
                setReplyOpenKey(null);
              }}
              onReveal={() => setReplyOpenKey(`${name}-${time}`)}
              open={replyOpenKey === `${name}-${time}`}
              text={text}
              time={time}
            />
          ))}
        </section>
      </main>

      <div className="fixed bottom-[34px] left-0 right-0 z-50 mx-auto max-w-[393px] bg-[#262626] p-2">
        {replyTarget && (
          <div className="mb-2 flex w-full items-start gap-0 rounded border-l-2 border-[#f99d0d] bg-[#404040] py-1 pl-3 pr-1">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p className="text-[11px] leading-[14px] text-white/60">Trả lời đến</p>
                <p className="truncate text-[12px] font-semibold leading-4 text-[#f99d0d]">{replyTarget.name}</p>
              </div>
              <p className="truncate text-[12px] leading-4 text-white">{replyTarget.text}</p>
            </div>
            <button aria-label="Đóng trả lời" className="flex size-5 shrink-0 items-center justify-center text-white active:opacity-70" onClick={() => setReplyTarget(null)}>
              <span className="text-[22px] leading-5">×</span>
            </button>
          </div>
        )}
        <div className="flex items-start gap-2">
          <div className={`flex h-10 flex-1 items-center rounded-[50px] border bg-black/20 px-3 py-2 ${replyTarget ? 'border-[#f99d0d]' : 'border-white/10'}`}>
            <p className="flex-1 text-[14px] leading-5 text-white">{replyTarget ? 'Gửi giúp mình nha' : 'Viết thảo luận...'}</p>
            {replyTarget && <span className="h-6 w-px bg-[#f99d0d]" />}
          </div>
          <button aria-label="Gửi" className={`flex size-10 items-center justify-center rounded-full text-white ${replyTarget ? 'bg-[#f99d0d]' : 'bg-[#f99d0d]/50'}`}>
            <Send aria-hidden="true" size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto flex h-[34px] max-w-[393px] items-center justify-center bg-[#262626]">
        <div className="h-[5px] w-[144px] rounded-full bg-white" />
      </div>
    </div>
  );
}
