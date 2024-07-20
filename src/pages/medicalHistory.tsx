import React, { useState, useEffect } from "react";

interface MedicalRecord {
  account: string;
  bloodType: string;
  sicknesses: string;
}

const MedicalHistory: React.FC = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [newRecord, setNewRecord] = useState<MedicalRecord>({
    account: "",
    bloodType: "",
    sicknesses: "",
  });

  useEffect(() => {
    setRecords(getRecords());
  }, []);

  const handleAddRecord = () => {
    const record: MedicalRecord = { ...newRecord, account: "defaultAccount" };
    saveRecord(record);
    setRecords([...records, record]);
    setNewRecord({ account: "", bloodType: "", sicknesses: "" });
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Medical System</h2>
      </nav>
      <div className="logged-in-container">
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
          {records.map((record, index) => (
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
    </div>
  );
};

function saveRecord(record: MedicalRecord): void {
  const records: MedicalRecord[] = JSON.parse(
    localStorage.getItem("medicalRecords") || "[]",
  );
  records.push(record);
  localStorage.setItem("medicalRecords", JSON.stringify(records));
}

function getRecords(): MedicalRecord[] {
  return JSON.parse(localStorage.getItem("medicalRecords") || "[]");
}

export default MedicalHistory;
