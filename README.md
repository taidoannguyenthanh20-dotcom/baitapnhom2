# 💻 BÀI TẬP: XÂY DỰNG WEBSITE DEVELOPER PORTFOLIO & CV BẰNG NEXT.JS

## 1. Giới thiệu

Xây dựng một website **Developer Portfolio & CV cá nhân** sử dụng **Next.js và Tailwind CSS**.

Website có mục đích giới thiệu thông tin cá nhân, học vấn, kinh nghiệm, kỹ năng, các dự án đã thực hiện và thông tin liên hệ.

Bài tập yêu cầu sinh viên áp dụng các kiến thức về:

* React Components
* Props
* Server Components
* Client Components
* Layout Components
* Next.js App Router
* Static Routing
* Nested Routing
* Dynamic Routing
* Catch-all Routing
* Navigation với `next/link`
* Tailwind CSS

---

# 2. Công nghệ yêu cầu

Sinh viên sử dụng:

* **Next.js**
* **React**
* **JavaScript hoặc JSX**
* **Tailwind CSS**
* **Git & GitHub**

> Khuyến khích sử dụng Next.js **App Router** với thư mục `app/`.

---

# 3. Yêu cầu giao diện

Website cần có giao diện rõ ràng, hiện đại và responsive trên máy tính và điện thoại.

Website tối thiểu phải có:

### 🏠 Trang Home

Đường dẫn:

```text
/
```

Hiển thị:

* Họ tên
* Vị trí/chức danh
* Giới thiệu ngắn
* Kỹ năng nổi bật
* Một số dự án tiêu biểu
* Nút điều hướng đến các trang khác

---

### 👤 Trang About

Đường dẫn:

```text
/about
```

Hiển thị thông tin giới thiệu cá nhân.

Trang About phải có ít nhất **2 route con**:

```text
/about/education
/about/experience
```

Trong đó:

* `/about/education`: thông tin học vấn
* `/about/experience`: thông tin kinh nghiệm

---

### 🛠️ Trang Skills

Đường dẫn:

```text
/skills
```

Hiển thị danh sách kỹ năng.

Ví dụ:

* HTML
* CSS
* JavaScript
* React
* Next.js
* Tailwind CSS
* Git & GitHub
* Python

Sinh viên có thể thay đổi danh sách kỹ năng theo thông tin cá nhân.

Yêu cầu sử dụng **Component + Props** để hiển thị các kỹ năng.

Ví dụ:

```jsx
<SkillCard skill={skill} />
```

Không được viết thủ công toàn bộ các Skill Card giống nhau.

---

### 📁 Trang Projects

Đường dẫn:

```text
/projects
```

Hiển thị danh sách các dự án cá nhân.

Mỗi Project nên có:

* Tên dự án
* Mô tả
* Công nghệ sử dụng
* Hình ảnh hoặc biểu tượng
* Nút xem chi tiết

Danh sách Project phải được lưu dưới dạng **Array** và sử dụng `.map()` để tạo giao diện.

Ví dụ:

```jsx
projects.map((project) => (
  <ProjectCard
    key={project.id}
    project={project}
  />
))
```

---

# 4. Dynamic Routing

Website bắt buộc phải có Dynamic Route cho trang chi tiết Project.

Sử dụng cấu trúc:

```text
app/projects/[id]/page.jsx
```

Ví dụ:

```text
/projects/1
/projects/2
/projects/3
```

Các URL trên phải sử dụng chung Dynamic Route:

```text
/projects/[id]
```

Nội dung hiển thị phải thay đổi dựa trên `id`.

Ví dụ:

```text
/projects/1 → Chi tiết Project 1

/projects/2 → Chi tiết Project 2

/projects/3 → Chi tiết Project 3
```

---

# 5. Catch-all Routing

Tạo thêm một khu vực tài liệu:

```text
/docs/[...slug]/page.jsx
```

Route này phải có khả năng xử lý nhiều cấp URL.

Ví dụ:

```text
/docs/react
/docs/react/components
/docs/react/components/props
```

Sinh viên có thể sử dụng phần này để tạo:

* Tài liệu cá nhân
* Kiến thức React
* Kiến thức Next.js
* Hướng dẫn sử dụng project

---

# 6. Contact

Đường dẫn:

```text
/contact
```

Tạo Form liên hệ gồm:

* Họ và tên
* Email
* Nội dung tin nhắn
* Nút Gửi

Form phải có khả năng tương tác với người dùng.

Bắt buộc sử dụng:

```jsx
"use client";
```

và:

```jsx
useState()
```

Sinh viên phải xử lý ít nhất:

* Nhập dữ liệu vào Form
* `onChange`
* `onSubmit`
* Hiển thị thông báo sau khi gửi

Ví dụ:

```text
Người dùng nhập thông tin
        ↓
     onChange
        ↓
     useState
        ↓
     Submit Form
        ↓
Hiển thị thông báo
```

---

# 7. Component

Website phải được chia thành nhiều Component thay vì viết toàn bộ giao diện trong một file.

Tối thiểu nên có:

```text
components/
├── Navbar.jsx
├── Footer.jsx
├── SectionTitle.jsx
├── SkillCard.jsx
├── ProjectCard.jsx
└── ContactForm.jsx
```

### Navbar

Hiển thị menu điều hướng đến các trang:

```text
Home
About
Skills
Projects
Contact
```

### Footer

Hiển thị thông tin cuối trang.

### SectionTitle

Là Component có khả năng tái sử dụng cho nhiều trang.

Ví dụ:

```jsx
<SectionTitle
  label="My Skills"
  title="Kỹ năng"
  description="Các công nghệ tôi đang sử dụng"
/>
```

---

# 8. Props

Sinh viên phải có ít nhất **một Component sử dụng Props**.

Có thể sử dụng:

```jsx
function SkillCard({ skill }) {
  return (
    <div>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </div>
  );
}
```

Ngoài ra, cần có ít nhất một ví dụ truyền các kiểu dữ liệu:

### String

```jsx
name="Nguyen Van A"
```

### Number

```jsx
age={20}
```

### Boolean

```jsx
isStudent={true}
```

### Array

```jsx
skills={["HTML", "CSS", "React"]}
```

Mục đích là thể hiện khả năng truyền dữ liệu từ Component cha xuống Component con thông qua Props.

---

# 9. Server Component

Sinh viên phải có ít nhất một Server Component.

Trong Next.js App Router, Component mặc định là **Server Component** nếu không sử dụng:

```jsx
"use client";
```

Ví dụ:

```jsx
export default function SectionTitle({ title }) {
  return (
    <h1>{title}</h1>
  );
}
```

Không cần thêm:

```jsx
"use server";
```

Server Component nên được sử dụng cho các phần giao diện không cần State hoặc tương tác trực tiếp phía trình duyệt.

---

# 10. Client Component

Sinh viên phải có ít nhất một Client Component.

Client Component phải sử dụng:

```jsx
"use client";
```

Ví dụ phù hợp:

```text
ContactForm
```

vì Form cần:

* `useState`
* `onChange`
* `onSubmit`
* Tương tác với người dùng

---

# 11. Layout Component

Sử dụng:

```text
app/layout.jsx
```

để tạo Layout chung cho website.

Layout tối thiểu phải chứa:

```jsx
<Navbar />

<main>
  {children}
</main>

<Footer />
```

Trong đó:

* `Navbar`: giao diện điều hướng chung
* `{children}`: nội dung của Page hiện tại
* `Footer`: giao diện cuối trang

Navbar và Footer phải được sử dụng chung giữa các trang, không được copy lại vào từng `page.jsx`.

---

# 12. Navigation

Sử dụng:

```jsx
import Link from "next/link";
```

để điều hướng giữa các trang.

Không sử dụng cách điều hướng bằng cách viết toàn bộ đường dẫn thủ công trong các nút nếu có thể sử dụng `Link`.

Ví dụ:

```jsx
<Link href="/about">
  About
</Link>

<Link href="/projects">
  Projects
</Link>
```

---

# 13. Yêu cầu cấu trúc thư mục

Project tham khảo:

```text
my-portfolio/
│
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── not-found.jsx
│   │
│   ├── about/
│   │   ├── page.jsx
│   │   ├── education/
│   │   │   └── page.jsx
│   │   └── experience/
│   │       └── page.jsx
│   │
│   ├── skills/
│   │   └── page.jsx
│   │
│   ├── projects/
│   │   ├── page.jsx
│   │   └── [id]/
│   │       ├── page.jsx
│   │       └── loading.jsx
│   │
│   ├── contact/
│   │   └── page.jsx
│   │
│   └── docs/
│       └── [...slug]/
│           └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SectionTitle.jsx
│   ├── SkillCard.jsx
│   ├── ProjectCard.jsx
│   └── ContactForm.jsx
│
├── public/
│
├── package.json
└── README.md
```

> Đây là cấu trúc tham khảo. Sinh viên có thể tổ chức Component khác nhau nhưng phải đảm bảo đầy đủ các chức năng được yêu cầu.

---

