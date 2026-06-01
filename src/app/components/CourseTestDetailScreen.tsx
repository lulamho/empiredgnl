import { BookOpen, Check, ChevronLeft, ChevronRight, Clock3, FileText, Timer, Wifi } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import imgLeaderboardAvatar1 from '../../assets/prototype/leaderboard-avatar-1.png';
import imgLeaderboardAvatar2 from '../../assets/prototype/leaderboard-avatar-2.png';
import imgLeaderboardAvatar3 from '../../assets/prototype/leaderboard-avatar-3.png';
import imgLeaderboardAvatarMe from '../../assets/prototype/leaderboard-avatar-me.png';
import imgLeaderboardMedalBronze from '../../assets/prototype/leaderboard-medal-bronze.svg';
import imgLeaderboardMedalGold from '../../assets/prototype/leaderboard-medal-gold.svg';
import imgLeaderboardMedalSilver from '../../assets/prototype/leaderboard-medal-silver.svg';

function OrangeStatusBar() {
  return (
    <div className="absolute flex h-[50px] items-start left-0 pt-[21px] top-0 w-full z-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1 items-center justify-center min-w-px pl-4 pr-1.5">
          <p className="font-[590] leading-[22px] text-[17px] text-white text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] shrink-0 w-[124px]" />
        <div className="flex flex-1 gap-[7px] items-center justify-center min-w-px pl-1.5 pr-4">
          <div className="h-3 relative w-[19px]">
            <span className="absolute bottom-0 left-0 bg-white rounded-[1px] h-[5px] w-[3px]" />
            <span className="absolute bottom-0 left-[5px] bg-white rounded-[1px] h-[7px] w-[3px]" />
            <span className="absolute bottom-0 left-[10px] bg-white rounded-[1px] h-[9px] w-[3px]" />
            <span className="absolute bottom-0 left-[15px] bg-white rounded-[1px] h-[12px] w-[3px]" />
          </div>
          <Wifi aria-hidden="true" className="text-white" size={17} strokeWidth={2.4} />
          <div className="border border-white/60 h-[13px] rounded-[3.8px] relative w-[27px]">
            <div className="absolute bg-white h-[9px] left-0.5 top-0.5 rounded-[2.5px] w-[21px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard() {
  return (
    <section className="bg-[#f99d0d] px-3 pb-3 pt-[110px]">
      <div className="bg-white grid grid-cols-2 h-[78px] rounded-xl overflow-hidden">
        <div className="flex flex-col items-center justify-center p-2">
          <BookOpen aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />
          <p className="font-bold leading-6 text-[16px] text-[#171717]">120</p>
          <p className="leading-[14px] text-[11px] text-[#737373]">Tổng số câu hỏi</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <Clock3 aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />
          <p className="font-bold leading-6 text-[16px] text-[#171717]">2 Giờ</p>
          <p className="leading-[14px] text-[11px] text-[#737373]">Thời gian làm bài</p>
        </div>
      </div>
    </section>
  );
}

function ResultCard() {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="font-semibold leading-6 px-3 text-[16px] text-[#171717]">Kết quả của bạn</h2>
      <div className="bg-white flex flex-col items-center justify-center min-h-[108px] rounded-xl px-3 py-4">
        <div className="bg-[#f5f5f5] flex items-center justify-center rounded-full size-10">
          <FileText aria-hidden="true" className="text-[#737373]" size={24} strokeWidth={2} />
        </div>
        <p className="font-semibold leading-5 mt-1 text-[14px] text-[#171717]">Chưa làm bài thi</p>
        <p className="leading-4 text-[12px] text-[#737373] text-center">Bắt đầu làm bài để xem kết quả của bạn</p>
      </div>
    </section>
  );
}

function AttemptListIcon() {
  return (
    <svg aria-hidden="true" className="size-5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.24025 13.7628C7.38123 13.6218 7.45171 13.4466 7.45171 13.2372C7.45171 13.0279 7.38123 12.8527 7.24025 12.7115C7.09914 12.5706 6.92393 12.5001 6.71463 12.5001C6.50518 12.5001 6.32998 12.5706 6.189 12.7115C6.04789 12.8527 5.97734 13.0279 5.97734 13.2372C5.97734 13.4466 6.04789 13.6218 6.189 13.7628C6.32998 13.9039 6.50518 13.9745 6.71463 13.9745C6.92393 13.9745 7.09914 13.9039 7.24025 13.7628ZM7.24025 10.5257C7.38123 10.3847 7.45171 10.2095 7.45171 10.0001C7.45171 9.79064 7.38123 9.61543 7.24025 9.47446C7.09914 9.33348 6.92393 9.263 6.71463 9.263C6.50518 9.263 6.32998 9.33348 6.189 9.47446C6.04789 9.61543 5.97734 9.79064 5.97734 10.0001C5.97734 10.2095 6.04789 10.3847 6.189 10.5257C6.32998 10.6667 6.50518 10.7372 6.71463 10.7372C6.92393 10.7372 7.09914 10.6667 7.24025 10.5257ZM7.24025 7.28862C7.38123 7.14751 7.45171 6.9723 7.45171 6.763C7.45171 6.55355 7.38123 6.37835 7.24025 6.23737C7.09914 6.09626 6.92393 6.02571 6.71463 6.02571C6.50518 6.02571 6.32998 6.09626 6.189 6.23737C6.04789 6.37835 5.97734 6.55355 5.97734 6.763C5.97734 6.9723 6.04789 7.14751 6.189 7.28862C6.32998 7.42959 6.50518 7.50008 6.71463 7.50008C6.92393 7.50008 7.09914 7.42959 7.24025 7.28862ZM9.24671 13.8622H13.9903V12.6124H9.24671V13.8622ZM9.24671 10.6251H13.9903V9.37508H9.24671V10.6251ZM9.24671 7.38779H13.9903V6.138H9.24671V7.38779ZM4.42296 17.0834C4.00199 17.0834 3.64567 16.9376 3.354 16.6459C3.06234 16.3542 2.9165 15.9979 2.9165 15.577V4.42321C2.9165 4.00223 3.06234 3.64591 3.354 3.35425C3.64567 3.06258 4.00199 2.91675 4.42296 2.91675H15.5767C15.9977 2.91675 16.354 3.06258 16.6457 3.35425C16.9373 3.64591 17.0832 4.00223 17.0832 4.42321V15.577C17.0832 15.9979 16.9373 16.3542 16.6457 16.6459C16.354 16.9376 15.9977 17.0834 15.5767 17.0834H4.42296ZM4.42296 15.8334H15.5767C15.6409 15.8334 15.6996 15.8067 15.753 15.7532C15.8064 15.6999 15.8332 15.6411 15.8332 15.577V4.42321C15.8332 4.35904 15.8064 4.30029 15.753 4.24696C15.6996 4.19348 15.6409 4.16675 15.5767 4.16675H4.42296C4.3588 4.16675 4.30005 4.19348 4.24671 4.24696C4.19324 4.30029 4.1665 4.35904 4.1665 4.42321V15.577C4.1665 15.6411 4.19324 15.6999 4.24671 15.7532C4.30005 15.8067 4.3588 15.8334 4.42296 15.8334Z" fill="#F99D0D" />
    </svg>
  );
}

const attempts = [
  { title: 'Lần làm bài 1', status: 'Cần cố gắng hơn', score: '20', tone: 'text-[#db3e2c]' },
  { title: 'Lần làm bài 2', status: 'Cần cố gắng hơn', score: '20', tone: 'text-[#db3e2c]' },
  { title: 'Lần làm bài 3', status: 'Hoàn thành xuất sắc', score: '145', tone: 'text-[#32b670]' },
  { title: 'Lần làm bài 4', status: 'Cần luyện tập thêm', score: '90', tone: 'text-[#525252]' },
];

function CompletedResultCard() {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="font-semibold leading-6 px-3 text-[16px] text-[#171717]">Kết quả của bạn</h2>
      <div className="bg-white flex flex-col overflow-hidden rounded-lg pl-3 w-full">
        {attempts.map((attempt, index) => (
          <button key={attempt.title} className="flex gap-3 items-center text-left w-full active:bg-[#fafafa]">
            <div className="bg-[#fff3df] flex items-center justify-center rounded-full size-9 shrink-0">
              <AttemptListIcon />
            </div>
            <div className={`flex flex-1 gap-2 items-start min-w-0 py-3 ${index < attempts.length - 1 ? 'border-b border-[#e5e5e5]' : ''}`}>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <p className="font-semibold leading-5 text-[14px] text-[#171717] truncate">{attempt.title}</p>
                <p className={`leading-[14px] text-[11px] ${attempt.tone} truncate`}>{attempt.status}</p>
              </div>
              <div className="flex items-baseline gap-0.5 shrink-0 leading-5 text-[14px]">
                <span className="font-semibold text-[#f99d0d]">{attempt.score}</span>
                <span className="text-[#525252]">/ 150</span>
              </div>
              <ChevronRight aria-hidden="true" className="text-[#f99d0d] shrink-0 mr-2 mt-0.5" size={20} strokeWidth={2} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function InstructionsContent({ completed = false }: { completed?: boolean }) {
  return (
    <div className="flex flex-col gap-3 px-3 py-3 pb-[118px]">
      {completed ? <CompletedResultCard /> : <ResultCard />}
      <section className="flex flex-col gap-1">
        <h2 className="font-semibold leading-6 px-3 text-[16px] text-[#171717]">Hướng dẫn làm bài</h2>
        <div className="bg-white rounded-xl p-3 text-[14px] leading-5 text-[#171717]">
          <p>*Mỗi câu hỏi trắc nghiệm có một đáp án duy nhất được lựa chọn từ các đáp án A, B, C hoặc D cho trước. Thí sinh chọn đáp án bằng cách nhấp chuột trái vào đáp án, máy tính sẽ tự động ghi nhận và hiển thị thành ô đáp án thành màu đen. Trường hợp bạn chọn câu trả lời lần thứ nhất và muốn chọn lại câu trả lời thì đưa con trỏ chuột đến đáp án mới và nhấp chuột trái. Ô tròn màu đen mới sẽ được ghi nhận và ô tròn cũ sẽ trở lại trạng thái ban đầu.</p>
          <p className="mt-4">*Đối với các câu hỏi điền đáp án, thí sinh nhập đáp án vào ô trống dạng số nguyên dương, nguyên âm hoặc phân số tối giản và không nhập đơn vị vào đáp án.</p>
          <ul className="list-disc pl-5">
            <li>Ví dụ số âm: -1; -1/2; -1,23</li>
            <li>Ví dụ phân số: 1/2; -1/2</li>
          </ul>
          <p className="mt-4">*Mỗi câu trả lời đúng được 1 điểm, câu trả lời sai hoặc không trả lời được 0 điểm. Hãy thận trọng trước khi lựa chọn đáp án của mình.</p>
          <p className="mt-4">Tiến trình làm bài thi trên máy tính:</p>
          <p>Khi BẮT ĐẦU làm bài, màn hình máy tính sẽ hiển thị phần thi thứ nhất:</p>
          <p>Phần 1: Tư duy định lượng (50 câu hỏi - 75 phút)</p>
          <p>Phần 2: Tư duy định tính (50 câu hỏi - 60 phút)</p>
          <p>Phần 3: Khoa học hoặc Tiếng Anh (51 câu hỏi - 60 phút)</p>
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="font-semibold leading-6 px-3 text-[16px] text-[#db3e2c]">Lưu ý làm bài thi:</h2>
        <div className="bg-[#fbecea] border border-[#e98b80] rounded-xl p-3 text-[14px] leading-5 text-[#db3e2c]">
          <p>*Chỉ phiên làm bài đầu tiên mới được tính xếp hạng.</p>
          <p>*Một bài thi được coi là hợp lệ để tính xếp hạng khi không có gian lận.</p>
          <p>*Khi đang trong một phiên làm bài thi được tính xếp hạng và bị thoát ra, hãy vào lại đề thi và chọn tiếp tục làm bài.</p>
        </div>
      </section>
    </div>
  );
}

const topRanks = [
  {
    rank: 2,
    name: 'Phan Hà Anh',
    score: '1280',
    correct: '128 câu',
    time: '3:11:04',
    avatar: imgLeaderboardAvatar2,
    medal: imgLeaderboardMedalSilver,
    size: 'small',
    gradient: 'from-[#dee8f1]',
  },
  {
    rank: 1,
    name: 'Trần Phương Kiệt',
    score: '1410',
    correct: '141 câu',
    time: '14:32',
    avatar: imgLeaderboardAvatar1,
    medal: imgLeaderboardMedalGold,
    size: 'large',
    gradient: 'from-[#ffe798]',
  },
  {
    rank: 3,
    name: 'Đoàn Hải Đăng',
    score: '1240',
    correct: '124 câu',
    time: '2:38:10',
    avatar: imgLeaderboardAvatar3,
    medal: imgLeaderboardMedalBronze,
    size: 'small',
    gradient: 'from-[#ffc388]',
  },
];

const leaderboardRows = [
  { rank: 7, name: 'Bạn', score: '1180', correct: '124 câu', time: '2:57:19', avatar: imgLeaderboardAvatarMe, me: true },
  { rank: 4, name: 'Đào Thanh Hằng', score: '1230', correct: '123 câu', time: '3:15:06', initial: 'H' },
  { rank: 5, name: 'Phạm Thị Hương', score: '1225', correct: '115 câu', time: '3:12:30', initial: 'H' },
  { rank: 6, name: 'Trần Thị Bích', score: '1205', correct: '110 câu', time: '3:05:10', initial: 'B' },
  { rank: 8, name: 'Hoàng Thị Lan', score: '1195', correct: '108 câu', time: '3:01:50', initial: 'H' },
  { rank: 9, name: 'Vũ Quốc Dũng', score: '1170', correct: '100 câu', time: '2:58:15', initial: 'D' },
  { rank: 10, name: 'Nguyễn Minh Anh', score: '1150', correct: '98 câu', time: '2:47:22', initial: 'A' },
];

function AchievementMeta({ correct, time, centered = false }: { correct: string; time: string; centered?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-x-2 gap-y-0.5 text-[12px] leading-4 text-[#525252] ${centered ? 'justify-center' : ''}`}>
      <span className="inline-flex items-center gap-0.5 whitespace-nowrap">
        <Check aria-hidden="true" className="text-[#f99d0d]" size={14} strokeWidth={2.2} />
        {correct}
      </span>
      <span className="inline-flex items-center gap-0.5 whitespace-nowrap">
        <Timer aria-hidden="true" className="text-[#f99d0d]" size={14} strokeWidth={2} />
        {time}
      </span>
    </div>
  );
}

function TopRankCard({ entry }: { entry: typeof topRanks[number] }) {
  const isLarge = entry.size === 'large';

  return (
    <div className={`bg-gradient-to-b ${entry.gradient} to-white/0 flex flex-1 flex-col items-center gap-2 rounded-t-lg px-1 py-2 min-w-0`}>
      <div className={`relative ${isLarge ? 'h-24 w-[81px]' : 'h-[76px] w-[60px]'}`}>
        <img alt="" className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full object-cover ${isLarge ? 'size-20 border border-[#f99d0d]' : 'size-[60px]'}`} src={entry.avatar} />
        <img alt="" className="absolute bottom-0 left-1/2 size-8 -translate-x-1/2 object-contain" src={entry.medal} />
      </div>
      <div className="flex w-full flex-col items-center gap-0.5 min-w-0 text-center">
        <p className="w-full truncate text-[12px] font-medium leading-4 text-[#171717]">{entry.name}</p>
        <p className="w-full text-[14px] font-semibold leading-5 text-[#f99d0d]">{entry.score}</p>
        <AchievementMeta correct={entry.correct} time={entry.time} centered />
      </div>
    </div>
  );
}

function AvatarBadge({ row }: { row: typeof leaderboardRows[number] }) {
  if (row.avatar) {
    return <img alt="" className="size-10 rounded-full object-cover shrink-0" src={row.avatar} />;
  }

  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fff3df] text-[16px] leading-6 text-[#895607]">
      {row.initial}
    </div>
  );
}

function LeaderboardRow({ row }: { row: typeof leaderboardRows[number] }) {
  return (
    <div className={`flex h-16 items-center gap-2 rounded-lg bg-white px-2 py-3 ${row.me ? 'border border-[#f99d0d]' : ''}`}>
      <p className="min-w-5 shrink-0 text-center text-[12px] font-medium leading-4 text-[#171717]">{row.rank}</p>
      <AvatarBadge row={row} />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className={`w-full truncate text-[12px] font-medium leading-4 ${row.me ? 'text-[#f99d0d]' : 'text-[#171717]'}`}>{row.name}</p>
        <AchievementMeta correct={row.correct} time={row.time} />
      </div>
      <p className="shrink-0 text-[14px] font-semibold leading-5 text-[#f99d0d]">{row.score}</p>
    </div>
  );
}

function RankingContent() {
  return (
    <div className="flex flex-col gap-3 px-3 py-3 pb-[118px]">
      <section className="flex items-end justify-center gap-1 w-full">
        {topRanks.map((entry) => (
          <TopRankCard key={entry.rank} entry={entry} />
        ))}
      </section>
      <section className="flex flex-col gap-2">
        {leaderboardRows.map((row) => (
          <LeaderboardRow key={`${row.rank}-${row.name}`} row={row} />
        ))}
      </section>
    </div>
  );
}

function StartExamModal({ onClose, onStart }: { onClose: () => void; onStart: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <button aria-label="Đóng xác nhận vào thi" className="absolute inset-0 bg-black/45 w-full" onClick={onClose} />
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 bg-white flex flex-col items-center gap-4 overflow-hidden rounded-lg px-4 pb-4 pt-2 shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
        <div className="flex flex-col gap-2 items-center justify-center py-2 w-full">
          <h2 className="font-semibold leading-7 overflow-hidden text-[20px] text-[#171717] text-center text-ellipsis whitespace-nowrap w-full">Đề thi thử số 1</h2>
          <div className="bg-white border border-[#e5e5e5] grid grid-cols-2 rounded-lg overflow-hidden w-full">
            <div className="flex flex-col items-center justify-center min-w-[160px] p-2">
              <BookOpen aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />
              <p className="font-bold leading-6 text-[16px] text-[#171717]">120</p>
              <p className="leading-[14px] text-[11px] text-[#737373]">Tổng số câu hỏi</p>
            </div>
            <div className="flex flex-col items-center justify-center min-w-[160px] p-2">
              <Clock3 aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />
              <p className="font-bold leading-6 text-[16px] text-[#171717]">2 Giờ</p>
              <p className="leading-[14px] text-[11px] text-[#737373]">Thời gian làm bài</p>
            </div>
          </div>
          <p className="leading-5 text-[14px] text-[#171717] text-center">
            Bài làm sẽ bắt đầu sau <span className="font-semibold">120</span> giây. Chọn “<span className="font-semibold">Bắt đầu</span>” nếu bạn đã sẵn sàng
          </p>
        </div>
        <div className="relative flex items-center justify-center size-[120px] rounded-full" style={{ background: 'conic-gradient(#f99d0d 0deg 24deg, #ef6c45 24deg 92deg, #df38b0 92deg 215deg, #d4d4d4 215deg 360deg)' }}>
          <div className="absolute bg-white rounded-full size-[104px]" />
          <div className="relative flex flex-col items-center text-center">
            <p className="leading-4 text-[12px] text-[#525252]">Còn lại</p>
            <p className="font-extrabold leading-8 text-[24px] text-[#171717]">50</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button className="bg-[#f99d0d] flex items-center justify-center rounded-2xl px-6 py-3 w-full active:opacity-80" onClick={onStart}>
            <span className="font-semibold leading-6 text-[16px] text-white">Bắt đầu</span>
          </button>
          <button className="flex items-center justify-center rounded-xl p-3 w-full active:bg-[#fff3df]" onClick={onClose}>
            <span className="font-semibold leading-6 text-[16px] text-[#f99d0d]">Suy nghĩ lại</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseTestDetailScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'Hướng dẫn làm bài' | 'Điểm xếp hạng'>('Hướng dẫn làm bài');
  const [showStartConfirm, setShowStartConfirm] = useState(false);
  const isCompleted = new URLSearchParams(location.search).get('completed') === '1';

  return (
    <div className="bg-[#fafafa] overflow-auto relative size-full">
      <OrangeStatusBar />
      <div className="absolute bg-[#f99d0d] h-[98px] left-0 top-0 w-full z-10">
        <button aria-label="Quay lại" className="absolute left-2 top-[62px] -translate-y-1/2 flex items-center justify-center size-8 text-white active:opacity-75" onClick={() => navigate('/courses/vsat/lessons/ngu-van-1')}>
          <ChevronLeft aria-hidden="true" size={28} strokeWidth={2} />
        </button>
        <h1 className="absolute left-10 right-10 top-[62px] -translate-y-1/2 font-semibold leading-6 text-[16px] text-center text-white">Đề thi thử số 1</h1>
      </div>
      <MetricCard />
      <div className="sticky top-0 z-10 bg-white flex border-b border-[#e5e5e5]">
        {(['Hướng dẫn làm bài', 'Điểm xếp hạng'] as const).map((tab) => (
          <button key={tab} className={`flex-1 min-h-10 px-3 py-2 font-medium leading-5 text-[14px] text-center ${activeTab === tab ? 'border-b-2 border-[#f99d0d] text-[#f99d0d]' : 'text-black/50'}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 'Hướng dẫn làm bài' ? <InstructionsContent completed={isCompleted} /> : <RankingContent />}
      <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-white border-t border-[#e5e5e5] p-2">
        <button className="bg-[#f99d0d] flex items-center justify-center gap-2 rounded-2xl px-6 py-3 w-full active:opacity-80" onClick={() => setShowStartConfirm(true)}>
          <span className="font-semibold leading-6 text-[16px] text-white">{activeTab === 'Điểm xếp hạng' ? 'Vào Thi' : isCompleted ? 'Làm Lại' : 'Vào Thi'}</span>
          <ChevronRight aria-hidden="true" className="text-white" size={24} strokeWidth={2} />
        </button>
      </div>
      <div className="fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto bg-white flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
      {showStartConfirm && <StartExamModal onClose={() => setShowStartConfirm(false)} onStart={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1/take')} />}
    </div>
  );
}
