"use client";

import { useState } from 'react';
import { ArrowRight, Calculator, Settings2, BarChart2 } from "lucide-react";
import Link from "next/link";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export default function FinancialPlan() {
  const [numCafes, setNumCafes] = useState(50);
  const [commissionRateVal, setCommissionRateVal] = useState(20);
  
  // Base constants
  const costPerLamp = 300000;
  const lampsPerCafe = 2;
  const standeePerCafe = 2;
  const costPerStandee = 25000;
  const trackingAppFixed = 30000000; // Zalo mini app / growstack
  const trafficPerCafe = 150; // daily
  const scanRate = 0.005; // 0.5%
  const convRate = 0.03; // 3%
  const aov = 800000; // VND
  const daysInMonth = 30;
  const monthsInYear = 12;

  // Calculations
  const totalLamps = numCafes * lampsPerCafe;
  const totalStandees = numCafes * standeePerCafe;
  const capexLamps = totalLamps * costPerLamp;
  const capexStandees = totalStandees * costPerStandee;
  const totalCapex = capexLamps + capexStandees + trackingAppFixed;

  const totalMonthlyTraffic = numCafes * trafficPerCafe * daysInMonth;
  const monthlyScans = totalMonthlyTraffic * scanRate;
  const monthlyOrders = monthlyScans * convRate;
  const monthlyRevenue = monthlyOrders * aov;
  const yearlyOnlineRevenue = monthlyRevenue * monthsInYear;

  // B2B Merchandise assumption: 50% cafes buy merchandise
  const b2bClients = numCafes * 0.5;
  const avgB2BValue = 200 * 35000; // 200 items * 35k
  const yearlyB2BRevenue = b2bClients * avgB2BValue;

  const totalYearlyRev = yearlyOnlineRevenue + yearlyB2BRevenue;
  
  const affiliateCommissionRate = commissionRateVal / 100;
  const totalAffiliateExpense = yearlyOnlineRevenue * affiliateCommissionRate;
  const maintenanceRate = 0.15;
  const maintenanceExpense = capexLamps * maintenanceRate;

  const commissionData = [
    { name: 'Sàn TMĐT', rate: 7.5, fill: '#cbd5e1' }, 
    { name: 'Đại lý Offline', rate: 32.5, fill: '#94a3b8' }, 
    { name: 'O2O Affiliate', rate: commissionRateVal, fill: '#f59e0b' }, 
  ];

  const revenueData = [
    { name: 'Bán lẻ Affiliate O2O', value: yearlyOnlineRevenue },
    { name: 'Gia công B2B', value: yearlyB2BRevenue }
  ];
  const COLORS = ['#f59e0b', '#1e293b'];

  const formatM = (val: number) => `${(val / 1000000).toFixed(1)}M`;
  const formatK = (val: number) => `${(val / 1000).toFixed(1)}K`;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Financial Forecast</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Phân tích Tài chính & Định giá O2O
          </h1>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
            Công cụ mô phỏng động 1 năm dựa trên quy mô mạng lưới F&B. Kéo thanh trượt để dự phóng luồng tiền, chi phí (CAPEX/OPEX) và doanh thu.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full space-y-6">
          <div>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 text-slate-900">
                <Settings2 className="w-4 h-4 text-yellow-400" /> Quy mô Điểm chạm F&B
              </h2>
              <div className="text-2xl font-bold font-mono tracking-tight text-slate-900">{numCafes} <span className="text-[10px] text-slate-400 uppercase font-sans">Quán</span></div>
            </div>
            <input 
              type="range" 
              min="10" 
              max="200" 
              step="10" 
              value={numCafes} 
              onChange={(e) => setNumCafes(parseInt(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
              <span>10</span>
              <span>200</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 text-slate-900">
                <BarChart2 className="w-4 h-4 text-yellow-400" /> Tỉ lệ Hoa hồng (Affiliate)
              </h2>
              <div className="text-2xl font-bold font-mono tracking-tight text-yellow-500">{commissionRateVal}%</div>
            </div>
            <input 
              type="range" 
              min="10" 
              max="35" 
              step="1" 
              value={commissionRateVal} 
              onChange={(e) => setCommissionRateVal(parseInt(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
              <span>10%</span>
              <span>35%</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto flex gap-4 shrink-0">
           <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px]">
             <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Dự phóng Tổng Doanh thu</span>
             <span className="text-lg font-bold font-mono text-slate-900">{formatM(totalYearlyRev)}</span>
           </div>
           <div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px]">
             <span className="text-[10px] text-yellow-400 uppercase tracking-widest font-bold mb-1">Hoa hồng ({commissionRateVal}%)</span>
             <span className="text-lg font-bold font-mono text-white">{formatM(totalAffiliateExpense)}</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-4 text-slate-900">
            <span className="w-1 h-4 bg-yellow-400"></span> So sánh Cơ cấu Hoa hồng
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Mức hoa hồng O2O (17.5% - 20%) linh hoạt và hấp dẫn, không yêu cầu quán ôm hàng tồn kho, cao hơn mức TMĐT (~7.5%).
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
            <span className="w-1 h-4 bg-yellow-400"></span> Cơ cấu Doanh thu 12 Tháng
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Phân chia giữa nguồn thu B2C (Khách mua đèn qua link) và B2B (Quán đặt gia công phụ kiện 3D).
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
                  formatter={(value: any) => formatM(value) + ' VND'}
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
            <div className="space-y-4 text-xs font-medium">
              <div className="flex justify-between text-slate-400">
                <span>{totalLamps} Sản phẩm Đèn</span>
                <span className="font-mono text-white">{formatM(capexLamps)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{totalStandees} Standee Mica</span>
                <span className="font-mono text-white">{formatM(capexStandees)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tracking App (1 năm)</span>
                <span className="font-mono text-white">{formatM(trackingAppFixed)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-slate-800">
                <span className="font-bold uppercase tracking-widest text-slate-300">Tổng</span>
                <span className="font-mono font-bold text-yellow-400">{formatM(totalCapex)}</span>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
              = Tương đương NSQC thấp so với {numCafes} điểm vật lý.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 text-yellow-400">
              <BarChart2 className="w-3.5 h-3.5 text-yellow-400"/> Biến phí & Lợi nhuận (Theo năm)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 font-medium">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-800 pb-2">Metrics Traffic Tích lũy</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Lượt khách ghé quán</span>
                  <span className="font-mono text-white">{formatK(totalMonthlyTraffic * 12)}L</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Lượt quét QR (Scan)</span>
                  <span className="font-mono text-white">{(monthlyScans * 12).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Số đơn chuyển đổi</span>
                  <span className="font-mono text-white">{(monthlyOrders * 12).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">AOV (Trung bình đơn)</span>
                  <span className="font-mono text-white">{formatM(aov)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-medium">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-800 pb-2">Biến phí (Variable OPEX)</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Tổng chi Hoa hồng ({commissionRateVal}%)</span>
                  <span className="font-mono text-white">{formatM(totalAffiliateExpense)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Hao mòn & Bảo trì (15%)</span>
                  <span className="font-mono text-white">{formatM(maintenanceExpense)}</span>
                </div>
                <div className="flex justify-between text-xs mt-3 bg-slate-800/50 p-2 rounded-lg">
                  <span className="text-slate-300 font-bold uppercase tracking-tight">Doanh thu Thuần (EST)</span>
                  <span className="font-mono font-bold text-green-400">
                    {formatM(totalYearlyRev - totalAffiliateExpense - maintenanceExpense)}
                  </span>
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
          ← Business Proposal
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
