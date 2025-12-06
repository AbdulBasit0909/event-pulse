import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const HostAnalytics = ({ userId }) => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/analytics/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (err) {
        console.error("Analytics Error", err);
      }
    };
    fetchData();
  }, [userId]);

  if (!data) return <div className="p-4 text-center">Loading Analytics...</div>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fadeIn">
      <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">📈 Host Command Center</h3>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-300 uppercase font-bold">Total Revenue</p>
          <p className="text-3xl font-extrabold text-blue-600">${data.totalRevenue}</p>
        </div>
        <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-300 uppercase font-bold">Tickets Sold</p>
          <p className="text-3xl font-extrabold text-green-600">{data.totalTicketsSold}</p>
        </div>
        <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-300 uppercase font-bold">Events Hosted</p>
          <p className="text-3xl font-extrabold text-purple-600">{data.totalEvents}</p>
        </div>
      </div>

      {/* CHART */}
      <div className="h-64 w-full">
        <h4 className="text-sm font-bold mb-4 text-gray-600 dark:text-gray-300">Revenue Performance</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" stroke="#8884d8" fontSize={12} />
            <YAxis />
            <Tooltip 
                contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "none", color: "#fff" }}
                itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HostAnalytics;