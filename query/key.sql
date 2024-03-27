use project;

drop table if exists public_key;
create table public_key(
	id int primary key auto_increment,
	username varchar(255),
	publickey text,
	createAt datetime null default CURRENT_TIMESTAMP,
	expired datetime
)

drop trigger if exists set_default_expired;
CREATE TRIGGER set_default_expired
BEFORE INSERT ON public_key
FOR EACH ROW
BEGIN
    SET NEW.expired = '9999-12-31 23:59:59';
END;



-- 
alter table order1 add column if not exists signature text null default null;