INSERT INTO department (department_name)
VALUES 
    ("engineering"),
    ("finance"),
    ("legal"),
    ("sales");
 


INSERT INTO roles (title, salary, department_id)
VALUES 
        ("software engineer", 178000, 1),
        ("engineering manager", 279000, 1),
        ("legal assistant", 98000, 2),
        ("legal manager", 298000, 2),
        ("sales rep", 78000, 3),
        ("sales manager", 127000, 3),
        ("finance assistant", 97000, 4),
        ("finance manager", 154000, 4);


       
INSERT INTO employees (first_name, last_name, roles_id)
    VALUES 
    ('Susan', 'Jenkins', 1),
    ('Sam', 'Johnson', 1),
    ('Janet', 'Williams', 2),
    ('Sarah',  'Roberts', 2),
    ('John', 'Jacobs', 3),
    ('Marshall', 'Jackson', 3),
    ('Venus', 'Pendleton', 4),
    ('Bill', 'Thomas', 4);

