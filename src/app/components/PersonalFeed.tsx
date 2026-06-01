import { useNavigate } from 'react-router';
import SanhChungTrangCaNhan from '../../imports/SanhChungTrangCaNhan/SanhChungTrangCaNhan';

export default function PersonalFeed() {
  const navigate = useNavigate();

  return (
    <div className="size-full relative">
      <SanhChungTrangCaNhan />
      <button
        aria-label="Quay lại"
        className="absolute left-0 top-[50px] z-50 h-[48px] w-[48px] cursor-pointer active:opacity-50"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}
