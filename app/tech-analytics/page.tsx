"use client";

import { ArrowRight, Smartphone, Database, BarChart3, LineChart } from "lucide-react";
import Link from "next/link";
import { 
  LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer
} from 'recharts';

export default function TechAnalytics() {
  
  const sampleTrafficData = [
    { day: 'T2', scans: 45, orders: 1 },
    { day: 'T3', scans: 52, orders: 2 },
    { day: 'T4', scans: 38, orders: 0 },
    { day: 'T5', scans: 65, orders: 3 },
    { day: 'T6', scans: 89, orders: 4 },
    { day: 'T7', scans: 145, orders: 7 },
    { day: 'CN', scans: 130, orders: 8 },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Platform Engine</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Hệ thống Tracking & Phân tích Dữ liệu
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">
          Kiến trúc công nghệ đằng sau mô hình O2O tự động hóa. Đảm bảo tính minh bạch hoàn đối trong việc ghi nhận hoa hồng và tối ưu hóa chuyển đổi.
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white mb-12">
         <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-8 text-yellow-400">
            Kiến Trúc O2O Affiliate Dựa Trên Zalo Mini App
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-2xl">
               <Smartphone className="w-8 h-8 text-slate-300 mb-4" />
               <h3 className="font-bold mb-2">1. Điểm Chạm Offline (QR)</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">Mã QR động tại mỗi bàn trong quán cafe.</p>
               <div className="bg-slate-900 p-3 rounded-lg text-[10px] font-mono text-slate-500 overflow-hidden text-ellipsis">
                  https://zalo.me/s/xxx/?ref=cafe_A_table_5
               </div>
            </div>
            
            <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-2xl relative">
               <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-px bg-slate-600"></div>
               <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-px bg-slate-600"></div>
               <Database className="w-8 h-8 text-yellow-400 mb-4" />
               <h3 className="font-bold mb-2 text-white">2. Customer Data Platform</h3>
               <p className="text-xs text-slate-400 leading-relaxed">Khi người dùng quét bằng Zalo, hệ thống CDP tự động capture SĐT (nếu Zalo OA được cấp quyền) hoặc tạo UID ẩn danh. Lưu Cookie affiliate 60 ngày.</p>
            </div>

            <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-2xl">
               <BarChart3 className="w-8 h-8 text-slate-300 mb-4" />
               <h3 className="font-bold mb-2">3. Đối Tác Dashboard</h3>
               <p className="text-xs text-slate-400 leading-relaxed">Cửa hàng F&B đăng nhập web dashboard để xem báo cáo Realtime: Số lượt Scan, Tỷ lệ Drop, Đơn hàng thành công, và Dòng tiền đối soát.</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
               <span className="w-1 h-4 bg-yellow-400"></span> Traffic Simulation
            </h2>
            <div className="flex-1 h-64 min-h-[250px]">
               <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={sampleTrafficData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                     <RechartsTooltip contentStyle={{borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: 'none', fontSize: '11px'}} />
                     <Line type="monotone" dataKey="scans" stroke="#f59e0b" strokeWidth={3} dot={{r: 4, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff'}} />
                  </RechartsLineChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-4 text-xs">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-slate-500 font-medium">Lượt quét QR</span>
               </div>
            </div>
         </div>

         <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
               <span className="w-1 h-4 bg-yellow-400"></span> Metric Optimization
            </h2>
            <div className="space-y-4">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-xs font-bold text-slate-800">Tỷ lệ Scans / Traffic</h4>
                     <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 font-mono">0.5 - 1.0%</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">A/B Testing CTA trên standee: "Quét để xem hiệu ứng 3D" vs "Quét nhận Voucher 200K".</p>
               </div>
               
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-xs font-bold text-slate-800">Tỷ lệ Conv. Rate</h4>
                     <span className="text-[10px] bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-mono">2.0 - 3.5%</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Tự động trigger tin nhắn Zalo ZNS sau 48h nếu khách đã quét mã thêm hàng vào giỏ nhưng chưa thanh toán.</p>
               </div>
               
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                     <h4 className="text-xs font-bold text-slate-800">Heatmap Không gian</h4>
                     <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 font-mono">Phân tích</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Theo dõi mã QR ở vị trí bàn góc khuất vs bàn trung tâm để đánh giá góc trưng bày đèn hiệu quả nhất.</p>
               </div>
            </div>
         </div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/onboarding" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Onboarding
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Hoàn Thành Proposal <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
