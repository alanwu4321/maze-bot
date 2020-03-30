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
INSERT INTO v1.product (p_name, model_no, brand, category, updated_by) VALUES ('Samsung 32" 60Hz 4ms Curved PLS LED Monitor - White','LC32F391FWNXZA','monitors','Samsung',1);
INSERT INTO v1.product (p_name, model_no, brand, category, updated_by) VALUES ('test_product2','test1_model_no2','laptop','test_brand2',1);
INSERT INTO v1.product (p_name, model_no, brand, category, updated_by) VALUES ('test_product3','test1_model_no3','laptop','test_brand3',1);
INSERT INTO v1.product (p_name, model_no, brand, category, updated_by) VALUES ('test_product4','test1_model_no4','laptop','test_brand4',1);


INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (1,1,15.39, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (1,2,16.99, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (1,3,19, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (2,1,75.50, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (2,2,95.80, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,date) VALUES (2,3,85.70, 'NOW');

