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
    <div className="max-w-5xl mx-auto px-12 py-16">
      <div className="mb-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full tracking-wide">
        Financial Plan
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Phân tích Tài chính O2O (1 Năm)</h1>
      <p className="text-slate-500 mb-10 text-lg">Mô phỏng quy mô trung bình: <strong>50 Không gian F&B</strong> Đối tác tại TP.HCM.</p>
      <div className="w-16 h-1 bg-yellow-400 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-6 bg-yellow-400 rounded-sm"></div>
            So sánh Cơ cấu Hoa hồng
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Mức hoa hồng 15-20% cực kỳ cạnh tranh cho quán cafe mà không phát sinh rủi ro tồn kho, so với chiết khấu đại lý. Nguồn quỹ lấy từ việc tiết kiệm quảng cáo số (CPA).
          </p>
          <div className="h-64 border border-slate-100 rounded-xl p-4 bg-slate-50">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commissionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} tick={{fontSize: 12, fill: '#64748b'}} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="rate" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-6 bg-yellow-400 rounded-sm"></div>
            Dòng Doanh thu Ước tính
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Tổng doanh thu tiềm năng đạt <strong>~1.16 Tỷ VNĐ</strong> dựa trên quy đổi lượng traffic 0.5% từ 50 quán cafe.
          </p>
          <div className="h-64 border border-slate-100 rounded-xl p-4 bg-slate-50 relative flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
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
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '12px'}}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-10 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-10"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2"><Calculator className="w-5 h-5"/> CAPEX (Đầu tư setup)</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>100 Sản phẩm Đèn (1.5M/cái)</span>
                <span className="font-mono">150.00M</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>100 Standee Mica (25K/cái)</span>
                <span className="font-mono">2.50M</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>Tracking App (Năm đầu)</span>
                <span className="font-mono">30.00M</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-bold text-white">Tổng CAPEX (Dự kiến)</span>
                <span className="font-mono font-bold text-yellow-400">~182.50M</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400 leading-tight">Chỉ bằng NSQC 1-2 tháng, thiết lập được 50 "điểm chạm vật lý" đẳng cấp.</p>
          </div>

          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Giả định Lợi nhuận & Chi phí Vận Hành</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">Metrics Traffic</h4>
                <p className="text-sm font-semibold mb-1">7.5K khách/ngày <span className="font-normal text-slate-400 text-xs">(Tổng 50 quán)</span></p>
                <p className="text-sm font-semibold mb-1">0.5% Scan Rate <span className="font-normal text-slate-400 text-xs">(1,125 visits/mth)</span></p>
                <p className="text-sm font-semibold mb-1">3% Conv. Rate <span className="font-normal text-slate-400 text-xs">(~33 orders/mth)</span></p>
                <p className="text-sm font-semibold">2.5M VND <span className="font-normal text-slate-400 text-xs">(AOV)</span></p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">Biến phí (Variable Cost)</h4>
                <p className="text-sm font-semibold mb-1">198M VND <span className="font-normal text-slate-400 text-xs">(Hoa hồng 20%/năm)</span></p>
                <p className="text-sm font-semibold mb-1">10% Khấu trừ tại nguồn <span className="font-normal text-slate-400 text-xs">(Thuế TNCN F&B)</span></p>
                <p className="text-sm font-semibold mb-1">22.5M VND <span className="font-normal text-slate-400 text-xs">(Hao mòn vật lý 15%)</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-20 flex justify-between">
        <Link 
          href="/business-model" 
          className="inline-flex items-center gap-2 text-slate-500 px-6 py-3 rounded-md font-medium hover:text-slate-900 transition-colors"
        >
          Trở về
        </Link>
        <Link 
          href="/execution-plan" 
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
        >
          Tiếp tục: Execution Plan <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
