import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
    return

  };

  useEffect(() => {
    fetchJobs();
    return
  }, []);

  console.log(jobs)
  if (loading) {
    return <section className='loading section'>
      <h1>loading...</h1>
    </section>
  }

  const {id, order, title, dates, duties, company} = jobs[value];
  return (
    <div>

        <section className='section'>

          <div className='title'>
            <h2>Experience</h2>
            <div className='underline'></div>
          </div>

          <div className='job-center'>
            {/* button container */}
            <div className='btn-container '>
              {jobs.map((item, index) => { return <button className={value === index ? "active-btn job-btn" : 'job-btn'}  onClick={() => { setValue(index)}}>{item.company}</button>})}

            </div>
            {/* job info */}


            <article className='job-info'>

              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className='job-date'> {dates}</p>

              {
                duties.map((item,index) => {
                  return <div key ={index}>
                    <FaAngleDoubleRight className='job-icon'>
                      
                    </FaAngleDoubleRight> 
                    {item}  
                  
                  </div>
                } )
              }
            </article>
          </div>
        </section>
      </div>
  );
            }

export default App

