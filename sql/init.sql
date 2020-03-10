INSERT INTO v1.user (u_id, name, role,email, password) VALUES (-1, 'default', 'default','default','default');
INSERT INTO v1.user (name, role,email, password) VALUES ('admin', 'admin','admin@maze.com','password');
INSERT INTO v1.user (name, role,email, password) VALUES ('admin2', 'admin','admin@maze.com','password');
INSERT INTO v1.user (name, role,email, password) VALUES ('admin3', 'admin','admin@maze.com','password');


INSERT INTO v1.supplier (s_id, name, base_url, created_by) VALUES (-1, 'default','default', -1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('bestbuy','https://bestbuy.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('amazon','https://amazon.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('walmart','https://walmart.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('staples','https://staples.ca',1);

INSERT INTO v1.product (p_id, name, model_no, brand, category, created_by) VALUES (-1, 'default','default','default','default',-1);
INSERT INTO v1.product (name, model_no, brand, category, created_by) VALUES ('test_product1','test1_model_no1','laptop','test_brand1',1);
INSERT INTO v1.product (name, model_no, brand, category, created_by) VALUES ('test_product2','test1_model_no2','laptop','test_brand2',1);
INSERT INTO v1.product (name, model_no, brand, category, created_by) VALUES ('test_product3','test1_model_no3','laptop','test_brand3',1);
INSERT INTO v1.product (name, model_no, brand, category, created_by) VALUES ('test_product4','test1_model_no4','laptop','test_brand4',1);


INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (1,1,15.39, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (1,2,16.99, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (1,3,19, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (2,1,75.50, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (2,2,95.80, 'NOW');
INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (2,3,85.70, 'NOW');