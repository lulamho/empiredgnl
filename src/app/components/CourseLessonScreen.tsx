import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CirclePlay, Clock3, Download, ExternalLink, FileText, GraduationCap, Image, Info, List, Minus, Music2, Plus, Send, Video, Wifi, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import imgLessonThumb from '../../assets/prototype/lesson-thumb-docs.png';
import imgPdfPreview from '../../assets/prototype/pdf-preview-page.png';

function DarkStatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pt-[21px] top-0 w-full z-20">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
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

function DocumentRow({ done = false, onOpen }: { done?: boolean; onOpen?: () => void }) {
  return (
    <button className="flex gap-2 items-center min-h-10 py-3 text-left w-full active:opacity-75" onClick={onOpen}>
      <FileText aria-hidden="true" className="text-[#f99d0d] shrink-0" size={24} strokeWidth={2} />
      <span className="flex-1 font-medium leading-6 min-w-0 text-[16px] text-white truncate">File name.pdf</span>
      {done ? (
        <span className="bg-[#31c979] flex items-center justify-center rounded-full size-6 shrink-0">
          <Check aria-hidden="true" className="text-white" size={16} strokeWidth={3} />
        </span>
      ) : (
        <ExternalLink aria-hidden="true" className="text-white shrink-0" size={24} strokeWidth={2} />
      )}
    </button>
  );
}

function TestRow({ done = false, onOpen }: { done?: boolean; onOpen?: () => void }) {
  return (
    <button className="flex gap-2 items-center min-h-10 py-3 text-left w-full active:opacity-75" onClick={onOpen}>
      <GraduationCap aria-hidden="true" className="text-[#f99d0d] shrink-0" size={24} strokeWidth={2} />
      <span className="flex-1 font-medium leading-6 min-w-0 text-[16px] text-white truncate">Test name</span>
      {done ? (
        <span className="bg-[#31c979] flex items-center justify-center rounded-full size-6 shrink-0">
          <Check aria-hidden="true" className="text-white" size={16} strokeWidth={3} />
        </span>
      ) : (
        <ChevronRight aria-hidden="true" className="text-white shrink-0" size={24} strokeWidth={2} />
      )}
    </button>
  );
}

const lessonDiscussionItems = [
  { initial: 'L', name: 'Nguyễn Vân Anh', time: '9:30', text: 'Chào các bạn, cô ơi, up tiếp video bài số 3 giúp tụi em' },
  { initial: 'M', name: 'Trần Minh Quân', time: '9:45', text: 'Em đã hoàn thành phần bài tập cuối rồi ạ.' },
  { initial: 'H', name: 'Phạm Hồng Nhung', time: '10:00', text: 'Bạn nào cần hỗ trợ, mình sẵn sàng giúp đỡ nhé!' },
  { initial: 'T', name: 'Lê Thị Thu Trang', time: '10:15', text: 'Cô ơi, phần bài tập này khó quá, em chưa hiểu lắm.' },
  { initial: 'D', name: 'Đỗ Đức Duy', time: '10:30', text: 'Mình vừa gửi tài liệu tham khảo cho mọi người.' },
  { initial: 'N', name: 'Ngô Ngọc Nhi', time: '10:45', text: 'Ai muốn trao đổi nhóm thì phản hồi giúp nhé!' },
  { initial: 'V', name: 'Vũ Văn Vinh', time: '11:00', text: 'Em đã xem video bài số 3, rất hữu ích ạ.' },
];

function LessonDiscussionRow({ initial, name, text, time }: { initial: string; name: string; text: string; time: string }) {
  return (
    <div className="flex gap-2 items-start px-3 py-1 w-full">
      <div className="bg-[#fff3df] flex items-center justify-center rounded-full size-8 shrink-0">
        <span className="leading-5 text-[14px] text-[#895607] text-center">{initial}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 min-w-0 py-1">
        <div className="flex gap-0.5 items-center whitespace-nowrap">
          <p className="font-semibold leading-4 text-[12px] text-[#f99d0d]">{name}</p>
          <span className="leading-[14px] text-[11px] text-[#737373]">•</span>
          <p className="leading-[14px] text-[11px] text-white/60">{time}</p>
        </div>
        <p className="leading-4 text-[12px] text-white">{text}</p>
      </div>
    </div>
  );
}

function LessonDiscussionComposer() {
  return (
    <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-[#262626] flex flex-col gap-2 p-2 z-20">
      <div className="flex gap-2 items-start w-full">
        <button className="bg-black/20 border border-white/10 flex flex-1 items-center rounded-[50px] px-3 py-2 text-left active:bg-black/30">
          <span className="leading-5 text-[14px] text-white">Viết thảo luận...</span>
        </button>
        <button aria-label="Gửi" className="bg-[#f99d0d]/50 flex items-center justify-center rounded-full p-2 text-[#fab13d] active:opacity-75">
          <Send aria-hidden="true" size={24} strokeWidth={2} />
        </button>
      </div>
      <div className="flex gap-2 items-start overflow-x-auto">
        <button className="bg-[#33200b] border border-[#f99d0d]/10 flex gap-1 items-center justify-center rounded-[20px] py-1 pl-1 pr-2 text-[#f99d0d] active:opacity-75">
          <GraduationCap aria-hidden="true" size={20} strokeWidth={2} />
          <span className="font-medium leading-4 text-[12px] whitespace-nowrap">Xem trước</span>
        </button>
        <button className="bg-[#33200b] border border-[#f99d0d]/10 flex gap-1 items-center justify-center rounded-[20px] py-1 pl-1 pr-2 text-[#f99d0d] active:opacity-75">
          <Info aria-hidden="true" size={20} strokeWidth={2} />
          <span className="font-medium leading-4 text-[12px] whitespace-nowrap">Trợ giúp LaTex</span>
        </button>
        <button className="bg-[#33200b] border border-[#f99d0d]/10 flex gap-1 items-center justify-center rounded-[20px] py-1 pl-1 pr-2 text-[#f99d0d] active:opacity-75">
          <Image aria-hidden="true" size={20} strokeWidth={2} />
          <span className="font-medium leading-4 text-[12px] whitespace-nowrap">Hình ảnh (0/3)</span>
        </button>
      </div>
    </div>
  );
}

function VideoRow({ done = false, playing = false }: { done?: boolean; playing?: boolean }) {
  return (
    <button className="flex gap-2 h-12 items-center py-3 text-left w-full active:opacity-75">
      <Video aria-hidden="true" className="text-[#f99d0d] shrink-0" size={24} strokeWidth={2} />
      <span className="flex-1 font-medium leading-6 min-w-0 text-[16px] text-white truncate">Video name</span>
      {done ? (
        <span className="bg-[#31c979] flex items-center justify-center rounded-full size-6 shrink-0">
          <Check aria-hidden="true" className="text-white" size={16} strokeWidth={3} />
        </span>
      ) : playing ? (
        <Music2 aria-hidden="true" className="text-white shrink-0" size={24} strokeWidth={2} />
      ) : (
        <CirclePlay aria-hidden="true" className="text-white shrink-0" size={24} strokeWidth={2} />
      )}
    </button>
  );
}

function VideoListSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <button aria-label="Đóng danh sách videos" className="absolute inset-0 bg-black/50 w-full" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 bg-[#262626] flex flex-col max-h-[746px] overflow-hidden rounded-t-[24px]">
        <div className="h-12 relative shrink-0 w-full">
          <button aria-label="Đóng" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 flex items-center justify-center rounded-full size-8 active:opacity-75" onClick={onClose}>
            <X aria-hidden="true" size={20} strokeWidth={2.4} />
          </button>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold leading-6 text-[16px] text-center text-white w-[305px]">Danh sách videos</p>
        </div>
        <div className="flex gap-1 justify-end font-medium leading-5 px-3 text-[14px] w-full">
          <span className="text-[#f99d0d]">15</span>
          <span className="text-white">videos</span>
        </div>
        <div className="flex flex-col overflow-auto px-3 pb-[34px] w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <VideoRow key={index} done={index === 0} playing={index === 1} />
          ))}
        </div>
        <div className="absolute bottom-0 h-[34px] left-0 right-0 flex items-center justify-center bg-[#262626]">
          <div className="bg-white h-[5px] rounded-full w-[144px]" />
        </div>
      </div>
    </div>
  );
}

function DrawerLessonStats({ progress = false }: { progress?: boolean }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        <span className="flex gap-1 items-center text-[#f99d0d] text-[11px] leading-[14px]">
          <CirclePlay aria-hidden="true" size={16} strokeWidth={2} />
          6
        </span>
        <span className="flex gap-1 items-center text-[#f99d0d] text-[11px] leading-[14px]">
          <FileText aria-hidden="true" size={16} strokeWidth={2} />
          3
        </span>
        <span className="flex gap-1 items-center text-[#f99d0d] text-[11px] leading-[14px]">
          <GraduationCap aria-hidden="true" size={16} strokeWidth={2} />
          7
        </span>
      </div>
      {progress && (
        <div className="flex gap-1 items-center w-[130px]">
          <div className="bg-[#e5e5e5] h-1 rounded-[20px] flex-1 overflow-hidden">
            <div className="bg-[#f99d0d] h-full w-[65%]" />
          </div>
          <span className="text-[11px] text-white w-7 text-right">65%</span>
        </div>
      )}
    </div>
  );
}

function DrawerLessonRow({ progress = false, title }: { progress?: boolean; title: string }) {
  return (
    <button className="bg-[#121212] flex flex-col gap-1 justify-center pl-8 pr-2 py-2 text-left w-full active:bg-[#1a1a1a]">
      <p className="leading-5 text-[14px] text-white truncate">{title}</p>
      <DrawerLessonStats progress={progress} />
    </button>
  );
}

function DrawerSubjectRow({ open = false, subject }: { open?: boolean; subject: string }) {
  return (
    <button className="bg-[#262626] flex gap-1 items-center pl-3 pr-2 py-2 text-left w-full active:opacity-80">
      <p className="flex-1 font-medium leading-5 text-[14px] text-white">{subject}</p>
      <p className="shrink-0 leading-5 text-[14px] text-white">(1 bài học)</p>
      {open ? <ChevronUp aria-hidden="true" size={20} strokeWidth={2} /> : <ChevronDown aria-hidden="true" size={20} strokeWidth={2} />}
    </button>
  );
}

function LessonSideMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <button aria-label="Đóng nội dung khoá học" className="absolute inset-0 bg-black/50 w-full" onClick={onClose} />
      <aside className="absolute bottom-0 right-0 top-0 bg-[#121212] flex flex-col overflow-hidden pt-[50px] shadow-[-4px_0px_16px_rgba(0,0,0,0.3)] w-[347px]">
        <div className="flex gap-2 items-center px-3 py-2 w-full">
          <h2 className="flex-1 font-semibold leading-7 min-w-0 text-[20px] text-white">Nội dung khoá học</h2>
          <button aria-label="Đóng" className="flex items-center justify-center size-6 text-white active:opacity-70" onClick={onClose}>
            <X aria-hidden="true" size={24} strokeWidth={2} />
          </button>
        </div>
        <div className="flex gap-3 items-center pb-1 px-3 w-full">
          <div className="flex gap-1 items-center text-white">
            <BookOpen aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
            <span className="font-medium leading-5 text-[14px]">12 Bài học</span>
          </div>
          <div className="flex gap-0.5 items-center text-white">
            <Clock3 aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
            <span className="font-medium leading-5 text-[14px]">30p/ buổi</span>
          </div>
        </div>
        <div className="flex flex-col overflow-auto py-2 w-full">
          <div className="bg-[#33200b] flex gap-1 items-center pl-3 pr-2 py-3 w-full">
            <p className="flex-1 font-semibold leading-5 text-[14px] text-[#f99d0d]">15 Đề Thực Chiến</p>
            <Minus aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
          </div>
          <DrawerSubjectRow open subject="Ngữ văn" />
          <DrawerLessonRow progress title="Chữa đề thực chiến V-SAT Ngữ Văn 1" />
          <DrawerLessonRow title="Chữa đề thực chiến V-SAT Ngữ Văn 2" />
          <DrawerSubjectRow open subject="Toán học" />
          <DrawerSubjectRow subject="Tiếng anh" />
          <DrawerSubjectRow subject="Vật lý" />
          <DrawerSubjectRow subject="Sinh học" />
          <div className="bg-[#33200b] flex gap-1 items-center pl-3 pr-2 py-3 w-full">
            <p className="flex-1 font-semibold leading-5 text-[14px] text-[#f99d0d]">5 Đề Tham Khảo</p>
            <Plus aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
          </div>
        </div>
        <div className="mt-auto h-[34px] flex items-center justify-center bg-[#121212]">
          <div className="bg-white h-[5px] rounded-full w-[144px]" />
        </div>
      </aside>
    </div>
  );
}

function DocumentPreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 left-0 right-0 mx-auto max-w-[393px] z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
      <button aria-label="Đóng tài liệu" className="absolute right-4 top-[67px] bg-black/60 flex items-center justify-center rounded-full size-10 text-white active:opacity-75" onClick={onClose}>
        <X aria-hidden="true" size={24} strokeWidth={2} />
      </button>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5f5f5] flex flex-col gap-4 overflow-hidden rounded-xl w-full max-w-[377px]">
        <div className="bg-white flex gap-2 items-center p-2 w-full">
          <p className="flex-1 font-medium leading-5 min-w-0 overflow-hidden text-[14px] text-[#171717] text-ellipsis whitespace-nowrap">Chương 1- bài 1.pdf</p>
          <div className="flex gap-4 items-center shrink-0">
            <div className="bg-white border border-[#e0e0e0] flex items-center justify-between rounded-[11px] px-2 py-1.5 w-[129px]">
              <ZoomOut aria-hidden="true" className="text-[#444]" size={20} strokeWidth={2} />
              <span className="font-medium leading-5 text-[14px] text-[#444] whitespace-nowrap">100%</span>
              <ZoomIn aria-hidden="true" className="text-[#444]" size={20} strokeWidth={2} />
            </div>
            <Download aria-hidden="true" className="text-[#171717]" size={24} strokeWidth={2} />
          </div>
        </div>
        <div className="relative h-[502px] w-full">
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgPdfPreview} />
        </div>
        <div className="bg-white flex items-center justify-between px-2 py-3 w-full">
          <button className="bg-white border border-[#e0e0e0] flex gap-1 items-center justify-center min-w-[110px] opacity-50 rounded-[11px] px-2 py-1.5">
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={2} />
            <span className="font-medium leading-4 overflow-hidden text-[12px] text-[#171717] text-ellipsis whitespace-nowrap">Trang trước</span>
          </button>
          <p className="font-medium leading-4 text-[12px] text-[#171717] whitespace-nowrap">1/7</p>
          <button className="bg-white border border-[#e0e0e0] flex gap-1 items-center justify-center min-w-[110px] rounded-[11px] px-2 py-1.5">
            <span className="font-medium leading-4 overflow-hidden text-[12px] text-[#171717] text-ellipsis whitespace-nowrap">Trang sau</span>
            <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseLessonScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tài liệu');
  const [showVideoList, setShowVideoList] = useState(false);
  const [showLessonMenu, setShowLessonMenu] = useState(false);
  const [showDocumentPreview, setShowDocumentPreview] = useState(false);

  return (
    <div className="bg-[#121212] overflow-auto relative size-full text-white">
      <DarkStatusBar />
      <div className="sticky top-0 bg-[#121212] flex items-center justify-between p-2 pt-[50px] w-full z-10">
        <button aria-label="Quay lại" className="bg-black/50 flex items-center justify-center rounded-full size-8 active:opacity-70" onClick={() => navigate('/courses/vsat')}>
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.4} />
        </button>
        <button className="bg-[#33200b] border border-[#f99d0d]/10 flex gap-1 items-center justify-center rounded-[20px] px-4 py-2 text-[#fab13d] active:opacity-75" onClick={() => setShowLessonMenu(true)}>
          <List aria-hidden="true" size={20} strokeWidth={2} />
          <span className="font-semibold leading-6 text-[16px]">Bài học</span>
        </button>
      </div>

      <div className="aspect-[393/221] overflow-hidden relative w-full">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgLessonThumb} />
      </div>

      <section className="bg-[#121212] flex flex-col gap-2 px-3 py-2">
        <h1 className="font-bold leading-6 text-[16px] text-white truncate">Chữa đề thực chiến V-SAT Ngữ Văn 1</h1>
        <button className="bg-[#262626] border border-white/10 flex gap-1 items-center justify-center rounded-[20px] px-4 py-2 w-fit active:opacity-75" onClick={() => setShowVideoList(true)}>
          <span className="font-semibold leading-6 text-[16px] text-[#f99d0d]">Danh sách videos</span>
          <ChevronDown aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
        </button>
      </section>

      <div className="bg-[#121212] border-b border-[#404040] flex gap-6 px-3">
        {['Tài liệu', 'Bài kiểm tra', 'Thảo luận'].map((tab) => (
          <button key={tab} className={`min-h-10 py-2 text-[14px] leading-5 font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-[#f99d0d] text-white' : 'text-white/60'}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Thảo luận' ? (
        <main className="flex flex-col gap-0 px-0 py-2 pb-[132px]">
          {lessonDiscussionItems.map((item) => (
            <LessonDiscussionRow key={`${item.name}-${item.time}`} {...item} />
          ))}
        </main>
      ) : (
        <main className="flex flex-col gap-2 px-3 py-2 pb-[42px]">
          <div className="flex gap-1 justify-end font-medium leading-5 text-[14px]">
            <span className="text-[#f99d0d]">{activeTab === 'Bài kiểm tra' ? '8' : '12'}</span>
            <span className="text-white">{activeTab === 'Bài kiểm tra' ? 'bài kiểm tra' : 'tài liệu'}</span>
          </div>
          <section className="bg-[#262626] flex flex-col overflow-hidden rounded-lg px-3 py-2 w-full">
            {activeTab === 'Bài kiểm tra'
              ? Array.from({ length: 8 }).map((_, index) => <TestRow key={index} done={index === 0} onOpen={() => navigate('/courses/vsat/lessons/ngu-van-1/tests/test-1')} />)
              : Array.from({ length: 8 }).map((_, index) => <DocumentRow key={index} done={index === 0} onOpen={() => setShowDocumentPreview(true)} />)}
          </section>
        </main>
      )}

      {activeTab === 'Thảo luận' && <LessonDiscussionComposer />}

      <div className={`fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto flex items-center justify-center ${activeTab === 'Thảo luận' ? 'bg-[#262626]' : 'bg-[#121212]'}`}>
        <div className="bg-white h-[5px] rounded-full w-[144px]" />
      </div>
      {showVideoList && <VideoListSheet onClose={() => setShowVideoList(false)} />}
      {showLessonMenu && <LessonSideMenu onClose={() => setShowLessonMenu(false)} />}
      {showDocumentPreview && <DocumentPreviewModal onClose={() => setShowDocumentPreview(false)} />}
    </div>
  );
}
