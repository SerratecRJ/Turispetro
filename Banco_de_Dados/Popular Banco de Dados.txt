-- COUNTY
INSERT INTO county (id, county, state) VALUES 
(1, 'Petrópolis', 'RJ'),
(2, 'Teresópolis', 'RJ'),
(3, 'Friburgo', 'RJ');


-- USER_ROLE
INSERT INTO user_role (id, authority) VALUES 
(1, 'Turista'),
(2, 'Parceiro'),
(3, 'Cidade');

-- USER_REG
INSERT INTO user_reg (login, password, user_type) VALUES ('Bernardo',1234,1),
  ('Jorginho',1234,1),
  ('Carlos',1234,1),
  ('Antonio',1234,1),
  ('Joana',1234,1),
  ('Antonia',1234,1),
  ('Anna',1234,1),
  ('Fernanda',1234,1),
  ('Tereza',1234,1),
  ('Carolina',1234,1),
  ('Roberta',1234,1),
  ('Joaquim',1234,1),
  ('Anderson',1234,1),
  ('Leonardo',1234,1),
  ('Jonathan',1234,1),
  ('Rafaela',1234,1),
  ('Arthur',1234,1),
  ('Eduardo ',1234,1),
  ('João',1234,1),
  ('Annita',1234,1),
  ('Wesley',1234,1),
  ('Aninha',1234,1),
  ('Luiz',1234,1),
  ('Larissa',1234,1),
  ('Davis',1234,1),
  ('Lavinia',1234,1),
  ('David',1234,1);


-- visit_point_calassic_fication

INSERT INTO visit_point_classification (id, description) VALUES 
(1,	'Estabelecimento para saborear a comida local'	),
 (2, 	'Estabelecimento para Beber'	),
 (3, 	'Ótimo lugar para um encontro'	),
 (4, 	'Um bom lugar para se reunir com os amigos'	),
 (5, 	'Um lugar calmo para relaxar'	);


-- PARTNER

INSERT INTO partner(county_id, corporate_name, company_name, latitude, longitude, url,email, nrle,zipcode, street, street_number, phone, whatsapp, visit_class_id, user_id, capability, average,total_rate, featured_photo, accessibility, kid_friendly) VALUES 
(1,'2 Vales','2 Vales','-22,40174','-43,08851','null','null','null','25745690','Estrada Ministro Salgado Filho ',255,'2422220753',null,1,1,52,4,325,'https://media-cdn.tripadvisor.com/media/photo-s/03/ed/56/f8/2-vales-restaurante.jpg','0','1'),
(2,'Adega do Mineiro','Adega do Mineiro','-22,49994','-43,19855','null','null','null','25675482','Rua Mosela ',86,'2422464214',null,2,4,90,5,365,null,'1','0'),
(3,'Afranio','Afranio','-22,42077','-43,19248','null','null','null','25725290','Estrada Bernardo Coutinho ',3575,'2422250705',null,3,5,300,3,125,null,'1','1'),
(1,'Albergo del Leone Hotel Restaurante','Albergo del Leone Hotel Restaurante','-22,38207','-43,13538','null','null','null','25740110','Rua Comandante Marcolino Alves de Souza ',435,'2422223359',null,4,7,45,5,666,'https://cf.bstatic.com/images/hotel/max1024x768/107/107364278.jpg','0','1'),
(1,'Alif','Alif','-22,38065','-43,13134','null','null','null','25750226','Estrada Uniao e Industria ',12694,'2422220115',null,5,9,120,4,124,'https://tribune-reloaded.s3.amazonaws.com/media/images/1956950-alif-1555995797/1956950-alif-1555995797.png','1','1'),
(1,'Alquimia dos Temperos','Alquimia dos Temperos','-22,50502','-43,17967','null','null','null','25685250','Avenida Ipiranga ',95,'2422436867',null,1,10,80,4,2,null,'1','1'),
(1,'Alvorada','Alvorada','-22,41936','-43,17394','null','null','null','25725020','Estrada Bernardo Coutinho ',1655,'2422251118',null,2,15,100,5,36,'https://www.direcaoconsultoria.com.br/wp-content/uploads/2019/10/alvorada.jpg','0','0'),
(1,'Antonio','Antonio','-22,39763','-43,13336','null','null','null','25740365','Estrada Uniao e Industria ',10550,'24988066163','24988066163',3,3,40,4,897,'https://diocesepetropolis.com.br/wp-content/uploads/2015/05/alto-da-serra-225x300.jpg','0','1'),
(1,'Arigato e delivery','Arigato e delivery','-22,52288','-43,18366','null','null','null','25640322','Rua Cristovao Colombo ',36,'2422492292',null,4,4,12,3,999,'https://static-images.ifood.com.br/image/upload//logosgde/d4a479e3-3468-4af4-a1bb-74762412d493/202007030950_zUto_i.png','0','1'),
(1,'Armazem 646','Armazem 646','-22,5165','-43,19145','null','null','null','25655031','Rua Visconde Itaborai ',646,2422431001,null,5,8,130,5,634,'https://static-images.ifood.com.br/image/upload//logosgde/d4a479e3-3468-4af4-a1bb-74762412d493/202007030950_zUto_i.png','1','0'),
(1,'Bordeaux Adega e Bistro','Bordeaux Adega e Bistro','-22,50405','-43,17317','null','null','null','25610150','Avenida Ipiranga ',716,'2422425711',null,1,15,40,4,783,'https://fastly.4sqi.net/img/general/600x600/iLVDPoEWqMBfiVPm4pgu1KiOpiggHzSo2O4r2DESHRo.jpg','1','1'),
(1,'Bordeaux Adega e Bistro','Bordeaux Adega e Bistro','-22,39918','-43,1344','null','null','null','25730735','Estrada Uniao e Industria ',10341,'2422226240',null,2,22,40,5,1069,'https://fastly.4sqi.net/img/general/600x600/iLVDPoEWqMBfiVPm4pgu1KiOpiggHzSo2O4r2DESHRo.jpg','1','0'),
(1,'Bordeaux Vinhos e Cia','BVC','-22,50405','-43,17317','null','null','null','25610150','Avenida Ipiranga ',716,'2422425711',null,3,23,150,4,7476,'https://media-cdn.tripadvisor.com/media/photo-s/0a/d1/24/9d/bordeaux-ipiranga.jpg','0','1'),
(1,'Bordeaux Vinhos e Cia','BVC','-22,39918','-43,1344','null','null','null','25730735','Estrada Uniao e Industria ',10341,'2422226240',null,4,25,100,4,219,'https://media-cdn.tripadvisor.com/media/photo-s/0a/d1/24/9d/bordeaux-ipiranga.jpg','0','0'),
(1,'Brasileirinho','Brasileirinho','-22,50508','-43,18119','null','null','null','25685231','Rua Treze de Maio ',183,'2422357251',null,5,27,50,4,1569,'https://content.portaldofranchising.com.br/wp-content/uploads/2016/03/28123932/franquia-brasileirinho-delivery-5.jpg','1','0'),
(1,'Brasileirinho e Delivery','B Delivery','-22,50685','-43,18428','null','null','null','25685220','Rua Padre Siqueira ',411,'2422372893',null,5,26,32,5,4236,'https://static-images.ifood.com.br/image/upload//capa/a81161c1-323c-4747-904c-1d4f7f27d3db/202009032223_IRNe_c@2x.png','0','1'),
(1,'Brassaria Matriz','Brassaria Matriz','-22,44666','-43,1335','null','null','null','25730050','Rua Doutor Agostinho Goulao ',632,'24981772323',24981772323,5,16,50,5,5895,'https://soupetropolis.com/wp-content/uploads/2019/09/vvv-1.png','1','1'),
(1,'Casa do Alemao - Kern (Quitandinha)','Casa do Alemao - Kern (Quitandinha)','-22,53471','-43,21989','null','null','null','25650340','Avenida Ayrton Senna ',927,2422914291,null,4,6,85,3,3215,'http://www.casadoalemao.com.br/images/ca.png','1','1'),
(1,'Buena Boca Delivery','Buena Boca Delivery','-22,50816','-43,18756','null','null','null','25685006','Rua Montecaseros ',130,'2422465975',null,1,11,100,3,3549,null,'0','1'),
(1,'Cabanas do Pescador','Cabanas do Pescador','-22,52168','-43,20054','null','null','null','25651078','Avenida Getulio Vargas ',2300,'2422373531',null,3,8,120,1,8961,'https://media-cdn.tripadvisor.com/media/photo-s/06/48/d9/86/entrada.jpg','0','1'),
(1,'Camarao em Penca','Camarao em Penca','-22,38175','-43,13197','null','null','null','25730775','Estrada Uniao e Industria ',12864,'2422220507',null,2,7,52,5,2146,'https://static.wixstatic.com/media/6d83aa_89212572ea3d4823ab5de5e58d5afc7e~mv2_d_2016_1512_s_2.jpeg','1','0'),
(1,'Canoas','Canoas','-22,50509','-43,17144','null','null','null','25610020','Avenida Dom Pedro I ',460,'2433024464',null,1,12,22,4,3697,'https://media-cdn.tripadvisor.com/media/photo-p/12/75/5a/66/canoas-praia.jpg','1','1'),
(1,'Cantina Mama Perrota LNCC','Cantina Mama Perrota LNCC','-22,52987','-43,21717','null','null','null',25651076,'Avenida Getulio Vargas ',333,'2422336191',null,3,13,100,5,268,'https://soupetropolis.com/wp-content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg','1','0'),
(1,'Capim Limao','Capim Limao','-22,39472','-43,12656','null','null','null','25745071','Rua Philuvio Cerqueira Rodrigues ',1910,'2422204500',null,5,17,50,4,364,'https://soupetropolis.com/wp-content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg','0','1'),
(1,'Capim Limao Imperial','Capim Limao Imperial','-22,50411','-43,17519','null','null','null','25610150','Avenida Ipiranga ',524,'2422376401',null,4,18,100,5,259,'https://soupetropolis.com/wp-content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg','0','1'),
(1,'Capitolio Grill','Capitolio Grill','-22,51042','-43,17584','null','null','null','25620002','Rua do Imperador ',625,'2422436688',null,1,19,120,5,1,'https://media-cdn.tripadvisor.com/media/photo-s/0f/5a/56/6f/img-20170517-125748813.jpg','1','0'),
(1,'Carlitos','Carlitos','-22,50839','-43,1725','null','null','null','25620000','Rua do Imperador ',288,'2422314876',null,2,21,120,5,123,'https://media-cdn.tripadvisor.com/media/photo-w/13/f0/27/22/restaurante-carlito-s.jpg','1','1'),
(1,'Casa D angelo','Casa D angelo','-22,51015','-43,17621','null','null','null','25620001','Rua do Imperador ',700,'2422420888',null,3,24,140,5,699,null,'0','1'),
(1,'Casa Pellegrini','Casa Pellegrini','-22,50457','-43,18141','null','null','null','25685231','Rua Treze de Maio ',194,'2422316110',null,2,27,120,5,12359,null,'0','0'),
(1,'Casa do Alemao - Kern (Itaipava)','Casa do Alemao - Kern (Itaipava)','-22,4067','-43,13618','null','null','null','25730730','Estrada Uniao e Industria ',9500,'2422227268',null,1,23,85,5,156,null,'1','1');

-- partner_voucher

INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	1	,	30	,	'https://media-
cdn.tripadvisor.com/media/photo-s/03/ed/56/f8/2-vales-restaurante.jpg'	,	'-22,40174'	,	'-43,08851'	);

INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	2	,	29	,	
null	,	'-22,49994'	,	'-43,19855'	);

INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	3	,	28	,	
null	,	'-22,42077'	,	'-43,19248'	);

INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	4	,	27	,	

'https://cf.bstatic.com/images/hotel/max1024x768/107/107364278.jpg'	,	'-22,38207'	,	'-43,13538'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	5	,	26	,	'https://tribune-

reloaded.s3.amazonaws.com/media/images/1956950-alif-1555995797/1956950-alif-1555995797.png'	,	'-22,38065'	,	'-43,13134'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	6	,	25	,	

null	,	'-22,50502'	,	'-43,17967'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	7	,	24	,	

'https://www.direcaoconsultoria.com.br/wp-content/uploads/2019/10/alvorada.jpg'	,	'-22,41936'	,	'-43,17394'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	8	,	23	,	'https://diocesepetropolis.com.br/wp-

content/uploads/2015/05/alto-da-serra-225x300.jpg'	,	'-22,39763'	,	'-43,13336'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	9	,	22	,	

null	,	'-22,52288'	,	'-43.18366'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	10	,	21	,	

null	,	'-22,5165'	,	'-43,19145'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	11	,	20	,	

'https://fastly.4sqi.net/img/general/600x600/iLVDPoEWqMBfiVPm4pgu1KiOpiggHzSo2O4r2DESHRo.jpg'	,	'-22,50405'	,	'-43,17317'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	12	,	19	,	

'https://fastly.4sqi.net/img/general/600x600/iLVDPoEWqMBfiVPm4pgu1KiOpiggHzSo2O4r2DESHRo.jpg'	,	'-22,39918'	,	'-43,1344'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	13	,	18	,	'https://media-

cdn.tripadvisor.com/media/photo-s/0a/d1/24/9d/bordeaux-ipiranga.jpg'	,	'-22,50405'	,	'-43,17317'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	14	,	17	,	'https://media-

cdn.tripadvisor.com/media/photo-s/0a/d1/24/9d/bordeaux-ipiranga.jpg'	,	'-22,39918'	,	'-43,1344'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	15	,	16	,	

null	,	'-22,50508'	,	'-43,18119'	

);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	16	,	15	,	'https://static-

images.ifood.com.br/image/upload//capa/a81161c1-323c-4747-904c-1d4f7f27d3db/202009032223_IRNe_c@2x.png'	,	'-22,50685'	,	'-43,18428'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	17	,	14	,	'https://soupetropolis.com/wp-

content/uploads/2019/09/vvv-1.png'	,	'-22,44666'	,	'-43,1335'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	18	,	13	,	

'http://www.casadoalemao.com.br/images/ca.png'	,	'-22,53471'	,	'-43,21989'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	19	,	12	,	

null	,	'-22,50816'	,	'-43,18756'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	20	,	11	,	'https://media-

cdn.tripadvisor.com/media/photo-s/06/48/d9/86/entrada.jpg'	,	'-22,52168'	,	'-43,20054'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	21	,	10	,	

null	,	'-22,38175'	,	'-43,13197'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	22	,	9	,	'https://media-

cdn.tripadvisor.com/media/photo-p/12/75/5a/66/canoas-praia.jpg'	,	'-22,50509'	,	'-43,17144'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	23	,	8	,	'https://soupetropolis.com/wp-

content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg'	,	'-22,52987'	,	'-43,21717'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	24	,	7	,	'https://soupetropolis.com/wp-

content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg'	,	'-22,39472'	,	'-43,12656'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	25	,	6	,	'https://soupetropolis.com/wp-

content/uploads/2019/06/3183E29B-4884-4EE1-95E1-B0240810EFE3.jpg'	,	'-22,50411'	,	'-43,17519'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	26	,	5	,	'https://media-

cdn.tripadvisor.com/media/photo-s/0f/5a/56/6f/img-20170517-125748813.jpg'	,	'-22,51042'	,	'-43,17584'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	27	,	4	,	'https://media-

cdn.tripadvisor.com/media/photo-w/13/f0/27/22/restaurante-carlito-s.jpg'	,	'-22,50839'	,	'-43,1725'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	28	,	3	,	

null	,	'-22,51015'	,	'-43,17621'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	29	,	2	,	

null	,	'-22,50457'	,	'-43,18141'	);
INSERT INTO partner_voucher (partner_id, voucher, voucher_img, latitude, longitude) VALUES (	30	,	1	,	

null	

,	'-22,4067'	,	'-43,13618');




--visit_point_group 

INSERT INTO visit_point_group (visit_group_desc,  app_to_top, ordering) VALUES 
(	'grupo de amigos',	'0'	,	30	),
 (	'apreciadores de cerveja',	'1'	,	1	),
 (	'apreciadores de boa comida',	'0'	,	29	),
 (	'grupo de ferias',	'1'	,	2	),
 (	'grupo que gosta de frio',	'1'	,	3	),
 (	'grupo que gosta de passear',	'0'	,	28	),
 (	'grupo de turista',	'1'	,	4	),
 (	'grupo de escola',	'0'	,	27	),
 (	'apreciadores de cerveja',	'1'	,	5	),
 (	'grupo de amigos',	'0'	,	26	),
 (	'grupo de familia',	'0'	,	25	),
 (	'grupo de namorados',	'1'	,	6	),
 (	'grupo que gosta de passear',	'1'	,	7	),
 (	'boa comida',	'0'	,	24	),
 (	'grupo que gosta de passear',	'0'	,	23	),
 (	'grupo de amigas',	'1'	,	8	),
 (	'apreciadores de boa comida',	'0'	,	22	),
 (	'apreciadores de cerveja',	'1'	,	9	),
 (	'grupo de familia',	'0'	,	21	),
 (	'grupo que gosta de passear',	'1'	,	10	),
 (	'apreciadores de cerveja',	'1'	,	11	),
 (	'grupo de familia',	'0'	,	20	),
 (	'grupo de amigas',	'0'	,	19	),
 (	'apreciadores de cerveja',	'1'	,	12	),
 (	'grupo de familia',	'1'	,	13	),
 (	'boa comida',	'0'	,	18	),
 (	'grupo de amigas',	'0'	,	17	),
 (	'grupo de familia',	'1'	,	14	),
 (	'grupo de amigas',	'0'	,	16	),
 (	'grupo de familia',	'1'	,	15	);



--partner_timetable 

INSERT INTO partner_timetable (partner_id, opening_time, closing_time, weekday) VALUES 
 (	1	,	'12:00'	,	'00:00'	,	'Feriados'),
 (	2	,	'13:00'	,	'21:00'	,	'Todos os dias'	),
 (	3	,	'12:00'	,	'18:00'	,	'Todos os dias'	),
 (	4	,	'12:00'	,	'00:00'	,	'Todos os dias'	),
 (	30	,	'13:00'	,	'17:00'	,	'Seg'	),
 (	29	,	'20:00'	,	'02:00'	,	'Todos os dias'	),
 (	28	,	'12:00'	,	'17:00'	,	'Todos os dias'	),
 (	27	,	'11:00'	,	'19:00'	,	'Todos os dias'	),
 (	26	,	'09:00'	,	'00:00'	,	'Sex' ),
 (	25	,	'09:00'	,	'20:00'	,	'Todos os dias'),
 (	10	,	'09:00'	,	'20:00'	,	'Todos os dias'	),
 (	11	,	'09:00'	,	'20:00'	,	'Todos os dias'	),
 (	12	,	'09:00'	,	'20:00'	,	'Todos os dias'	),
 (	13	,	'20:00'	,	'00:00'	,	'Todos os dias'	),
 (	15	,	'10:00'	,	'20:00'	,	'Todos os dias'	),
 (	5	,	'09:00'	,	'19:00'	,	'Todos os dias'	),
 (	6	,	'20:00'	,	'00:00'	,	'Seg'	),
 (	7	,	'09:00'	,	'14:00'	,	'Sex'	),
 (	8	,	'16:00'	,	'01:00'	,	'Qui'	),
 (	9	,	'16:00'	,	'00:00'	,	'Sex'	),
 (	20	,	'17:00'	,	'00:00'	,	'Feriados'	),
 (	21	,	'17:00'	,	'00:00'	,	'Qui'	),
 (	22	,	'17:00'	,	'01:00'	,	'Seg'	),
 (	23	,	'09:00'	,	'17:00'	,	'Sex'	),
 (	24	,	'17:00'	,	'22:00' ,	'Sex'	),
 (	26	,	'09:00'	,	'17:00'	,	'Sáb'	),
 (	19	,	'17:00'	,	'00:00'	,	'Feriados'),
 (	18	,	'10:00' ,	'00:00'	,	'Todos os dias'	),
 (	17	,	'09:00'	,	'17:00'	,	'Todos os dias'	);



-- COUNTY LOCAT
INSERT INTO county_locat (county_id, name, latitude, longitude, url, street, street_number, zipcode, phone, visit_class_id ) VALUES
(1,'Museu Imperial','-22,508097','-43,1778379','https://museuimperial.museus.gov.br/','Rua da Imperatriz',220,'25610320','2422330300',1    ),
(1,'Palácio de Cristal','-22,5053385','-43,1854135','https://www.petropolis.rj.gov.br/turispetro/','Rua Alfredo Pachá',null,'25685210','2422473721',3),
(2,'Catedral São Pedro de Alcântara','-22,5055632','-43,1812826','https://www.catedraldepetropolis.org.br/','Rua São Pedro Alcântara',60,'25685300','2422424300',5),
(3,'Hotel Quitandinha','-22,5274672','-43,2145823',null,'Av. Joaquim Rolla',2,'25651072','2422452020',4);




--tourist
INSERT INTO tourist (visit_county_id, origin_county_id, name, ir, genre, stay_time, visit_reason, transportation, was_accompanied, accompanying_number, accommodation, email, user_id ) VALUES 
 (1,1,'Maria Aparecida','26228404032','F',2,'1','3','0',0,'1','MariaAparecida@gmail.com',1),
 (2,1,'Jorginho Aparecido','60917965000','M',5,'2','2','1',1,'1','JorginhoAp@yahoo.com.br',2),
 (3,1,'Carlos Manoel','28511549072','M',10,'4','1','1',2,'1','CarlosM@gmail.com',3),
 (2,1,'Antônio da Silva','65122169039','M',3,'3','4','0',0,'1','AntonioSilva@gmail.com',4),
 (2,1,'Bernardo da Costa','44607837032','M',1,'2','1','1',3,'0','BeCosta@hotmail.com',5),
 (3,1,'Joana Chagas','25547012025','F',5,'3','2','1',2,'1','JoanaC@gmail.com',6),
 (3,1,'Maria Bernandete','39376093003','F',2,'2','3','1',4,'0','MariaB@hotmail.com',7),
 (3,1,'Antônia do Amaral','74345607035','M',3,'1','2','1',5,'1','Ant.Amaral@yahoo.com',14),
 (2,1,'João Barbosa','25031275090','M',15,'4','2','1',2,'1','JoBa@yahoo.com',13),
 (2,1,'Maria Anna','59354573002','F',2,'1','4','0',0,'1','Marianna123@gmail.com',12),
 (2,1,'Fernanda Joaquina','54357697018','F',1,'1','4','0',0,'0','FeJoaquina@hotmail.com',11),
 (2,1,'Tereza Cristina','45496860067','F',3,'1','3','0',0,'0','TeteCrist@gmail.com',10),
 (3,1,'Carolina Almeida','45221675048','F',30,'2','2','1',3,'1','Carolm@yahoo.com',9),
 (2,1,'Carolina Barbosa','47736919054','F',7,'3','4','1',1,'1','CarolA.B@hotmail.com',8),
 (3,1,'Roberta da silva','20653836074','M',8,'3','2','0',0,'0','Rob1S@gmail.com',23),
 (2,1,'Joaquim de Souza','15159922091','M',6,'4','1','1',2,'1','JoSouza@outlook.com',27),
 (2,1,'Anderson de Carvalho','98868091089','M',10,'2','3','0',0,'0','Anderson321Carvalho@yahoo.com',27),
 (2,1,'Leonardo dos Santos','33072181071','M',12,'3','2','1',3,'1','Leonardo.Santos@hotmail.com',27),
 (2,1,'Jonathan Leonardo','28469053043','M',1,'1','4','0',0,'0','JonaLeo@gmail.com',26),
 (2,1,'Rafaela Moreira','22101856026','F',20,'3','2','0',0,'1','RafM@gmail.com',25),
 (2,1,'Arthur Ramires','67614903080','M',2,'4','4','1',3,'1','Arthur8@yahoo.com',20),
 (2,1,'Eduardo Marques','51565801067','M',9,'2','2','1',2,'0','EduMarques@hotmail.com',21),
 (3,1,'João Bosco','38395527020','M',5,'3','3','0',0,'1','J000Bosco@gmail.com',22),
 (3,1,'Annita da Silva','44281151052','F',2,'2','2','1',1,'1','Annita123_Silva@hotmail.com',23),
 (3,1,'Wesley Marques','11776479076','M',15,'1','1','1',1,'0','Wesley4Marques@gmail.com',24),
 (3,1,'Anna Gabrich','79040291039','F',4,'1','1','0',0,'1','Anna.Gabrich@gmail.com',15),
 (3,1,'Luiz Felipe da Costa','24720361080','M',4,'2','2','1',3,'1','LuizFelipeCosta@yahoo.com',16),
 (3,1,'Larissa Passos','74779142059','F',5,'4','1','0',0,'0','LarissaPassos@hotmail.com',17),
 (3,1,'Davis de Oliveira','28575331019','M',6,'4','3','1',5,'0','DavOli@gmail.com',18),
 (2,1,'Lavinia Ferreira ','15600757085','F',7,'3','1','0',0,'1','LaviF@gmail.com',19);









--tourist_partner 


INSERT INTO tourist_partner (tourist_id, partner_id, bookmark, grade ) VALUES 
(30, 1,	'0', '4'),
(29, 2,	'1', '2'),
(28, 3,	'1', '4'),
(27, 4,	'1', '3'),
(26, 5,	'0', '4'),
(25, 6,	'1', '5'),
(24, 7,	'1', '2'),
(23, 8,	'1','3' ),
(22, 9,	'0', '4'),
(21, 10, '1', '2'),
(20, 30, '1', '2'),
(19, 29, '1', '3'),
(18, 28, '0', '4'),
(17, 27, '0', '3'),
(16, 26, '1', '2'),
(15, 25, '0', '5'),
(14, 24, '1', '2'),
(13, 23, '1', '3'),
(12, 22, '0', '4'),
(11, 21, '0', '2'),
(10, 20, '0', '2'),
(9, 11,	'1', '2'),
(8, 12,	'1', '2'),
(7, 13,	'1', '3'),
(6, 14,	'0', '3'),
(5, 15,	'1', '2'),
(4, 16,	'0', '5'),
(3, 17,	'0', '4'),
(2, 18,	'1', '4'),
(1, 19,	'1', '3');




--visit_point_events 

INSERT INTO visit_point_events (local_county_id, partner_id, visit_group_id, general_suggestion, general_sugg_order) VALUES 
(1, 1,	30, '0', 20),
(2, 2,	29, '1', 19),
(3, 3,	28, '1', 18),
(1, 4,	27, '0', 17),
(1, 5,	26, '0', 13),
(1, 6,	25, '1', 16),
(1, 7, 24, '1',	15),
(1, 8, 23, '0',	14),
(1, 9,	22, '0', 12),
(1, 10, 21, '1', 11),
(1, 21,	10, '1', 10),
(1, 22,	9, '0',	21),
(1, 23,	8, '0',	22),
(1, 24,	7, '1',	23),
(1, 25,	6, '1',	24),
(1, 26,	5, '0',	25),
(1, 27,	4, '0',	26),
(1, 28,	3, '1',	27),
(1, 29,	2, '1',	28),
(1, 30,	1, '0',	29),
(1, 11,	20, '0', 30),
(1, 12,	19, '1', 9),
(1, 13,	18, '1', 8),
(1, 14,	17, '0',7),
(1, 15, 16, '0', 6),
(1, 16,	15, '1', 5),
(1, 17,	14, '1', 4),
(1, 18,	13, '0', 3),
(1, 19, 12, '0', 2),
(1, 20,	11, '1', 1);



--locat_visit 

INSERT INTO locat_visit (tourist_id, latitude, longitude ) VALUES 
 (30,'-22.508097','-43.1778379'),
 (29,'-22.5053385','-43.1854135'),
 (28,'-22.508097','-43.1778379'),
 (27,'-22.5053385','-43.1854135'),
 (26,'-22.5274672','-43.2145823'),
 (25,'-22.5104015','-43.1862205'),
 (24,'-22.5274672','-43.2145823'),
 (23,'-22.508097','-43.1778379'),
 (22,'-22.5104015','-43.1862205'),
 (21,'-22.5053385','-43.1854135'),
 (20,'-22.5274672','-43.2145823'),
 (19,'-22.508097','-43.1778379'),
 (18,'-22.5104015','-43.1862205'),
 (17,'-22.5274672','-43.2145823'),
 (16,'-22.508097','-43.1778379'),
 (15,'-22.5104015','-43.1862205'),
 (14,'-22.508097','-43.1778379'),
 (13,'-22.508097','-43.1778379'),
 (12,'-22.5274672','-43.2145823'),
 (11,'-22.5104015','-43.1862205'),
 (10,'-22.508097','-43.1778379'),
 (9,'-22.5274672','-43.2145823'),
 (8,'-22.5104015','-43.1862205'),
 (7,'-22.508097','-43.1778379'),
 (6,'-22.5055632','-43.1812826'),
 (5,'-22.5055632','-43.1812826'),
 (4,'-22.508097','-43.1778379'),
 (3,'-22.5055632','-43.1812826'),
 (2,'-22.5104015','-43.1862205');


