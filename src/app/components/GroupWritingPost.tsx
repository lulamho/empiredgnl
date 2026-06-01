import { useNavigate, useParams } from 'react-router';
import NhomDangVietChiaSe from '../../imports/NhomDangVietChiaSe/NhomDangVietChiaSe';

export default function GroupWritingPost() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div
      className="size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back when clicking close button
        if (target.closest('[data-name="Close"]')) {
          navigate(`/groups/${groupId}/share-knowledge`);
        }
        // Navigate to post share when clicking "Đăng bài" button
        if (target.textContent?.includes('Đăng bài') && target.closest('[data-name="Button"]')) {
          navigate(`/groups/${groupId}/post`);
        }
      }}
    >
      <NhomDangVietChiaSe />
    </div>
  );
}
