const getStaffsQuery = "SELECT * FROM users";

const getStaffsPositionsQuery = "SELECT * FROM company_positions";

const checkEmailExistQuery = "SELECT email FROM staffs WHERE email = $1";

const checkUsernameExistQuery =
  "SELECT username FROM staffs WHERE username = $1";

const checkExistenceQuery =
  "SELECT email, username FROM staffs WHERE email = $1 OR username = $2";

const checkUserExistenceQuery =
  "SELECT email, username FROM users WHERE email = $1 OR username = $2";

const addCustomerQuery =
  "INSERT INTO customers (users_id, staff_id, phone_number, customer_address, loyalty_points) VALUES ($1, $2, $3, $4, $5)";

const addStaffQuery =
  "INSERT INTO staffs (users_id, date_of_birth, gender, position_id, staff_address, job_description, salary, date_employed, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const checkCustomerEmailExistQuery =
  "SELECT email FROM customers WHERE email = $1";

const addUserQuery =
  "INSERT INTO users (first_name, last_name,email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING user_id";

export {
  getStaffsQuery,
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
