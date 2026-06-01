import { useNavigate, useParams } from 'react-router';
import NhomChiTiet from '../../imports/NhomChiTiet-1/NhomChiTiet-6-9100';

export default function GroupDetail() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div
      className="size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back when clicking back button
        if (target.closest('[data-name="Arrow Back"]')) {
          navigate('/groups');
        }
        // Navigate to share knowledge when clicking the input box
        if (target.closest('[data-name="Chat Box"]') || target.textContent?.includes('Chia sẻ kiến thức với nhóm')) {
          navigate(`/groups/${groupId}/share-knowledge`);
        }
      }}
    >
      <NhomChiTiet />
    </div>
  );
}
