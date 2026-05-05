import { ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";

export default function MarketResearch() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Market Research</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Tâm lý học Không gian F&B
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Khái niệm <strong>"Không gian Thứ ba" (Third Place)</strong> lý tưởng hóa môi trường bên ngoài nhà ở và văn phòng làm việc. Điển hình là các quán cafe, nhà hàng mang tính biểu tượng, nơi sự trải nghiệm thẩm mỹ và phong cách sống được đặt lên hàng đầu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Hiệu ứng Bán hàng Thụ động (Soft-Selling)
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Trái ngược với áp lực chèo kéo tại showroom nội thất truyền thống, 
            quán cafe tạo <strong>"ngữ cảnh sử dụng" phi áp lực</strong>. Dwell time (thời gian lưu lại) 
            thường kéo dài 1-3 giờ. Tâm trạng khách hàng thư giãn, cởi mở nên 
            dễ bị hấp dẫn bởi thiết kế. Khách hàng tự nảy sinh mong muốn sở hữu 
            khi trực tiếp cảm nhận môi trường ánh sáng.
          </p>
          <div className="mt-auto space-y-3">
             <div className="flex justify-between text-[11px]">
               <span className="text-slate-400 uppercase tracking-widest">Dwell Time Avg</span>
               <span className="font-bold text-slate-800">1-3 Hours</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div className="bg-yellow-400 h-full w-[80%]"></div>
             </div>
          </div>
        </div>
        
        <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-center">
          <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-4">Điểm chuyển tiếp (Bridge) mượt mà</div>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Sự kết hợp giữa <strong>Environmental Design</strong> và một lời kêu gọi hành động tinh tế thông qua standee / table tent chứa mã QR giúp hoàn thiện phễu chuyển đổi tự nhiên.
          </p>
          <ul className="space-y-2 text-[11px] text-slate-400 uppercase tracking-widest font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Nhận diện thương hiệu tự nhiên
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Không đòi hỏi sự cam kết cao 
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Hành vi khám phá thông tin thoải mái
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Ma trận Lựa chọn Đối tác F&B
          </h3>
          <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase font-medium">Đối tác Mục tiêu</span>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Sự thành công phụ thuộc tuyệt đối vào độ tương thích ngôn ngữ thiết kế. Việc lựa chọn không gian được phân tích qua các tiêu chuẩn khắt khe, tránh rủi ro pha loãng thương hiệu (Brand Dilution).
        </p>

        <div className="overflow-x-auto text-[11px] md:text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 font-bold text-slate-800 uppercase tracking-widest w-1/4">Phong Cách Không Gian</th>
                <th className="py-3 px-4 font-bold text-slate-800 uppercase tracking-widest w-1/4">Đặc Trưng Thiết Kế</th>
                <th className="py-3 px-4 font-bold text-slate-800 uppercase tracking-widest w-1/4">Mức Độ Tương Thích</th>
                <th className="py-3 px-4 font-bold text-slate-800 uppercase tracking-widest w-1/4">Đề Xuất Sản Phẩm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4 align-top">
                  <span className="font-semibold text-slate-900 block">Tối giản (Minimalism) / Hàn Quốc</span>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">Hình khối cơ bản, tông sáng, ánh sáng tự nhiên, tối giản chi tiết, riêng tư.</td>
                <td className="py-4 px-4 align-top">
                  <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-700 rounded text-[9px] font-bold mb-1 uppercase tracking-widest">Rất Cao</span>
                  <p className="text-slate-500 mt-1">Phông nền hoàn hảo tôn vinh sự tinh tế. Tệp khách hàng trẻ, gu thẩm mỹ cao.</p>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">
                  Đèn màu pastel nhẹ hoặc trắng thanh khiết. Điểm nhấn thị giác tĩnh lặng 
                  <br/><span className="text-[10px] text-slate-400 italic mt-1 block">VD: Dumm Cafe</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4 align-top">
                  <span className="font-semibold text-slate-900 block">Công nghiệp (Industrial)</span>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">Chất liệu thô mộc (gạch trần, bê tông, kim loại), mạnh mẽ, không gian mở.</td>
                <td className="py-4 px-4 align-top">
                  <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-[9px] font-bold mb-1 uppercase tracking-widest">Cao</span>
                  <p className="text-slate-500 mt-1">Tạo tương phản đẹp với bề mặt in 3D tinh xảo của ASA.</p>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">
                  Cấu trúc hình học phức tạp, tông màu tối (đen mờ, xám than). Đặt khu vực bàn dài.
                  <br/><span className="text-[10px] text-slate-400 italic mt-1 block">VD: The Workshop Coffee</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4 align-top">
                  <span className="font-semibold text-slate-900 block">Di sản / Thư viện / Nghệ thuật</span>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">Yên tĩnh, học thuật. Nội thất gỗ, tranh nghệ thuật, màu trầm ấm, đậm dấu ấn thời gian.</td>
                <td className="py-4 px-4 align-top">
                  <span className="inline-block px-2 py-1 bg-yellow-400/20 text-yellow-700 rounded text-[9px] font-bold mb-1 uppercase tracking-widest">Rất Cao</span>
                  <p className="text-slate-500 mt-1">Đồng điệu triết lý bảo tồn và làm mới văn hóa.</p>
                </td>
                <td className="py-4 px-4 text-slate-500 leading-relaxed align-top">
                  Đèn NOLA (cảm hứng nón lá). Trưng bày trên kệ sách, bàn cá nhân.
                  <br/><span className="text-[10px] text-slate-400 italic mt-1 block">VD: Dabao Concept - Cố Đô</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Executive Summary
        </Link>
        <Link 
          href="/business-model" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Business Proposal <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
