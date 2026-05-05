import { ArrowRight, QrCode, ShieldCheck, Printer, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BusinessModel() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Business Model</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Kiến trúc Hệ thống & Vận hành
        </h1>
      </div>

      {/* Affiliate Architecture */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
          <span className="w-1 h-4 bg-yellow-400"></span> Kiến trúc Công nghệ Tiếp thị Liên kết (Affiliate System)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xs mb-3 text-slate-900 uppercase tracking-widest">Mã QR Động & Tracking</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Sử dụng <strong>Dynamic QR Code</strong> trên standee để linh hoạt thay đổi URL đích mà không hao tốn chi phí in ấn lại. URL chứa UTM Parameters và Affiliate ID gắn liền với từng quán.
            </p>
          </div>
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xs mb-3 text-slate-900 uppercase tracking-widest">Cookie Lifetime (30-60 ngày)</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Khách hiếm khi mua nội thất sang trọng ngay tại quán. Hệ thống lưu Cookie 30-60 ngày đảm bảo ghi nhận nguồn gốc truy cập và phân bổ hoa hồng khi khách quyết định mua tại nhà.
            </p>
          </div>
          <div className="bg-white border-t-2 border-t-yellow-400 border-x border-b border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
            <h3 className="font-bold text-xs mb-3 text-slate-900 uppercase tracking-widest">Mã Coupon Độc quyền</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Vá lỗ hổng thiết bị chéo bằng <strong>Coupon Code định danh</strong> (VD: THEWORKSHOP-ASA10). Khách nhập để hưởng chiết khấu 5-10%, đơn hàng tự động quy kết cho Đối tác.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-white">
            <span className="w-1 h-4 bg-yellow-400"></span> Quản trị Danh mục Sản phẩm
          </h2>
          <p className="text-xs text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Tư duy rạch ròi trong quản trị rủi ro vận hành. Tách biệt chính sách đối xử giữa hàng hóa giá trị cao và phụ kiện nhỏ lẻ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded bg-yellow-400 text-slate-900 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5"/>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">Đèn Trưng bày</h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Cốt lõi</span>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 mt-auto">
                <li className="flex gap-2 items-start"><span className="text-yellow-400 font-bold mt-0.5">•</span> <strong>Phương thức:</strong> Ký gửi miễn phí / Affiliate O2O</li>
                <li className="flex gap-2 items-start"><span className="text-yellow-400 font-bold mt-0.5">•</span> <strong>Rủi ro hao hụt:</strong> Thấp (khối lượng lớn, cố định)</li>
                <li className="flex gap-2 items-start"><span className="text-yellow-400 font-bold mt-0.5">•</span> <strong>Lợi ích:</strong> Tối ưu không gian cấp bách, thu thập dữ liệu khách hạng sang.</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                  <Printer className="w-3.5 h-3.5"/>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">Merchandise 3D</h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Phụ trợ</span>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 mt-auto">
                <li className="flex gap-2 items-start"><span className="text-slate-500 font-bold mt-0.5">•</span> <strong>Phương thức:</strong> Gia công B2B Wholesale / Bán đứt</li>
                <li className="flex gap-2 items-start"><span className="text-slate-500 font-bold mt-0.5">•</span> <strong>Rủi ro hao hụt:</strong> Rất cao (chi tiết nhỏ lẻ, dễ lấy cắp)</li>
                <li className="flex gap-2 items-start"><span className="text-slate-500 font-bold mt-0.5">•</span> <strong>Lợi ích:</strong> Tạo dòng tiền sỉ ngay lập tức, loại bỏ chi phí kiểm đếm.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Canvas */}
      <section className="mb-8 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
          <span className="w-1 h-4 bg-yellow-400"></span> O2O Business Model Canvas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 border border-slate-100 rounded-lg overflow-hidden bg-white text-xs divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="col-span-1 p-4 flex flex-col gap-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-2">Key Partners</h4>
            <p className="text-slate-500">• Chủ F&B (Trung-Cao cấp)</p>
            <p className="text-slate-500">• Nền tảng Tracking</p>
            <p className="text-slate-500">• NPP Vật liệu In 3D</p>
          </div>
          
          <div className="col-span-1 flex flex-col divide-y divide-slate-100">
            <div className="p-4 flex-1">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-2">Key Activities</h4>
              <p className="text-slate-500">• Sản xuất in 3D Agile</p>
              <p className="text-slate-500">• Quản lý chuỗi Đối tác F&B</p>
            </div>
            <div className="p-4 flex-1">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-2">Key Resources</h4>
              <p className="text-slate-500">• Công nghệ In 3D</p>
              <p className="text-slate-500">• Thiết kế Di sản (NOLA)</p>
            </div>
          </div>
          
          <div className="col-span-1 bg-slate-50 p-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-yellow-400 inline-block"></span> Value Prop
            </h4>
            <div className="mb-4">
              <strong className="block text-slate-800 mb-1">For B2C:</strong>
              <p className="text-slate-500 leading-relaxed">Trải nghiệm ánh sáng thực. Mua sắm QR dễ dàng. Sản phẩm độc bản.</p>
            </div>
            <div>
              <strong className="block text-slate-800 mb-1">For B2B:</strong>
              <p className="text-slate-500 leading-relaxed">Nâng cấp không gian 0đ. Dòng tiền thụ động 15-20% không rủi ro tồn kho.</p>
            </div>
          </div>
          
          <div className="col-span-1 flex flex-col divide-y divide-slate-100">
             <div className="p-4 flex-1">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-2">Customer Rel.</h4>
              <p className="text-slate-500">• Co-branding Độc quyền</p>
              <p className="text-slate-500">• Tùy biến sản phẩm F&B</p>
            </div>
            <div className="p-4 flex-1">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-2">Channels</h4>
              <p className="text-slate-500">• Bàn, Kệ Không gian F&B</p>
              <p className="text-slate-500">• QR Standee → Zalo App</p>
            </div>
          </div>
          
          <div className="col-span-1 p-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-4">Cust. Segments</h4>
            <div className="mb-4">
              <p className="text-slate-800 font-bold mb-1">B2C (End-Users)</p>
              <p className="text-slate-500 leading-relaxed">Người yêu nghệ thuật, gu thẩm mỹ cao, giới trẻ check-in.</p>
            </div>
            <div>
              <p className="text-slate-800 font-bold mb-1">B2B</p>
              <p className="text-slate-500 leading-relaxed">Chuỗi/quán F&B độc lập phân khúc cao cấp.</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100">
            <div className="p-4">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-3">Cost Structure</h4>
              <ul className="text-slate-500 space-y-2">
                <li>• Chi phí SX tài sản trưng bày (CAPEX)</li>
                <li>• Chi phí nền tảng Affiliate Software</li>
                <li>• Chi phí Hoa hồng (Biến phí / 15-20%)</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest mb-3">Revenue Streams</h4>
              <ul className="text-slate-500 space-y-2">
                <li>• Doanh thu bán lẻ B2C qua QR O2O.</li>
                <li>• Doanh thu Bán sỉ Merchandise B2B cho chủ quán.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center">
        <Link 
          href="/market-research" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Market Research
        </Link>
        <Link 
          href="/financial-plan" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Financial Plan <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
