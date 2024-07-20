import React, { useState, useEffect } from "react";
// import Identicon from "@polkadot/react-identicon";
import "./App.css";

// Define the type for a medical record
interface MedicalRecord {
  account: string;
  bloodType: string;
  sicknesses: string;
}

// Define the type for the props
// interface MedicalHistoryProps {
//   account: typeof KeyringPair;
// }

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ account }) => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [newRecord, setNewRecord] = useState<MedicalRecord>({
    account: accountes,
    bloodType: "",
    sicknesses: "",
  });

  useEffect(() => {
    setRecords(getRecords());
  }, []);

  const handleAddRecord = () => {
    const record: MedicalRecord = { account: account.address, ...newRecord };
    saveRecord(record);
    setRecords([...records, record]);
    setNewRecord({ account: account.address, bloodType: "", sicknesses: "" });
  };

  return (
    <div className="logged-in-container">
      <h2>Welcome</h2>
      {/* <Identicon value={account.address} size={64} theme={"polkadot"} /> */}
      <p>Address: {account.address}</p>
      <h2>Add Medical Record</h2>
      <label>
        Blood Type:
        <input
          type="text"
          value={newRecord.bloodType}
          onChange={(e) =>
            setNewRecord({ ...newRecord, bloodType: e.target.value })
          }
          placeholder="Enter blood type"
        />
      </label>
      <label>
        Sicknesses:
        <textarea
          value={newRecord.sicknesses}
          onChange={(e) =>
            setNewRecord({ ...newRecord, sicknesses: e.target.value })
          }
          placeholder="Enter sicknesses"
        />
      </label>
      <button onClick={handleAddRecord}>Add Record</button>
      <h2>Your Records</h2>
      <ul>
        {records
          .filter((record) => record.account === account.address)
          .map((record, index) => (
            <li key={index}>
              <p>
                <strong>Blood Type:</strong> {record.bloodType}
              </p>
              <p>
                <strong>Sicknesses:</strong> {record.sicknesses}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

// Utility function to save a record to localStorage
function saveRecord(record: MedicalRecord): void {
  const records: MedicalRecord[] = JSON.parse(localStorage.getItem("medicalRecords") || "[]");
  records.push(record);
  localStorage.setItem("medicalRecords", JSON.stringify(records));
}

// Utility function to get records from localStorage
function getRecords(): MedicalRecord[] {
  return JSON.parse(localStorage.getItem("medicalRecords") || "[]");
}

export default MedicalHistory;
