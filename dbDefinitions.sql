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
  name varchar(150) unique not null,
  career_wins integer default 0,
  career_losses integer default 0,
  career_draws integer default 0
);
commit;

create table project_2.events(
  id serial primary key not null,
  organizer_id integer not null,
  player_count integer not null,
  event_type varchar(100) not null,
  event_desc varchar(250),
  in_progress bool,
  foreign key (organizer_id) references project_2.organizers(id)
);
commit;

drop table project_2.events;
commit;

drop table project_2.players;
drop table project_2.organizers;
commit;