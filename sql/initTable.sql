CREATE TABLE v1.User (
 u_id SERIAL NOT NULL,
 name character varying,
 role character varying,
 email character varying NOT NULL
 password character varying NOT NULL
);

ALTER TABLE v1.User ADD CONSTRAINT PK_User PRIMARY KEY (u_id);

CREATE TABLE v1.Product (
 p_id SERIAL NOT NULL,
 name character varying NOT NULL,
 model_no character varying NOT NULL,
 brand character varying,
 category character varying,
 created_by INT NOT NULL
);

ALTER TABLE v1.Product ADD CONSTRAINT PK_Product PRIMARY KEY (p_id);


CREATE TABLE v1.Supplier (
 s_id SERIAL NOT NULL,
 name character varying NOT NULL,
 base_url character varying NOT NULL,
 created_by INT
);

ALTER TABLE v1.Supplier ADD CONSTRAINT PK_Supplier PRIMARY KEY (s_id);

CREATE TABLE v1.ProductSupplier (
 p_id INT NOT NULL,
 s_id INT NOT NULL,
 price NUMERIC,
 url character varying,
 last_updated TIMESTAMP,
 created_by INT
);

ALTER TABLE v1.ProductSupplier ADD CONSTRAINT PK_ProductSupplier PRIMARY KEY (p_id,s_id);


ALTER TABLE v1.Product ADD CONSTRAINT FK_Product_0 FOREIGN KEY (created_by) REFERENCES v1.User (u_id);


ALTER TABLE v1.Supplier ADD CONSTRAINT FK_Supplier_0 FOREIGN KEY (created_by) REFERENCES v1.User (u_id);


ALTER TABLE v1.ProductSupplier ADD CONSTRAINT FK_ProductSupplier_0 FOREIGN KEY (p_id) REFERENCES v1.Product (p_id);
ALTER TABLE v1.ProductSupplier ADD CONSTRAINT FK_ProductSupplier_1 FOREIGN KEY (s_id) REFERENCES v1.Supplier (s_id);
ALTER TABLE v1.ProductSupplier ADD CONSTRAINT FK_ProductSupplier_2 FOREIGN KEY (created_by) REFERENCES v1.User (u_id);


