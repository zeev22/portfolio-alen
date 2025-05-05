import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import '../CertificateDetail.css';

// Placeholder imports for certificates (replace with actual PNG paths)
import Cert1 from '../assets/certs/cert1.png';
import Cert2 from '../assets/certs/cert2.png';
import Cert3 from '../assets/certs/cert3.png';
import Cert4 from '../assets/certs/cert4.png';
import Cert5 from '../assets/certs/cert5.png';
import Cert6 from '../assets/certs/cert6.png';
import Cert7 from '../assets/certs/cert7.png';
import Cert8 from '../assets/certs/cert8.png';
import Cert9 from '../assets/certs/cert9.png';
import Cert10 from '../assets/certs/cert10.png';
import Cert11 from '../assets/certs/cert11.png';
import Cert12 from '../assets/certs/cert12.png';
import Cert13 from '../assets/certs/cert13.png';
import Cert14 from '../assets/certs/cert14.png';
import Cert15 from '../assets/certs/cert15.png';
import Cert16 from '../assets/certs/cert16.png';
import Cert17 from '../assets/certs/cert17.png';
import Cert18 from '../assets/certs/cert18.png';
import Cert19 from '../assets/certs/cert19.png';
import Cert20 from '../assets/certs/cert20.png';
import Cert21 from '../assets/certs/cert21.png';
import Cert22 from '../assets/certs/cert22.png';
import Cert23 from '../assets/certs/cert23.png';

const certificates = [
  {
    id: 1,
    image: Cert1,
    source: "SIMPLILEARN",
    description: "Learn Angular, a popular framework for building dynamic web applications, focusing on components, services, and data binding."
  },
  {
    id: 2,
    image: Cert2,
    source: "SIMPLILEARN",
    description: "Understand the basics of neural networks, including architecture, training, and applications in AI and machine learning."
  },
  {
    id: 3,
    image: Cert3,
    source: "SIMPLILEARN",
    description: "Learn how to build scalable and efficient web applications using NodeJS and JavaScript."
  },
  {
    id: 4,
    image: Cert4,
    source: "SIMPLILEARN",
    description: "Learn how to develop machine learning models to identify and classify images, leveraging techniques like convolutional neural networks."
  },
  {
    id: 5,
    image: Cert5,
    source: "SIMPLILEARN",
    description: "Learn the principles of cryptography, including encryption, decryption, and secure communication techniques."
  },
  {
    id: 6,
    image: Cert7,
    source: "SIMPLILEARN",
    description: "Learn the fundamentals of Python programming, including syntax, data structures, and basic algorithms for software development."
  },
  {
    id: 7,
    image: Cert7,
    source: "SIMPLILEARN",
    description: "Start with JavaScript to build dynamic web applications, covering basics like variables, functions, and DOM manipulation."
  },
  {
    id: 8,
    image: Cert8,
    source: "SIMPLILEARN",
    description: "Get introduced to React JS, a popular front-end library, and learn how to build interactive user interfaces"
  },
  {
    id: 9,
    image: Cert9,
    source: "SIMPLILEARN",
    description: "Dive into R programming for data analysis, statistical computing, and graphical visualization."
  },
  {
    id: 10,
    image: Cert10,
    source: "SIMPLILEARN",
    description: "Understand the fundamentals of C++ programming, including object-oriented concepts and memory management."
  }, {
    id: 11,
    image: Cert11,
    source: "SIMPLILEARN",
    description: "Master Python 3.x features and libraries, including object-oriented programming and data manipulation techniques."
  }, {
    id: 12,
    image: Cert12,
    source: "SIMPLILEARN",
    description: " Learn full-stack Java development, covering front-end and back-end frameworks, databases, and APIs."
  },
  {
    id: 13,
    image: Cert13,
    source: "SIMPLILEARN",
    description: "Understand the key concepts of cyber crime, its impact on society, and strategies for prevention and legal enforcement."
  },
  {
    id: 14,
    image: Cert14,
    source: "SIMPLILEARN",
    description: "Learn the foundational principles of cyber security, including threat detection, risk management, and security controls to protect systems and data."
  },
  {
    id: 15,
    image: Cert15,
    source: "SIMPLILEARN",
    description: "fundamentals of supervised and unsupervised learning, including algorithms, training, and clustering techniques."
  },
  {
    id: 16,
    image: Cert16,
    source: "SIMPLILEARN",
    description: "Gain insights into security assessment, testing, and operations, key components of the CISSP certification."
  },
  {
    id: 17,
    image: Cert17,
    source: "SIMPLILEARN",
    description: "fundamentals of supervised and unsupervised learning, including algorithms, training, and clustering techniques."
  },
  {
    id: 18,
    image: Cert18,
    source: "SIMPLILEARN",
    description: " Discover data mining techniques, focusing on data collection, preprocessing, and pattern recognition."
  },
  {
    id: 19,
    image: Cert19,
    source: "SIMPLILEARN",
    description: "Understand deep learning concepts and build neural networks using Keras, with practical applications in image and text recognition."
  },
  {
    id: 20,
    image: Cert20,
    source: "SIMPLILEARN",
    description: "Gain hands-on experience with machine learning using R, focusing on data analysis, model building, and evaluation."
  },
  {
    id: 21,
    image: Cert21,
    source: "SIMPLILEARN",
    description: "Dive into NLP and text mining, exploring techniques to process, analyze, and extract meaningful information from text data."
  },
  {
    id: 22,
    image: Cert22,
    source: "SIMPLILEARN",
    description: "Develop a solid understanding of Project Management Professional (PMP) concepts, covering methodologies, project lifecycle, and best practices."
  },
  {
    id: 23,
    image: Cert23,
    source: "SIMPLILEARN",
    description: "Start your TensorFlow journey, building and training machine learning models for various tasks such as image and speech recognition."
  },
];

const CertificateDetail = () => {
  const { id } = useParams();
  const certificate = certificates.find(cert => cert.id === parseInt(id));

  if (!certificate) {
    return (
      <div className="certificate-detail-container">
        <h2>Certificate Not Found</h2>
        <p>The certificate with ID {id} does not exist.</p>
        <NavLink to="/experiences" className="back-link">Back to Experiences</NavLink>
      </div>
    );
  }

  return (
    <div className="certificate-detail-container">
      <h2>Certificate Details</h2>
      <p><strong>Source:</strong> {certificate.source}</p>
      <p><strong>Description:</strong> {certificate.description}</p> {/* Display the description here */}
      <img src={certificate.image} alt={`Certificate ${certificate.id}`} className="certificate-image" />
     
    </div>
  );
};

export default CertificateDetail;
