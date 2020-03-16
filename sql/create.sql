CREATE TABLE v1.User 
  ( 
     u_id     SERIAL NOT NULL, 
     name     CHARACTER VARYING, 
     role     CHARACTER VARYING, 
     email    CHARACTER VARYING NOT NULL, 
     password CHARACTER VARYING NOT NULL 
  ); 

ALTER TABLE v1.User 
  ADD CONSTRAINT pk_user PRIMARY KEY (u_id); 

CREATE TABLE v1.Product 
  ( 
     p_id       SERIAL NOT NULL, 
     name       CHARACTER VARYING NOT NULL, 
     model_no   CHARACTER VARYING NOT NULL, 
     brand      CHARACTER VARYING, 
     category   CHARACTER VARYING, 
     created_by INT DEFAULT -1 
  ); 

ALTER TABLE v1.Product 
  ADD CONSTRAINT pk_product PRIMARY KEY (p_id); 

CREATE TABLE v1.ProductDemand
  ( 
     p_id         INT NOT NULL DEFAULT -1, 
     timestamp    DATE NOT NULL, 
     demand       NUMERIC
  ); 

ALTER TABLE v1.ProductDemand 
  ADD CONSTRAINT pk_productdemand PRIMARY KEY (p_id, timestamp); 
  
CREATE TABLE v1.Supplier 
  ( 
     s_id       SERIAL NOT NULL, 
     name       CHARACTER VARYING NOT NULL, 
     base_url   CHARACTER VARYING NOT NULL, 
     created_by INT DEFAULT -1 
  ); 

ALTER TABLE v1.Supplier 
  ADD CONSTRAINT pk_supplier PRIMARY KEY (s_id); 

CREATE TABLE v1.ProductSupplier 
  ( 
     p_id         INT NOT NULL DEFAULT -1, 
     s_id         INT NOT NULL DEFAULT -1, 
     timestamp    DATE NOT NULL, 
     inventory    NUMERIC, 
     price        NUMERIC, 
     url          CHARACTER VARYING, 
     created_by   INT DEFAULT -1 
  ); 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT pk_productsupplier PRIMARY KEY (p_id, s_id, timestamp); 

ALTER TABLE v1.Product 
  ADD CONSTRAINT fk_product_0 FOREIGN KEY (created_by) REFERENCES v1.User (u_id) 
  ON DELETE CASCADE; 

ALTER TABLE v1.ProductDemand 
  ADD CONSTRAINT fk_productdemand_0 FOREIGN KEY (p_id) REFERENCES v1.Product (
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.Supplier 
  ADD CONSTRAINT fk_supplier_0 FOREIGN KEY (created_by) REFERENCES v1.User (u_id 
  ) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_0 FOREIGN KEY (p_id) REFERENCES v1.Product ( 
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_1 FOREIGN KEY (s_id) REFERENCES v1.Supplier 
  (s_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_2 FOREIGN KEY (created_by) REFERENCES 
  v1.User (u_id) ON DELETE CASCADE; 