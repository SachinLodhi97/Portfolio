export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>✖</button>

        <iframe width="100%" height="400" src={video} allowFullScreen />
      </div>
    </div>
  );
}
