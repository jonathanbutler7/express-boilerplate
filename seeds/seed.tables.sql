-- psql -U postgres -d benchmark -f ./backend/seeds/seed.tables.sql

CREATE TABLE score_records (
candidate_id TEXT NOT NULL,
communication_score TEXT NOT NULL,
coding_score TEXT NOT NULL,
title TEXT NOT NULL,
company_id TEXT NOT NULL
);

CREATE TABLE companies (
    company_id TEXT NOT NULL,
    fractal_index decimal
);

\COPY score_records FROM 'backend/data/score-records.csv' WITH DELIMITER AS ',' CSV;

\COPY companies FROM 'backend/data/companies.csv' WITH DELIMITER AS ',' CSV;
