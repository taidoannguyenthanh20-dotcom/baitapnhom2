import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card">
      <div className="icon">🏠</div>
      <h2>Trang chủ</h2>
      <p>Chào mừng bạn đến với Demo Routing bằng React.</p>
      <Link to="/about" className="btn">Khám phá →</Link>
    </div>
  );
}
