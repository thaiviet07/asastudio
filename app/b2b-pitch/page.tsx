import { ArrowRight, Sparkles, Handshake, Target, CheckCircle2, QrCode } from "lucide-react";
import Link from "next/link";

export default function B2BPitch() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Đối tác Chiến lược F&B</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Nâng Tầm Không Gian, Tối Ưu Lợi Nhuận
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Đề xuất đồng hành (Co-branding Partnership) dành riêng cho các thương hiệu F&B cao cấp. Kiến tạo trải nghiệm nghệ thuật ánh sáng và chia sẻ doanh thu bền vững.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-[80px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Zero-Cost Upgrade</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              Không cần chi phí đầu tư ban đầu. Chúng tôi cung cấp các bộ đèn nghệ thuật cao cấp để tạo điểm nhấn thị giác độc đáo cho không gian quán.
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                Miễn phí setup 2-5 đèn tùy quy mô.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                Thiết kế đồng điệu với concept F&B.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                Bảo trì, đổi mới sản phẩm định kỳ 3 tháng/lần.
              </li>
            </ul>
          </div>
          <div className="relative z-10 mt-8 border-t border-slate-800 pt-6">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Giá trị Tài trợ Setup</div>
            <div className="text-2xl font-bold font-mono text-yellow-400">~5.000.000 VNĐ / Quán</div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Dòng Tiền Thụ Động
          </h3>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">
            Chỉ với một Standee nhỏ trên bàn, quán có thêm nguồn thu thụ động từ tệp khách hàng sẵn có mà không phát sinh vận hành.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                <QrCode className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Mã QR Định Danh</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Khách hàng yêu thích đèn có thể scan mã ở bàn để tìm hiểu thông tin và mua trực tiếp. Hệ thống ghi nhận nguồn từ quán.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                <Handshake className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Mã Giảm Giá Độc Quyền</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Ví dụ mã "TENDOI_ASA". Khi khách về nhà đặt mua qua web và nhập mã, quán vẫn nhận hoa hồng nhờ Cookie lưu trữ 60 ngày.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-yellow-50 border border-yellow-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 border border-yellow-200">
                <Sparkles className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-yellow-800 mb-1">Chiết Khấu (Affiliate 15-20%)</h4>
                <p className="text-xs text-yellow-700/80 leading-relaxed">Với đơn hàng trung bình 800.000đ, quán nhận ngay ~160.000đ/đơn thưởng mà không cần nhập hàng hay lưu kho.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm mb-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-2 text-slate-900">
              <span className="w-1 h-4 bg-yellow-400"></span> Trở Thành Merchandise Hub (Tùy Chọn B2B)
            </h3>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">Ngoài đèn nội thất, quán có thể mua sỉ phụ kiện 3D siêu nhỏ do ASA thiết kế để làm quà tặng hoặc bán kèm cho khách.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4"><Target className="w-6 h-6 text-slate-400" /></div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Giá Đặt Sỉ Ưu Đãi</h4>
            <p className="text-xs text-slate-500">Mức gia công 3D siêu rẻ chỉ từ 25k-35k/món cho đối tác.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center border-b-2 border-b-yellow-400">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-4"><Sparkles className="w-6 h-6 text-yellow-500" /></div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Quà Tặng Signature</h4>
            <p className="text-xs text-slate-500">Phụ kiện cắm hoa, đế lót tinh tế, tăng trải nghiệm (WOW moment).</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4"><Handshake className="w-6 h-6 text-slate-400" /></div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Co-branding Logo</h4>
            <p className="text-xs text-slate-500">Dập chìm logo của quán lên sản phẩm phụ kiện để Tăng nhận diện.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/case-studies" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Case Studies
        </Link>
        <Link 
          href="/onboarding" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Onboarding <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
