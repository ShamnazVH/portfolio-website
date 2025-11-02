import React from "react";

const Projects = () => {
  const projects = [
    {
      title:
        "Customer Churn Prediction | Ensemble ML Models & Business Impact Analysis",
      description:
        "Engineered ensemble system (Gradient Boosting, Random Forest) using SMOTE and GridSearchCV on 7K+ telecom records featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
      achievements: [
        "Achieved 88% ROC-AUC score",
        "Reduced churn by 20%",
        "Generated $280K+ annual savings",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "SMOTE",
        "GridSearchCV",
        "Gradient Boosting",
        "Random Forest",
        "Pickle",
      ],
      impact: "High Business Impact",
      githubLink: "https://github.com/yourusername/customer-churn-prediction",
    },
    {
      title:
        "Machine Learning Healthcare Prediction System | KNN Classification & Clinical Decision Support",
      description:
        "Developed a diabetes prediction system using a KNN classifier with 80%+ accuracy, featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
      achievements: [
        "80%+ classification accuracy",
        "Real-time clinical decision support",
        "Optimized for healthcare applications",
      ],
      technologies: [
        "Python",
        "KNN",
        "Scikit-learn",
        "Data Preprocessing",
        "Feature Scaling",
        "Pickle",
      ],
      impact: "Healthcare Innovation",
      githubLink: "https://github.com/yourusername/healthcare-prediction",
    },
    {
      title:
        "Financial Data Analytics: Cryptocurrency Trading Behavior Analysis with Statistical Modeling",
      description:
        "Analyzed 10,000+ trades using ANOVA and Chi-Squared hypothesis testing (p<0.001) to uncover sentiment-driven trading patterns, improving strategy profitability by 15–30%.",
      achievements: [
        "Analyzed 10,000+ trading records",
        "Statistical significance (p<0.001)",
        "15–30% profitability improvement",
      ],
      technologies: [
        "Python",
        "Statistical Analysis",
        "ANOVA",
        "Chi-Squared Testing",
        "Data Visualization",
        "Pandas",
      ],
      impact: "Financial Analytics",
      githubLink: "https://github.com/yourusername/crypto-trading-analysis",
    },
    {
      title:
        "NLP Email Classification System | Spam Detection with Naive Bayes & Model Deployment",
      description:
        "Built NLP-based spam detection, achieving 98% accuracy with automated Scikit-learn pipelines and deployment-ready serialized models.",
      achievements: [
        "98% classification accuracy",
        "Real-time classification system",
        "80% reduction in screening time",
      ],
      technologies: [
        "Python",
        "NLP",
        "Naive Bayes",
        "Scikit-learn",
        "Model Deployment",
        "Pickle",
      ],
      impact: "Efficiency Optimization",
      githubLink: "https://github.com/yourusername/email-spam-classifier",
    },
  ];

  return (
    <section id="projects" className="section section-middle">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">
            Featured Projects
          </h2>
          <p
            className="text-muted"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Explore impactful Data Science and Machine Learning projects
            showcasing real-world analytics and model deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-10 mb-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="card project-card shadow-lg w-100">
                <div className="card-header">
                  <h5 className="project-title mb-0">{project.title}</h5>
                </div>

                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <p className="project-description mb-3">
                      {project.description}
                    </p>

                    <div className="achievements mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-trophy me-2"></i> Key Achievements:
                      </h6>
                      <ul className="list-unstyled">
                        {project.achievements.map((a, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-tools me-2"></i> Technologies:
                      </h6>
                      <div className="project-tech">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-start">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github-left-btn"
                      >
                        <i className="fab fa-github me-2"></i> View Code on
                        GitHub
                      </a>
                    </div>

                    <div className="impact mt-3 text-start">
                      <span
                        className={`badge ${
                          project.impact === "High Business Impact"
                            ? "bg-success"
                            : project.impact === "Healthcare Innovation"
                            ? "bg-info"
                            : project.impact === "Financial Analytics"
                            ? "bg-warning"
                            : "bg-primary"
                        }`}
                      >
                        <i className="fas fa-star me-1"></i> {project.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .card-header {
          background: linear-gradient(135deg, #7877c6 0%, #4a4a4a 100%);
          padding: 1.1rem 1.4rem;
          border-radius: 16px 16px 0 0;
        }

        .project-title {
          color: #fff;
          font-size: 1.08rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .project-card {
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 0.4rem;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
        }

        .card-body {
          padding: 1.3rem 1.6rem;
        }

        .github-left-btn {
          background: linear-gradient(135deg, #7877c6 0%, #4a4a4a 100%);
          color: white;
          padding: 9px 18px;
          border-radius: 10px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .github-left-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .tech-badge {
          background: #f5f5f5;
          padding: 4px 10px;
          border-radius: 6px;
          margin: 4px;
          font-size: 0.8rem;
          color: #444;
        }

        .impact .badge {
          padding: 6px 10px;
          font-size: 12px;
          border-radius: 8px;
          font-weight: 500;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Projects;

// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Customer Churn Prediction | Ensemble ML Models & Business Impact Analysis",
//       description: "Engineered ensemble system (Gradient Boosting, Random Forest) using SMOTE and GridSearchCV on 7K+ telecom records featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
//       achievements: [
//         "Achieved 88% ROC-AUC score",
//         "Reduced churn by 20%",
//         "Generated $280K+ annual savings"
//       ],
//       technologies: ["Python", "Scikit-learn", "SMOTE", "GridSearchCV", "Gradient Boosting", "Random Forest", "Pickle"],
//       impact: "High Business Impact",
//       githubLink: "https://github.com/ShamnazVH/telco-customer-churn"
//     },
//     {
//       title: "Machine Learning Healthcare Prediction System | KNN Classification & Clinical Decision Support",
//       description: "Developed a diabetes prediction system using a KNN classifier with 80%+ accuracy, featuring data preprocessing, feature scaling, and Pickle serialization for real-time clinical applications.",
//       achievements: [
//         "80%+ classification accuracy",
//         "Real-time clinical decision support",
//         "Optimized for healthcare applications"
//       ],
//       technologies: ["Python", "KNN", "Scikit-learn", "Data Preprocessing", "Feature Scaling", "Pickle"],
//       impact: "Healthcare Innovation",
//       githubLink: "https://github.com/yourusername/healthcare-prediction" // Update this link
//     },
//     {
//       title: "Financial Data Analytics: Cryptocurrency Trading Behavior Analysis with Statistical Modeling",
//       description: "Analyzed 10,000+ trades using ANOVA and Chi-Squared hypothesis testing (p<0.001) to uncover sentiment-driven trading patterns, improving strategy profitability by 15–30%.",
//       achievements: [
//         "Analyzed 10,000+ trading records",
//         "Statistical significance (p<0.001)",
//         "15-30% strategy profitability improvement"
//       ],
//       technologies: ["Python", "Statistical Analysis", "ANOVA", "Chi-Squared Testing", "Data Visualization", "Pandas"],
//       impact: "Financial Analytics",
//       githubLink: "https://github.com/ShamnazVH/credit-risk-prediction"
//     },
//     {
//       title: "NLP Email Classification System | Spam Detection with Naive Bayes & Model Deployment",
//       description: "Built NLP-based spam detection, achieving 98% accuracy with an automated Scikit-learn pipeline. Deployed serialized model for real-time classification, reducing screening time by 80%.",
//       achievements: [
//         "98% classification accuracy",
//         "Real-time classification system",
//         "80% reduction in screening time"
//       ],
//       technologies: ["Python", "NLP", "Naive Bayes", "Scikit-learn", "Model Deployment", "Pickle"],
//       impact: "Efficiency Optimization",
//       githubLink: "https://github.com/ShamnazVH/Spam-Email-Detector"
//     }
//   ];

//   return (
//     <section id="projects" className="section section-middle">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <h2 className="section-title" data-aos="fade-up">
//               Featured Projects
//             </h2>
//             <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
//               Explore my portfolio of data science and machine learning projects that demonstrate 
//               technical expertise and real-world business impact.
//             </p>
//           </div>
//         </div>
        
//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
//               <div className="card project-card h-100">
//                 <div className="card-header">
//                   <h5 className="project-title mb-0">{project.title}</h5>
//                 </div>
//                 <div className="card-body">
//                   <p className="project-description">{project.description}</p>
                  
//                   <div className="achievements mb-3">
//                     <h6 className="text-primary mb-2">
//                       <i className="fas fa-trophy me-2"></i>
//                       Key Achievements:
//                     </h6>
//                     <ul className="list-unstyled">
//                       {project.achievements.map((achievement, idx) => (
//                         <li key={idx} className="mb-1">
//                           <i className="fas fa-check-circle text-success me-2"></i>
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="technologies mb-3">
//                     <h6 className="text-primary mb-2">
//                       <i className="fas fa-tools me-2"></i>
//                       Technologies:
//                     </h6>
//                     <div className="project-tech">
//                       {project.technologies.map((tech, idx) => (
//                         <span key={idx} className="tech-badge">{tech}</span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* GitHub Link Button - Improved Styling */}
//                   <div className="project-links mb-3 text-center">
//                     <a 
//                       href={project.githubLink} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="btn btn-github-custom"
//                     >
//                       <i className="fab fa-github me-2"></i>
//                       View Code on GitHub
//                     </a>
//                   </div>
                  
//                   <div className="impact">
//                     <span className={`badge ${project.impact === 'High Business Impact' ? 'bg-success' : 
//                       project.impact === 'Healthcare Innovation' ? 'bg-info' : 
//                       project.impact === 'Financial Analytics' ? 'bg-warning' : 'bg-primary'}`}>
//                       <i className="fas fa-star me-1"></i>
//                       {project.impact}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

// <style jsx>{`
//   .btn-github-custom {
//     background: linear-gradient(135deg, #333 0%, #000 100%);
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 8px;
//     font-weight: 600;
//     transition: all 0.3s ease;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//     position: relative;
//     overflow: hidden;
//   }

//   .btn-github-custom:hover {
//     background: linear-gradient(135deg, #000 0%, #333 100%);
//     color: #f0f0f0;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//   }

//   .btn-github-custom:active {
//     transform: translateY(0);
//   }

//   .btn-github-custom::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//     transition: left 0.5s;
//   }

//   .btn-github-custom:hover::before {
//     left: 100%;
//   }

//   .project-card {
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//     border: none;
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
//     border-radius: 16px;
//     overflow: hidden;
//   }

//   .project-card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
//   }

//   /* Match gradient color like your screenshot */
//   .card-header {
//     background: linear-gradient(135deg, #7877c6 0%, #4a4a4a 100%);
//     color: white;
//     border-bottom: none;
//     padding: 1.5rem;
//   }

//   .project-title {
//     font-weight: 600;
//     font-size: 1.1rem;
//     margin: 0;
//   }

//   .card-body {
//     background: #ffffff;
//     padding: 1.5rem;
//   }

//   .project-description {
//     color: #555;
//     font-size: 0.95rem;
//     line-height: 1.6;
//   }

//   .tech-badge {
//     display: inline-block;
//     background: #f8f9fa;
//     border: 1px solid #dee2e6;
//     padding: 4px 8px;
//     margin: 2px 4px 2px 0;
//     border-radius: 4px;
//     font-size: 0.8rem;
//     color: #495057;
//   }

//   .achievements h6,
//   .technologies h6 {
//     font-weight: 600;
//     color: #4a4a4a;
//   }

//   .impact .badge {
//     border-radius: 12px;
//     padding: 0.4rem 0.8rem;
//     font-size: 0.8rem;
//     font-weight: 600;
//   }
// `}</style>

      
//     </section>
//   );
// };

// export default Projects;