export default async function Docs({ params }) {
  const { slug } = await params; //

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Khu vực Tài liệu</h1>
      <p>Đường dẫn hiện tại bạn đang truy cập có các cấp như sau:</p>
      <ul className="list-disc ml-5 mt-2">
        {slug.map((item, index) => (
          <li key={index}>Cấp {index + 1}: <span className="font-semibold text-blue-600">{item}</span></li>
        ))}
      </ul>
    </div>
  );
}
