import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL – Indian Institute of Technology Madras",
      type: "Certification",
      category: "Programming",
      description:
        "Successfully completed 4-week NPTEL course with 64% consolidated score (Jan–Feb 2024). Covered Python applications in data analysis, visualization, and machine learning foundations.",
      date: "February 2024",
    },
    {
      title: "ML-Driven Fruit Freshness Analysis",
      issuer: "National Institute of Computer Technology Solutions (NICTS), Palakkad",
      type: "Project Internship",
      category: "Machine Learning",
      description:
        "Completed a 6-month project internship (Sept 2024 – Feb 2025) on ML-based fruit freshness detection. Involved in model development, dataset preprocessing, and performance evaluation.",
      date: "February 2025",
    },
    {
      title: "Data Analytics & Forensic Technology",
      issuer: "Deloitte Australia (Forage)",
      type: "Virtual Job Simulation",
      category: "Data Analytics",
      description:
        "Completed Deloitte’s Data Analytics & Forensic Technology virtual experience program, gaining exposure to real-world data investigation and analytics processes.",
      date: "August 2025",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      type: "Certification",
      category: "Artificial Intelligence",
      description:
        "Issued to SHAMNAZ VH on 13 October 2024 by IBM SkillsBuild. Focused on AI fundamentals, machine learning, and real-world AI applications.",
      date: "October 2024",
    },
    {
      title: "Employability Skills Training Program",
      issuer: "Mahindra Pride Classroom & Naandi Foundation",
      type: "Training Certification",
      category: "Professional Development",
      description:
        "Successfully completed the Employability Skills Training Program conducted by Mahindra Pride Classroom and Naandi Foundation, focusing on career readiness and communication skills.",
      date: "July 2024",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Analytics':
        return 'bg-primary';
      case 'Machine Learning':
        return 'bg-info';
      case 'Programming':
        return 'bg-warning';
      case 'Artificial Intelligence':
        return 'bg-success';
      case 'Professional Development':
        return 'bg-secondary';
      default:
        return 'bg-light';
    }
  };

  return (
    <section id="certifications" className="section section-middle">
      <div className="container">
        <div className="row text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">
            Certifications & Training
          </h2>
          <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
            Verified certifications and internship experiences reflecting my hands-on learning and
            professional development in data science, AI, and technology.
          </p>
        </div>

        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="certification-item p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0 fw-semibold">{cert.title}</h5>
                  <span className={`badge ${getCategoryColor(cert.category)}`}>{cert.category}</span>
                </div>
                <p className="mb-1">
                  <i className="fas fa-building me-2"></i>
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p className="mb-1">
                  <i className="fas fa-certificate me-2"></i>
                  <strong>Type:</strong> {cert.type}
                </p>
                <p className="mb-1">
                  <i className="fas fa-calendar me-2"></i>
                  <strong>Completed:</strong> {cert.date}
                </p>
                <p className="mt-2 text-muted">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .certification-item {
          background: #fff;
          border: 2px solid #e5e7eb;
          border-left: 6px solid #007bff;
          border-radius: 14px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease-in-out;
        }

        .certification-item:hover {
          transform: translateY(-6px);
          border-left: 6px solid #0056b3;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.15);
        }

        .badge {
          font-size: 0.75rem;
          padding: 6px 10px;
          border-radius: 8px;
          color: #fff;
        }

        .section-title {
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
