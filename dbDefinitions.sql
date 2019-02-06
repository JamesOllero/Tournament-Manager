create schema project_2 authorization csoberg;
commit;

create table project_2.organizers(
  organizer_id serial primary key not null,
  organizer_username varchar(50) unique not null,
  organizer_password varchar(50) not null,
  organizer_email varchar(150) unique not null
);

create table project_2.players(
  player_id serial primary key not null,
  player_name varchar(150) unique not null,
  player_career_wins integer default 0,
  player_career_losses integer default 0,
  player_carrer_draws integer default 0
);
commit;

create table project_2.events(
  event_id serial primary key not null,
  organizer_id integer not null,
  player_count integer not null,
  event_type varchar(100) not null,
  event_description varchar(250),
  event_in_progress bool,
  foreign key (organizer_id) references project_2.organizers(organizer_id)
);
commit;