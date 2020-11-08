BEGIN TRANSACTION;


CREATE TYPE type_accommodation AS ENUM ( '0', '1'  );

CREATE TYPE type_accompanied AS ENUM ( '0', '1'  );

CREATE TYPE type_app_top AS ENUM ( '0', '1'  );

CREATE TYPE type_genre AS ENUM ( 'F', 'M' , 'O'  );

CREATE TYPE type_reason AS ENUM ( '1', '2' , '3' , '4'  );

CREATE TYPE type_suggestion AS ENUM ( '0', '1'  );

CREATE TYPE type_transportation AS ENUM ( '1', '2' , '3' , '4'  );

CREATE TYPE type_bookmark AS ENUM ( '0', '1' );

CREATE TYPE type_grade AS ENUM ( '1', '2', '3', '4', '5' );

CREATE TYPE type_accessibility AS ENUM ( '0', '1' );

CREATE TYPE type_kid AS ENUM ( '0', '1' );

CREATE TYPE type_week AS ENUM ( 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom', 'Todos os dias', 'Feriados' );

CREATE TABLE IF NOT EXISTS county ( 
	id                   serial NOT NULL ,
	county               varchar(100)  NOT NULL ,
	"state"              char(2)  NOT NULL ,
	register_date        date DEFAULT CURRENT_DATE NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE county IS 'ARMAZENA OS MUNICIPIOS DE ORIGEM E DESTINO DO TURISTA';

COMMENT ON COLUMN county.id IS 'CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN county.county IS 'ARMAZENA O NOME DO MUNICIPIO';

COMMENT ON COLUMN county."state" IS 'ARMAZENA A UF DO MUNICIPIO. COLOCAR NA APLICACAO A LISTA DE UFs';

COMMENT ON COLUMN county.register_date IS 'DATA E HORA DE CADASTRO';

CREATE TABLE IF NOT EXISTS user_reg ( 
	user_id              serial NOT NULL ,
	login                varchar(100)  NOT NULL ,
	register_date        date DEFAULT CURRENT_DATE NOT NULL ,
	last_edit_date       date DEFAULT CURRENT_DATE  ,
	"password"           char(256)  NOT NULL ,
	user_type            integer NOT NULL,
	PRIMARY KEY ( user_id ),
	UNIQUE ( login )
 );

COMMENT ON TABLE user_reg IS 'Armazena o usuário criado para acesso da aplicação web e app';

COMMENT ON COLUMN user_reg.user_id IS 'armazena a chave primaria';

COMMENT ON COLUMN user_reg.login IS 'email escolhido no momento do cadastro';

COMMENT ON COLUMN user_reg.register_date IS 'ARMAZENA A DATA DE CADASTRAMENTO DO USUÁRIO NO SISTEMA';

COMMENT ON COLUMN user_reg.last_edit_date IS 'última alteração realizada no registro do usuário';

COMMENT ON COLUMN user_reg."password" IS 'Aramzena a senha encriptada';

COMMENT ON COLUMN user_reg.user_type IS 'T: TURISTA\nP: PARCEIRO\nC: CIDADE/MUNICIPIO';


CREATE TABLE IF NOT EXISTS user_role ( 
	id              serial NOT NULL ,
	authority       varchar(20) NOT NULL,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE user_role IS 'Armazena o papel do usuário criado para acesso da aplicação web e app';

COMMENT ON COLUMN user_role.id IS 'Armazena a chave primaria';

COMMENT ON COLUMN user_role.authority IS 'T: TURISTA\nP: PARCEIRO\nC: CIDADE/MUNICIPIO';


CREATE TABLE IF NOT EXISTS visit_point_classification ( 
	id                   serial  NOT NULL ,
	description          varchar(50)  NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE visit_point_classification IS 'ARMAZENA QUAL O TIPO DE PONTO DE VISITAÇÃO DETERMINADO, COMO:\n\nCERVEJARIAS, HISTORICAS, RELIGIOSAS E ECOLÓGICAS';

COMMENT ON COLUMN visit_point_classification.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN visit_point_classification.description IS 'ARMAZENA A DESCRICAO DA CLASSIFICACAO DO PONTO DE VISITAÇÃO, COMO:\nHISTÓRICAS, CERVEJARIAS, ENTRE OUTROS.';

CREATE TABLE IF NOT EXISTS visit_point_group ( 
	id                   serial NOT NULL ,
	visit_group_desc     varchar(30)  NOT NULL ,
	register_date        date DEFAULT CURRENT_DATE NOT NULL ,
	last_edit_date       date DEFAULT CURRENT_DATE NOT NULL ,
	app_to_top           type_app_top  NOT NULL ,
	ordering             integer  NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE visit_point_group IS 'ARMAZENA OS AGRUPAMENTOS DAS LOCALIDADES E PONTOS TURISTICOS\n\nONDE COMER, ONDE DORMIR, ATRACOES, EVENTOS';

COMMENT ON COLUMN visit_point_group.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN visit_point_group.visit_group_desc IS 'ARMAZENA QUAL O NOME DADO PARA O GRUPO A SER COLOCADO NO APP OU SISTEMA WEB PARA APRESENTAÇÃO AOS USUÁRIOS';

COMMENT ON COLUMN visit_point_group.register_date IS 'ARMAZENA A DATA DE CADASTRAMENTO DO GRUPO';

COMMENT ON COLUMN visit_point_group.app_to_top IS 'ARMAZENA SE O GRUPO SERÁ LISTADO NO TOPO DO APP OU NÃO\n\nS: SIM\nN: NÃO';

COMMENT ON COLUMN visit_point_group.ordering IS 'Informa a ordem que os itens aparecem no APP';

CREATE TABLE IF NOT EXISTS county_locat ( 
	id                   serial NOT NULL ,
	county_id            integer  NOT NULL ,
	name                 varchar(100)  NOT NULL ,
	latitude             varchar(15)  NOT NULL ,
	longitude            varchar(15)  NOT NULL ,
	url                  varchar(200)   ,
	street               varchar(70)  NOT NULL ,
	street_number        integer,
	zipcode              char(8)  NOT NULL ,
	phone                char(11)   ,
	visit_class_id       integer  NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE county_locat IS 'ARMAZENA OS LOCAIS APONTADOS PARA CONTROLE DAS VISITAÇÕES DOS TURISTAS';

COMMENT ON COLUMN county_locat.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN county_locat.county_id IS 'ARMAZENA O MUNICIPIO QUE O LOCAL SE LOCALIZA';

COMMENT ON COLUMN county_locat.name IS 'ARMAZENA O NOME PÚBLICO DE CONHECIMENTO DO LOCAL. EX: MUSEU IMPERIAL';

COMMENT ON COLUMN county_locat.latitude IS 'ARMAZENA O CÓDIGO DA LATITUDE DO LOCAL';

COMMENT ON COLUMN county_locat.longitude IS 'ARMAZENA O CÓDIGO DA LONGITUDE DO LOCAL';

COMMENT ON COLUMN county_locat.url IS 'ENDEREÇO NA INTERNET PARA ACESSO AS INFORMAÇÕES DO LOCAL';

COMMENT ON COLUMN county_locat.street IS 'NOME DA RUA ONDE O LOCAL SE ENCONTRA NA CIDADE';

COMMENT ON COLUMN county_locat.street_number IS 'NUMERO ONDE O LOCAL SE ENCONTRA DENTRO DO LOGRADOURO';

COMMENT ON COLUMN county_locat.zipcode IS 'CEP DO LOCAL TURISTICO';

COMMENT ON COLUMN county_locat.phone IS 'TELEFONE PRINCIPAL DE ACESSO AO LOCAL';

COMMENT ON COLUMN county_locat.visit_class_id IS 'ARMAZENA A REFERENCIA AO TIPO DE AGRUPAMENTO COMO: HISTÓRICAS, CERVEJARIAS, ENTRE OUTROS.';

CREATE TABLE IF NOT EXISTS partner ( 
	id                   serial NOT NULL ,
	county_id            integer  NOT NULL ,
	corporate_name       varchar(100)  NOT NULL ,
	company_name         varchar(100)  NOT NULL ,
	latitude             varchar(15),
	longitude            varchar(15),
	url                  varchar(200),
	email                varchar(100),
	nrle                 char(14),
	zipcode				 char(8) NOT NULL,
	street               varchar(200)  NOT NULL ,
	street_number        integer ,
	phone                varchar(11)   ,
	whatsapp             varchar(11)   ,
	visit_class_id       integer   ,
	user_id              integer  NOT NULL ,
	register_date        date DEFAULT current_date  ,
	capability           integer,
	average              float8,
	total_rate			 integer NOT NULL DEFAULT (0),
	featured_photo		 varchar(150),
	accessibility		 type_accessibility NOT NULL,
	kid_friendly		 type_kid NOT NULL,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE partner IS 'ARMAZENA O ESTABELECIMENTO PARCEIRO QUE TRARÁ DESCONTOS PARA O PROJETO DE TURISMO DA CIDADE';

COMMENT ON COLUMN partner.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN partner.corporate_name IS 'ARMAZENA A RAZÃO SOCIAL DO ESTABELECIMENTO';

COMMENT ON COLUMN partner.company_name IS 'ARMAZENA O NOME FANTASIA DO ESTABELECIMENTO PARCEIRO';

COMMENT ON COLUMN partner.latitude IS 'ARMAZENA O CODIGO DA LATITUDE DO PARCEIRO';

COMMENT ON COLUMN partner.longitude IS 'ARMAZENA A LONGITUDE DO PARCEIRO';

COMMENT ON COLUMN partner.url IS 'ARMAZENA O SITE DO PARCEIRO';

COMMENT ON COLUMN partner.nrle IS 'ARMAZENA O CNPJ DO PARCEIRO';

COMMENT ON COLUMN partner.street IS 'ARMAZENA O LOGRADOURO DO PARCEIRO';

COMMENT ON COLUMN partner.street_number IS 'ARMAZENA O NUMERO DO LOGRADOURO DO PARCEIRO';

COMMENT ON COLUMN partner.phone IS 'ARMAZENA O TELEFONE PRINCIPAL DO ESTABELECIMENTO DO PARCEIRO';

COMMENT ON COLUMN partner.whatsapp IS 'NUMERO DO WHATSAPP PARA ACESSO AO PARCEIRO';

COMMENT ON COLUMN partner.visit_class_id IS 'ARMAZENA A REFERENCIA A SUA CLASSIFICAÇÃO COMO AGRUPAMENTO DE TIPO DE PONTO TURISTICO, COMO: HISTÓRICAS, CERVEJARIAS, ENTRE OUTROS,.';


CREATE TABLE IF NOT EXISTS partner_timetable (
	id                   serial NOT NULL ,
	partner_id           integer  NOT NULL ,
	opening_time		 time NOT NULL,
	closing_time		 time NOT NULL,
	weekday			 type_week NOT NULL,
	PRIMARY KEY ( id )
);

COMMENT ON TABLE partner_timetable IS 'ARMAZENA Os HORÁRIOS DO ESTABELECIMENTO PARCEIRO';

COMMENT ON COLUMN partner_timetable.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN partner_timetable.partner_id IS 'ARMAZENA A CHAVE PRIMÁRIA DO PARCEIRO';

COMMENT ON COLUMN partner_timetable.opening_time IS 'ARMAZENA O HORÁRIO DE ABERTURA';

COMMENT ON COLUMN partner_timetable.closing_time IS 'ARMAZENA O HORÁRIO DE FECHAMENTO';

COMMENT ON COLUMN partner_timetable.weekday IS 'ARMAZENA O DIA DA SEMANA';


CREATE TABLE IF NOT EXISTS partner_voucher ( 
	id                   serial NOT NULL ,
	partner_id           integer  NOT NULL ,
	voucher              varchar(100)  NOT NULL ,
	voucher_img          varchar(200)   ,
	latitude             varchar(15)   ,
	longitude            varchar(15)   ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE partner_voucher IS 'ARMAZENA OS VOUCHERS QUE PODEM SER UTILIZADOS A PARTIR DA DISPONIBILIZAÇÃO DOPARCEIRO PARA O TURISTA';

COMMENT ON COLUMN partner_voucher.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN partner_voucher.partner_id IS 'ARMAZENA A CHAVE PRIMÁRIA DO PARCEIRO';

COMMENT ON COLUMN partner_voucher.voucher IS 'DESCRITIVO DO VOUCHER';

COMMENT ON COLUMN partner_voucher.voucher_img IS 'ARMAZENA A IMAGEM DO VOUCHER. PROPAGANDA';

COMMENT ON COLUMN partner_voucher.latitude IS 'ARMAZENA O CODIGO DA LATITUDE DO VOUCHER PARCEIRO, PARA CALCULO DE PROXIMIDADE';

COMMENT ON COLUMN partner_voucher.longitude IS 'ARMAZENA O CODIGO DA  LONGITUDE DO VOUCHER DO PARCEIRO';

CREATE TABLE IF NOT EXISTS tourist ( 
	id                   serial NOT NULL ,
	visit_county_id      integer  NOT NULL ,
	origin_county_id     integer  NOT NULL ,
	name                 varchar(100)  NOT NULL ,
	ir                   char(11)  NOT NULL ,
	genre                type_genre  NOT NULL ,
	stay_time            integer DEFAULT 1 NOT NULL ,
	visit_reason         type_reason DEFAULT '1'::type_reason NOT NULL ,
	transportation       type_transportation  NOT NULL ,
	was_accompanied      type_accompanied DEFAULT '0'::type_accompanied NOT NULL ,
	accompanying_number  integer DEFAULT 0 NOT NULL ,
	accommodation        type_accommodation DEFAULT '0'::type_accommodation NOT NULL ,
	email                varchar(100)  NOT NULL ,
	register_date        date DEFAULT CURRENT_DATE NOT NULL ,
	user_id              integer  NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE tourist IS 'Armazena os turistas que chegam na cidade';

COMMENT ON COLUMN tourist.id IS 'Armazena a chave primária da tabela';

COMMENT ON COLUMN tourist.visit_county_id IS 'INFORMA O MUNICIPIO QUE ESTÁ VISITANDO';

COMMENT ON COLUMN tourist.origin_county_id IS 'INFORMA O MUNICIPIO QUE VEIO';

COMMENT ON COLUMN tourist.name IS 'Armazena o nome do turista';

COMMENT ON COLUMN tourist.ir IS 'Armazena o cpf do turista';

COMMENT ON COLUMN tourist.genre IS 'ARMAZENA O TIPO DE GÊNERO DO TURISTA\nF: FEMININO\nM: MASCULINO\nO: OUTROS';

COMMENT ON COLUMN tourist.stay_time IS 'ARMAZENA A QUANTIDADE DE DIAS QUE O TURISTA INDICA QUE FICARÁ NA CIDADE';

COMMENT ON COLUMN tourist.transportation IS 'ARMAZENA O MEIO DE TRANSPORTE QUE TROUXE O TURISTA PARA CIDADE';

COMMENT ON COLUMN tourist.was_accompanied IS 'INFORMA SE O MESMO VEIO ACOMPANHADO\n1: SIM\n0: NÃO';

COMMENT ON COLUMN tourist.accompanying_number IS 'INFORMA A QUANTIDADE DE ACOMPANHANTES QUE VEIO COM O TURISTA';

COMMENT ON COLUMN tourist.accommodation IS 'ESTÁ HOSPEDADO NA CIDADE QUE ESTÁ VISITANDO\n1:SIM\n0:NÃO';

COMMENT ON COLUMN tourist.email IS 'informa o e-mail do turista';

COMMENT ON COLUMN tourist.register_date IS 'INFORMA A DATA E HORA DE CADASTRO';

CREATE TABLE IF NOT EXISTS tourist_partner ( 
	id                   serial  NOT NULL ,
	tourist_id           integer  NOT NULL ,
	partner_id           integer  NOT NULL ,
	bookmark             type_bookmark NOT NULL,
	grade                type_grade NOT NULL,
	register_date        date DEFAULT current_date,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE tourist_partner IS 'Armazena avaliações e favoritos dos locais visitados';

CREATE TABLE IF NOT EXISTS visit_point_events ( 
	local_county_id      integer   ,
	partner_id           integer   ,
	visit_group_id       integer  NOT NULL ,
	general_suggestion   type_suggestion  NOT NULL ,
	general_sugg_order   integer  NOT NULL
 );

COMMENT ON TABLE visit_point_events IS 'ARMAZENA OS PONTOS TURISTICOS E LOCAIS NA CIDADE POR TIPO E EVENTOS DAS CIDADES';

COMMENT ON COLUMN visit_point_events.local_county_id IS 'ARMAZENA QUAL O PONTO TURISTICO QUE FAZ PARTE DE ALGUM GRUPO DE SUGESTÃO';

COMMENT ON COLUMN visit_point_events.partner_id IS 'ARMAZENA O ID DO LOCAL DENTRO DO MUNICIPIO QUE FAZ PARTE DE ALGUM GRUPO DE SUGESTÃO: ONDE DORMIR, ONDE COMER, ATRAÇÕES, ...';

COMMENT ON COLUMN visit_point_events.visit_group_id IS 'ARMAZENA A REFERENCIA AO GRUPO QUE O MESMO FAZ PARTE';

COMMENT ON COLUMN visit_point_events.general_suggestion IS 'ARMAZENA SE O LOCAL APARECERÁ NA SUGESTÃO GERAL OU NÃO\nS: SIM\nN: NAO';

COMMENT ON COLUMN visit_point_events.general_sugg_order IS 'ARMAZENA A ORDEM QUE OS USUARIOS VERAO A SUGESTAO DE LOCALIDADES E PONTOS TURISTICOS NO APP';

CREATE TABLE IF NOT EXISTS locat_visit ( 
	id                   serial NOT NULL ,
	tourist_id           integer  NOT NULL ,
	latitude             varchar(15)  NOT NULL ,
	longitude            varchar(15)  NOT NULL ,
	visit_date           date DEFAULT CURRENT_DATE NOT NULL ,
	PRIMARY KEY ( id )
 );

COMMENT ON TABLE locat_visit IS 'ARMAZENA AS LOCALIZAÇÕES VISITADAS PELOS TURISTAS DA CIDADE';

COMMENT ON COLUMN locat_visit.id IS 'ARMAZENA A CHAVE PRIMÁRIA DA TABELA';

COMMENT ON COLUMN locat_visit.tourist_id IS 'ARMAZENA O ID DO TURISTA QUE VISITOU O LOCAL';

COMMENT ON COLUMN locat_visit.latitude IS 'LOCAL QUE PASSOU E FOI ASSOCIADO A UM LOCAL DE VISITA';

COMMENT ON COLUMN locat_visit.longitude IS 'LOCAL APROXIMADO QUE FOI REGISTRADO O LOCAL VISITADO';

COMMENT ON COLUMN locat_visit.visit_date IS 'DATA E HORA DA VISITA';



-- ALTER TABLE --
ALTER TABLE county_locat ADD CONSTRAINT fk_county_locat_county FOREIGN KEY ( county_id ) REFERENCES county( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE county_locat ADD CONSTRAINT fk_county_locat FOREIGN KEY ( visit_class_id ) REFERENCES visit_point_classification( id );

ALTER TABLE locat_visit ADD CONSTRAINT fk_locat_visit_tourist FOREIGN KEY ( tourist_id ) REFERENCES tourist( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE partner ADD CONSTRAINT fk_partner_user_reg FOREIGN KEY ( user_id ) REFERENCES user_reg( user_id );

ALTER TABLE partner ADD CONSTRAINT fk_partner_county FOREIGN KEY ( county_id ) REFERENCES county( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE partner ADD CONSTRAINT fk_partner FOREIGN KEY ( visit_class_id ) REFERENCES visit_point_classification( id );

ALTER TABLE partner_voucher ADD CONSTRAINT fk_partner_voucher_partner FOREIGN KEY ( partner_id ) REFERENCES partner( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE tourist ADD CONSTRAINT fk_tourist_user_reg FOREIGN KEY ( user_id ) REFERENCES user_reg( user_id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE tourist ADD CONSTRAINT fk_tourist_county_visit FOREIGN KEY ( visit_county_id ) REFERENCES county( id );

ALTER TABLE tourist ADD CONSTRAINT fk_tourist_county FOREIGN KEY ( origin_county_id ) REFERENCES county( id );

ALTER TABLE tourist_partner ADD CONSTRAINT fk_tourist_partner_tourist FOREIGN KEY ( tourist_id ) REFERENCES tourist( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE tourist_partner ADD CONSTRAINT fk_tourist_partner_partner FOREIGN KEY ( partner_id ) REFERENCES partner( id );

ALTER TABLE visit_point_events ADD CONSTRAINT fk_visit_point_events_partner FOREIGN KEY ( partner_id ) REFERENCES partner( id );

ALTER TABLE visit_point_events ADD CONSTRAINT fk_visit_point_events FOREIGN KEY ( local_county_id ) REFERENCES county_locat( id );

ALTER TABLE visit_point_events ADD CONSTRAINT fk_visit_point_events_group FOREIGN KEY ( visit_group_id ) REFERENCES visit_point_group( id ) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE user_reg ADD FOREIGN KEY (user_type) REFERENCES user_role( id );

ALTER TABLE partner_timetable ADD FOREIGN KEY (partner_id) REFERENCES partner( id ) ON DELETE CASCADE ON UPDATE CASCADE;


COMMIT;