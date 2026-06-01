import { CheckCircle, ChevronDown, ChevronLeft, ChevronRight, FilePenLine, Send, Timer, Wifi, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function LightStatusBar() {
  return (
    <div className="absolute bg-white flex h-[50px] items-start left-0 pt-[21px] top-0 w-full z-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1 items-center justify-center min-w-px pl-4 pr-1.5">
          <p className="font-[590] leading-[22px] text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
        </div>
        <div className="h-[10px] shrink-0 w-[124px]" />
        <div className="flex flex-1 gap-[7px] items-center justify-center min-w-px pl-1.5 pr-4">
          <div className="h-3 relative w-[19px]">
            <span className="absolute bottom-0 left-0 bg-black rounded-[1px] h-[5px] w-[3px]" />
            <span className="absolute bottom-0 left-[5px] bg-black rounded-[1px] h-[7px] w-[3px]" />
            <span className="absolute bottom-0 left-[10px] bg-black rounded-[1px] h-[9px] w-[3px]" />
            <span className="absolute bottom-0 left-[15px] bg-black rounded-[1px] h-[12px] w-[3px]" />
          </div>
          <Wifi aria-hidden="true" className="text-black" size={17} strokeWidth={2.4} />
          <div className="border border-black/60 h-[13px] rounded-[3.8px] relative w-[27px]">
            <div className="absolute bg-black h-[9px] left-0.5 top-0.5 rounded-[2.5px] w-[21px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswerOption({ letter, children, selected = false }: { letter: string; children: string; selected?: boolean }) {
  return (
    <button className={`flex gap-3 items-center rounded-full border p-2 text-left w-full active:opacity-80 ${selected ? 'bg-[#fef5e7] border-[#fbbd5d]' : 'bg-white border-[#d4d4d4]'}`}>
      <span className={`flex items-center justify-center rounded-full size-8 shrink-0 border font-semibold leading-5 text-[14px] ${selected ? 'bg-white border-[#f99d0d] text-[#f99d0d]' : 'bg-white border-[#0a0a0a] text-[#171717]'}`}>{letter}</span>
      <span className={`flex-1 leading-5 text-[14px] ${selected ? 'font-medium text-[#895607]' : 'text-[#171717]'}`}>{children}</span>
      {selected && <CheckCircle aria-hidden="true" className="text-[#f99d0d] shrink-0" size={24} strokeWidth={2.4} />}
    </button>
  );
}

function QuestionButton({ number }: { number: number }) {
  const current = number === 2;
  const done = number === 1;

  return (
    <button className={`flex items-center justify-center rounded-full border h-9 px-2 font-semibold leading-5 text-[14px] active:opacity-80 ${done ? 'bg-[#f99d0d] border-[#f99d0d] text-white' : current ? 'bg-[#fef5e7] border-[#f99d0d] text-[#f99d0d]' : 'bg-white border-[#d4d4d4] text-[#94a3b8]'}`}>
      {number}
    </button>
  );
}

function QuestionSection({ title, from, to }: { title: string; from: number; to: number }) {
  return (
    <section className="flex flex-col gap-2 px-2">
      <h3 className="font-semibold leading-5 px-1 text-[14px] text-[#171717]">{title}</h3>
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: to - from + 1 }, (_, index) => (
          <QuestionButton key={from + index} number={from + index} />
        ))}
      </div>
    </section>
  );
}

function QuestionBoardSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <button aria-label="Đóng bảng câu hỏi" className="absolute inset-0 bg-black/50 w-full" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 bg-[#fafafa] flex flex-col max-h-[696px] overflow-hidden rounded-t-[24px]">
        <div className="h-12 relative shrink-0 w-full">
          <button aria-label="Đóng" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 flex items-center justify-center rounded-full size-8 text-white active:opacity-75" onClick={onClose}>
            <X aria-hidden="true" size={20} strokeWidth={2.4} />
          </button>
          <h2 className="absolute left-11 right-11 top-1/2 -translate-y-1/2 font-semibold leading-6 text-[16px] text-center text-[#171717]">Bảng câu hỏi</h2>
        </div>
        <div className="flex gap-3 items-center justify-center px-3 pb-2">
          <div className="flex gap-1 items-center">
            <span className="bg-white border border-[#d4d4d4] rounded-full size-4" />
            <span className="leading-4 text-[12px] text-[#525252]">Chưa làm</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="bg-[#fef5e7] border border-[#f99d0d] rounded-full size-4" />
            <span className="leading-4 text-[12px] text-[#525252]">Hiện tại</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="bg-[#f99d0d] rounded-full size-4" />
            <span className="leading-4 text-[12px] text-[#525252]">Đã làm</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-auto pb-[34px] px-0">
          <QuestionSection title="Tiếng Việt" from={1} to={30} />
          <QuestionSection title="Tiếng Anh" from={31} to={60} />
          <QuestionSection title="Toán" from={61} to={90} />
          <QuestionSection title="Tư Duy Khoa Học" from={91} to={120} />
        </div>
        <div className="absolute bottom-0 h-[34px] left-0 right-0 flex items-center justify-center bg-[#fafafa]">
          <div className="bg-black h-[5px] rounded-full w-[144px]" />
        </div>
      </div>
    </div>
  );
}

function SubmitConfirmModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <button aria-label="Đóng xác nhận nộp bài" className="absolute inset-0 bg-black/45 w-full" onClick={onClose} />
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 bg-white flex flex-col gap-4 items-center rounded-lg p-4 shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
        <div className="flex flex-col gap-1 items-center justify-center p-2 w-full">
          <div className="bg-[#fff3df] flex items-center justify-center rounded-full size-16">
            <FilePenLine aria-hidden="true" className="text-[#f99d0d]" size={32} strokeWidth={1.8} />
          </div>
          <h2 className="font-semibold leading-7 mt-1 text-[20px] text-[#171717] text-center">Xác nhận nộp bài</h2>
          <p className="leading-5 text-[14px] text-[#171717] text-center">Bạn có chắc chắn muốn kết thúc bài thi ngay bây giờ</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold leading-6 text-[16px] text-[#171717]">Đã hoàn thành</p>
          <div className="flex flex-col gap-1 items-end w-full">
            <div className="bg-[#e5e5e5] h-2 overflow-hidden rounded-full w-full">
              <div className="bg-gradient-to-r from-[#f99d0d] to-[#db3e2c] h-full w-[65%]" />
            </div>
            <p className="font-medium leading-5 text-[14px] text-[#171717]">
              <span className="text-[#f99d0d]">65</span>/120
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button className="bg-[#f99d0d] flex gap-2 items-center justify-center rounded-2xl px-6 py-3 w-full active:opacity-80" onClick={onSubmit}>
            <span className="font-semibold leading-6 text-[16px] text-white">Nộp bài</span>
            <Send aria-hidden="true" className="text-white" size={24} strokeWidth={2} />
          </button>
          <button className="flex items-center justify-center rounded-xl p-3 w-full active:bg-[#fff3df]" onClick={onClose}>
            <span className="font-semibold leading-6 text-[16px] text-[#f99d0d]">Kiểm tra lại</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseTestTakingScreen() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'Từng câu' | 'Tất cả câu'>('Từng câu');
  const [showQuestionBoard, setShowQuestionBoard] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  return (
    <div className="bg-[#fafafa] overflow-auto relative size-full">
      <LightStatusBar />
      <header className="sticky top-0 z-20 bg-white px-2 pb-3 pt-[50px]">
        <div className="flex gap-2 items-start py-3">
          <button aria-label="Quay lại" className="flex items-center justify-center size-6 text-[#171717] active:opacity-70" onClick={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1')}>
            <ChevronLeft aria-hidden="true" size={26} strokeWidth={2} />
          </button>
          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
            <h1 className="font-semibold leading-6 text-[16px] text-[#171717]">Đề thi thử số 1</h1>
            <div className="flex gap-1 items-center w-full">
              <div className="bg-[#e5e5e5] flex-1 h-2 overflow-hidden rounded-full">
                <div className="bg-gradient-to-r from-[#f99d0d] to-[#db3e2c] h-full w-[65%]" />
              </div>
              <p className="leading-4 min-w-9 text-right text-[12px]">
                <span className="font-medium text-[#f99d0d]">65</span>
                <span className="text-[#171717]">/120</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="sticky top-[116px] z-10 bg-white">
        <div className="flex gap-3 items-center px-3 py-1">
          <div className="bg-[#f5f5f5] flex flex-1 items-center rounded-full p-1">
            {(['Từng câu', 'Tất cả câu'] as const).map((mode) => (
              <button key={mode} className={`flex-1 rounded-full px-2 py-1 text-[14px] leading-5 ${viewMode === mode ? 'bg-white text-[#171717]' : 'text-black/50'}`} onClick={() => setViewMode(mode)}>
                {mode}
              </button>
            ))}
          </div>
          <button className="flex gap-1 items-center py-1 text-[#171717] active:opacity-75" onClick={() => setShowQuestionBoard(true)}>
            <span className="font-semibold leading-5 text-[14px] whitespace-nowrap">Bảng câu hỏi</span>
            <ChevronDown aria-hidden="true" size={24} strokeWidth={2} />
          </button>
        </div>
        <div className="border-b border-[#e5e5e5] flex overflow-x-auto">
          {['Tiếng Việt', 'Tiếng Anh', 'Toán Học', 'Tư Duy Khoa Học'].map((tab, index) => (
            <button key={tab} className={`min-h-10 px-5 py-2 whitespace-nowrap text-[14px] leading-5 ${index === 0 ? 'border-b-2 border-[#f99d0d] text-[#f99d0d]' : 'text-black/50'}`}>
              {tab}
            </button>
          ))}
        </div>
      </section>

      <main className="flex flex-col gap-3 px-0 py-3 pb-[148px]">
        <div className="flex gap-1 px-3 leading-5 text-[14px]">
          <span className="text-[#525252]">Phần:</span>
          <span className="font-semibold text-[#171717]">Tiếng Việt</span>
        </div>
        <section className="bg-white flex flex-col gap-4 rounded-t-[20px] px-3 pb-3 pt-2">
          <div className="flex flex-col gap-1 text-[14px] leading-5">
            <p className="font-semibold text-[#f99d0d]">Câu 1</p>
            <div className="text-[#171717]">
              <p>"Tiếng Việt có những đặc sắc của một thứ tiếng đẹp, một thứ tiếng hay. Nói thế có nghĩa là nói rằng: tiếng Việt là một thứ tiếng hài hòa về mặt âm hưởng, thanh điệu mà cũng rất tế nhị, uyển chuyển trong cách đặt câu. Nói thế cũng có nghĩa là nói rằng: tiếng Việt có đầy đủ khả năng để diễn đạt tình cảm, tư tưởng của người Việt Nam và để thỏa mãn cho yêu cầu của đời sống văn hóa nước nhà qua các thời kỳ lịch sử."</p>
              <p>(Nguồn: Đặng Thai Mai, Tiếng Việt, một biểu hiện hùng hồn của sức sống dân tộc)</p>
              <p>Theo đoạn trích, đặc điểm nổi bật nào của tiếng Việt được tác giả đề cập?</p>
            </div>
          </div>
          <AnswerOption letter="A" selected>Tiếng Việt vừa giàu cảm xúc, vừa linh hoạt trong diễn đạt.</AnswerOption>
          <AnswerOption letter="B">Tiếng Việt có âm điệu hài hòa và khả năng biểu đạt sâu sắc.</AnswerOption>
          <AnswerOption letter="C">Tiếng Việt vừa uyển chuyển trong cách nói, vừa dễ sử dụng trong văn chương.</AnswerOption>
        </section>
      </main>

      <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-white border-t border-[#e5e5e5] flex flex-col gap-3 p-2">
        <div className="flex items-center justify-between">
          <button className="flex gap-1 items-center justify-center opacity-50 px-2 py-1 text-[#fbbd5d]">
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={2} />
            <span className="font-semibold leading-5 text-[14px]">Câu trước</span>
          </button>
          <p className="font-semibold leading-5 text-[14px] text-[#171717]">1/120</p>
          <button className="flex gap-1 items-center justify-center px-2 py-1 text-[#f99d0d] active:opacity-75">
            <span className="font-semibold leading-5 text-[14px]">Câu sau</span>
            <ChevronRight aria-hidden="true" size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="bg-white border border-[#e5e5e5] flex flex-1 items-center justify-center gap-1 min-w-[160px] rounded-lg p-2">
            <Timer aria-hidden="true" className="text-[#f99d0d]" size={24} strokeWidth={2} />
            <span className="font-bold leading-6 text-[16px] text-[#171717]">2:00:00</span>
          </div>
          <button className="bg-[#f99d0d] flex flex-1 items-center justify-center gap-1 rounded-xl px-4 py-2 active:opacity-80" onClick={() => setShowSubmitConfirm(true)}>
            <span className="font-semibold leading-6 text-[16px] text-white">Nộp Bài</span>
            <Send aria-hidden="true" className="text-white" size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto bg-white flex items-center justify-center">
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
      {showQuestionBoard && <QuestionBoardSheet onClose={() => setShowQuestionBoard(false)} />}
      {showSubmitConfirm && <SubmitConfirmModal onClose={() => setShowSubmitConfirm(false)} onSubmit={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1/result')} />}
    </div>
  );
}
