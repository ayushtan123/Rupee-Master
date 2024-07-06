import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1> Welcome <span style={{ color: '#37B7C3' }}>{user?.firstName}</span></h1>

      <h2>
        <span style={{ color: '#1E90FF' }}>Track</span>, 
        <span style={{ color: '#4C3BCF' }}> Manage</span>, 
        <span style={{ color: '#50B498' }}> Master</span> ! 
        Here are your Financial Transactions
      </h2>

      <FinancialRecordForm />
      <div> <h2 style={{ color: totalMonthly < 0 ? 'red' : 'black' }}>
          Total Monthly: ₹ {totalMonthly}
        </h2></div>
      <FinancialRecordList />

    </div>
  );
};