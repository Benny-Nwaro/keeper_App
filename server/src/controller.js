import pool from "../db.js";
import {
  addCustomerQuery,
  addStaffQuery,
  addUserQuery,
  checkExistenceQuery,
  checkUserExistenceQuery,
  getStaffsPositionsQuery,
} from "./queries.js";
import * as bcrypt from "bcrypt";
const testRoute = async (req, res) => {
  res.status(200).json({ message: "Testing successful" });
};

const getCompanyPositions = async (req, res) => {
  pool.query(getStaffsPositionsQuery, (queryError, queryResult) => {
    if (queryError) {
      console.error("Database error:", queryError);
      return res.status(400).send({
        status: "error",
        message: queryError.message,
        detail: queryError.detail,
      });
    }
    res.status(200).json({ status: "success", data: queryResult.rows });
  });
};

const addStaffs2 = (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      date_of_birth,
      gender,
      address,
      job_description,
      salary,
      date_employed,
      phone_number,
      position_id,
    } = req.body;

    // Check if any of the required fields are missing
    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !position_id ||
      !password ||
      !date_of_birth ||
      !gender ||
      !address ||
      !job_description ||
      !salary ||
      !date_employed ||
      !phone_number
    ) {
      return res
        .status(400)
        .send({ message: "Ensure you fill all the required fields." });
    }

    // Encrypt the password before storing it
    bcrypt.hash(password, 10, (hashError, hashedPassword) => {
      if (hashError) {
        console.error("Password hashing error:", hashError);
        return res
          .status(500)
          .send({ state: "error", message: "Password hashing error" });
      }

      pool.query(checkExistenceQuery, [email, username], (error, results) => {
        if (error) {
          console.error("Database error:", error);
          return res.status(500).send("Database error");
        }

        if (results.rows.length > 0) {
          if (results.rows[0].email === email) {
            return res
              .status(400)
              .send({ status: "error", message: "Email already exists." });
          }
          if (results.rows[0].username === username) {
            return res
              .status(400)
              .send({ status: "error", message: "Username already exists." });
          }
        }

        pool.query(
          addStaffQuery,
          [
            first_name,
            last_name,
            username,
            email,
            hashedPassword,
            date_of_birth,
            gender,
            address,
            job_description,
            salary,
            date_employed,
            phone_number,
            position_id,
          ],
          (queryError, queryResults) => {
            if (queryError) {
              console.error("Database error:", queryError);
              return res.status(400).send({
                status: "error",
                message: queryError.message,
                detail: queryError.detail,
              });
            }

            return res.status(201).send({
              success: true,
              message: "Staff Created successfully!",
            });
          }
        );
      });
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

// const addCustomer = async (req, res) => {
//   const {
//     username,
//     password,
//     email,
//     first_name,
//     last_name,
//     staff_id,
//     phone_number,
//     customer_address,
//     loyalty_points,
//   } = req.body;
//   if (
//     !username ||
//     !password ||
//     !email ||
//     !first_name ||
//     !last_name ||
//     !staff_id ||
//     !customer_address ||
//     !loyalty_points ||
//     !phone_number
//   ) {
//     return res
//       .status(400)
//       .send({ message: "Ensure you fill all the customer required fields." });
//   }
//   const lowercaseEmail = email.toLowerCase();
//   const lowercaseUsername = username.toLowerCase();
//   pool.query(
//     checkUserExistenceQuery,
//     [lowercaseEmail, lowercaseUsername],
//     (queryError, queryResult) => {
//       if (queryError) {
//         console.error("Database error:", queryError);
//         return res
//           .status(500)
//           .send({ state: "error", message: "Database error" });
//       }
//       if (queryResult.rows.length > 0) {
//         if (queryResult.rows[0].email === lowercaseEmail) {
//           return res
//             .status(400)
//             .send({ status: "error", message: "Email already exists." });
//         }
//         if (queryResult.rows[0].username === lowercaseUsername) {
//           return res
//             .status(400)
//             .send({ status: "error", message: "Username already exists." });
//         }
//       }
//       bcrypt.hash(password, 10, (hashError, hashedPassword) => {
//         if (hashError) {
//           console.error("Password hashing error:", hashError);
//           return res
//             .status(500)
//             .send({ state: "error", message: "Password hashing error" });
//         }
//         pool.query(
//           addUserQuery,
//           [
//             first_name,
//             last_name,
//             lowercaseEmail,
//             hashedPassword,
//             lowercaseUsername,
//           ],
//           (queryError, queryResult) => {
//             if (queryError) {
//               console.error("Database error:", queryError);
//               return res.status(400).send({
//                 status: "error",
//                 message: queryError.message,
//                 detail: queryError.detail,
//               });
//             }
//             const insertedUserId = queryResult.rows[0].user_id;
//             pool.query(
//               addCustomerQuery,
//               [
//                 insertedUserId,
//                 staff_id,
//                 phone_number,
//                 customer_address,
//                 loyalty_points,
//               ],
//               (queryError, queryResult) => {
//                 if (queryError) {
//                   console.error("Database error:", queryError);
//                   return res.status(400).send({
//                     status: "error",
//                     message: queryError.message,
//                     detail: queryError.detail,
//                   });
//                 }
//                 return res.status(201).send({
//                   success: true,
//                   message: `${first_name} customer's account Created successfully!`,
//                 });
//               }
//             );
//           }
//         );
//       });
//     }
//   );
// };

const addCustomer = async (req, res) => {
  const client = await pool.connect(); // Acquire a database client

  try {
    await client.query("BEGIN"); // Begin the transaction

    const {
      username,
      password,
      email,
      first_name,
      last_name,
      staff_id,
      phone_number,
      customer_address,
      loyalty_points,
    } = req.body;

    if (
      !username ||
      !password ||
      !email ||
      !first_name ||
      !last_name ||
      !staff_id ||
      !customer_address ||
      !loyalty_points ||
      !phone_number
    ) {
      return res
        .status(400)
        .send({ message: "Ensure you fill all the customer required fields." });
    }

    const lowercaseEmail = email.toLowerCase();
    const lowercaseUsername = username.toLowerCase();

    const queryResult = await client.query(checkUserExistenceQuery, [
      lowercaseEmail,
      lowercaseUsername,
    ]);

    if (queryResult.rows.length > 0) {
      if (queryResult.rows[0].email === lowercaseEmail) {
        return res
          .status(400)
          .send({ status: "error", message: "Email already exists." });
      }
      if (queryResult.rows[0].username === lowercaseUsername) {
        return res
          .status(400)
          .send({ status: "error", message: "Username already exists." });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userResult = await client.query(addUserQuery, [
      first_name,
      last_name,
      lowercaseEmail,
      hashedPassword,
      lowercaseUsername,
    ]);

    const insertedUserId = userResult.rows[0].user_id;

    await client.query(addCustomerQuery, [
      insertedUserId,
      staff_id,
      phone_number,
      customer_address,
      loyalty_points,
    ]);

    await client.query("COMMIT"); // Commit the transaction
    return res.status(201).send({
      success: true,
      message: `${first_name} customer's account Created successfully!`,
    });
  } catch (error) {
    await client.query("ROLLBACK"); // Rollback the transaction in case of an error
    console.error("Database error:", error);
    return res.status(500).send({ status: "error", message: error.message });
  } finally {
    client.release(); // Release the database client back to the pool
  }
};

const addStaff = async (req, res) => {
  const {
    username,
    password,
    email,
    first_name,
    last_name,

    date_of_birth,
    gender,
    position_id,
    staff_address,
    job_description,
    salary,
    date_employed,
    phone_number,
  } = req.body;
  // Check if any of the required fields are missing
  if (
    !username ||
    !password ||
    !email ||
    !first_name ||
    !last_name ||
    !date_of_birth ||
    !gender ||
    !position_id ||
    !staff_address ||
    !job_description ||
    !salary ||
    !date_employed ||
    !phone_number
  ) {
    return res
      .status(400)
      .send({ message: "Ensure you fill all the staff required fields." });
  }
  // Convert email and username to lowercase
  const lowercaseEmail = email.toLowerCase();
  const lowercaseUsername = username.toLowerCase();
  pool.query(
    checkUserExistenceQuery,
    [lowercaseEmail, lowercaseUsername],
    (queryError, queryResult) => {
      if (queryError) {
        console.error("Database error:", queryError);
        return res
          .status(500)
          .send({ state: "error", message: "Database error" });
      }
      if (queryResult.rows.length > 0) {
        if (queryResult.rows[0].email === lowercaseEmail) {
          return res
            .status(400)
            .send({ status: "error", message: "Email already exists." });
        }
        if (queryResult.rows[0].username === lowercaseUsername) {
          return res
            .status(400)
            .send({ status: "error", message: "Username already exists." });
        }
      }
      bcrypt.hash(password, 10, (hashError, hashedPassword) => {
        if (hashError) {
          console.error("Password hashing error:", hashError);
          return res
            .status(500)
            .send({ state: "error", message: "Password hashing error" });
        }
        pool.query(
          addUserQuery,
          [
            first_name,
            last_name,
            lowercaseEmail,
            hashedPassword,
            lowercaseUsername,
          ],
          (queryError, queryResult) => {
            if (queryError) {
              console.error("Database error:", queryError);
              return res.status(400).send({
                status: "error",
                message: queryError.message,
                detail: queryError.detail,
              });
            }
            const insertedUserId = queryResult.rows[0].user_id;
            pool.query(
              addStaffQuery,
              [
                insertedUserId,
                date_of_birth,
                gender,
                position_id,
                staff_address,
                job_description,
                salary,
                date_employed,
                phone_number,
              ],
              (queryError, queryResult) => {
                if (queryError) {
                  console.error("Database error:", queryError);
                  return res.status(400).send({
                    status: "error",
                    message: queryError.message,
                    detail: queryError.detail,
                  });
                }
                return res.status(201).send({
                  success: true,
                  message: `${first_name} staff account Created successfully!`,
                });
              }
            );
          }
        );
      });
    }
  );
};

export {
  testRoute,
  addStaff,
  getCompanyPositions,
  addCustomer,
};
