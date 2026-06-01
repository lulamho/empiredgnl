import { useNavigate, useParams } from 'react-router';
import NhomChiaSeTaiLieu from '../../imports/NhomChiaSeTaiLieu/NhomChiaSeTaiLieu';

export default function GroupShareDocument() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div
      className="size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Navigate back when clicking close button
        if (target.closest('[data-name="Close"]')) {
          navigate(`/groups/${groupId}`);
        }
        // Navigate to post tab when clicking "Bài viết" tab
        if (target.textContent?.includes('Bài viết') && target.closest('[data-name="Tab Menu"]')) {
          navigate(`/groups/${groupId}/share-knowledge`);
        }
        // Navigate to document complete when clicking "Đăng bài" button (if it's enabled)
        if (target.textContent?.includes('Đăng bài') && target.closest('[data-name="Button"]') && !target.closest('.opacity-50')) {
          navigate(`/groups/${groupId}/share-document-complete`);
        }
      }}
    >
      <NhomChiaSeTaiLieu />
    </div>
  );
}
