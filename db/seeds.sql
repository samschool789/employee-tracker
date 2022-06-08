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


       
INSERT INTO employees (first_name, last_name, roles_id)
    VALUES 
    ('Susan', 'Jenkins', 1),
    ('Sam', 'Johnson', 7),
    ('Janet', 'Williams', 2),
    ('Sarah',  'Roberts', 5),
    ('John', 'Jacobs', 6),
    ('Marshall', 'Jackson', 3),
    ('Venus', 'Pendleton', 8),
    ('Bill', 'Thomas', 4);

