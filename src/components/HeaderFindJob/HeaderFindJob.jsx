import React, { useEffect, useState } from 'react';
import { jobs, companies } from '../../assets/assets';
import './HeaderFindJob.css';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const getDays = date => {
  const days = Math.ceil((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
  return days === 0 ? 'Posted today' : `Posted ${days} day${days > 1 ? 's' : ''} ago`;
};

const HeaderFindJob = () => {
  const [search, setSearch] = useState('');
  const [contract, setContract] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  const jobsPerPage = 6;
const navigate = useNavigate();

  const filtered = jobs.filter(j =>
    (j.title + j.keywords.join()).toLowerCase().includes(search.toLowerCase()) &&
    (!contract || j.type === contract) &&
    (!location || j.location === location)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'date-desc') return new Date(b.postedAt) - new Date(a.postedAt);
    if (sort === 'salary-desc') return +b.salary.replace(/\D/g, '') - +a.salary.replace(/\D/g, '');
    return 0;
  });

  const total = Math.ceil(sorted.length / jobsPerPage);
  const current = sorted.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  return (
    <div className="findjob-container">
      <h2 className="findjob-title">🔍 Find the job</h2>

     <div className="search-bar">
  <input
    className="search-input"
    placeholder="🔍 Enter keywords, skills, or job title..."
    value={search}
    onChange={e => { setSearch(e.target.value); setPage(1); }}
  />
  <select
    className="search-input"
    value={contract}
    onChange={e => { setContract(e.target.value); setPage(1); }}
  >
    <option value="">📄 Contract</option>
    <option>CDI</option>
    <option>CDD</option>
    <option>Freelance</option>
  </select>
  <select
    className="search-input"
    value={location}
    onChange={e => { setLocation(e.target.value); setPage(1); }}
  >
    <option value="">📍 Location</option>
    {[...new Set(jobs.map(j => j.location))].map(loc => (
      <option key={loc} value={loc}>{loc}</option>
    ))}
  </select>
</div>

<div className="sort-controls">
  <select
    className="sort-dropdown"
    value={sort}
    onChange={e => { setSort(e.target.value); setPage(1); }}
  >
    <option value="">Sort by</option>
    <option value="date-desc">Most Recent</option>
    <option value="salary-desc">Highest Salary</option>
  </select>
</div>


      <div className="job-cards-grid">
        {current.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🚫</div>
            <div className="no-results-title">No jobs found</div>
            <div className="no-results-text">Try different keywords or filters.</div>
          </div>
        ) : current.map(job => {
          const comp = companies.find(c => c.id === job.companyId);
          return (
            <div key={job.id} className="job-card">
              {comp?.cover && <img src={comp.cover} className="cover-img" alt="cover" />}
              <div className="company-section">
                <div className="company-info-text">
                  <div className="company-name">{comp?.name}</div>
                  <div className="company-location">📍 {job.location}</div>
                  <div className="posted-time">{getDays(job.postedAt)}</div>
                </div>
              </div>
              {comp?.logo && <img src={comp.logo} className="companies-logo" alt="logo" />}
              <div className="job-content">
                <div className="job-title">{job.title}</div>
                <div className="job-meta">
                  <span className="job-type-badge" style={{ backgroundColor: '#ddd', color: '#000' }}>{job.type}</span>
                  <span className="job-type-badge">{job.experienceLevel}</span>
                  {job.remote && <span className="job-type-badge">Remote</span>}
                  <span className={job.status === 'active' ? 'label-active' : 'label-expired'}>
                    {job.status === 'active' ? '🟢 Active' : '🔴 Expired'}
                  </span>
                </div>
                <div className="job-details-extra">
                  <div><strong>🧑‍💻</strong> {job.technologies.join(', ')}</div>
                  <div><strong>🎓</strong> {job.degrees.join(', ')}</div>
                  <div><strong>🎁</strong> {job.benefits.join(', ')}</div>
                  <div><strong>🗣</strong> {job.languages.join(', ')}</div>
                </div>
              </div>
             <div className="job-footer">
            <div className="salary">{job.salary}</div>
            <div className="footer-buttons">
              <button
                className="apply-buttonn"
                onClick={() => navigate(`/FindJob/${job.id}`)}
              >
                Details
              </button>
              <button className="save-button">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

            </div>
          );
        })}
      </div>

      {total > 1 && (
        <div className="pagination">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>◀</button>
          {Array.from({ length: total }, (_, i) => (
            <button key={i} className={page === i + 1 ? 'active' : ''} onClick={() => setPage(i + 1)}>{i + 1}</button>
          ))}
          <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}>▶</button>
        </div>
      )}
    </div>
  );
};

export default HeaderFindJob;
