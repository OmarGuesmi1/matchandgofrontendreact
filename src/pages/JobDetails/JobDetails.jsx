import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs, companies } from '../../assets/assets';
import './JobDetails.css';


const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));
  const company = companies.find(c => c.id === job.companyId);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="job-details-page">
      <h2>{job.title}</h2>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
      <p><strong>Remote:</strong> {job.remote ? "Yes" : "No"}</p>
      <p><strong>Technologies:</strong> {job.technologies.join(', ')}</p>
      <p><strong>Degrees:</strong> {job.degrees.join(', ')}</p>
      <p><strong>Languages:</strong> {job.languages.join(', ')}</p>
      <p><strong>Benefits:</strong> {job.benefits.join(', ')}</p>
      <p><strong>Sector:</strong> {job.sector}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Posted At:</strong> {job.postedAt}</p>
      <p><strong>Expires At:</strong> {job.expiresAt}</p>

      {company && (
        <>
          <h3>Company Info</h3>
          <p><strong>Name:</strong> {company.name}</p>
          {company.logo && <img src={company.logo} alt="logo" style={{ width: '100px' }} />}
          {company.cover && <img src={company.cover} alt="cover" style={{ width: '100%' }} />}
        </>
      )}
    </div>
  );
};

export default JobDetails;
