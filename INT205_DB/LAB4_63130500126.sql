create view mini_customer_view (customername)
as select customerName from customers 
where customerName like "Mini%";
select  * from mini_customer_view;

create or replace view prod_stock_view (productname,min_of_stock)
as select productName,quantityInStock as min_of_stock from products
where quantityInStock = (select min(quantityInStock) from products);
select * from prod_stock_view;

create view totalamount_orders_view 
(ordernumber ,orderdate,total_amount)
as select o.orderNumber as orderno,
o.orderDate as orderdate,
sum(od.quantityOrdered*priceEach) as total_amount
from orders o join orderdetails od 
on o.ordernumber = od.ordernumber
group by o.orderNumber
order by total_amount desc;
select * from totalamount_orders_view;

create view customer_same_view (cust_name,cust_city)
as select c.customername as cust_name,c.city as cust_city
from customers c join employees e
on c.salesRepEmployeeNumber = e.employeeNumber
join offices o on e.officeCode = o.officeCode
where c.city = o.city;
select * from customer_same_view;

create view maxcredit_city_veiw (city,creditlimit)
as select city, max(creditlimit) as creditlimit from customers
group by city;
select * from maxcredit_city_veiw;

create view maxcredit_london_view (city,creditlimit) 
as select city,creditlimit from maxcredit_city_veiw 
where city = "London" ;
select * from maxcredit_london_view;

create table offices_copy
as select * from offices;

create view usa_office_view (officecode,city,state)
as select officecode,city,state from offices_copy
where country = "USA";
select * from usa_office_view;

create  or replace view usa_office_view 
(officecode,city,phone,addressLine1,state,country,postalCode,territory)
as select officecode,city,phone,addressLine1,state,country,postalCode,territory
from offices_copy
where country = "USA";
insert into usa_office_view 
(officecode,city,phone,addressLine1,state,country,postalCode,territory)
values ('100','BKK','123456789','Non','CA','USA','11150','NA');

drop table offices_copy;
select * from usa_office_view;