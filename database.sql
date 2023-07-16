CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "submission" (
    "id" SERIAL PRIMARY KEY,
    "img_src" VARCHAR (300) NOT NULL
);

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "gif_joining_table" (
  "id" SERIAL PRIMARY KEY,
  "submission_id" INT REFERENCES "submission" NOT NULL,
  "category_id" INT REFERENCES "category" NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


INSERT INTO "submission" (img_src) 
VALUES ('https://media3.giphy.com/media/Dh5q0sShxgp13DwrvG/200w.gif?cid=790b7611qqgbsmjrqlada7hlgs8jblvh94snedmg1ddkh9ae&ep=v1_gifs_search&rid=200w.gif&ct=g'),
('https://media.giphy.com/media/uxxjljZeLmdmU/giphy.gif'),
('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q2dnhsYmExaDRwMDFhYndjNHMzdjR0YTZ5MGd1N3QzcTcwZXB1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yJpIlhh6ZTqHm/giphy.gif'),
('https://media.tenor.com/a7eMw5xvZhUAAAAC/topaz-for.gif'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoctmsiwyLcOdj_Bbgn7Gvg5vSU4-RyaEsCs5sIR12BBiNFdnfDwrd-ntMtd-OMGLZ8pM&usqp=CAU');

INSERT INTO "gif_joining_table" ("submission_id", "category_id")
VALUES (1, 1), (1, 2), (2, 1), (2, 5), (3, 3), (3, 5), (4, 2), (5, 1), (5, 4);