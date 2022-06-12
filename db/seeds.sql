INSERT INTO departments (departments_name)
VALUES 
    ("engineering"),
    ("finance"),
    ("legal"),
    ("sales");
 


INSERT INTO roles (title, salary, departments_id)
VALUES 
        ("software engineer", 178000, 1),
        ("regional manager", 279000, 1),
        ("legal assistant", 98000, 3),
        ("legal lead", 298000, 2),
        ("sales rep", 78000, 4),
        ("sales lead", 127000, 3),
        ("finance assistant", 97000, 2),
        ("finance lead", 154000, 3);


       
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
    VALUES 
    ('Susan', 'Jenkins', 2, 1),
    ('Sam', 'Johnson', 7, 2),
    ('Janet', 'Williams', 4, 7),
    ('Sarah',  'Roberts', 5, 4),
    ('John', 'Jacobs', 6, 3),
    ('Marshall', 'Jackson', 3, 8),
    ('Venus', 'Pendleton', 8, 5),
    ('Bill', 'Thomas', 4, 6);

