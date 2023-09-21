const getUsersQuery = "SELECT * FROM users";

const getStaffsPositionsQuery = "SELECT * FROM company_positions";

const checkEmailExistQuery = "SELECT email FROM staffs WHERE email = $1";

const checkUsernameExistQuery =
  "SELECT username FROM staffs WHERE username = $1";

const checkExistenceQuery =
  "SELECT email, username FROM staffs WHERE email = $1 OR username = $2";

const checkUserExistenceQuery =
  "SELECT email, username FROM users WHERE email = $1 OR username = $2";

const addCustomerQuery =
  "INSERT INTO customers (user_id, staff_id, phone_number, customer_address, loyalty_points) VALUES ($1, $2, $3, $4, $5)";

const addStaffQuery =
  "INSERT INTO staffs (user_id, date_of_birth, gender, position_id, staff_address, job_description, salary, date_employed, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const checkCustomerEmailExistQuery =
  "SELECT email FROM customers WHERE email = $1";

const addUserQuery =
  "INSERT INTO users (first_name, last_name,email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING user_id";

const addOrderQuery =
  "INSERT INTO orders (staff_id, customer_id,order_date,cloth_type,quantity,order_status,order_payment,order_description,is_verified) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const getOrdersQuery = "SELECT * FROM orders";

const getStaffssQuery = "SELECT * FROM staffs";
const getCustomersQuery = "SELECT * FROM customers";
const getTotalCountsQuery = `
  SELECT 'orders' AS entity, COUNT(*) AS total_count FROM orders
  UNION
  SELECT 'staff' AS entity, COUNT(*) AS total_count FROM staffs
  UNION
  SELECT 'customers' AS entity, COUNT(*) AS total_count FROM customers
`;
const checkUserLoginExistenceQuery =
  "SELECT user_id, email,username,password,first_name,last_name,is_verified,role_id FROM users WHERE email = $1 OR username = $2";

const getAllStaffsDataQuery = `
  SELECT 
  user_id, 
  is_verified,
    username,
    email,
    first_name,
    last_name,
    role_id,
    staff_id,
    date_of_birth,
    gender,
    position_id,
    staff_address,
    job_description,
    salary,
    date_employed,
    phone_number
  FROM users
    INNER JOIN staffs USING(user_id) 
  `;

const getAllCustomersAndOrdersDataQuery = `
SELECT 
user_id,
username,
email,
first_name,
last_name,
is_verified,
role_id,
customer_id,
staff_id,
phone_number,
customer_address,
loyalty_points
FROM users
INNER JOIN customers USING(user_id) 
  `;

const getSingleStaffsDataQuery = `
SELECT 
user_id, 
is_verified,
username,
email,
first_name,
last_name,
role_id,
staff_id,
date_of_birth,
gender,
position_id,
staff_address,
job_description,
salary,
date_employed,
phone_number
FROM users
INNER JOIN staffs USING(user_id)
WHERE user_id = $1;
  `;

const getSingleCustomerOrderDataQuery = `
SELECT 
user_id,
username,
email,
first_name,
last_name,
is_verified,
role_id,
customer_id,
staff_id,
phone_number,
customer_address,
loyalty_points
FROM users
INNER JOIN customers USING(user_id)
WHERE user_id = $1;
  `;


const getStudentIdQuery = "SELECT * FROM staffs WHERE id = $1";

export {
  getSingleCustomerOrderDataQuery,
  getStudentIdQuery,
  getAllCustomersAndOrdersDataQuery,
  getSingleStaffsDataQuery,
  getAllStaffsDataQuery,
  checkUserLoginExistenceQuery,
  getTotalCountsQuery,
  getStaffssQuery,
  getCustomersQuery,
  getUsersQuery,
  addOrderQuery,
  getOrdersQuery,
  addStaffQuery,
  checkEmailExistQuery,
  getStaffsPositionsQuery,
  checkUsernameExistQuery,
  checkExistenceQuery,
  addCustomerQuery,
  checkCustomerEmailExistQuery,
  checkUserExistenceQuery,
  addUserQuery,
};
