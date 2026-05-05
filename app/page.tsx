import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-12 py-16">
      <div className="mb-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full tracking-wide">
        Business Proposal
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
        Chiến lược O2O <br/>
        <span className="text-slate-500 font-medium">Bán lẻ Đèn Thiết kế ASA Studio</span>
      </h1>
      <div className="w-16 h-1 bg-yellow-400 mb-10"></div>

      <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl">
        Đánh giá toàn diện mô hình trưng bày trải nghiệm và hệ thống tiếp thị 
        liên kết qua kênh không gian F&B nhằm hiện thực hóa mục tiêu kép: 
        thúc đẩy doanh thu và thiết lập nhận diện thương hiệu bền vững.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-6 bg-yellow-400 rounded-sm"></div>
            Bối cảnh Chuyển dịch
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Thị trường bán lẻ nội thất và ánh sáng đang bộc lộ những giới hạn của các mô hình truyền thống:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold mt-0.5">•</span>
              <span className="text-slate-600">
                <strong>Thương mại điện tử (E-commerce):</strong> Mang khả năng tiếp cận lớn nhưng tước đi trải nghiệm xúc giác và thị giác chân thực của khách hàng.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-500 font-bold mt-0.5">•</span>
              <span className="text-slate-600">
                <strong>Showroom vật lý:</strong> Đòi hỏi chi phí đầu tư khổng lồ, tạo ra môi trường trưng bày khiên cưỡng, gây quá tải thị giác do ánh sáng trộn lẫn.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-yellow-400 rounded-sm"></div>
              Tầm nhìn Chiến lược O2O
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Dịch chuyển từ Offline sang Online (O2O) thông qua việc phân phối tại các kênh F&B (quán cafe, nhà hàng) là giải pháp đột phá.
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Triển khai mô hình ký gửi các sản phẩm đèn thiết kế ASA tại không gian F&B, kết hợp tiếp thị liên kết (Affiliate Marketing 15-20% qua mã QR) không chỉ là chiến thuật bán hàng mà còn là một cấu trúc tiếp thị trải nghiệm (Experiential Marketing) sâu rộng.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Nền tảng Di sản Kiến trúc & ASA Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-xl"></div>
            <h3 className="font-bold text-xl mb-4">Tri thức Hàn lâm</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dẫn dắt bởi Giám đốc Thiết kế, TS. Thanh – có kinh nghiệm thiết kế tại London. ASA sở hữu nền tảng tri thức sâu sắc về nghệ thuật sử dụng ánh sáng trong kiến trúc (VD: dự án Lim Tower III).
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-xl"></div>
            <h3 className="font-bold text-xl mb-4">Giao thoa Văn hóa</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Định vị thương hiệu giữa giá trị truyền thống và ngôn ngữ thiết kế đương đại. Điển hình là dòng đèn NOLA cảm hứng từ nón lá, sản xuất qua công nghệ in 3D tiên tiến.
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-xl"></div>
            <h3 className="font-bold text-xl mb-4">Tệp Khách hàng</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thu hút giới doanh nhân, người có gu thẩm mỹ cao, những cá nhân trân trọng "lớp đệm sáng" có khả năng kiến tạo cảm xúc cho không gian sống thay vì chỉ là công cụ phát sáng đại trà.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end">
        <Link 
          href="/market-research" 
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
        >
          Tiếp tục: Market Research <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
