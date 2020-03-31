INSERT INTO v1.user (u_id, u_name, role,email, password) VALUES (-1, 'default', 'default','default','default');
INSERT INTO v1.user (u_name, role,email, password) VALUES ('admin', 'admin','admin@maze.com','password');
INSERT INTO v1.user (u_name, role,email, password) VALUES ('admin2', 'admin','admin@maze.com','password');
INSERT INTO v1.user (u_name, role,email, password) VALUES ('admin3', 'admin','admin@maze.com','password');


INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (-1, 'default','default', -1, 'url');
INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (1, 'bestbuy','https://bestbuy.ca',1, 'uuid');
INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (2, 'amazon','https://amazon.ca',1, 'url');
INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (3, 'walmart','https://walmart.ca',1, 'url');
INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (4, 'staples','https://staples.ca',1, 'url');
INSERT INTO v1.supplier (s_id, s_name, base_url, updated_by, update_using) VALUES (5, 'source','https://www.thesource.ca/',1, 'uuid');


INSERT INTO v1.product (p_id, p_name, model_no, brand, category, updated_by) VALUES (-1, 'default','default','default','default',-1);


