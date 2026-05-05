import { ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";

export default function MarketResearch() {
  return (
    <div className="max-w-5xl mx-auto px-12 py-16">
      <div className="mb-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full tracking-wide">
        Market Research
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Tâm lý học Không gian F&B</h1>
      <div className="w-16 h-1 bg-yellow-400 mb-10"></div>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="flex-1">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Khái niệm <strong>"Không gian Thứ ba" (Third Place)</strong> lý tưởng hóa môi trường bên ngoài nhà ở và văn phòng làm việc. Điển hình là các quán cafe, nhà hàng mang tính biểu tượng, nơi sự trải nghiệm thẩm mỹ và phong cách sống được đặt lên hàng đầu.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <Coffee className="w-5 h-5 text-yellow-500" />
              Hiệu ứng Bán hàng Thụ động (Soft-Selling)
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Trái ngược với áp lực chèo kéo tại showroom nội thất truyền thống, 
              quán cafe tạo <strong>"ngữ cảnh sử dụng" phi áp lực</strong>. Dwell time (thời gian lưu lại) 
              thường kéo dài 1-3 giờ. Tâm trạng khách hàng thư giãn, cởi mở nên 
              dễ bị hấp dẫn bởi thiết kế. Khách hàng tự nảy sinh mong muốn sở hữu 
              khi trực tiếp cảm nhận môi trường ánh sáng.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
          <h3 className="text-2xl font-bold mb-4 z-10">Điểm chuyển tiếp (Bridge) mượt mà</h3>
          <p className="text-slate-300 mb-6 z-10">
            Sự kết hợp giữa <strong>Environmental Design</strong> và một lời kêu gọi hành động tinh tế thông qua standee / table tent chứa mã QR giúp hoàn thiện phễu chuyển đổi tự nhiên.
          </p>
          <ul className="space-y-3 z-10 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span> Nhận diện thương hiệu tự nhiên
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span> Không đòi hỏi sự cam kết cao 
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span> Hành vi khám phá thông tin thoải mái
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8">Ma trận Lựa chọn Đối tác F&B</h2>
      <p className="text-slate-600 mb-8">
        Sự thành công phụ thuộc tuyệt đối vào độ tương thích ngôn ngữ thiết kế. Việc lựa chọn không gian được phân tích qua các tiêu chuẩn khắt khe, tránh rủi ro pha loãng thương hiệu (Brand Dilution).
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-y border-slate-200">
              <th className="py-4 px-6 font-semibold text-slate-800 w-1/4">Phong Cách Không Gian</th>
              <th className="py-4 px-6 font-semibold text-slate-800 w-1/4">Đặc Trưng Thiết Kế</th>
              <th className="py-4 px-6 font-semibold text-slate-800 w-1/4">Mức Độ Tương Thích</th>
              <th className="py-4 px-6 font-semibold text-slate-800 w-1/4">Đề Xuất Sản Phẩm</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-5 px-6">
                <span className="font-bold text-slate-800 block">Tối giản (Minimalism) / Hàn Quốc</span>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">Hình khối cơ bản, tông sáng, ánh sáng tự nhiên, tối giản chi tiết, riêng tư.</td>
              <td className="py-5 px-6">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold mb-2">Rất Cao</span>
                <p className="text-xs text-slate-500">Phông nền hoàn hảo tôn vinh sự tinh tế. Tệp khách hàng trẻ, gu thẩm mỹ cao.</p>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">
                Đèn màu pastel nhẹ hoặc trắng thanh khiết. Điểm nhấn thị giác tĩnh lặng 
                <br/><span className="text-xs text-slate-400 italic">VD: Dumm Cafe</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-5 px-6">
                <span className="font-bold text-slate-800 block">Công nghiệp<br/>(Industrial)</span>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">Chất liệu thô mộc (gạch trần, bê tông, kim loại), mạnh mẽ, không gian mở.</td>
              <td className="py-5 px-6">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold mb-2">Cao</span>
                <p className="text-xs text-slate-500">Tạo tương phản đẹp với bề mặt in 3D tinh xảo của ASA.</p>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">
                Cấu trúc hình học phức tạp, tông màu tối (đen mờ, xám than). Đặt khu vực bàn dài.
                <br/><span className="text-xs text-slate-400 italic">VD: The Workshop Coffee</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-5 px-6">
                <span className="font-bold text-slate-800 block">Di sản / Thư viện / Nghệ thuật</span>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">Yên tĩnh, học thuật. Nội thất gỗ, tranh nghệ thuật, màu trầm ấm, đậm dấu ấn thời gian.</td>
              <td className="py-5 px-6">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold mb-2">Rất Cao</span>
                <p className="text-xs text-slate-500">Đồng điệu triết lý bảo tồn và làm mới văn hóa.</p>
              </td>
              <td className="py-5 px-6 text-sm text-slate-600">
                Đèn NOLA (cảm hứng nón lá). Trưng bày trên kệ sách, bàn cá nhân.
                <br/><span className="text-xs text-slate-400 italic">VD: Dabao Concept - Cố Đô</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-20 flex justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 px-6 py-3 rounded-md font-medium hover:text-slate-900 transition-colors"
        >
          Trở về
        </Link>
        <Link 
          href="/business-model" 
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
        >
          Tiếp tục: Business Model <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
