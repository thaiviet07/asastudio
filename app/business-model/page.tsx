import { ArrowRight, QrCode, ShieldCheck, Printer, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BusinessModel() {
  return (
    <div className="max-w-6xl mx-auto px-12 py-16">
      <div className="mb-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full tracking-wide">
        Business Model
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Kiến trúc Hệ thống & Vận hành</h1>
      <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

      {/* Affiliate Architecture */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <QrCode className="w-6 h-6 text-yellow-500" /> 
          Kiến trúc Công nghệ Tiếp thị Liên kết (Affiliate System)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-3">Mã QR Động & Tracking</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Sử dụng <strong>Dynamic QR Code</strong> trên standee để linh hoạt thay đổi URL đích mà không hao tốn chi phí in ấn lại. URL chứa UTM Parameters và Affiliate ID gắn liền với từng quán.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-3">Cookie Lifetime (30-60 ngày)</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Khách hiếm khi mua nội thất sang trọng ngay tại quán. Hệ thống lưu Cookie 30-60 ngày đảm bảo ghi nhận nguồn gốc truy cập và phân bổ hoa hồng khi khách quyết định mua tại nhà.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-yellow-400">
            <h3 className="font-bold text-lg mb-3">Giải pháp Mã Coupon Độc quyền</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Vá lỗ hổng thiết bị chéo (quét ĐT, mua bằng Laptop) bằng <strong>Coupon Code định danh</strong> (VD: THEWORKSHOP-ASA10). Khách nhập để hưởng chiết khấu 5-10%, đơn hàng tự động quy kết cho Đối tác.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-20 bg-slate-50 -mx-12 px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
            Kiến trúc Quản trị Danh mục Sản phẩm
          </h2>
          <p className="text-slate-600 mb-10 max-w-3xl">
            Tư duy rạch ròi trong quản trị rủi ro vận hành. Tách biệt chính sách đối xử giữa hàng hóa giá trị cao và phụ kiện nhỏ lẻ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5"/></div>
                <h3 className="font-bold text-xl">Đèn Trưng bày <span className="text-slate-400 font-normal text-base">(Cốt lõi)</span></h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 mb-6">
                <li>• <strong>Phương thức:</strong> Ký gửi miễn phí / Affiliate O2O.</li>
                <li>• <strong>Rủi ro hao hụt:</strong> Thấp (to lớn, cố định).</li>
                <li>• <strong>Lợi ích:</strong> Tối ưu hóa không gian cấp bách, thu thập dữ liệu khách hạng sang, đơn hàng Online giá trị cao.</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-200 text-slate-700 p-2 rounded-lg"><Printer className="w-5 h-5"/></div>
                <h3 className="font-bold text-xl">Merchandise 3D <span className="text-slate-400 font-normal text-base">(Phụ trợ)</span></h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 mb-6">
                <li>• <strong>Phương thức:</strong> Gia công B2B Wholesale / Bán đứt.</li>
                <li>• <strong>Rủi ro hao hụt:</strong> Rất cao (chi tiết nhỏ lẻ, dễ lấy cắp).</li>
                <li>• <strong>Lợi ích:</strong> Tạo dòng tiền sỉ ngay lập tức, loại bỏ chi phí nhân sự kiểm đếm vi mô gánh nặng cho ASA.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Canvas */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">O2O Business Model Canvas</h2>
        {/* CSS Grid for Canvas */}
        <div className="grid grid-cols-5 bg-white border-2 border-slate-800 rounded-xl overflow-hidden [&>div]:border-slate-300 [&>div]:p-4 [&>div]:bg-white">
          
          <div className="col-span-1 border-r border-b">
            <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wider">Key Partners</h4>
            <p className="text-xs text-slate-600 mb-2">• Chủ F&B (Trung-Cao cấp)</p>
            <p className="text-xs text-slate-600 mb-2">• Nền tảng Tracking (Growstack/Zalo)</p>
            <p className="text-xs text-slate-600">• NPP Vật liệu In 3D</p>
          </div>
          
          <div className="col-span-1 border-r border-b flex flex-col">
            <div className="flex-1 border-b border-slate-300 pb-3">
              <h4 className="font-bold text-sm text-slate-800 mb-2 uppercase tracking-wider">Key Activities</h4>
              <p className="text-xs text-slate-600 mb-1">• Sản xuất in 3D Agile</p>
              <p className="text-xs text-slate-600">• Quản lý chuỗi Đối tác F&B</p>
            </div>
            <div className="flex-1 pt-3">
              <h4 className="font-bold text-sm text-slate-800 mb-2 uppercase tracking-wider">Key Resources</h4>
              <p className="text-xs text-slate-600 mb-1">• Công nghệ In 3D</p>
              <p className="text-xs text-slate-600">• Thiết kế Di sản (NOLA)</p>
            </div>
          </div>
          
          <div className="col-span-1 border-r border-b bg-yellow-50/30">
            <h4 className="font-bold text-sm pl-1 border-l-4 border-yellow-400 text-slate-800 mb-3 uppercase tracking-wider">Value Proposition</h4>
            <div className="mb-4">
              <strong className="text-xs block text-slate-700">For B2C:</strong>
              <p className="text-xs text-slate-600 mt-1">Trải nghiệm ánh sáng thực. Mua sắm QR dễ dàng. Sản phẩm độc bản.</p>
            </div>
            <div>
              <strong className="text-xs block text-slate-700">For B2B:</strong>
              <p className="text-xs text-slate-600 mt-1">Nâng cấp thẩm mỹ quán 0đ. Dòng tiền thụ động 15-20% ròng không rủi ro tồn kho.</p>
            </div>
          </div>
          
          <div className="col-span-1 border-r border-b flex flex-col">
             <div className="flex-1 border-b border-slate-300 pb-3">
              <h4 className="font-bold text-sm text-slate-800 mb-2 uppercase tracking-wider">Customer Rel.</h4>
              <p className="text-xs text-slate-600 mb-1">• Co-branding Độc quyền</p>
              <p className="text-xs text-slate-600">• Tùy biến sản phẩm F&B</p>
            </div>
            <div className="flex-1 pt-3">
              <h4 className="font-bold text-sm text-slate-800 mb-2 uppercase tracking-wider">Channels</h4>
              <p className="text-xs text-slate-600 mb-1">• Vật lý: Quầy, Bàn, Kệ F&B</p>
              <p className="text-xs text-slate-600">• Số: QR Standee → Zalo App/Web</p>
            </div>
          </div>
          
          <div className="col-span-1 border-b">
            <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wider">Cust. Segments</h4>
            <div className="mb-3">
              <p className="text-xs text-slate-600 font-semibold mb-1">B2C (End-Users)</p>
              <p className="text-xs text-slate-500">Người yêu nghệ thuật, gu thẩm mỹ cao, giới trẻ check-in.</p>
            </div>
            <div className="mb-3">
              <p className="text-xs text-slate-600 font-semibold mb-1">B2B</p>
              <p className="text-xs text-slate-500">Chuỗi/quán F&B độc lập phân khúc cao.</p>
            </div>
          </div>

          <div className="col-span-2 p-4 border-r">
            <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wider">Cost Structure</h4>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Chi phí SX tài sản trưng bày (CAPEX)</li>
              <li>• Chi phí hệ thống Affiliate Software</li>
              <li>• Chi phí Hoa hồng (Biến phí / 15-20%)</li>
              <li>• Khấu hao, bảo trì hao mòn vật lý</li>
            </ul>
          </div>

          <div className="col-span-3 p-4">
            <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wider">Revenue Streams</h4>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• (1) Doanh thu bán lẻ B2C trực tiếp qua chiến dịch QR O2O.</li>
              <li>• (2) Doanh thu Bán sỉ Gia công Merchandise B2B cho chủ F&B.</li>
              <li><em className="text-slate-400 block mt-2 text-[10px]">Hiệu ứng mạng lưới giúp lan truyền Earned Media miễn phí.</em></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-20 flex justify-between">
        <Link 
          href="/market-research" 
          className="inline-flex items-center gap-2 text-slate-500 px-6 py-3 rounded-md font-medium hover:text-slate-900 transition-colors"
        >
          Trở về
        </Link>
        <Link 
          href="/financial-plan" 
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
        >
          Tiếp tục: Financial Plan <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
