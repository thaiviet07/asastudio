"use client";

import { useState } from 'react';
import { ArrowRight, Calculator, Settings2, BarChart2, Truck, Users, LayoutDashboard, Wallet, TrendingUp, PieChart as PieChartIcon } from "lucide-react";
import Link from "next/link";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

export default function FinancialPlan() {
  const [numCafes, setNumCafes] = useState(50);
  const [commissionRateVal, setCommissionRateVal] = useState(20);
  const [convRateVal, setConvRateVal] = useState(3);
  const [trafficPerCafe, setTrafficPerCafe] = useState(150);
  
  // Base constants
  const costPerLamp = 300000;
  const aov = 800000; // VND
  const lampsPerCafe = 2;
  const standeePerCafe = 2;
  const costPerStandee = 25000;
  
  const setupLogisticsCostPerCafe = 150000; // Tiền xăng / giao nhận setup ban đầu
  const monthlyMaintenanceGasPerCafe = 50000; // Tiền xăng đi lại bảo trì hàng tháng/quán
  
  const scanRate = 0.005; // 0.5%
  const daysInMonth = 30;
  const monthsInYear = 12;

  // --- CAPEX Calculations ---
  const totalLamps = numCafes * lampsPerCafe;
  const totalStandees = numCafes * standeePerCafe;
  const capexLamps = totalLamps * costPerLamp;
  const capexStandees = totalStandees * costPerStandee;
  const setupLogistics = numCafes * setupLogisticsCostPerCafe;
  const totalCapex = capexLamps + capexStandees + setupLogistics;

  // --- Traffic & Revenue ---
  const totalMonthlyTraffic = numCafes * trafficPerCafe * daysInMonth;
  const monthlyScans = totalMonthlyTraffic * scanRate;
  const monthlyOrders = monthlyScans * (convRateVal / 100);
  const monthlyRevenue = monthlyOrders * aov;
  const yearlyOnlineRevenue = monthlyRevenue * monthsInYear;
  const onlineCOGS = (monthlyOrders * monthsInYear) * costPerLamp;

  // --- B2B Merchandise ---
  const b2bClients = numCafes * 0.5; // 50% quán mua sỉ
  const b2bItemsPerClient = 200;
  const b2bItemPrice = 35000;
  const b2bItemCost = 15000;
  const yearlyB2BRevenue = b2bClients * b2bItemsPerClient * b2bItemPrice;
  const b2bCOGS = b2bClients * b2bItemsPerClient * b2bItemCost;

  // --- Summary Rev & COGS ---
  const totalYearlyRev = yearlyOnlineRevenue + yearlyB2BRevenue;
  const totalCOGS = onlineCOGS + b2bCOGS;
  const grossProfit = totalYearlyRev - totalCOGS;

  // --- OPEX ---
  const affiliateCommissionRate = commissionRateVal / 100;
  const totalAffiliateExpense = yearlyOnlineRevenue * affiliateCommissionRate;
  const maintenanceExpense = capexLamps * 0.15; // hao mòn vật lý 15%
  const yearlyLogisticsOPEX = numCafes * monthlyMaintenanceGasPerCafe * monthsInYear;
  const totalOpex = totalAffiliateExpense + maintenanceExpense + yearlyLogisticsOPEX;

  // --- Net ---
  const ebitda = grossProfit - totalOpex;
  const netCashFlowYear1 = ebitda - totalCapex;
  const profitMargin = totalYearlyRev > 0 ? (ebitda / totalYearlyRev) * 100 : 0;

  // --- Charts Data ---
  const revenueData = [
    { name: 'Affiliate O2O', value: yearlyOnlineRevenue },
    { name: 'Gia công B2B', value: yearlyB2BRevenue }
  ];
  
  const costBreakdownData = [
    { name: 'Giá vốn (COGS)', value: totalCOGS },
    { name: 'Hoa hồng Affiliate', value: totalAffiliateExpense },
    { name: 'Logistic & Hao mòn', value: maintenanceExpense + yearlyLogisticsOPEX + setupLogistics },
    { name: 'Trưng bày (CAPEX)', value: capexLamps }
  ];

  const monthlyProjectionData = Array.from({length: 12}).map((_, i) => {
    const month = i + 1;
    const rev = (totalYearlyRev / 12) * month;
    const cogs = (totalCOGS / 12) * month;
    const opex = (totalOpex / 12) * month;
    const cashOut = totalCapex + cogs + opex;
    const cashBalance = rev - cashOut;
    return {
      month: `T${month}`,
      'Doanh thu lũy kế': rev,
      'Chi phí lũy kế': cashOut,
      'Dòng tiền thuần': cashBalance
    }
  });

  const COLORS = ['#f59e0b', '#1e293b', '#94a3b8', '#cbd5e1'];

  const formatM = (val: number) => `${(val / 1000000).toFixed(1)}M`;
  const formatK = (val: number) => `${(val / 1000).toFixed(1)}K`;

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Financial Insights</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
            Dynamic Financial Dashboard
          </h1>
          <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
            Mô hình dự phóng tài chính O2O 1 năm. Điều chỉnh các thông số để xem tác động trực tiếp đến dòng tiền, lợi nhuận ròng, và tỷ suất lợi nhuận tổng thể.
          </p>
        </div>
      </div>

      {/* KPI Banner */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-center">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Total Revenue</div>
          <div className="text-xl font-bold font-mono text-slate-900">{formatM(totalYearlyRev)}</div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-center">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Total COGS</div>
          <div className="text-xl font-bold font-mono text-slate-900">{formatM(totalCOGS)}</div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-center">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Total OPEX</div>
          <div className="text-xl font-bold font-mono text-slate-900">{formatM(totalOpex)}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center">
          <div className="text-[10px] text-yellow-400 uppercase tracking-widest font-bold mb-1">Net Profit (EBIT)</div>
          <div className="text-xl font-bold font-mono text-white">{formatM(ebitda)}</div>
        </div>
        <div className="bg-yellow-400 border border-yellow-500 rounded-2xl p-4 flex flex-col justify-center col-span-2 md:col-span-1">
          <div className="text-[10px] text-yellow-900 uppercase tracking-widest font-bold mb-1">Net Margin</div>
          <div className="text-2xl font-bold font-mono text-slate-900">{profitMargin.toFixed(1)}%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Dynamic Controls */}
        <div className="lg:col-span-1 border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col gap-6">
          <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 text-slate-900 pb-4 border-b border-slate-100">
            <Settings2 className="w-4 h-4 text-yellow-500" /> System Variables
          </h2>
          
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-slate-700">Quy mô Điểm F&B</span>
              <span className="text-sm font-mono font-bold text-slate-900">{numCafes}</span>
            </div>
            <input type="range" min="10" max="200" step="10" value={numCafes} onChange={(e) => setNumCafes(parseInt(e.target.value))} className="w-full accent-yellow-400" />
            <div className="flex justify-between text-[9px] text-slate-400 mt-1 uppercase font-bold"><span>10</span><span>200</span></div>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-slate-700">Tỉ lệ Affiliate</span>
              <span className="text-sm font-mono font-bold text-yellow-600">{commissionRateVal}%</span>
            </div>
            <input type="range" min="10" max="40" step="1" value={commissionRateVal} onChange={(e) => setCommissionRateVal(parseInt(e.target.value))} className="w-full accent-yellow-500" />
            <div className="flex justify-between text-[9px] text-slate-400 mt-1 uppercase font-bold"><span>10%</span><span>40%</span></div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-slate-700">Daily Traffic / Quán</span>
              <span className="text-sm font-mono font-bold text-slate-900">{trafficPerCafe}</span>
            </div>
            <input type="range" min="50" max="500" step="10" value={trafficPerCafe} onChange={(e) => setTrafficPerCafe(parseInt(e.target.value))} className="w-full accent-yellow-400" />
            <div className="flex justify-between text-[9px] text-slate-400 mt-1 uppercase font-bold"><span>50</span><span>500</span></div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-slate-700">Conversion Rate</span>
              <span className="text-sm font-mono font-bold text-green-600">{convRateVal}%</span>
            </div>
            <input type="range" min="1" max="10" step="0.5" value={convRateVal} onChange={(e) => setConvRateVal(parseFloat(e.target.value))} className="w-full accent-green-500" />
            <div className="flex justify-between text-[9px] text-slate-400 mt-1 uppercase font-bold"><span>1%</span><span>10%</span></div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-2 text-slate-900">
              <Wallet className="w-4 h-4 text-yellow-500" /> Doanh Thu (Revenue)
            </h2>
            <div className="h-48 mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={revenueData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                    {revenueData.map((e, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip formatter={(val: any) => formatM(val) + ' VND'} contentStyle={{borderRadius: '8px', fontSize: '11px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Legend verticalAlign="bottom" height={24} iconType="circle" wrapperStyle={{fontSize: '10px', color: '#64748b'}}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-2 text-slate-900">
              <PieChartIcon className="w-4 h-4 text-slate-500" /> Cấu Trúc Chi Phí (Costs)
            </h2>
            <div className="h-48 mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={costBreakdownData} cx="50%" cy="50%" outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                    {costBreakdownData.map((e, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip formatter={(val: any) => formatM(val) + ' VND'} contentStyle={{borderRadius: '8px', fontSize: '11px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '10px', color: '#64748b'}}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2 mb-6 text-slate-900">
              <TrendingUp className="w-4 h-4 text-green-500" /> Dòng Tiền Lũy Kế 12 Tháng
            </h2>
            <div className="h-56 mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyProjectionData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <YAxis tickFormatter={(val) => formatM(val)} axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <RechartsTooltip formatter={(val: any) => formatM(val) + ' VND'} contentStyle={{borderRadius: '8px', fontSize: '11px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Area type="monotone" dataKey="Doanh thu lũy kế" stroke="#10b981" fillOpacity={0.1} fill="#10b981" strokeWidth={2} />
                  <Area type="monotone" dataKey="Chi phí lũy kế" stroke="#ef4444" fillOpacity={0.1} fill="#ef4444" strokeWidth={2} />
                  <Legend verticalAlign="bottom" height={20} iconType="plainline" wrapperStyle={{fontSize: '11px', color: '#64748b', marginTop: '10px'}}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Demographics & Logistics Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
         <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full blur-[80px] opacity-20"></div>
            <div className="relative z-10">
               <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 text-yellow-400">
                 <Users className="w-3.5 h-3.5"/> Demographics & Target Audience
               </h3>
               <div className="space-y-4 text-xs font-medium">
                 <div className="flex justify-between border-b border-slate-800 pb-3">
                   <span className="text-slate-400">Độ tuổi (Age)</span>
                   <span className="text-white">Gen Y & Z (18-35 tuổi)</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800 pb-3">
                   <span className="text-slate-400">Thu nhập (Income)</span>
                   <span className="text-white">Trung bình - Cao (15M+ VND/Tháng)</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800 pb-3">
                   <span className="text-slate-400">Phong cách sống</span>
                   <span className="text-white">Thích trải nghiệm nghệ thuật, Check-in</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-slate-400">Dwell Time (Cafe)</span>
                   <span className="text-white">2 - 3 Giờ / Lượt</span>
                 </div>
               </div>
            </div>
         </div>

         <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 text-slate-800">
               <Truck className="w-3.5 h-3.5 text-slate-600"/> Tối ưu hóa Logictics & Hạ Tầng
            </h3>
            <div className="space-y-4 text-xs font-medium">
               <div className="flex justify-between border-b border-slate-200 pb-3">
                 <span className="text-slate-500">Chi phí xăng/vận chuyển setup</span>
                 <span className="text-slate-900 font-mono">{formatM(setupLogisticsCostPerCafe)} / quán</span>
               </div>
               <div className="flex justify-between border-b border-slate-200 pb-3">
                 <span className="text-slate-500">Chi phí đi lại bảo trì (hàng tháng)</span>
                 <span className="text-slate-900 font-mono">{formatK(monthlyMaintenanceGasPerCafe)} / quán / tháng</span>
               </div>
               <div className="flex justify-between border-b border-slate-200 pb-3">
                 <span className="text-slate-500">Tổng chi phí Logistic năm 1</span>
                 <span className="text-slate-900 font-mono font-bold">{formatM(setupLogistics + yearlyLogisticsOPEX)}</span>
               </div>
               <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest pt-2">
                 *Đã loại trừ biến phí phần mềm. Tập trung duy nhất vào dòng vốn phần cứng và luân chuyển hàng hóa thực tế.
               </p>
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

