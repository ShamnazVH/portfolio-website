import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Libraries",
      icon: "fas fa-code",
      skills: [
        "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"
      ]
    },
    {
      title: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        "Classification", "Regression", "Ensemble Methods", "Deep Learning", "CNN – VGG16", "Image Analytics"
      ]
    },
    {
      title: "Data Processing",
      icon: "fas fa-database",
      skills: [
        "Data Preprocessing", "Feature Engineering", "Feature Scaling", "OpenCV"
      ]
    },
    {
      title: "Statistical Analysis",
      icon: "fas fa-chart-line",
      skills: [
        "Hypothesis Testing", "ANOVA", "Chi-Squared", "Time Series Analysis"
      ]
    },
    {
      title: "Model Evaluation",
      icon: "fas fa-trophy",
      skills: [
        "ROC-AUC", "Precision", "Recall", "F1-Score", "Confusion Matrix"
      ]
    },
    {
      title: "Data Visualization",
      icon: "fas fa-chart-bar",
      skills: [
        "Matplotlib", "Seaborn", "Power BI", "Excel"
      ]
    },
    {
      title: "Database & Analytics",
      icon: "fas fa-server",
      skills: [
        "SQL", "Data Extraction", "Data Cleaning"
      ]
    },
    {
      title: "NLP & Text Mining",
      icon: "fas fa-language",
      skills: [
        "Spam Detection", "Text Classification", "Naive Bayes"
      ]
    },
    {
      title: "Deployment & Pipeline",
      icon: "fas fa-rocket",
      skills: [
        "Model Deployment", "Pipeline Development", "Pickle", "Streamlit"
      ]
    }
  ];

  return (
    <section id="skills" className="section section-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="fade-up">
              Core Skills & Technologies
            </h2>
            <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
              A comprehensive overview of my technical expertise across data science, 
              machine learning, and software development domains.
            </p>
          </div>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="skill-header mb-3">
                <i className={`${category.icon} text-primary me-2`}></i>
                <h4 className="d-inline">{category.title}</h4>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <i className="fas fa-check-circle"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Skills;
