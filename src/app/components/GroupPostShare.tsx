import { useNavigate, useParams } from 'react-router';
import NhomPostChiaSe from '../../imports/NhomPostChiaSe/NhomPostChiaSe';

export default function GroupPostShare() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div
      className="size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back when clicking back button
        if (target.closest('[data-name="Arrow Back"]')) {
          navigate(`/groups/${groupId}`);
        }
      }}
    >
      <NhomPostChiaSe />
    </div>
  );
}
