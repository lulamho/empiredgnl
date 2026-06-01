import { useNavigate, useParams } from 'react-router';
import NhomChiaSeTaiLieuXong from '../../imports/NhomChiaSeTaiLieuXong/NhomChiaSeTaiLieuXong';

export default function GroupShareDocumentComplete() {
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
        // Navigate to document tab when clicking "Bài viết" tab
        if (target.textContent?.includes('Bài viết') && target.closest('[data-name="Tab Menu"]')) {
          navigate(`/groups/${groupId}/share-knowledge`);
        }
        // Navigate back to group when clicking "Đăng bài" button
        if (target.textContent?.includes('Đăng bài') && target.closest('[data-name="Button"]')) {
          navigate(`/groups/${groupId}`);
        }
      }}
    >
      <NhomChiaSeTaiLieuXong />
    </div>
  );
}
