export default function PropsDemo({ name, age, isStudent, skills }) {
  return (
    <section className="card mb-14">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="label">React Props</p>
          <h2 className="mt-2 text-2xl">Truyền dữ liệu bằng Props</h2>
        </div>
        <span className="chip self-start">Component demo</span>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        Component cha truyền String, Number, Boolean và Array xuống component
        con.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            String
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Họ tên: <strong>{name}</strong>
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Number
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Tuổi: <strong>{age}</strong>
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Boolean
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Sinh viên: <strong>{isStudent ? "Có" : "Không"}</strong>
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Array
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
