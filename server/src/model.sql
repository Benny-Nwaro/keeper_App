CREATE TABLE base_model (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by INT,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);


CREATE TABLE Permissions (
    permission_id SERIAL PRIMARY KEY,
    permission_name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    is_verified BOOLEAN DEFAULT FALSE,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
) INHERITS (base_model);



CREATE TABLE company_positions (
    position_id SERIAL PRIMARY KEY,
    position VARCHAR(50) UNIQUE NOT NULL,
    position_detail VARCHAR(100)
) INHERITS (base_model);



CREATE TABLE staffs (
    staff_id SERIAL PRIMARY KEY,
    users_id INT UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    position_id INT NOT NULL,
    staff_address VARCHAR(150),
    job_description VARCHAR(150),
    salary INT DEFAULT 0,
    date_employed DATE,
    phone_number VARCHAR(20) NOT NULL,
    -- is_verified BOOLEAN DEFAULT FALSE
) INHERITS (base_model);

ALTER TABLE staffs
ADD CONSTRAINT fk_staffs_position_id FOREIGN KEY (position_id) REFERENCES company_positions(position_id);

ALTER TABLE staffs
ADD CONSTRAINT fk_staffs_users_id FOREIGN KEY (users_id) REFERENCES users(user_id);





CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    staff_id INT NOT NULL,
    phone_number VARCHAR(20),
    customer_address TEXT,
    loyalty_points INT DEFAULT 0,
    -- is_verified BOOLEAN DEFAULT FALSE

) INHERITS (base_model);

ALTER TABLE customers
ADD CONSTRAINT fk_customer_staff_id FOREIGN KEY (staff_id) REFERENCES staffs(staff_id);

ALTER TABLE customers
ADD CONSTRAINT fk_customer_users_id FOREIGN KEY (users_id) REFERENCES users(user_id);


CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    staff_id INT NOT NULL,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    cloth_type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    order_status VARCHAR(20) DEFAULT 'pending' CHECK (order_status IN ('pending', 'processing', 'completed')),
    order_payment VARCHAR(20) DEFAULT 'not_paid' CHECK (order_payment IN ('not_paid', 'deposit', 'paid')),
    order_description TEXT,
    is_verified BOOLEAN DEFAULT FALSE
) INHERITS (base_model);


ALTER TABLE orders
ADD CONSTRAINT fk_order_staff_id FOREIGN KEY (staff_id) REFERENCES staffs(staff_id);

ALTER TABLE orders
ADD CONSTRAINT fk_order_customer_id_new FOREIGN KEY (customer_id) REFERENCES customers(customer_id);






CREATE TABLE RolePermissions (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES Roles(role_id),
    FOREIGN KEY (permission_id) REFERENCES Permissions(permission_id)
);
