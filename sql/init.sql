CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE v1.User 
  (
     u_id       SERIAL            NOT NULL, 
     u_name     CHARACTER VARYING, 
     role       CHARACTER VARYING, 
     email      CHARACTER VARYING NOT NULL, 
     password   CHARACTER VARYING NOT NULL,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ); 

ALTER TABLE v1.User 
  ADD CONSTRAINT pk_user PRIMARY KEY (u_id); 

CREATE TRIGGER set_timestamp_1
BEFORE UPDATE ON v1.User
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE v1.Product 
  ( 
     p_id       SERIAL            NOT NULL, 
     p_name     CHARACTER VARYING NOT NULL, 
     model_no   CHARACTER VARYING NOT NULL, 
     brand      CHARACTER VARYING, 
     category   CHARACTER VARYING, 
     updated_by INT DEFAULT -1,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ); 

ALTER TABLE v1.Product 
  ADD CONSTRAINT pk_product PRIMARY KEY (p_id); 

CREATE TRIGGER set_timestamp_2
BEFORE UPDATE ON v1.Product
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


CREATE TABLE v1.ProductDemand
  ( 
     p_id       INT NOT NULL DEFAULT -1, 
     date       DATE NOT NULL, 
     demand     double precision,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ); 

ALTER TABLE v1.ProductDemand 
  ADD CONSTRAINT pk_productdemand PRIMARY KEY (p_id, date); 
  
CREATE TRIGGER set_timestamp_3
BEFORE UPDATE ON v1.ProductDemand
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE v1.Supplier 
  ( 
     s_id       SERIAL            NOT NULL, 
     s_name     CHARACTER VARYING NOT NULL, 
     base_url   CHARACTER VARYING NOT NULL, 
     updated_by INT DEFAULT -1,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ); 

ALTER TABLE v1.Supplier 
  ADD CONSTRAINT pk_supplier PRIMARY KEY (s_id); 
  
CREATE TRIGGER set_timestamp_4
BEFORE UPDATE ON v1.Supplier
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE v1.ProductSupplier_Map 
  (
     p_id         INT NOT NULL DEFAULT -1, 
     s_id         INT NOT NULL DEFAULT -1, 
     uuid         CHARACTER VARYING NOT NULL, 
     updated_by   INT DEFAULT -1,
     updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

ALTER TABLE v1.ProductSupplier_Map 
  ADD CONSTRAINT pk_productsupplier_map PRIMARY KEY (p_id, s_id); 

CREATE TRIGGER set_timestamp_5
BEFORE UPDATE ON v1.ProductSupplier_Map
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE v1.ProductSupplier 
  ( 
     p_id         INT NOT NULL DEFAULT -1, 
     s_id         INT NOT NULL DEFAULT -1, 
     date         DATE NOT NULL, 
     inventory    double precision, 
     price        double precision, 
     url          CHARACTER VARYING, 
     updated_by   INT DEFAULT -1,
     updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
  ); 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT pk_productsupplier PRIMARY KEY (p_id, s_id, date); 

CREATE TRIGGER set_timestamp_6
BEFORE UPDATE ON v1.ProductSupplier
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


ALTER TABLE v1.Product 
  ADD CONSTRAINT fk_product_0 FOREIGN KEY (updated_by) REFERENCES v1.User (u_id) 
  ON DELETE CASCADE; 

ALTER TABLE v1.ProductDemand 
  ADD CONSTRAINT fk_productdemand_0 FOREIGN KEY (p_id) REFERENCES v1.Product (
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.Supplier 
  ADD CONSTRAINT fk_supplier_0 FOREIGN KEY (updated_by) REFERENCES v1.User (u_id 
  ) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_0 FOREIGN KEY (p_id) REFERENCES v1.Product ( 
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_1 FOREIGN KEY (s_id) REFERENCES v1.Supplier 
  (s_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier 
  ADD CONSTRAINT fk_productsupplier_2 FOREIGN KEY (updated_by) REFERENCES 
  v1.User (u_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier_Map 
  ADD CONSTRAINT fk_productsupplier_map_0 FOREIGN KEY (p_id) REFERENCES v1.Product ( 
  p_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier_Map 
  ADD CONSTRAINT fk_productsupplier_map_1 FOREIGN KEY (s_id) REFERENCES v1.Supplier 
  (s_id) ON DELETE CASCADE; 

ALTER TABLE v1.ProductSupplier_Map 
  ADD CONSTRAINT fk_productsupplier_map_2 FOREIGN KEY (updated_by) REFERENCES 
  v1.User (u_id) ON DELETE CASCADE; 