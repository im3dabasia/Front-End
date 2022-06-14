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

  if (loading) {
    return <section className='loading section'>
      <h1>loading...</h1>
    </section>
  }

  const [id, order, title, dates, duties, company] = jobs[1];
  return (
    <div>

      <div className='  btn-container'>



        <section className='section'>
          <div className='title'>
            <h2 className='title'>Experience</h2>
            <div className='underline'></div>
          </div>
          <div className='job-center'>
            {/* button container */}
            {/* job info */}


            <article className='job-info'>

              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className='job-date'> {dates}</p>

              {
                duties.map((item,index) => {
                  return <div key ={index} > </div>
                } )
              }







            </article>
          </div>
          {/* <p className='job-desc'>{duties.map((item, index) => return <div className='job-date' key={index}>

            <FaAngleDoubleRight className='job-icon'>
            </FaAngleDoubleRight>
            {item}
            )}
            </p> */}

          </div>  
          {/* </p> */}
          <button className='btn'>More Info</button>


        </section>
      </div>
    </div>


  )

}

export default App

