import { CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";

export default function ExecutionPlan() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      <div className="mb-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full tracking-wide">
        Execution Plan
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Lộ trình Thực thi (12 Tháng)</h1>
      <p className="text-slate-600 mb-12 text-lg">
        Chiến lược "Vết dầu loang" nhằm kiểm soát rủi ro pha loãng thương hiệu và quản lý dòng tiền.
      </p>

      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-16 pb-8">
        
        {/* Phase 1 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ring-4 ring-white">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded mb-4">Giai đoạn 1 (Tháng 1 - 2)</div>
            <h2 className="text-2xl font-bold mb-3">Pilot & Proof of Concept</h2>
            <p className="text-slate-600 mb-6 font-medium">Thử nghiệm mức độ đón nhận, vá lỗi hệ thống Tracking và tối ưu quy trình logistics.</p>
            
            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> Lựa chọn 5-10 quán cafe Key Opinion Consumers tại TP.HCM.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> Thiết lập hệ thống Zalo Mini App Affiliate & Coupon Độc quyền.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> Ký kết Hợp đồng Ký gửi Tài sản mẫu.</li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">KPIs Mục tiêu</h4>
              <p className="text-sm text-slate-600">100% mã QR hoạt động mượt mà, ghi nhận Cookie 30 ngày. Đạt ít nhất 5 đơn hàng chuyển đổi đầu tiên.</p>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center ring-4 ring-white">
            <Circle className="w-4 h-4 text-slate-400" />
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-slate-400"></div>
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded mb-4">Giai đoạn 2 (Tháng 3 - 6)</div>
            <h2 className="text-2xl font-bold mb-3">Tối ưu, Mở rộng & Đẩy mạnh B2B</h2>
            <p className="text-slate-600 mb-6 font-medium">Scale-up mạng lưới lên 50 đối tác. Kích hoạt doanh thu gia công B2B.</p>
            
            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Phân loại không gian để bố trí đèn 3D tương thích.</li>
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Chào bán dịch vụ Gia công Merchandise Độc quyền.</li>
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Tổ chức định kỳ 3 tháng/lần kiểm tra bảo trì.</li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">KPIs Mục tiêu</h4>
              <p className="text-sm text-slate-600">Phủ sóng 50 cửa hàng. O2O chiếm 25% doanh thu bán lẻ. Ký 10 đơn hàng B2B.</p>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center ring-4 ring-white">
            <Circle className="w-4 h-4 text-slate-400" />
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-slate-200"></div>
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded mb-4">Giai đoạn 3 (Tháng 7 - 12)</div>
            <h2 className="text-2xl font-bold mb-3">Phủ sóng Toàn quốc & Co-Branding</h2>
            <p className="text-slate-600 mb-6 font-medium">Mở rộng ra Hà Nội, Đà Nẵng và tạo tiếng vang truyền thông.</p>
            
            <ul className="space-y-3 text-sm text-slate-600 mb-8">
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Khởi động chiến dịch Co-Branding Lễ Tết.</li>
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Áp dụng Hiệu ứng Mạng lưới giới thiệu chéo.</li>
              <li className="flex gap-3"><Circle className="w-5 h-5 text-slate-300 shrink-0" /> Tổng kết dữ liệu CRM/CDP để phân tích tệp khách hàng.</li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">KPIs Mục tiêu</h4>
              <p className="text-sm text-slate-600">Mạng lưới 100+ đối tác toàn quốc. Đưa ASA Studio thành biểu tượng Lifestyle.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 p-8 bg-slate-900 text-white rounded-2xl text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Sự Hình thành Một Biểu tượng</h2>
        <p className="text-slate-300 mb-0 leading-relaxed max-w-2xl mx-auto">
          Chiến lược O2O không chỉ là phương thức bán hàng mới. Nó là nền tảng đưa ASA Studio xác lập vị thế định hình phong cách sống hiện đại.
        </p>
      </div>

      <div className="mt-20 flex justify-start">
        <Link 
          href="/financial-plan" 
          className="inline-flex items-center gap-2 text-slate-500 px-6 py-3 rounded-md font-medium hover:text-slate-900 transition-colors"
        >
          Trở về
        </Link>
      </div>
    </div>
  );
}
