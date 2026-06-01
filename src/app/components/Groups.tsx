import { useNavigate } from 'react-router';
import NhomMainScreen from '../../imports/NhomMainScreen/NhomMainScreen';

export default function Groups() {
  const navigate = useNavigate();

  return (
    <div
      className="size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate to group detail when clicking on group cards
        if (target.closest('[data-group-card="true"]')) {
          navigate('/groups/1');
        }
        const tabBarItem = target.closest('[data-name="Tab Bar Item"]');
        if (tabBarItem) {
          const text = tabBarItem.textContent || '';
          if (text.includes('Cộng đồng')) navigate('/');
          if (text.includes('Khoá học')) navigate('/courses');
          if (text.includes('TKB')) navigate('/schedule');
          if (text.includes('Live')) navigate('/live');
        }
        // Navigate back to main feed when clicking "Sảnh chung" tab
        if (target.textContent?.includes('Sảnh chung') && target.closest('[data-name="Tab Menu"]')) {
          navigate('/');
        }
        // Navigate to events when clicking "Sự kiện" tab
        if (target.textContent?.includes('Sự kiện') && target.closest('[data-name="Tab Menu"]')) {
          navigate('/events');
        }
      }}
    >
      <NhomMainScreen />
    </div>
  );
}
