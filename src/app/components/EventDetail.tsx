import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import SuKienChiTiet from '../../imports/SuKienChiTiet/SuKienChiTiet';
import SuKienChiTiet2 from '../../imports/SuKienChiTiet2/SuKienChiTiet2';
import SuKienChiTiet21 from '../../imports/SuKienChiTiet21/SuKienChiTiet21';

export default function EventDetail() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [hasJoined, setHasJoined] = useState(false);

  // Event 3 is upcoming (Sắp diễn ra), show the version with "Tham gia" button
  const isUpcomingEvent = eventId === '3';

  // Choose which component to show
  let EventComponent = SuKienChiTiet;
  if (isUpcomingEvent) {
    EventComponent = hasJoined ? SuKienChiTiet21 : SuKienChiTiet2;
  }

  return (
    <div
      className="relative mx-auto h-screen w-full max-w-[393px] overflow-y-auto bg-[#f5f5f5]"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Navigate back when clicking back arrow
        if (target.closest('[data-name="Arrow Back"]')) {
          navigate('/events');
        }

        // Handle "Tham gia" button click
        if (target.closest('[data-name="Button"]') && !hasJoined) {
          setHasJoined(true);
        }
      }}
    >
      <EventComponent />
    </div>
  );
}
