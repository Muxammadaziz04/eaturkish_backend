create database eaturkish;

create EXTENSION "uuid-ossp";

create table subscribers(
    subscriber_id UUID default uuid_generate_v4(),
    subscriber_email text check(subscriber_email ~ '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$') not null unique
);

create table categories(
    category_id UUID default uuid_generate_v4(),
    category_name text not null unique
);

create table news(
    news_id uuid default uuid_generate_v4(),
    news_img text,
    news_title text not null,
    news_desc text not null,
    created_at timestamp default current_timestamp
);

create table messages(
    message_id uuid default uuid_generate_v4(),
    client_name varchar(32) not null,
    client_phone varchar(12) not null,
    client_email text check(client_email ~ '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$') not null,
    message_body text not null,
    created_at timestamp default current_timestamp
);

create table foods(
    food_id uuid default uuid_generate_v4(),
    food_img text not null,
    food_name varchar(255) not null,
    food_price decimal(9, 2) not null,
    food_stars int check(food_stars <= 5)
);