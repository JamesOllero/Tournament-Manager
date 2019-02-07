create schema project_2 authorization csoberg;
commit;

create table project_2.organizers(
  id serial primary key not null,
  username varchar(50) unique not null,
  password varchar(50) not null,
  email varchar(150) unique not null
);

create table project_2.players(
  id serial primary key not null,
  first_name varchar(100) unique not null,
  last_name varchar(100) unique not null,
  career_wins integer default 0,
  career_losses integer default 0,
  career_draws integer default 0
);
commit;

create table project_2.events(
  evt_id serial primary key not null,
  organizer_id integer not null,
  player_count integer not null,
  evt_type varchar(100) not null,
  evt_desc varchar(250),
  in_progress bool not null,
  foreign key (organizer_id) references project_2.organizers(id)
);
commit;

create table project_2.local_results(
  lr_id serial primary key not null,
  evt_id integer not null,
  plr_id integer not null,
  local_wins integer default 0,
  local_losses integer default 0,
  local_draws integer default 0,
  foreign key (evt_id) references project_2.events(evt_id),
  foreign key (plr_id) references project_2.players(id)
);
commit;