import { ArrowRight, Box, FileSignature, MapPin, Wrench } from "lucide-react";
import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Partner Onboarding Workflow</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Quy trình Triển khai O2O tại Điểm F&B
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Tiêu chuẩn hóa các bước ký kết và lắp đặt thiết bị tại quán cafe, đảm bảo tính chuyên nghiệp và sẵn sàng vận hành trong vòng 7 ngày.
        </p>
      </div>

      <div className="relative border-l border-slate-200 ml-[11px] md:ml-[15px] space-y-12 pb-8 mb-12">
        
        {/* Step 1 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
               <MapPin className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Bước 1 (Ngày 1-2)</div>
              <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Khảo Sát Không Gian & Đề Xuất</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Chuyên viên ASA Studio đến khảo sát thực tế quán cafe, đo lường diện tích và phong cách nội thất để chọn mẫu đèn phù hợp nhất.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 font-medium">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Output</span>
                Bản vẽ mặt bằng bố trí đèn (Layout Plan) và Danh sách mẫu sản phẩm đề xuất (Product Catalog).
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
             <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
               <FileSignature className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Bước 2 (Ngày 3)</div>
              <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Ký Kết Hợp Đồng Phân Phối (Consignment)</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Thỏa thuận pháp lý về tỷ lệ chia sẻ doanh thu 20% và trách nhiệm bảo vệ tài sản của hai bên trong suốt quá trình trung bày.
              </p>
              <div className="bg-slate-900 text-white p-4 rounded-xl text-xs font-medium border border-slate-800">
                <span className="text-yellow-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Điều khoản quan trọng</span>
                Cấp tài khoản truy cập Hệ thống Affiliate Dashboard & Zalo Mini App để quán theo dõi đơn hàng realtime.
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
             <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
               <Wrench className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Bước 3 (Ngày 5)</div>
              <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Lắp Đặt & Bàn Giao Thiết Bị</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Đội ngũ kỹ thuật thi công lắp đặt đèn tại vị trí đã chốt. Đi dây an toàn thẩm mỹ. Bố trí standee QR code nhỏ gọn tại các bàn.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative pl-10 md:pl-16">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
             <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          <div className="bg-white border border-yellow-200 bg-yellow-50/30 rounded-2xl p-8 shadow-sm relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0 border border-yellow-200">
               <Box className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-[10px] text-yellow-600 font-bold uppercase tracking-widest mb-2">Bước 4 (Ngày 7 & Go-live)</div>
              <h2 className="text-lg font-bold mb-3 tracking-tight text-slate-900">Training Vận Hành & Tạo Đơn Test</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Hướng dẫn nhân viên quán cách giới thiệu sản phẩm nhẹ nhàng cho khách quan tâm. Quét mã QR thử nghiệm để đảm bảo hệ thống tính hoa hồng hoạt động trơn tru.
              </p>
              <div className="bg-white p-4 rounded-xl text-xs text-slate-600 font-medium border border-yellow-100">
                Sẵn sàng đón lượng traffic offline đầu tiên. Cửa hàng bắt đầu khởi tạo dòng thu nhập O2O.
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/b2b-pitch" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← B2B Pitch
        </Link>
        <Link 
          href="/tech-analytics" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Tracking & Analytics <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
