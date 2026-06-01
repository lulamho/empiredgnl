import { BookOpen, Calendar, ChevronLeft, Download, Share2, Timer, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router';
import imgResultCelebrationIcon from '../../assets/prototype/result-celebration-icon.svg';
import imgResultPercentMedal from '../../assets/prototype/result-percent-medal.svg';
import imgResultPointsIcon from '../../assets/prototype/result-points-icon.png';
import imgResultRankIcon from '../../assets/prototype/result-rank-icon.png';

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

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white flex flex-1 gap-2 items-center rounded-lg p-3 min-w-0">
      <div className="shrink-0">{icon}</div>
      <div className="flex flex-col items-start min-w-0 text-left">
        <p className="font-bold leading-6 text-[16px] text-[#f99d0d] text-left truncate w-full">{value}</p>
        <p className="leading-4 text-[12px] text-[#737373] text-left truncate w-full">{label}</p>
      </div>
    </div>
  );
}

function ExamInfoItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col gap-1 items-start px-3 py-2 min-w-0">
      {icon}
      <p className="font-semibold leading-5 text-[14px] text-[#171717] truncate">{value}</p>
      <p className="leading-[14px] text-[11px] text-[#737373] truncate">{label}</p>
    </div>
  );
}

function ResultDetail({ subject, percent, correct, width }: { subject: string; percent: string; correct: string; width: string }) {
  return (
    <div className="bg-white flex flex-col gap-2 rounded-lg p-3">
      <div className="flex gap-2 items-start text-[14px] leading-5 text-[#171717]">
        <p className="flex-1 font-medium min-w-0">{subject}</p>
        <p className="font-semibold shrink-0">{percent}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-[#e5e5e5] h-2 overflow-hidden rounded-full w-full">
          <div className="bg-gradient-to-r from-[#32b670] to-[#84d3a9] h-full" style={{ width }} />
        </div>
        <p className="leading-4 text-[12px] text-[#171717]">
          Số câu đúng: <span className="font-medium text-[#32b670]">{correct}</span><span className="font-medium">/50</span>
        </p>
      </div>
    </div>
  );
}

export default function CourseTestResultScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] overflow-auto relative size-full">
      <section className="relative bg-[#f99d0d] min-h-[454px] overflow-hidden px-3 pb-3 pt-[50px] text-white">
        <OrangeStatusBar />
        <svg aria-hidden="true" className="absolute left-1/2 top-0 -translate-x-1/2 h-[234px] w-[227px]" viewBox="0 0 227 234" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M88.0685 0H138.932L227 234H0L88.0685 0Z" fill="url(#result-light-gradient)" />
          <defs>
            <linearGradient id="result-light-gradient" x1="113.5" y1="0" x2="113.5" y2="234" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF5E7" stopOpacity="0.5" />
              <stop offset="1" stopColor="#FEF5E7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative z-10 flex items-center justify-between py-3">
          <button aria-label="Quay lại" className="flex items-center justify-center size-8 active:opacity-75" onClick={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1?completed=1')}>
            <ChevronLeft aria-hidden="true" size={28} strokeWidth={2} />
          </button>
          <button aria-label="Chia sẻ" className="flex items-center justify-center size-8 active:opacity-75">
            <Share2 aria-hidden="true" size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="relative z-10 flex flex-col items-center pt-5 text-center">
          <img alt="" className="size-32 object-contain" src={imgResultCelebrationIcon} />
          <h1 className="font-semibold leading-7 text-[20px]">Chúc mừng!!!</h1>
          <p className="leading-5 mt-1 max-w-[360px] text-[14px]">Bạn đã thể hiện rất tốt trong kỳ thi lần này. Hãy tiếp tục duy trì phong độ và rèn luyện thêm để đạt kết quả cao hơn nữa nhé!</p>
          <div className="grid grid-cols-2 gap-3 mt-4 w-full">
            <StatCard icon={<img alt="" className="size-10" src={imgResultPointsIcon} />} value="98" label="Điểm trung bình" />
            <StatCard icon={<img alt="" className="size-10" src={imgResultRankIcon} />} value="126/980" label="Thứ hạng" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#fbbd5d]/0 via-[#fbbd5d] to-[#fbbd5d]/0 flex items-center justify-center gap-0 px-3 py-1">
          <img alt="" className="size-6 object-contain" src={imgResultPercentMedal} />
          <p className="font-medium leading-4 text-[12px] text-[#33200b]">Vượt qua 89% thí sinh khác</p>
        </div>
      </section>

      <main className="flex flex-col gap-4 px-3 py-3 pb-[104px]">
        <section className="flex flex-col gap-2">
          <h2 className="font-semibold leading-6 px-3 text-[16px] text-[#171717]">Thông tin bài thi</h2>
          <div className="bg-white grid grid-cols-3 rounded-lg overflow-hidden">
            <ExamInfoItem icon={<BookOpen aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />} value="120" label="Tổng số câu" />
            <ExamInfoItem icon={<Timer aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />} value="1:30:42" label="Thời gian" />
            <ExamInfoItem icon={<Calendar aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />} value="29/5/2026" label="Ngày thi" />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-1 px-3">
            <h2 className="flex-1 font-semibold leading-6 min-w-0 text-[16px] text-[#171717]">Chi tiết từng phần thi</h2>
            <button className="flex items-center gap-1 px-2 py-1 text-[#f99d0d] active:opacity-75">
              <span className="font-semibold leading-5 text-[14px]">Tải PDF</span>
              <Download aria-hidden="true" size={20} strokeWidth={2} />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <ResultDetail subject="Tiếng Anh" percent="12%" correct="6" width="18%" />
            <ResultDetail subject="Toán" percent="18%" correct="40" width="66%" />
            <ResultDetail subject="Văn học" percent="22%" correct="11" width="22%" />
          </div>
        </section>
      </main>

      <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-white border-t border-[#e5e5e5] flex gap-3 p-2">
        <button className="flex flex-1 items-center justify-center rounded-xl p-3 text-[#f99d0d] active:bg-[#fff3df]" onClick={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1')}>
          <span className="font-semibold leading-6 text-[16px]">Làm lại</span>
        </button>
        <button className="bg-[#f99d0d] flex flex-1 items-center justify-center rounded-2xl px-6 py-3 text-white active:opacity-80">
          <span className="font-semibold leading-6 text-[16px]">Xem đáp án</span>
        </button>
      </div>
      <div className="fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto bg-white flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
    </div>
  );
}
