import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Executive Summary</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
          Chiến lược O2O Bán lẻ Đèn Thiết kế ASA Studio
        </h1>
        <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
          Đánh giá toàn diện mô hình trưng bày trải nghiệm và hệ thống tiếp thị 
          liên kết qua kênh không gian F&B nhằm hiện thực hóa mục tiêu kép: 
          thúc đẩy doanh thu và thiết lập nhận diện thương hiệu bền vững.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mục tiêu Đối tác F&B</div>
           <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">50+</div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mức Affiliate</div>
           <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">15-20%</div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cookie Lifetime</div>
           <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">60 Days</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
           <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-1">Est. Yearly Rev</div>
           <div className="text-2xl font-bold font-mono tracking-tight text-white">~1.16B</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Bối cảnh Chuyển dịch
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Thị trường bán lẻ nội thất và ánh sáng đang bộc lộ những giới hạn của các mô hình truyền thống:
          </p>
          <ul className="space-y-3 mt-auto">
            <li className="flex gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></span>
              <span className="text-slate-600 text-xs leading-relaxed">
                <strong className="text-slate-800 uppercase tracking-widest text-[10px]">Thương mại điện tử (E-commerce):</strong><br/>Mang khả năng tiếp cận lớn nhưng tước đi trải nghiệm xúc giác và thị giác chân thực của khách hàng.
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 shrink-0"></span>
              <span className="text-slate-600 text-xs leading-relaxed">
                <strong className="text-slate-800 uppercase tracking-widest text-[10px]">Showroom vật lý:</strong><br/>Đòi hỏi chi phí đầu tư khổng lồ, tạo ra môi trường trưng bày khiên cưỡng, gây quá tải thị giác.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-4">Tầm nhìn Chiến lược O2O</div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-4">
              Dịch chuyển từ Offline sang Online (O2O) thông qua việc phân phối tại các kênh F&B (quán cafe, nhà hàng) là giải pháp đột phá.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Triển khai mô hình ký gửi các sản phẩm đèn thiết kế ASA tại không gian F&B, kết hợp tiếp thị liên kết (Affiliate Marketing qua mã QR) không chỉ là chiến thuật bán hàng mà còn là một cấu trúc tiếp thị trải nghiệm sâu rộng.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
            <div className="text-4xl font-light">15-20%</div>
            <div className="text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded uppercase tracking-widest font-bold">Affiliate Commission</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
          <span className="w-1 h-4 bg-yellow-400"></span> Nền tảng Di sản Kiến trúc & ASA Studio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
              <span className="text-[10px] font-bold text-slate-400">01</span>
            </div>
            <h4 className="font-bold text-xs mb-2 text-slate-900 uppercase tracking-widest">Tri thức Hàn lâm</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Dẫn dắt bởi Giám đốc Thiết kế, TS. Thanh – có kinh nghiệm thiết kế tại London. ASA sở hữu nền tảng tri thức sâu sắc về nghệ thuật sử dụng ánh sáng trong kiến trúc.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
              <span className="text-[10px] font-bold text-slate-400">02</span>
            </div>
            <h4 className="font-bold text-xs mb-2 text-slate-900 uppercase tracking-widest">Giao thoa Văn hóa</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Định vị thương hiệu giữa giá trị truyền thống và ngôn ngữ thiết kế đương đại. Điển hình là dòng đèn NOLA cảm hứng từ nón lá, sản xuất qua công nghệ in 3D tiên tiến.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
              <span className="text-[10px] font-bold text-slate-400">03</span>
            </div>
            <h4 className="font-bold text-xs mb-2 text-slate-900 uppercase tracking-widest">Tệp Khách hàng</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Thu hút giới doanh nhân, người có gu thẩm mỹ cao, những cá nhân trân trọng "lớp đệm sáng" có khả năng kiến tạo cảm xúc cho không gian sống thay vì chỉ là công cụ phát sáng đại trà.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link 
          href="/market-research" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Market Research <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
