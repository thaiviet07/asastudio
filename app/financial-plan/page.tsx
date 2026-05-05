"use client";

import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const commissionData = [
  { name: 'Sàn TMĐT (Shopee)', rate: 7.5, fill: '#cbd5e1' }, // Avg 5-10
  { name: 'Đại lý Truyền thống', rate: 32.5, fill: '#94a3b8' }, // Avg 25-40
  { name: 'ASA O2O Affiliate', rate: 17.5, fill: '#f59e0b' }, // Avg 15-20
];

const revenueData = [
  { name: 'Bán lẻ Affiliate O2O', value: 990000000 },
  { name: 'Gia công B2B Merchandise', value: 175000000 }
];
const COLORS = ['#f59e0b', '#1e293b'];

export default function FinancialPlan() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Financial Plan</div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Phân tích Tài chính O2O (1 Năm)
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">Mô phỏng quy mô trung bình: <strong>50 Không gian F&B</strong> Đối tác tại TP.HCM.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> So sánh Cơ cấu Hoa hồng
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Mức hoa hồng 15-20% cực kỳ cạnh tranh cho quán cafe mà không phát sinh rủi ro tồn kho, so với chiết khấu đại lý. Nguồn quỹ lấy từ việc tiết kiệm quảng cáo.
          </p>
          <div className="h-64 mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commissionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} tick={{fontSize: 10, fill: '#94a3b8'}} />
                <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: 'none', fontSize: '11px'}} />
                <Bar dataKey="rate" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> Dòng Doanh thu Ước tính
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Tổng doanh thu tiềm năng đạt <strong>~1.16 Tỷ VNĐ</strong> dựa trên quy đổi lượng traffic 0.5% từ 50 quán cafe.
          </p>
          <div className="h-64 mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip cursor={false} 
                  formatter={(value: any) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
                  contentStyle={{borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: 'none', fontSize: '11px'}}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '11px', color: '#64748b'}}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 text-yellow-400">
              <Calculator className="w-3.5 h-3.5"/> CAPEX (Đầu tư setup)
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>100 Sản phẩm Đèn</span>
                <span className="font-mono text-white">150.00M</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>100 Standee Mica</span>
                <span className="font-mono text-white">2.50M</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tracking App (1 năm)</span>
                <span className="font-mono text-white">30.00M</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-slate-800">
                <span className="font-bold uppercase tracking-widest text-slate-300">Tổng</span>
                <span className="font-mono font-bold text-yellow-400">~182.50M</span>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-slate-500 leading-relaxed font-medium uppercase tracking-widest">
              = NSQC 1 tháng cho 50 điểm vật lý.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 text-yellow-400">
              Biến phí & Lợi nhuận
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-800 pb-2">Metrics Traffic</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Khách/ngày (50 quán)</span>
                  <span className="font-bold text-white">7.5K</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Scan Rate (0.5%)</span>
                  <span className="font-bold text-white">1,125</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Conv. Rate (3%)</span>
                  <span className="font-bold text-white">33 đơn</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">AOV</span>
                  <span className="font-bold text-white">2.5M VND</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-800 pb-2">Biến phí (Variable Cost)</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Hoa hồng (20%)</span>
                  <span className="font-bold text-white">198M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Thuế (F&B)</span>
                  <span className="font-bold text-white">10%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Hao mòn (15%)</span>
                  <span className="font-bold text-white">22.5M</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/business-model" 
          className="text-xs text-slate-400 hover:text-slate-800 transition-colors uppercase font-bold tracking-widest"
        >
          ← Business Model
        </Link>
        <Link 
          href="/execution-plan" 
          className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-tight"
        >
          Tiếp tục: Execution Plan <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
