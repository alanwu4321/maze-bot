INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('bestbuy','https://bestbuy.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('amazon','https://amazon.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('walmart','https://walmart.ca',1);
INSERT INTO v1.supplier (name, base_url, created_by) VALUES ('staples','https://staples.ca',1);

INSERT INTO v1.user (name, role,email, password) VALUES ('admin', 'admin','admin@maze.com','password');


INSERT INTO v1.product (name, model_no, brand, category, created_by) VALUES ('test_product1','test1_model_no','laptop','test_brand1',1);


INSERT INTO v1.productsupplier (p_id,s_id,price,last_updated) VALUES (3,2,15.39, 'NOW');
