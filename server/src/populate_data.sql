INSERT INTO company_positions (position, position_detail)
VALUES
    ('CEO', 'Chief Executive Officer'),
    ('Head of Audit', 'Responsible for auditing and compliance'),
    ('Team Lead', 'Leads and manages a team of professionals'),
    ('Software Engineer', 'Develops software applications'),
    ('Marketing Manager', 'Oversees marketing campaigns and strategies'),
    ('Financial Analyst', 'Analyzes financial data and reports'),
    ('HR Director', 'Manages human resources and personnel'),
    ('Sales Manager', 'Leads the sales team and strategies'),
    ('Customer Support Specialist', 'Provides customer support and assistance'),
    ('Product Manager', 'Manages product development and strategy');


-- Create users
INSERT INTO users (username, password, email, first_name, last_name, date_of_birth, gender)
VALUES
    ('user1', 'password1', 'user1@example.com', 'John', 'Doe', '1990-01-01', 'Male'),
    ('user2', 'password2', 'user2@example.com', 'Jane', 'Smith', '1985-03-15', 'Female');

-- Create staff records related to users
INSERT INTO staffs (user_id, position_id, address, job_description, salary, date_employed, phone_number)
VALUES
    (currval(pg_get_serial_sequence('users', 'user_id')), 1, '123 Main St', 'Job description 1', '50000', '2023-09-19', '123-456-7890'),
    (currval(pg_get_serial_sequence('users', 'user_id')), 2, '456 Elm St', 'Job description 2', '60000', '2023-09-20', '987-654-3210');
