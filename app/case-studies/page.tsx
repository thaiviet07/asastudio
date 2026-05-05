import { ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Case Studies & Risk</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Quản trị Rủi ro & Thực chứng
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Phân tích các rủi ro hệ thống, phương án bảo vệ tài sản vật lý và các bài học kinh nghiệm từ mô hình offline-to-online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Quản trị Rủi ro Tài sản Vật lý
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Hao mòn vật lý (Wear and Tear) do trưng bày cường độ cao (12-16 tiếng/ngày).
          </p>
          <ul className="space-y-4 mb-4 mt-auto">
             <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500"/> Đối tác F&B (Lỗi từ ngoại lực)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Đền bù theo tỷ lệ khấu hao quy định (VD: 50% giá vốn) nếu làm rơi vỡ do quản lý hoặc vệ sinh lỏng lẻo.</p>
             </li>
             <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500"/> ASA Studio (Lỗi kỹ thuật)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Chịu trách nhiệm bảo hành kỹ thuật, bảo trì định kỳ 3-6 tháng để đèn không ố màu, duy trì thẩm mỹ.</p>
             </li>
          </ul>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Rủi ro Pha loãng Thương hiệu
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Nguy cơ "Brand Dilution" khi mở rộng quá nhanh (Scaling up) không kiểm soát được chất lượng điểm chạm.
          </p>
          <div className="bg-slate-900 rounded-2xl p-6 mt-auto">
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-4">Quy chuẩn Scoring Matrix</h4>
            <ul className="text-slate-300 text-xs space-y-3 font-medium">
               <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Chỉn chu trong kiến trúc không gian</li>
               <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Phân khúc giá trung bình của thức uống</li>
               <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Tương tác MXH (Lượng follower, check-in)</li>
               <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Mức độ cam kết của quản lý cơ sở</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
          <span className="w-1 h-4 bg-yellow-400"></span> Ứng dụng & Case Studies Tương tự trên Thị trường
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-800 text-sm mb-3">Pop-up Offline của D2C Brand</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                 Nhiều brand thời trang và nội thất Direct-to-Consumer mở pop-up tại cafe. Tỷ lệ chuyển đổi online tăng 35% từ khu vực có pop-up do tạo được niềm tin xúc giác.
              </p>
              <div className="inline-block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Earned Media Effect</div>
           </div>
           <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm border-t-2 border-t-yellow-400 relative">
              <div className="absolute top-3 right-3 text-[10px] text-yellow-600 bg-yellow-50 px-2 py-1 rounded uppercase tracking-widest font-bold">ASA fix</div>
              <h4 className="font-bold text-slate-800 text-sm mb-3 pr-10">Brand Phụ kiện tại F&B</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                 Ví dụ về các thương hiệu nến thơm ký gửi sản phẩm tại cafe. Tuy nhiên rơi vào vòng xoáy hao hụt lợi nhuận do sản phẩm quá nhỏ dễ bị mát cắp.
              </p>
              <div className="inline-block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Tách Merchandise Bán đứt</div>
           </div>
           <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-800 text-sm mb-3">Offline Dropshipping</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                 Tận dụng affiliate program của trang bán lẻ nội thất lớn. Người bán hưởng 10-15% không cần tồn kho, minh chứng cho tính khả thi và sức hấp dẫn của tỷ lệ chia sẻ.
              </p>
              <div className="inline-block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Validated Commission</div>
           </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/execution-plan" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Execution Plan
        </Link>
        <Link 
          href="/b2b-pitch" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: B2B Pitch <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
