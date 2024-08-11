import React, { useState, useEffect } from 'react';
import './Container.css';
import jobs from '../jobs.json';
import TruncatedText from './TruncatedText';
import ScrollToTop from '../ScrollTop/ScrollToTop';

const Container = () => {
    const [filterInput, setFilterInput] = useState('');
    const [filter, setFilter] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [expandedJobIndex, setExpandedJobIndex] = useState(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 670);

    const filteredJobs = jobs.filter(job => job.name.toLowerCase().includes(filter.toLowerCase()));

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 670);
        };

        window.addEventListener('resize', handleResize);

        if (filteredJobs.length > 0 && !isMobileView) {
            setSelectedJob(filteredJobs[0]);
        } else {
            setSelectedJob(null);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [filter, isMobileView]);

    const handleFilterAndScroll = () => {
        setFilter(filterInput);
    };

    const toggleJobDetails = (index) => {
        if (expandedJobIndex === index) {
            setExpandedJobIndex(null);
        } else {
            setExpandedJobIndex(index);
        }
    };

    return (
        <div>
            <section className="career-container">
                <div className="filters">
                    <div className="input-div">
                        <input
                            type="text"
                            id="job-filter"
                            value={filterInput}
                            onChange={(e) => setFilterInput(e.target.value)}
                            placeholder="Search for Jobs..."
                        />
                        <button className='btn-2' onClick={handleFilterAndScroll}>View Jobs</button>
                    </div>
                </div>
                <div className="job-row">
                    <div className="job-list">
                        {filteredJobs.map((job, index) => (
                            <div
                                key={index}
                                className={`job ${selectedJob === job ? 'active' : ''} ${expandedJobIndex === index ? 'expanded' : ''}`}
                                onClick={() => isMobileView ? toggleJobDetails(index) : setSelectedJob(job)}
                            >
                                <h2 className={`head ${selectedJob === job ? 'active' : ''}`}>{job.name}</h2>
                                <ul className='tags'>
                                    {job.proList.map((pro, i) => (
                                        <li className="tagLists" key={i}>{pro}</li>
                                    ))}
                                </ul>
                                {(!isMobileView || expandedJobIndex !== index) && (
                                    <TruncatedText text={job.description} limit={18} />
                                )}
                                {isMobileView && expandedJobIndex === index && (
                                    <div className="job-details">
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Primary Responsibilities:</h4>
                                            <p className='response-p'>{job.description}</p>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Job Specification:</h4>
                                            <ul className='specification-ul'>
                                                {job.specification.map((list, i) => (
                                                    <li className='specification-lists' key={i}>{list}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Employment Type:</h4>
                                            <p className='response-p'>{job.empType}</p>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>WorkPlace type:</h4>
                                            <p className='response-p'>{job.workPlace}</p>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Salary:</h4>
                                            <p className='response-p'>{job.salary}</p>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Experience Required:</h4>
                                            <p className='response-p'>{job.experience}</p>
                                        </div>
                                        <div className="contents-div">
                                            <h4 className='content-h4'>Location:</h4>
                                            <p className='response-p'>{job.location}</p>
                                        </div>
                                        <button className='btn-2'>Apply Now</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {!isMobileView && selectedJob && (
                        <div id="job-details">
                            <h2 className='head'>{selectedJob.name}</h2>
                            <ul className='tags'>
                                {selectedJob.proList.map((pro, i) => (
                                    <li className="tagLists" key={i}>{pro}</li>
                                ))}
                            </ul>
                            <div className="contents-div">
                                <h4 className='content-h4'>Primary Responsibilities:</h4>
                                <p className='response-p'>{selectedJob.description}</p>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>Job Specification:</h4>
                                <ul className='specification-ul'>
                                    {selectedJob.specification.map((list, i) => (
                                        <li className='specification-lists' key={i}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>Employment Type:</h4>
                                <p className='response-p'>{selectedJob.empType}</p>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>WorkPlace type:</h4>
                                <p className='response-p'>{selectedJob.workPlace}</p>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>Salary:</h4>
                                <p className='response-p'>{selectedJob.salary}</p>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>Experience Required:</h4>
                                <p className='response-p'>{selectedJob.experience}</p>
                            </div>
                            <div className="contents-div">
                                <h4 className='content-h4'>Location:</h4>
                                <p className='response-p'>{selectedJob.location}</p>
                            </div>
                            <button className='btn-2'>Apply Now</button>
                        </div>
                    )}
                </div>
                <ScrollToTop />
            </section>
        </div>
    );
};

export default Container;
