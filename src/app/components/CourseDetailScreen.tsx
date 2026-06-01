import { BookOpen, Bookmark, ChevronDown, ChevronLeft, ChevronUp, Clock3, FileText, GraduationCap, Image, Info, PlayCircle, Send, Share2, Star, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import imgCourseFlame from '../../assets/prototype/course-flame.svg';
import imgCourseTeacher from '../../assets/prototype/live-detail-team.png';
import imgCourseThumb from '../../assets/prototype/course-thumb-vsat.png';
import imgReviewProfile from '../../assets/prototype/post-profile-detail.png';

function StatusBar({ solid = false }: { solid?: boolean }) {
  return (
    <div className={`fixed content-stretch flex flex-col h-[50px] items-start left-0 right-0 mx-auto max-w-[393px] pt-[21px] top-0 w-full z-50 ${solid ? 'bg-white' : 'bg-transparent'}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
              <p className="font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
            </div>
          </div>
        </div>
        <div className="h-[10px] relative shrink-0 w-[124px]" />
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
              <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                  <path clipRule="evenodd" d="M18.448 0.514C18.969 0.514 19.2 0.745 19.2 1.285V10.938C19.2 11.478 18.969 11.709 18.448 11.709H16.971C16.45 11.709 16.219 11.478 16.219 10.938V1.285C16.219 0.745 16.45 0.514 16.971 0.514H18.448ZM12.862 2.571C13.383 2.571 13.614 2.802 13.614 3.342V10.938C13.614 11.478 13.383 11.709 12.862 11.709H11.385C10.864 11.709 10.633 11.478 10.633 10.938V3.342C10.633 2.802 10.864 2.571 11.385 2.571H12.862ZM7.276 5.143C7.797 5.143 8.028 5.374 8.028 5.914V10.938C8.028 11.478 7.797 11.709 7.276 11.709H5.799C5.278 11.709 5.047 11.478 5.047 10.938V5.914C5.047 5.374 5.278 5.143 5.799 5.143H7.276ZM1.69 7.714C2.211 7.714 2.442 7.945 2.442 8.485V10.938C2.442 11.478 2.211 11.709 1.69 11.709H0.752C0.231 11.709 0 11.478 0 10.938V8.485C0 7.945 0.231 7.714 0.752 7.714H1.69Z" fill="black" fillRule="evenodd" />
                </svg>
              </div>
              <div className="font-bold text-[14px] leading-none">⌁</div>
              <div className="h-[13px] relative shrink-0 w-[27.328px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                  <rect height="12" opacity="0.35" rx="3.8" stroke="black" width="24" x="0.5" y="0.5" />
                  <rect fill="black" height="9" rx="2.5" width="21" x="2" y="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingIcon({ children, label, onClick }: { children: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button aria-label={label} className="bg-black/50 flex items-center justify-center rounded-full size-8 active:opacity-70" onClick={onClick}>
      <span className="flex items-center justify-center text-white">{children}</span>
    </button>
  );
}

function LessonStats({ progress = false }: { progress?: boolean }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        <span className="flex gap-1 items-center text-[#f99d0d] text-[11px] leading-[14px]">
          <PlayCircle aria-hidden="true" size={16} strokeWidth={2} />
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
          <span className="text-[11px] text-[#171717] w-7 text-right">65%</span>
        </div>
      )}
    </div>
  );
}

function LessonRow({ onClick, title, progress = false }: { onClick?: () => void; title: string; progress?: boolean }) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component className="bg-[#fafafa] flex flex-col gap-1 justify-center pl-8 pr-2 py-2 text-left w-full active:bg-[#f5f5f5]" onClick={onClick}>
      <p className="text-[14px] leading-5 text-[#171717] truncate">{title}</p>
      <LessonStats progress={progress} />
    </Component>
  );
}

function SubjectRow({ onToggle, open = false, subject }: { onToggle: () => void; open?: boolean; subject: string }) {
  return (
    <button className="bg-white flex gap-1 items-center pl-3 pr-2 py-2 text-left w-full active:bg-[#fafafa]" onClick={onToggle}>
      <p className="flex-1 font-medium text-[14px] leading-5 text-[#171717] text-left">{subject}</p>
      <p className="shrink-0 text-[14px] leading-5 text-[#525252] text-right">(1 bài học)</p>
      {open ? <ChevronUp aria-hidden="true" size={20} strokeWidth={2} /> : <ChevronDown aria-hidden="true" size={20} strokeWidth={2} />}
    </button>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-start min-w-[160px] p-2">
      <div className="flex items-center justify-center text-[#f99d0d] size-6">{icon}</div>
      <p className="font-bold leading-6 text-[16px] text-[#171717] text-center whitespace-nowrap">{value}</p>
      <p className="leading-[14px] text-[11px] text-[#737373] text-center whitespace-nowrap">{label}</p>
    </div>
  );
}

function AboutContent() {
  return (
    <main className="flex flex-col gap-3 px-3 py-4 pb-[76px]">
      <section className="bg-white flex gap-2 items-start p-4 rounded-lg w-full">
        <img alt="" className="rounded-full size-12 shrink-0 object-cover" src={imgCourseTeacher} />
        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <p className="font-medium leading-5 text-[14px] text-[#525252] whitespace-nowrap">Empire Team</p>
          <div className="bg-[#694206] flex gap-1 items-center rounded-[20px] py-1 pl-1 pr-2 w-fit">
            <img alt="" className="size-4 shrink-0 object-contain" src={imgCourseFlame} />
            <p className="font-semibold leading-[14px] text-[11px] text-[#f99d0d] whitespace-nowrap">Hơn 10 năm kinh nghiệm</p>
          </div>
        </div>
      </section>

      <section className="bg-white flex flex-wrap items-start rounded-lg w-full">
        <MetricCard icon={<Star aria-hidden="true" className="fill-[#f99d0d]" size={24} strokeWidth={1.8} />} label="20 đánh giá" value="4.9" />
        <MetricCard icon={<Users aria-hidden="true" size={24} strokeWidth={2} />} label="Học viên" value="200" />
        <MetricCard icon={<BookOpen aria-hidden="true" size={24} strokeWidth={2} />} label="Bài học" value="6" />
        <MetricCard icon={<Clock3 aria-hidden="true" size={24} strokeWidth={2} />} label="Phút / Buổi" value="30" />
      </section>

      <section className="bg-white flex flex-col gap-1 px-4 py-3 rounded-lg w-full">
        <h2 className="font-semibold leading-6 text-[16px] text-[#171717]">Về khoá học</h2>
        <p className="leading-5 text-[14px] text-[#171717]">
          Khóa học được thiết kế đặc biệt để giúp học viên nắm vững kiến thức và tự tin chinh phục kỳ thi. Với phương pháp giảng dạy hiện đại, kết hợp luyện đề thực chiến và sửa đề chi tiết.
        </p>
      </section>
    </main>
  );
}

const discussionItems = [
  { initial: 'L', name: 'Nguyễn Vân Anh', time: '9:30', text: 'Chào các bạn, cô ơi, up tiếp video bài số 3 giúp tụi em' },
  { initial: 'M', name: 'Trần Minh Quân', time: '9:45', text: 'Em đã hoàn thành phần bài tập cuối rồi ạ.' },
  { initial: 'H', name: 'Phạm Hồng Nhung', time: '10:00', text: 'Bạn nào cần hỗ trợ, mình sẵn sàng giúp đỡ nhé!' },
  { initial: 'T', name: 'Lê Thị Thu Trang', time: '10:15', text: 'Cô ơi, phần bài tập này khó quá, em chưa hiểu lắm.' },
  { initial: 'D', name: 'Đỗ Đức Duy', time: '10:30', text: 'Mình vừa gửi tài liệu tham khảo cho mọi người.' },
  { initial: 'N', name: 'Ngô Ngọc Nhi', time: '10:45', text: 'Ai muốn trao đổi nhóm thì phản hồi giúp nhé!' },
  { initial: 'V', name: 'Vũ Văn Vinh', time: '11:00', text: 'Em đã xem video bài số 3, rất hữu ích ạ.' },
  { initial: 'A', name: 'An Anh Dương', time: '11:15', text: 'Các bạn nhớ nộp bài đúng hạn để cô chấm nhé!' },
];

function DiscussionRow({ initial, name, text, time }: { initial: string; name: string; text: string; time: string }) {
  return (
    <div className="flex gap-2 items-start px-3 py-1 w-full">
      <div className="bg-[#fff3df] flex items-center justify-center rounded-full size-8 shrink-0">
        <span className="leading-5 text-[14px] text-[#895607] text-center">{initial}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 min-w-0 py-1">
        <div className="flex gap-0.5 items-center whitespace-nowrap">
          <p className="font-semibold leading-4 text-[12px] text-[#171717]">{name}</p>
          <span className="leading-[14px] text-[11px] text-[#737373]">•</span>
          <p className="leading-[14px] text-[11px] text-[#737373]">{time}</p>
        </div>
        <p className="leading-4 text-[12px] text-[#171717]">{text}</p>
      </div>
    </div>
  );
}

function DiscussionContent() {
  return (
    <main className="flex flex-col gap-2 px-3 py-2 pb-[132px]">
      {discussionItems.map((item) => (
        <DiscussionRow key={`${item.name}-${item.time}`} {...item} />
      ))}
    </main>
  );
}

function ComposerChip({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <button className="bg-[#fef5e7] flex gap-1 items-center justify-center rounded-[20px] py-1 pl-1 pr-2 active:opacity-75">
      <span className="flex items-center justify-center text-[#f99d0d] size-5">{icon}</span>
      <span className="font-medium leading-4 text-[12px] text-[#171717] whitespace-nowrap">{children}</span>
    </button>
  );
}

function DiscussionComposer() {
  return (
    <div className="fixed bottom-[34px] left-0 right-0 mx-auto max-w-[393px] bg-white flex flex-col gap-2 p-2 z-40">
      <div className="flex gap-2 items-start w-full">
        <button className="bg-white border border-[#e5e5e5] flex flex-1 items-center rounded-[50px] px-3 py-2 text-left active:bg-[#fafafa]">
          <span className="leading-5 text-[14px] text-[#737373]">Viết thảo luận...</span>
        </button>
        <button aria-label="Gửi" className="bg-[#f99d0d]/50 flex items-center justify-center rounded-full p-2 text-white active:opacity-75">
          <Send aria-hidden="true" size={24} strokeWidth={2} />
        </button>
      </div>
      <div className="flex gap-2 items-start overflow-x-auto">
        <ComposerChip icon={<GraduationCap aria-hidden="true" size={20} strokeWidth={2} />}>Xem trước</ComposerChip>
        <ComposerChip icon={<Info aria-hidden="true" size={20} strokeWidth={2} />}>Trợ giúp LaTex</ComposerChip>
        <ComposerChip icon={<Image aria-hidden="true" size={20} strokeWidth={2} />}>Hình ảnh <span className="text-[#171717]">(0/3)</span></ComposerChip>
      </div>
    </div>
  );
}

const reviewItems = [
  {
    name: 'Lê Mai An',
    time: '1 ngày trước',
    text: 'Khóa học rất tốt, giáo viên nhiệt tình. Tôi đã cải thiện được điểm HSA từ 650 lên 850 chỉ sau 2 tháng học. Đặc biệt là phần luyện đề rất hay, giúp tôi làm quen với format đề thi thực tế.',
  },
  {
    name: 'Trần Văn Bình',
    time: '3 ngày trước',
    text: 'Nội dung khóa học rất chi tiết và dễ hiểu, phù hợp với những người mới bắt đầu. Các bài tập thực hành giúp tôi nhớ kiến thức lâu hơn.',
  },
  {
    name: 'Nguyễn Thị Hồng',
    time: '5 ngày trước',
    text: 'Giáo viên thân thiện và luôn sẵn sàng giải đáp thắc mắc. Tôi cảm thấy tự tin hơn rất nhiều khi bước vào kỳ thi, nhờ có khóa học này.',
  },
  {
    name: 'Phạm Quang Huy',
    time: '1 tuần trước',
    text: 'Phương pháp học tập hiện đại, có nhiều tài liệu tham khảo hữu ích. Khóa học đã giúp tôi nâng cao kỹ năng làm bài và quản lý thời gian hiệu quả hơn.',
  },
];

function RatingStars() {
  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((item) => (
        <Star key={item} aria-hidden="true" className="fill-[#f99d0d] text-[#f99d0d]" size={16} strokeWidth={1.7} />
      ))}
    </div>
  );
}

function ReviewCard({ name, text, time }: { name: string; text: string; time: string }) {
  return (
    <article className="bg-white flex flex-col gap-2 p-2 rounded-xl w-full">
      <div className="flex gap-2 items-start w-full">
        <img alt="" className="rounded-full size-8 shrink-0 object-cover" src={imgReviewProfile} />
        <div className="flex flex-1 flex-col min-w-0">
          <p className="font-semibold leading-5 text-[14px] text-[#171717]">{name}</p>
          <div className="flex gap-2 items-center w-full">
            <RatingStars />
            <p className="leading-4 text-[12px] text-[#737373] whitespace-nowrap">{time}</p>
          </div>
        </div>
      </div>
      <p className="leading-5 text-[14px] text-[#171717]">{text}</p>
    </article>
  );
}

function ReviewsContent() {
  return (
    <main className="flex flex-col gap-3 p-3 pb-[76px]">
      {reviewItems.map((item) => (
        <ReviewCard key={`${item.name}-${item.time}`} {...item} />
      ))}
    </main>
  );
}

export default function CourseDetailScreen() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Nội Dung');
  const [openSubjects, setOpenSubjects] = useState<Record<string, boolean>>({
    literature: true,
    math: true,
    english: true,
    physics: false,
    biology: false,
  });
  const toggleSubject = (subject: string) => {
    setOpenSubjects((current) => ({ ...current, [subject]: !current[subject] }));
  };

  return (
    <div className="bg-[#fafafa] overflow-auto relative size-full" onScroll={(event) => setIsScrolled(event.currentTarget.scrollTop > 150)}>
      <StatusBar solid={isScrolled} />
      <div className={`fixed top-[50px] left-0 right-0 mx-auto max-w-[393px] flex items-center justify-between p-2 w-full z-40 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <FloatingIcon label="Quay lại" onClick={() => navigate('/courses')}>
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.4} />
        </FloatingIcon>
        <div className="flex gap-4">
          <FloatingIcon label="Lưu">
            <Bookmark aria-hidden="true" size={18} strokeWidth={2.2} />
          </FloatingIcon>
          <FloatingIcon label="Chia sẻ">
            <Share2 aria-hidden="true" size={18} strokeWidth={2.2} />
          </FloatingIcon>
        </div>
      </div>

      <div className="relative aspect-[393/221] overflow-hidden w-full">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgCourseThumb} />
      </div>

      <section className="bg-white flex flex-col gap-1 px-3 py-2">
        <h1 className="font-semibold leading-7 text-[20px] text-[#171717]">Đánh giá năng lực V-SAT</h1>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <BookOpen aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
              <span className="font-medium text-[14px] leading-5 text-[#171717]">12 Bài học</span>
            </div>
            <div className="flex gap-1 items-center">
              <Clock3 aria-hidden="true" className="text-[#f99d0d]" size={20} strokeWidth={2} />
              <span className="font-medium text-[14px] leading-5 text-[#171717]">30p/ buổi</span>
            </div>
          </div>
          <div className="border border-[#e5e5e5] flex gap-0.5 items-center rounded-[20px] px-2 py-1">
            <Star aria-hidden="true" className="fill-[#f99d0d] text-[#f99d0d]" size={20} strokeWidth={1.8} />
            <span className="font-medium text-[14px] leading-5 text-black">4.9</span>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-[#e5e5e5] flex overflow-x-auto sticky top-[98px] z-30">
        {['Nội Dung', 'Tổng Quan', 'Thảo Luận', 'Đánh Giá'].map((tab) => (
          <button key={tab} className={`min-h-10 px-5 py-2 text-[14px] leading-5 font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-[#f99d0d] text-[#f99d0d]' : 'text-black/50'}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Tổng Quan' ? <AboutContent /> : activeTab === 'Thảo Luận' ? <DiscussionContent /> : activeTab === 'Đánh Giá' ? <ReviewsContent /> : (
      <main className="flex flex-col items-center overflow-hidden py-2 pb-[42px]">
        <div className="bg-[#f99d0d] flex gap-1 items-center pl-3 pr-2 py-3 w-full">
          <p className="flex-1 font-semibold text-[14px] leading-5 text-white">15 Đề Thực Chiến</p>
          <span className="text-white text-[20px] leading-none">−</span>
        </div>
        <SubjectRow onToggle={() => toggleSubject('literature')} open={openSubjects.literature} subject="Ngữ văn" />
        {openSubjects.literature && (
          <>
            <LessonRow onClick={() => navigate('/courses/vsat/lessons/ngu-van-1')} progress title="Chữa đề thực chiến V-SAT Ngữ Văn 1" />
            <LessonRow title="Chữa đề thực chiến V-SAT Ngữ Văn 2" />
          </>
        )}
        <SubjectRow onToggle={() => toggleSubject('math')} open={openSubjects.math} subject="Toán học" />
        {openSubjects.math && <LessonRow title="Chữa đề thực chiến V-SAT Toán Học" />}
        <SubjectRow onToggle={() => toggleSubject('english')} open={openSubjects.english} subject="Tiếng anh" />
        {openSubjects.english && (
          <>
            <LessonRow title="Chữa đề thực chiến V-SAT Toán Học" />
            <LessonRow title="Chữa đề thực chiến V-SAT Tiếng Anh 1" />
            <LessonRow title="Chữa đề thực chiến V-SAT Tiếng Anh 2" />
            <LessonRow title="Chữa đề thực chiến V-SAT Tiếng Anh 2" />
            <LessonRow title="Chữa đề thực chiến V-SAT Tiếng Anh 4" />
          </>
        )}
        <SubjectRow onToggle={() => toggleSubject('physics')} open={openSubjects.physics} subject="Vật lý" />
        {openSubjects.physics && <LessonRow title="Chữa đề thực chiến V-SAT Vật Lý" />}
        <SubjectRow onToggle={() => toggleSubject('biology')} open={openSubjects.biology} subject="Sinh học" />
        {openSubjects.biology && <LessonRow title="Chữa đề thực chiến V-SAT Sinh Học" />}
        <div className="bg-[#f99d0d] flex gap-1 items-center pl-3 pr-2 py-3 w-full">
          <p className="flex-1 font-semibold text-[14px] leading-5 text-white">5 Đề Tham Khảo</p>
          <span className="text-white text-[24px] leading-none">+</span>
        </div>
      </main>
      )}

      {activeTab === 'Thảo Luận' && <DiscussionComposer />}

      <div className={`fixed bottom-0 h-[34px] left-0 right-0 max-w-[393px] mx-auto flex items-center justify-center ${activeTab === 'Thảo Luận' ? 'bg-white' : 'bg-[#fafafa]'}`}>
        <div className="bg-black h-[5px] rounded-full w-[144px]" />
      </div>
    </div>
  );
}
