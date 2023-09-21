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


-- Insert data into the "Roles" table
INSERT INTO Roles (role_name) VALUES ('Super Admin');
INSERT INTO Roles (role_name) VALUES ('Admin');
INSERT INTO Roles (role_name) VALUES ('Staff');
INSERT INTO Roles (role_name) VALUES ('Student');
INSERT INTO Roles (role_name) VALUES ('User');

-- Insert data into the "Permissions" table
INSERT INTO Permissions (permission_name) VALUES ('View Grades');
INSERT INTO Permissions (permission_name) VALUES ('Edit Grades');
INSERT INTO Permissions (permission_name) VALUES ('Add Announcement');
INSERT INTO Permissions (permission_name) VALUES ('Delete Announcement');

-- Associate roles with permissions in the "RolePermissions" table
-- For example, to grant "Admin" all permissions:
-- Super Admin Has all the permissions granted
-- Super Admin(id-1) has all permissions to view student, staff, admin and super admin viewing grants

INSERT INTO RolePermissions (role_id, permission_id) VALUES (1, 1);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (1, 2);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (1, 3);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (1, 4);

-- Admin(id-2) has only three permissions to view student, staff and admin viewing grants
INSERT INTO RolePermissions (role_id, permission_id) VALUES (2, 1);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (2, 2);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (2, 3);

-- Staff(id-3) has only two permissions to view student and staff viewing grants
INSERT INTO RolePermissions (role_id, permission_id) VALUES (3, 1);
INSERT INTO RolePermissions (role_id, permission_id) VALUES (3, 2);

-- Student(id-4) has only one permission which is student viewing
INSERT INTO RolePermissions (role_id, permission_id) VALUES (4, 1);
