// src/pages/medical-history.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

interface MedicalRecord {
  account: string;
  bloodType: string;
  sicknesses: string;
  allergies: string;
  medications: string;
  emergencyContact: string;
}

const MedicalHistory: React.FC = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [newRecord, setNewRecord] = useState<MedicalRecord>({
    account: "",
    bloodType: "",
    sicknesses: "",
    allergies: "",
    medications: "",
    emergencyContact: "",
  });

  useEffect(() => {
    setRecords(getRecords());
  }, []);

  const handleAddRecord = () => {
    if (isValidRecord(newRecord)) {
      const record: MedicalRecord = { ...newRecord, account: "defaultAccount" };
      saveRecord(record);
      setRecords([...records, record]);
      setNewRecord({
        account: "",
        bloodType: "",
        sicknesses: "",
        allergies: "",
        medications: "",
        emergencyContact: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidRecord = (record: MedicalRecord) => {
    return Object.values(record).every((value) => value.trim() !== "");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <h2>Add Medical Record</h2>
        <form>
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
          <label>
            Allergies:
            <textarea
              value={newRecord.allergies}
              onChange={(e) =>
                setNewRecord({ ...newRecord, allergies: e.target.value })
              }
              placeholder="Enter allergies"
            />
          </label>
          <label>
            Medications:
            <textarea
              value={newRecord.medications}
              onChange={(e) =>
                setNewRecord({ ...newRecord, medications: e.target.value })
              }
              placeholder="Enter medications"
            />
          </label>
          <label>
            Emergency Contact:
            <input
              type="text"
              value={newRecord.emergencyContact}
              onChange={(e) =>
                setNewRecord({ ...newRecord, emergencyContact: e.target.value })
              }
              placeholder="Enter emergency contact"
            />
          </label>
          <button type="button" onClick={handleAddRecord}>
            Add Record
          </button>
        </form>
        <h2>Your Records</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index} className="record-item">
              <p>
                <strong>Blood Type:</strong> {record.bloodType}
              </p>
              <p>
                <strong>Sicknesses:</strong> {record.sicknesses}
              </p>
              <p>
                <strong>Allergies:</strong> {record.allergies}
              </p>
              <p>
                <strong>Medications:</strong> {record.medications}
              </p>
              <p>
                <strong>Emergency Contact:</strong> {record.emergencyContact}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          background-color: #f0f4f8;
          min-height: 100vh;
          padding: 20px;
        }
        .form-container {
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 0 auto;
          max-width: 600px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 1rem;
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          margin-top: 4px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        textarea {
          height: 100px;
        }
        button {
          padding: 10px;
          background-color: #0366d6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
          margin-top: 10px;
        }
        button:hover {
          background-color: #0353a4;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        .record-item {
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
        }
      `}</style>
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
