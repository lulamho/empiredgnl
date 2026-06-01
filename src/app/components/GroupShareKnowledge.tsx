import { useNavigate, useParams } from 'react-router';
import NhomChiaSeKienThuc from '../../imports/NhomChiaSeKienThuc/NhomChiaSeKienThuc';

export default function GroupShareKnowledge() {
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
        // Navigate to share document when clicking "Tài liệu" tab
        if (target.textContent?.includes('Tài liệu') && target.closest('[data-name="Tab Menu"]')) {
          navigate(`/groups/${groupId}/share-document`);
        }
        // Navigate to writing post when clicking in text area
        if (target.closest('textarea') || target.closest('[data-name="Input"]')) {
          navigate(`/groups/${groupId}/writing`);
        }
      }}
    >
      <NhomChiaSeKienThuc />
    </div>
  );
}
