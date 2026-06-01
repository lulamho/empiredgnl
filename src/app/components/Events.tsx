import { useNavigate } from 'react-router';
import SuKienMainScreen from '../../imports/SuKienMainScreen/SuKienMainScreen';

export default function Events() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen overflow-y-auto"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const tabBarItem = target.closest('[data-name="Tab Bar Item"]');
        if (tabBarItem) {
          const text = tabBarItem.textContent || '';
          if (text.includes('Cộng đồng')) navigate('/');
          if (text.includes('Khoá học')) navigate('/courses');
          if (text.includes('TKB')) navigate('/schedule');
          if (text.includes('Live')) navigate('/live');
        }

        // Navigate to main feed when clicking "Sảnh chung" tab
        if (target.textContent?.includes('Sảnh chung') && target.closest('[data-name="Tab Menu"]')) {
          navigate('/');
        }

        // Navigate to groups when clicking "Nhóm" tab
        if (target.textContent?.includes('Nhóm') && target.closest('[data-name="Tab Menu"]')) {
          navigate('/groups');
        }

        // Navigate to event detail when clicking on event cards
        if (target.closest('[data-name="Event"]')) {
          const eventCard = target.closest('[data-name="Event"]');
          // Check which event was clicked based on the event title
          if (eventCard?.textContent?.includes('Mây lang thang')) {
            navigate('/events/1');
          } else if (eventCard?.textContent?.includes('Nhạc hội ngoài trời')) {
            navigate('/events/2');
          } else if (eventCard?.textContent?.includes('Hội thảo sáng tạo')) {
            navigate('/events/3');
          }
        }
      }}
    >
      <SuKienMainScreen />
    </div>
  );
}
