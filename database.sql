-- might not need "favorite" for now because this table is just tracking the items after the vendor adds new item.
-- not using "image" for now until i get the AWS thing figured out

--might add vendor_name from vendorprofile table
CREATE TABLE "items" (
	"id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"user_id" INT REFERENCES "user",
	"image_path" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

-- not using this table
CREATE TABLE "items" (
	"id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"user_id" INT REFERENCES "user",
	"image_path" varchar(255) NOT NULL,
	"vendor_name" varchar(255) NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("id"),
	CONSTRAINT "fk_vendor_name" FOREIGN KEY ("vendor_name") REFERENCES "vendorprofile"("vendor_name")
) WITH (
  OIDS=FALSE
);

-- Query
INSERT INTO "items" ("title", "description", "date_harvested")
VALUES ('Corn', 'Sweet, juicy, and crunchy, perfect for grilling!', '08/20/2023');

SELECT * FROM "items" WHERE "title" ILIKE '%hamilton%' OR "description" ILIKE '%hamilton%';

-- for now, removing display_image
CREATE TABLE "vendorprofile" (
	"id" serial NOT NULL,
	"vendor_name" varchar(255) NOT NULL,
	"bio_description" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"pmt_methods" varchar(255) NOT NULL,
	"stall_num" int NOT NULL,
	"user_id" INT REFERENCES "user",
	CONSTRAINT "vendorprofile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

--Query for POST
INSERT INTO "vendorprofile" ("vendor_name", "bio_description", "location",
    "pmt_methods", "stall_num", "user_id")
    VALUES ('farmy', 'a farm that loves to farm', 'stardew valley, mn', 'Cash is king!!', '110', '1');

--Query for GET
SELECT * FROM "vendorprofile" WHERE user_id = 5;


CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"access_level" varchar(255) NOT NULL,
	"profile_form_submitted" BOOLEAN NOT NULL DEFAULT FALSE,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

-- Testing query here
UPDATE "user" SET "profile_form_submitted"=FALSE WHERE id=1;


-- Testing query here for new user registration:
INSERT INTO "user" ("username", "password", "access_level")
VALUES ('karen1978', 'getmethemanager', 'customer');
    

-- Junction table
CREATE TABLE "items_vendor" (
	"id" serial NOT NULL,
	"items_id" int NOT NULL,
	"vendorprofile_id" int NOT NULL,
	CONSTRAINT "items_vendor_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Junction table
CREATE TABLE "vendorprofile_login" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"vendorprofile_id" int NOT NULL,
	CONSTRAINT "vendorprofile_login_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


--Junction table
--Stretch Goal
CREATE TABLE "items_customer" (
	"id" serial NOT NULL,
	"items_id" int NOT NULL,
	"customerprofile_id" int NOT NULL,
	CONSTRAINT "items_customer_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


--Junction table
CREATE TABLE "customerprofile_login" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"customerprofile_id" int NOT NULL,
	CONSTRAINT "customerprofile_login_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "customerprofile" (
	"id" serial NOT NULL,
	"customername" varchar(255) NOT NULL,
	CONSTRAINT "customerprofile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);






ALTER TABLE "items_vendor" ADD CONSTRAINT "items_vendor_fk0" FOREIGN KEY ("items_id") REFERENCES "items"("id");
ALTER TABLE "items_vendor" ADD CONSTRAINT "items_vendor_fk1" FOREIGN KEY ("vendorprofile_id") REFERENCES "vendorprofile"("id");

ALTER TABLE "vendorprofile_login" ADD CONSTRAINT "vendorprofile_login_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "vendorprofile_login" ADD CONSTRAINT "vendorprofile_login_fk1" FOREIGN KEY ("vendorprofile_id") REFERENCES "vendorprofile"("id");

ALTER TABLE "items_customer" ADD CONSTRAINT "items_customer_fk0" FOREIGN KEY ("items_id") REFERENCES "items"("id");
ALTER TABLE "items_customer" ADD CONSTRAINT "items_customer_fk1" FOREIGN KEY ("customerprofile_id") REFERENCES "customerprofile"("id");

ALTER TABLE "customerprofile_login" ADD CONSTRAINT "customerprofile_login_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "customerprofile_login" ADD CONSTRAINT "customerprofile_login_fk1" FOREIGN KEY ("customerprofile_id") REFERENCES "customerprofile"("id");

