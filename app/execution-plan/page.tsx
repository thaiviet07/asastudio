import { CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";

export default function ExecutionPlan() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Execution Plan</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Lộ trình Thực thi (12 Tháng)
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Chiến lược "Vết dầu loang" nhằm kiểm soát rủi ro pha loãng thương hiệu và quản lý dòng tiền.
        </p>
      </div>

      <div className="relative border-l border-slate-200 ml-[11px] md:ml-[15px] space-y-12 pb-8 mb-12">
        
        {/* Phase 1 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Giai đoạn 1 (Tháng 1 - 2)</div>
            <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Pilot & Proof of Concept</h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">Thử nghiệm mức độ đón nhận, vá lỗi hệ thống Tracking và tối ưu quy trình logistics.</p>
            
            <ul className="space-y-3 text-xs text-slate-500 mb-8 mt-auto">
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></span> 
                Lựa chọn 5-10 quán cafe Key Opinion Consumers tại TP.HCM.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></span> 
                Thiết lập hệ thống Zalo Mini App Affiliate & Coupon Độc quyền.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></span> 
                Ký kết Hợp đồng Ký gửi Tài sản mẫu.
              </li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">KPIs Mục tiêu</h4>
                <p className="text-xs text-slate-600 font-medium tracking-tight">100% mã QR mượt mà. 5 đơn hàng đầu tiên.</p>
              </div>
              <div className="text-[10px] bg-white border border-slate-100 px-3 py-1.5 rounded text-slate-400 font-bold uppercase tracking-widest self-start md:self-auto">
                2 Tháng
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Giai đoạn 2 (Tháng 3 - 6)</div>
            <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Tối ưu, Mở rộng & Đẩy mạnh B2B</h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">Scale-up mạng lưới lên 50 đối tác. Kích hoạt doanh thu gia công B2B.</p>
            
            <ul className="space-y-3 text-xs text-slate-500 mb-8 mt-auto">
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5"></span> 
                Phân loại không gian để bố trí đèn 3D tương thích.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5"></span> 
                Chào bán dịch vụ Gia công Merchandise Độc quyền.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5"></span> 
                Tổ chức định kỳ 3 tháng/lần kiểm tra bảo trì.
              </li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">KPIs Mục tiêu</h4>
                <p className="text-xs text-slate-600 font-medium tracking-tight">Phủ sóng 50 điểm. O2O chiếm 25% DT. 10 HĐ B2B.</p>
              </div>
              <div className="text-[10px] bg-white border border-slate-100 px-3 py-1.5 rounded text-slate-400 font-bold uppercase tracking-widest self-start md:self-auto">
                4 Tháng
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Giai đoạn 3 (Tháng 7 - 12)</div>
            <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Phủ sóng Toàn quốc & Co-Branding</h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">Mở rộng ra Hà Nội, Đà Nẵng và tạo tiếng vang truyền thông.</p>
            
            <ul className="space-y-3 text-xs text-slate-500 mb-8 mt-auto">
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0 mt-1.5"></span> 
                Khởi động chiến dịch Co-Branding Lễ Tết.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0 mt-1.5"></span> 
                Áp dụng Hiệu ứng Mạng lưới giới thiệu chéo.
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0 mt-1.5"></span> 
                Tổng kết dữ liệu CRM/CDP để phân tích tệp khách hàng.
              </li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">KPIs Mục tiêu</h4>
                <p className="text-xs text-slate-600 font-medium tracking-tight">100+ đối tác. Trở thành biểu tượng Lifestyle.</p>
              </div>
              <div className="text-[10px] bg-white border border-slate-100 px-3 py-1.5 rounded text-slate-400 font-bold uppercase tracking-widest self-start md:self-auto">
                6 Tháng
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-4">Tầm nhìn dài hạn</div>
        <h2 className="text-xl font-bold mb-4 tracking-tight">Sự Hình thành Một Biểu tượng</h2>
        <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-lg">
          Chiến lược O2O không chỉ là phương thức bán hàng mới. Nó là nền tảng đưa ASA Studio xác lập vị thế định hình phong cách sống hiện đại.
        </p>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Link 
          href="/financial-plan" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Financial Plan
        </Link>
      </div>
    </div>
  );
}
