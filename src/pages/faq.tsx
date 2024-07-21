import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Why do we need a blockchain-based medical database?",
    answer:
      "A blockchain-based medical database provides enhanced security, transparency, and immutability. Unlike traditional databases, blockchain ensures that once data is recorded, it cannot be altered without consensus from the network, making it highly resistant to tampering and fraud. Additionally, it allows for secure and transparent sharing of medical information between authorized parties while maintaining patient privacy.",
  },
  {
    question: "How does blockchain improve data security?",
    answer:
      "Blockchain improves data security through its decentralized and cryptographic nature. Each block contains a unique hash of the previous block, creating a chain that is resistant to tampering. When data is added to the blockchain, it is encrypted and distributed across a network of nodes, ensuring that unauthorized alterations are nearly impossible and that any attempt to change data is easily detectable.",
  },
  {
    question: "What are the benefits of using blockchain in healthcare?",
    answer:
      "The benefits include increased security and privacy for patient data, enhanced interoperability between different healthcare systems, and improved data integrity. Blockchain can streamline administrative processes, reduce fraud, and provide patients with more control over their own health records. It also enables faster and more accurate sharing of information among healthcare providers, leading to better patient outcomes.",
  },
  {
    question: "How does a blockchain-based system handle patient consent?",
    answer:
      "In a blockchain-based system, patient consent is handled through smart contracts and cryptographic keys. Patients can provide or revoke consent electronically, and this consent is recorded immutably on the blockchain. Only those with the appropriate permissions can access or modify the data, ensuring that patient preferences are respected and enforced.",
  },
  {
    question:
      "Can blockchain technology be integrated with existing healthcare systems?",
    answer:
      "Yes, blockchain technology can be integrated with existing healthcare systems. It can be used to complement current systems by providing an additional layer of security and transparency. Integration involves developing interfaces and protocols that allow blockchain networks to communicate with traditional databases and healthcare systems, ensuring a smooth transition and interoperability.",
  },
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <Navbar />
      <div className="content">
        <h1>Frequently Asked Questions</h1>
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(index)}>
              <span>{item.question}</span>
              <span className="arrow">
                {expandedIndex === index ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`faq-answer ${expandedIndex === index ? "expanded" : "collapsed"}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .faq-container {
          background-color: #ffffff;
          min-height: 100vh;
          padding: 0;
        }
        .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        .content h1 {
          color: #0366d6;
          margin-bottom: 1rem;
        }
        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 1rem 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
          overflow: hidden; /* Ensures no overflow during animation */
        }
        .faq-item:hover {
          background-color: #f0f4f8;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2em;
          font-weight: bold;
        }
        .arrow {
          font-size: 1.5em;
          transition: transform 0.3s ease;
        }
        .faq-answer {
          max-height: 0; /* Start with answer hidden */
          overflow: hidden;
          opacity: 0;
          transition:
            max-height 0.5s ease,
            opacity 0.5s ease;
        }
        .faq-answer.expanded {
          max-height: 500px; /* Set to a large enough value to show the content */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
