CREATE TABLE v1.USER 
  ( 
     u_id     SERIAL NOT NULL, 
     NAME     CHARACTER VARYING, 
     role     CHARACTER VARYING, 
     email    CHARACTER VARYING NOT NULL, 
     password CHARACTER VARYING NOT NULL 
  ); 

ALTER TABLE v1.USER 
  ADD CONSTRAINT pk_user PRIMARY KEY (u_id); 

CREATE TABLE v1.product 
  ( 
     p_id       SERIAL NOT NULL, 
     NAME       CHARACTER VARYING NOT NULL, 
     model_no   CHARACTER VARYING NOT NULL, 
     brand      CHARACTER VARYING, 
     category   CHARACTER VARYING, 
     trend      NUMERIC, 
     created_by INT NOT NULL DEFAULT -1 
  ); 

ALTER TABLE v1.product 
  ADD CONSTRAINT pk_product PRIMARY KEY (p_id); 

CREATE TABLE v1.supplier 
  ( 
     s_id       SERIAL NOT NULL, 
     NAME       CHARACTER VARYING NOT NULL, 
     base_url   CHARACTER VARYING NOT NULL, 
     created_by INT DEFAULT -1 
  ); 

ALTER TABLE v1.supplier 
  ADD CONSTRAINT pk_supplier PRIMARY KEY (s_id); 

CREATE TABLE v1.productsupplier 
  ( 
     p_id         INT NOT NULL DEFAULT -1, 
     s_id         INT NOT NULL DEFAULT -1, 
     price        NUMERIC, 
     url          CHARACTER VARYING, 
     last_updated TIMESTAMP, 
     created_by   INT DEFAULT -1 
  ); 

ALTER TABLE v1.productsupplier 
  ADD CONSTRAINT pk_productsupplier PRIMARY KEY (p_id, s_id); 

ALTER TABLE v1.product 
  ADD CONSTRAINT fk_product_0 FOREIGN KEY (created_by) REFERENCES v1.USER (u_id) 
  ON DELETE CASCADE; 

ALTER TABLE v1.supplier 
  ADD CONSTRAINT fk_supplier_0 FOREIGN KEY (created_by) REFERENCES v1.USER (u_id 
  ) ON DELETE CASCADE; 

ALTER TABLE v1.productsupplier 
  ADD CONSTRAINT fk_productsupplier_0 FOREIGN KEY (p_id) REFERENCES v1.product ( 
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.productsupplier 
  ADD CONSTRAINT fk_productsupplier_1 FOREIGN KEY (s_id) REFERENCES v1.supplier 
  (s_id) ON DELETE CASCADE; 

ALTER TABLE v1.productsupplier 
  ADD CONSTRAINT fk_productsupplier_2 FOREIGN KEY (created_by) REFERENCES 
  v1.USER (u_id) ON DELETE CASCADE; 