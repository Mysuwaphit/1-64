select customerName from customers
where country =(
					select country from customers
					where customerName = "Mini Classics"
				)
order by customername asc;

select customerName from customers
where country = (
					select country from customers
					where customerName = "Mini Classics"
					
                ) 
and customerName like "Mini%";

select productName,quantityInStock from products
where quantityInStock = (
							select max(quantityInStock) 
                            from products
						);

-- 3.4 List the order number and the total amount 
-- of sales of all orders that their total amount of sales 
-- is more than the total amount of sales order number 10103. 
-- Name the total amount of sales column to “total_amount”.
select orderNumber,sum(quantityOrdered*priceEach) 
as 'total_amount'
from orderdetails
group by orderNumber
having sum(quantityOrdered*priceEach) > (
							select sum(quantityOrdered*priceEach)
                            from orderdetails
							where orderNumber = '10103'
						);
            
            
select distinct c.customerName,e.lastName from employees e
join customers c on e.employeeNumber = c.salesRepEmployeeNumber
where e.officeCode in (
				select o.officeCode from offices o
				where o.city = 'London' 
);
-- or
select distinct c.customerName,e.lastName from employees e
join customers c on e.employeeNumber = c.salesRepEmployeeNumber
where exists(
				select * from offices o
				where o.city = 'London' 
);

select distinct city from customers
where city in (
select city from offices
);
-- or
select distinct c.city from customers c
where c.city in (
select city from offices where city = c.city
);


select distinct c.city from customers c
join employees e on e.employeeNumber = c.salesRepEmployeeNumber
where c.city not in(
select o.city from offices o
where e.officeCode = o.officeCode
);

select customerName from customers
where creditLimit > all(
select avg(creditLimit) from customers
group by city);

select customerName from customers c
where creditLimit > (
select avg(creditLimit) from customers
where city = c.city 
);

select * from products p
where not exists(
select * from orderdetails 
where productCode = p.productCode
);




















